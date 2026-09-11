"use client";

import { useEffect, useState } from "react";
import ChatPanel from "./ChatPanel";
import HistoryPanel from "./HistoryPanel";
import NewChatPanel from "./NewChatPanel";
import AdminLogin from "./AdminLogin";
import AdminPanel from "./AdminPanel";
import "./ChatWidget.css";

const API_URL = process.env.NEXT_PUBLIC_CHAT_API_URL || "http://localhost:3001";

export default function ChatWidget() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState("new");
  const [prevView, setPrevView] = useState("new");
  const [chatTitle, setChatTitle] = useState("Yeni Sohbet");
  const [chatMessages, setChatMessages] = useState([]);
  const [chatFiles, setChatFiles] = useState([]);
  const [sessionId, setSessionId] = useState(null);
  const [history, setHistory] = useState([]);
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowBubble(true), 1000);
    const t2 = setTimeout(() => setShowBubble(false), 4500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  useEffect(() => {
    fetchHistory();
  }, []);

  async function fetchHistory() {
    try {
      const res = await fetch(`${API_URL}/api/chat/history`);
      const data = await res.json();
      const historyList = Array.isArray(data?.history) ? data.history : [];
      setHistory(historyList.map((h) => ({
        id: h.session_id ?? h.id,
        title: h.preview?.slice(0, 40) || "Sohbet",
        preview: h.preview?.slice(0, 60) || "",
        time: h.created_at ? new Date(h.created_at).toLocaleDateString("tr-TR") : "",
        date: "Geçmiş",
        files: [],
      })));
    } catch (err) {
      console.error("Geçmiş yükleme hatası:", err);
      setHistory([]);
    }
  }

  function toggleWidget() {
    setIsOpen((v) => !v);
    setShowBubble(false);
  }

  function openChat(title, firstMessage = null, files = [], fileContent = "") {
    setPrevView(view);
    setChatTitle(title);
    setChatFiles(files);
    setSessionId(null);
    setChatMessages([]);
    setView("chat");

    if (firstMessage) {
      setTimeout(() => {
        setChatMessages((prev) => [...prev, { id: Date.now(), role: "user", text: firstMessage }]);
        sendToBackend(firstMessage, null, fileContent);
      }, 300);
    }
  }

  async function sendToBackend(message, currentSessionId, fileContent = "") {
    try {
      const res = await fetch(`${API_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message,
          sessionId: currentSessionId,
          areaId: null,
          fileContent,
          pageUrl: window.location.href,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setSessionId(data.sessionId);
        setChatMessages((prev) => [...prev, { id: Date.now(), role: "bot", text: data.reply }]);
        fetchHistory();
      } else {
        setChatMessages((prev) => [...prev, { id: Date.now(), role: "bot", text: "Bir hata oluştu, lütfen tekrar deneyin." }]);
      }
    } catch (err) {
      console.error("Backend hatası:", err);
      setChatMessages((prev) => [...prev, { id: Date.now(), role: "bot", text: "Bağlantı hatası, backend çalışıyor mu?" }]);
    }
  }

  function handleNewChat(firstMessage, files = [], fileContent = "") {
    const title = files.length > 0 ? files[0].name?.replace(/\.[^/.]+$/, "") : "Yeni Sohbet";
    openChat(title, firstMessage, files, fileContent);
  }

  function goBack() {
    setView(prevView);
  }

  async function handleDeleteHistory(currentSessionId) {
    if (!window.confirm("Bu sohbeti silmek istediğinize emin misiniz?")) return;
    try {
      await fetch(`${API_URL}/api/chat/history/${currentSessionId}`, { method: "DELETE" });
      setHistory((prev) => prev.filter((h) => h.id !== currentSessionId));
    } catch (err) {
      console.error("Sohbet silme hatası:", err);
    }
  }

  async function openHistoryItem(item) {
    try {
      const res = await fetch(`${API_URL}/api/chat/history/${item.id}`);
      const data = await res.json();
      const msgs = (data.messages || []).map((m) => ({
        id: Date.now() + Math.random(),
        role: m.role === "assistant" ? "bot" : m.role,
        text: m.content,
      }));
      setPrevView(view);
      setChatTitle(item.title);
      setChatFiles([]);
      setSessionId(item.id);
      setChatMessages(msgs);
      setView("chat");
    } catch (err) {
      console.error("Sohbet yükleme hatası:", err);
      openChat(item.title, null, []);
    }
  }

  function openAdminLogin() {
    setPrevView(view);
    setView("admin-login");
  }

  function handleAdminSuccess() {
    setIsAdmin(true);
    setView("admin-panel");
  }

  function exitAdminPanel() {
    setView("new");
  }

  function enterPreview() {
    setIsAdmin(false);
    setView("new");
  }

  const showTabs = view === "new" || view === "history";
  const showHeader = view !== "admin-login" && view !== "admin-panel";

  return (
    <div className="cw-root">
      <div className={`cw-panel${isOpen ? " open" : ""}`}>
        {showHeader && (
          <div className="cw-header">
            <div className="cw-header-top">
              <div className="cw-av">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <div className="cw-header-info">
                <p className="cw-name">Akkaş Robot</p>
                <p className="cw-status">Çevrimiçi</p>
              </div>
              <button className="cw-close" onClick={() => setIsOpen(false)} aria-label="Kapat">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {showTabs && (
              <div className="cw-tabs">
                <button className={`cw-tab${view === "new" ? " active" : ""}`} onClick={() => setView("new")}>
                  Yeni Sohbet
                </button>
                <button className={`cw-tab${view === "history" ? " active" : ""}`} onClick={() => setView("history")}>
                  Geçmiş
                </button>
              </div>
            )}

            {showTabs && (
              <button className="cw-admin-bar" onClick={isAdmin ? () => setView("admin-panel") : openAdminLogin}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span>{isAdmin ? "Eğitim paneline git" : "Yönetici girişi"}</span>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            )}
          </div>
        )}

        <div className="cw-body">
          {view === "new" && <NewChatPanel onSend={handleNewChat} />}
          {view === "history" && (
            <HistoryPanel history={history} onSelect={openHistoryItem} onDelete={handleDeleteHistory} />
          )}
          {view === "chat" && (
            <ChatPanel
              title={chatTitle}
              messages={chatMessages}
              setMessages={setChatMessages}
              files={chatFiles}
              setFiles={setChatFiles}
              sessionId={sessionId}
              onSendMessage={sendToBackend}
              onBack={goBack}
            />
          )}
          {view === "admin-login" && (
            <AdminLogin onBack={() => setView(prevView)} onSuccess={handleAdminSuccess} />
          )}
          {view === "admin-panel" && (
            <AdminPanel onBack={exitAdminPanel} onPreview={enterPreview} />
          )}
        </div>

        {view !== "admin-login" && view !== "admin-panel" && (
          <div className="cw-powered">Akkaş Robot · Verileriniz güvende</div>
        )}
      </div>

      {!isOpen && (
        <div className="cw-float-card" onClick={toggleWidget}>
          <div className="cw-float-av">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <span className="cw-float-online" />
          </div>
          <div className="cw-float-text">
            <span className="cw-float-name">Akkaş Robot</span>
            <span className="cw-float-sub">Size nasıl yardımcı olabilirim?</span>
          </div>
        </div>
      )}

      {isOpen && (
        <button className="cw-float-btn" onClick={toggleWidget} aria-label="Kapat">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </div>
  );
}