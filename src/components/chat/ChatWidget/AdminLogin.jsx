"use client";

import { useState, useEffect, useRef } from 'react'
import './AdminLogin.css'

const PIN_LENGTH = 4
const API_URL =
  process.env.NEXT_PUBLIC_CHAT_API_URL || "http://localhost:3001"

export default function AdminLogin({ onBack, onSuccess }) {
  const [pin, setPin] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const shakeTimeout = useRef(null)

  useEffect(() => {
    if (pin.length === PIN_LENGTH && !loading) {
      checkPin(pin)
    }
  }, [pin])

  async function checkPin(enteredPin) {
    setLoading(true)
    try {
      const res = await fetch(`${API_URL}/api/auth/admin-login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pin: enteredPin }),
      })

      const data = await res.json()

      if (res.ok) {
        // Token'ı sakla
        localStorage.setItem('admin_token', data.token)
        setTimeout(() => onSuccess(), 200)
      } else {
        // Hatalı PIN
        setError(true)
        clearTimeout(shakeTimeout.current)
        shakeTimeout.current = setTimeout(() => {
          setError(false)
          setPin('')
          setLoading(false)
        }, 500)
      }
    } catch (err) {
      console.error('Backend bağlantı hatası:', err)
      setError(true)
      clearTimeout(shakeTimeout.current)
      shakeTimeout.current = setTimeout(() => {
        setError(false)
        setPin('')
        setLoading(false)
      }, 500)
    }
  }

  function press(digit) {
    if (pin.length >= PIN_LENGTH || error || loading) return
    setPin(prev => prev + digit)
  }

  function backspace() {
    if (loading) return
    setPin(prev => prev.slice(0, -1))
  }

  const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', 'back']

  return (
    <div className="al-root">
      <div className="al-header">
        <button className="al-back" onClick={onBack} aria-label="Geri">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <p className="al-header-title">Yönetici girişi</p>
      </div>

      <div className="al-body">
        <div className="al-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>
        <p className="al-title">Erişim kodunu girin</p>
        <p className="al-sub">Eğitim paneline erişmek için yönetici kodunu girin</p>

        <div className={`al-dots${error ? ' shake' : ''}`}>
          {Array.from({ length: PIN_LENGTH }).map((_, i) => (
            <span key={i} className={`al-dot${i < pin.length ? ' filled' : ''}${error ? ' error' : ''}`} />
          ))}
        </div>

        {loading && <p className="al-error" style={{ color: '#2563eb' }}>Doğrulanıyor...</p>}
        {error && <p className="al-error">Hatalı kod, tekrar deneyin</p>}

        <div className="al-keypad">
          {keys.map((k, i) => {
            if (k === '') return <div key={i} className="al-key empty" />
            if (k === 'back') {
              return (
                <button key={i} className="al-key" onClick={backspace} aria-label="Sil">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" /><line x1="18" y1="9" x2="12" y2="15" /><line x1="12" y1="9" x2="18" y2="15" />
                  </svg>
                </button>
              )
            }
            return (
              <button key={i} className="al-key" onClick={() => press(k)}>
                {k}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}