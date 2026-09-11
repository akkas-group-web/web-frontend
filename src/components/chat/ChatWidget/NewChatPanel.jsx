"use client";

import { useRef, useState } from 'react'
import './NewChatPanel.css'

const ACCEPTED = '.pdf,.docx,.doc,.xlsx,.xls,.csv,.pptx,.txt,.png,.jpg,.jpeg'
const API_URL = 'http://localhost:3001'

export default function NewChatPanel({ onSend }) {
  const inputRef = useRef(null)
  const fileInputRef = useRef(null)
  const [pendingFiles, setPendingFiles] = useState([])
  const [uploading, setUploading] = useState(false)

  async function handleFiles(fileList) {
    const files = Array.from(fileList)
    setUploading(true)

    for (const file of files) {
      try {
        const formData = new FormData()
        formData.append('file', file)

        const res = await fetch(`${API_URL}/api/documents/extract`, {
          method: 'POST',
          body: formData,
        })

        const data = await res.json()

        if (res.ok && data.content) {
          setPendingFiles(prev => [...prev, { name: file.name, text: data.content }])
        } else {
          console.error('Dosya yükleme hatası:', data.error)
        }
      } catch (err) {
        console.error('Fetch hatası:', err)
      }
    }

    setUploading(false)
  }

  function handleSend() {
    const v = inputRef.current?.value.trim() || ''
    if (!v && pendingFiles.length === 0) return
    inputRef.current.value = ''

    const fileContent = pendingFiles.map(f => `[${f.name}]\n${f.text}`).join('\n\n---\n\n')
    onSend(v, pendingFiles.map(f => ({ name: f.name })), fileContent)
    setPendingFiles([])
  }

  function handleKey(e) {
    if (e.key === 'Enter') handleSend()
  }

  function removeFile(idx) {
    setPendingFiles(prev => prev.filter((_, i) => i !== idx))
  }

  function fileIcon(name) {
    const ext = name.split('.').pop().toLowerCase()
    if (ext === 'pdf') return '📕'
    if (ext === 'docx' || ext === 'doc') return '📘'
    if (ext === 'xlsx' || ext === 'xls' || ext === 'csv') return '📗'
    return '📄'
  }

  return (
    <div className="nc-root">
      <div className="nc-body">
        <p className="nc-greeting">Merhaba! 👋 Size nasıl yardımcı olabilirim?</p>

        {pendingFiles.length > 0 && (
          <div className="nc-pending-files">
            {pendingFiles.map((f, i) => (
              <div key={i} className="nc-pending-file">
                <span className="nc-pending-icon">{fileIcon(f.name)}</span>
                <span className="nc-pending-name">{f.name} ✅</span>
                <button className="nc-pending-remove" onClick={() => removeFile(i)} aria-label="Kaldır">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="cw-input-row">
        <button
          className="cp-attach"
          onClick={() => fileInputRef.current?.click()}
          disabled={uploading}
          aria-label="Dosya ekle"
          type="button"
        >
          {uploading ? (
            <div className="ap-spinner" style={{ width: 14, height: 14 }} />
          ) : (
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
            </svg>
          )}
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept={ACCEPTED}
          multiple
          style={{ display: 'none' }}
          onChange={e => { handleFiles(e.target.files); e.target.value = '' }}
        />
        <input
          ref={inputRef}
          className="cw-input"
          placeholder={pendingFiles.length > 0 ? 'Dosya hakkında soru yazın...' : 'Sorunuzu yazın...'}
          onKeyDown={handleKey}
        />
        <button className="cw-send" onClick={handleSend} aria-label="Gönder">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round">
            <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </div>
    </div>
  )
}