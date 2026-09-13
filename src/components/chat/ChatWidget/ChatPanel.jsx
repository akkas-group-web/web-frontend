"use client";

import { useState, useRef, useEffect } from 'react'
import './ChatPanel.css'

const ACCEPTED = '.pdf,.docx,.doc,.xlsx,.xls,.csv,.pptx,.txt,.png,.jpg,.jpeg'

export default function ChatPanel({ title, messages, setMessages, files, setFiles, sessionId, onSendMessage, onBack }) {
  const [isTyping, setIsTyping] = useState(false)
  const [showFiles, setShowFiles] = useState(false)
  const [fileTexts, setFileTexts] = useState([])
  const inputRef = useRef(null)
  const bottomRef = useRef(null)
  const fileInputRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  function readFileAsText(file) {
    return new Promise((resolve) => {
      const reader = new FileReader()
      reader.onload = (e) => resolve(e.target.result)
      reader.onerror = () => resolve('')
      reader.readAsText(file, 'UTF-8')
    })
  }

async function handleAddFiles(fileList) {
  const newFiles = Array.from(fileList)

  for (const file of newFiles) {
    try {
      const formData = new FormData()
      formData.append('file', file)

      const res = await fetch('http://localhost:3001/api/documents/extract', {
        method: 'POST',
        body: formData,
      })

      const data = await res.json()

      if (res.ok && data.content) {
        setFileTexts(prev => [...prev, data.content])
        setFiles(prev => [...prev, { name: file.name, type: file.name.split('.').pop().toLowerCase() }])
      }
    } catch (err) {
      console.error('Dosya metin çıkarma hatası:', err)
    }
  }

  setMessages(prev => [...prev, {
    id: Date.now(),
    role: 'bot',
    text: `${newFiles.length} dosya bu sohbete eklendi: ${newFiles.map(f => f.name).join(', ')}`,
  }])
}
  async function sendMessage() {
    const v = inputRef.current?.value.trim()
    if (!v || isTyping) return
    inputRef.current.value = ''

    setMessages(prev => [...prev, { id: Date.now(), role: 'user', text: v }])
    setIsTyping(true)

    const combinedFileContent = fileTexts.join('\n\n---\n\n')
    await onSendMessage(v, sessionId, combinedFileContent)
    setIsTyping(false)
  }

  function handleKey(e) {
    if (e.key === 'Enter') sendMessage()
  }

  function fileIcon(name) {
    const ext = name.split('.').pop().toLowerCase()
    if (ext === 'pdf') return '📕'
    if (ext === 'docx' || ext === 'doc') return '📘'
    if (ext === 'xlsx' || ext === 'xls' || ext === 'csv') return '📗'
    return '📄'
  }

  return (
    <div className="cp-root">
      <div className="cp-subheader">
        <button className="cp-back" onClick={onBack} aria-label="Geri">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2.5" strokeLinecap="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <p className="cp-title">{title}</p>
        {files.length > 0 && (
          <button className="cp-files-btn" onClick={() => setShowFiles(v => !v)} aria-label="Dosyalar">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
            </svg>
            <span className="cp-files-count">{files.length}</span>
          </button>
        )}
      </div>

      {showFiles && files.length > 0 && (
        <div className="cp-files-list">
          {files.map((f, i) => (
            <div key={i} className="cp-file-chip">
              <span>{fileIcon(f.name)}</span>
              <span className="cp-file-name">{f.name}</span>
            </div>
          ))}
        </div>
      )}

      <div className="cp-msgs">
        {messages.map(msg => (
          <div key={msg.id} className={`cp-msg${msg.role === 'user' ? ' user' : ''}`}>
            {msg.role === 'bot' && (
              <div className="cp-av">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
                </svg>
              </div>
            )}
            <div className="cp-bubble">
              {msg.text.split('\n').map((line, i) => (
                <span key={i}>{line}{i < msg.text.split('\n').length - 1 && <br />}</span>
              ))}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="cp-msg">
            <div className="cp-av">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
              </svg>
            </div>
            <div className="cp-typing">
              <span /><span /><span />
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      <div className="cw-input-row">
        <button className="cp-attach" onClick={() => fileInputRef.current?.click()} aria-label="Dosya ekle" type="button">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
          </svg>
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept={ACCEPTED}
          multiple
          style={{ display: 'none' }}
          onChange={e => { handleAddFiles(e.target.files); e.target.value = '' }}
        />
        <input
          ref={inputRef}
          className="cw-input"
          placeholder="Mesajınızı yazın..."
          onKeyDown={handleKey}
        />
        <button className="cw-send" onClick={sendMessage} disabled={isTyping} aria-label="Gönder">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round">
            <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </div>
    </div>
  )
}