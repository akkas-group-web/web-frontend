"use client";

import { useState, useRef, useEffect } from 'react'
import './AdminPanel.css'

const ACCEPTED = '.pdf,.docx,.doc,.xlsx,.xls,.csv,.pptx,.txt,.png,.jpg,.jpeg'
const API_URL =
  process.env.NEXT_PUBLIC_CHAT_API_URL || "http://localhost:3001"
export default function AdminPanel({ onBack, onPreview }) {
  const [areas, setAreas] = useState([])
  const [activeAreaId, setActiveAreaId] = useState(null)
  const [docs, setDocs] = useState([])
  const [addingArea, setAddingArea] = useState(false)
  const [newAreaName, setNewAreaName] = useState('')
  const [dragOver, setDragOver] = useState(false)
  const [loading, setLoading] = useState(true)
  const fileInputRef = useRef(null)
  const newAreaInputRef = useRef(null)

  const token = localStorage.getItem('admin_token')
  const headers = { Authorization: `Bearer ${token}` }

  useEffect(() => { fetchAreas() }, [])
  useEffect(() => { if (activeAreaId) fetchDocs(activeAreaId) }, [activeAreaId])

  async function fetchAreas() {
    try {
      const res = await fetch(`${API_URL}/api/areas`, { headers })
      const data = await res.json()
      setAreas(data.areas)
      if (data.areas.length > 0) setActiveAreaId(data.areas[0].id)
    } catch (err) {
      console.error('Alan yükleme hatası:', err)
    } finally {
      setLoading(false)
    }
  }

  async function fetchDocs(areaId) {
    try {
      const res = await fetch(`${API_URL}/api/documents/area/${areaId}`, { headers })
      const data = await res.json()
      setDocs(data.documents.map(d => ({
        ...d,
        name: d.filename,
        meta: new Date(d.created_at).toLocaleDateString('tr-TR'),
        status: 'ready'
      })))
    } catch (err) {
      console.error('Döküman yükleme hatası:', err)
    }
  }

  async function handleFiles(fileList) {
    const files = Array.from(fileList)
    for (const file of files) {
      const tempId = Date.now() + Math.random()
      setDocs(prev => [{ id: tempId, name: file.name, meta: 'Yükleniyor...', status: 'uploading' }, ...prev])
      try {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('areaId', activeAreaId)
        const res = await fetch(`${API_URL}/api/documents/upload`, {
          method: 'POST',
          headers: { Authorization: `Bearer ${token}` },
          body: formData,
        })
        const data = await res.json()
        if (res.ok) {
          setDocs(prev => prev.map(d =>
            d.id === tempId
              ? { id: data.document.id, name: data.document.filename, meta: 'Az önce', status: 'ready' }
              : d
          ))
        } else {
          setDocs(prev => prev.filter(d => d.id !== tempId))
          alert(`Yükleme hatası: ${data.error}`)
        }
      } catch (err) {
        setDocs(prev => prev.filter(d => d.id !== tempId))
        console.error('Yükleme hatası:', err)
      }
    }
  }

  async function handleDeleteDoc(docId) {
    try {
      await fetch(`${API_URL}/api/documents/${docId}`, { method: 'DELETE', headers })
      setDocs(prev => prev.filter(d => d.id !== docId))
    } catch (err) {
      console.error('Silme hatası:', err)
    }
  }

  async function handleDownloadDoc(docId, filename) {
  try {
    const res = await fetch(`${API_URL}/api/documents/download/${docId}`, {
      headers,
    })
    const blob = await res.blob()
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename 
    a.click()
    window.URL.revokeObjectURL(url)
  } catch (err) {
    console.error('İndirme hatası:', err)
  }
}

  async function handleAddArea() {
    const name = newAreaName.trim()
    if (!name) { setAddingArea(false); return }
    try {
      const res = await fetch(`${API_URL}/api/areas`, {
        method: 'POST',
        headers: { ...headers, 'Content-Type': 'application/json' },
        body: JSON.stringify({ name }),
      })
      const data = await res.json()
      setAreas(prev => [...prev, data.area])
      setActiveAreaId(data.area.id)
    } catch (err) {
      console.error('Alan ekleme hatası:', err)
    }
    setNewAreaName('')
    setAddingArea(false)
  }

  async function handleDeleteArea(areaId) {
    if (!window.confirm('Bu alanı silmek istediğinize emin misiniz? İçindeki tüm dökümanlar da silinecek.')) return
    try {
      const res = await fetch(`${API_URL}/api/areas/${areaId}`, {
        method: 'DELETE',
        headers,
      })
      if (res.ok) {
        const remaining = areas.filter(a => a.id !== areaId)
        setAreas(remaining)
        if (remaining.length > 0) {
          setActiveAreaId(remaining[0].id)
        } else {
          setActiveAreaId(null)
          setDocs([])
        }
      }
    } catch (err) {
      console.error('Alan silme hatası:', err)
    }
  }

  function handleDrop(e) {
    e.preventDefault()
    setDragOver(false)
    handleFiles(e.dataTransfer.files)
  }

  function fileIcon(name) {
    const ext = name.split('.').pop().toLowerCase()
    if (ext === 'pdf') return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
      </svg>
    )
    if (['xlsx', 'xls', 'csv'].includes(ext)) return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><path d="M8 13h8M8 17h8" />
      </svg>
    )
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
      </svg>
    )
  }

  const activeArea = areas.find(a => a.id === activeAreaId)

  if (loading) {
    return (
      <div className="ap-root" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: '#94a3b8', fontSize: '13px' }}>Yükleniyor...</p>
      </div>
    )
  }

  return (
    <div className="ap-root">
      <div className="ap-header">
        <div className="ap-header-top">
          <button className="ap-back" onClick={onBack} aria-label="Geri">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <div>
            <p className="ap-title">Yapay zeka eğitme</p>
            <p className="ap-sub">Yönetici modu</p>
          </div>
          <button className="ap-preview-btn" onClick={onPreview}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
            </svg>
            Orbit'e dön
          </button>
        </div>

        <div className="ap-areas">
          {areas.map(area => (
            <div key={area.id} className="ap-area-chip-wrapper">
              <button
                className={`ap-area-chip${area.id === activeAreaId ? ' active' : ''}`}
                onClick={() => setActiveAreaId(area.id)}
              >
                {area.name}
              </button>
              {area.id === activeAreaId && (
                <button
                  className="ap-area-delete"
                  onClick={() => handleDeleteArea(area.id)}
                  aria-label="Alanı sil"
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              )}
            </div>
          ))}

          {!addingArea ? (
            <button className="ap-area-chip addnew" onClick={() => { setAddingArea(true); setTimeout(() => newAreaInputRef.current?.focus(), 50) }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              Yeni
            </button>
          ) : (
            <input
              ref={newAreaInputRef}
              className="ap-area-input"
              placeholder="Alan adı..."
              value={newAreaName}
              onChange={e => setNewAreaName(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') handleAddArea(); if (e.key === 'Escape') setAddingArea(false) }}
              onBlur={handleAddArea}
            />
          )}
        </div>
      </div>

      <div className="ap-body">
        {activeArea && (
          <>
            <p className="ap-section-title">{activeArea.name} alanına döküman ekle</p>
            <div
              className={`ap-dropzone${dragOver ? ' drag' : ''}`}
              onClick={() => fileInputRef.current?.click()}
              onDragOver={e => { e.preventDefault(); setDragOver(true) }}
              onDragLeave={() => setDragOver(false)}
              onDrop={handleDrop}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" />
              </svg>
              <p className="ap-dropzone-text">Dosya seç veya sürükle bırak</p>
              <p className="ap-dropzone-sub">PDF · Word · Excel · CSV · PPT · Resim</p>
              <input
                ref={fileInputRef}
                type="file"
                accept={ACCEPTED}
                multiple
                style={{ display: 'none' }}
                onChange={e => { handleFiles(e.target.files); e.target.value = '' }}
              />
            </div>

            <div className="ap-doc-list">
              {docs.length === 0 && (
                <p className="ap-empty">Bu alana henüz döküman yüklenmedi</p>
              )}
              {docs.map(doc => (
                <div key={doc.id} className="ap-doc-item">
                  <span className="ap-doc-icon">{fileIcon(doc.name)}</span>
                  <div className="ap-doc-info">
                    <p className="ap-doc-name">{doc.name}</p>
                    <p className="ap-doc-meta">{doc.meta}</p>
                  </div>
                  {doc.status === 'uploading' && <div className="ap-spinner" />}

{doc.status === 'ready' && (
  <div style={{ display: 'flex', gap: '6px' }}>
    <button
      className="ap-doc-download"
      onClick={() => handleDownloadDoc(doc.id, doc.name)}
      aria-label="İndir"
    >
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    </button>
    <button className="ap-doc-delete" onClick={() => handleDeleteDoc(doc.id)} aria-label="Sil">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
      </svg>
    </button>
  </div>
)}

                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}