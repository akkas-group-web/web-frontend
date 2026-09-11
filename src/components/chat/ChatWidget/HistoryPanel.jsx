"use client";

import './HistoryPanel.css'

export default function HistoryPanel({ history, onSelect, onDelete }) {
  return (
    <div className="hp-root">
      {history.length === 0 && (
        <div className="hp-empty">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          <p>Henüz sohbet geçmişi yok</p>
        </div>
      )}
      {history.length > 0 && (
        <>
          <p className="hp-label">Sohbet Geçmişi</p>
          {history.map(item => (
            <HistItem key={item.id} item={item} onClick={() => onSelect(item)} onDelete={() => onDelete(item.id)} />
          ))}
        </>
      )}
    </div>
  )
}

function HistItem({ item, onClick, onDelete }) {
  const hasFiles = item.files && item.files.length > 0
  return (
    <div className="hp-item-wrapper">
      <button className="hp-item" onClick={onClick}>
        <div className="hp-icon">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </div>
        <div className="hp-info">
          <p className="hp-title">{item.title}</p>
          <p className="hp-preview">{item.preview}</p>
        </div>
        {hasFiles && (
          <span className="hp-file-badge">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
            </svg>
            {item.files.length}
          </span>
        )}
        <span className="hp-time">{item.time}</span>
      </button>
      <button
        className="hp-delete"
        onClick={e => { e.stopPropagation(); onDelete() }}
        aria-label="Sohbeti sil"
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
        </svg>
      </button>
    </div>
  )
}