import { useNavigate } from 'react-router-dom'
import { ChevronLeft, Search, SlidersHorizontal, Download, Link, Smile, Send, Phone, Video, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import pinkPanda from '../assets/pink-panda.jpg'
import dogHat from '../assets/dog-hat.jpg'
import cuteTurtle from '../assets/cute-turtle.jpg'
import abstractImg from '../assets/abstract-img.jpg'

const archivedChats = [
  { id: 1, name: 'Pink Panda', message: 'You: thnx!', time: '9:36', avatar: pinkPanda, online: true },
  { id: 2, name: 'Dog Hat', message: "It's so quite outside 🤨", time: '9:36', avatar: dogHat, badge: 2, online: true },
  { id: 3, name: 'Cute Turtle', message: "That's It. Goodbye!", time: '9:36', avatar: cuteTurtle, badge: 3, online: true },
]

const Archive = () => {
  const navigate = useNavigate()
  const [activeId, setActiveId] = useState(1)

  return (
    <div style={{ display: 'flex', flex: 1, height: '100vh' }}>

      {/* Left Panel */}
      <div style={{ width: '360px', minWidth: '360px', height: '100vh', background: '#F4F6FB', display: 'flex', flexDirection: 'column', borderRight: '1px solid #e5e7eb' }}>

        {/* Header */}
        <div style={{ background: '#fff', padding: '28px 20px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              <ChevronLeft size={22} color="#111827" />
            </button>
            <h1 style={{ fontSize: '24px', fontWeight: 700, color: '#111827' }}>Archive</h1>
          </div>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
            <circle cx="15" cy="15" r="12" stroke="#CBD5E1" strokeWidth="1.8" strokeDasharray="4.5 3" strokeLinecap="round"/>
          </svg>
        </div>

        {/* Search */}
        <div style={{ background: '#fff', padding: '0 16px 14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#F4F6FB', borderRadius: '14px', padding: '11px 16px' }}>
            <Search size={16} color="#9ca3af" />
            <input type="text" placeholder="Search" style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', fontSize: '14px' }} />
            <SlidersHorizontal size={16} color="#9ca3af" />
          </div>
        </div>

        <div style={{ height: '1px', background: '#f3f4f6', margin: '0 16px' }} />

        {/* Chat List */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '12px', scrollbarWidth: 'none' }}>
          {archivedChats.map(chat => (
            <div key={chat.id} onClick={() => setActiveId(chat.id)} style={{
              display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 14px',
              background: activeId === chat.id ? '#2563eb' : '#fff',
              borderRadius: '16px', cursor: 'pointer', marginBottom: '6px',
              boxShadow: '0 1px 4px rgba(0,0,0,0.06)'
            }}>
              <div style={{ position: 'relative', flexShrink: 0 }}>
                <img src={chat.avatar} alt={chat.name} style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }} />
                {chat.online && <span style={{ position: 'absolute', bottom: '1px', right: '1px', width: '12px', height: '12px', background: '#22c55e', border: '2px solid white', borderRadius: '50%' }} />}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3px' }}>
                  <span style={{ fontWeight: 600, fontSize: '14.5px', color: activeId === chat.id ? 'white' : '#111827' }}>{chat.name}</span>
                  <span style={{ fontSize: '12px', color: activeId === chat.id ? 'rgba(255,255,255,0.7)' : '#9ca3af' }}>{chat.time}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '13px', color: activeId === chat.id ? 'rgba(255,255,255,0.75)' : '#9ca3af', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{chat.message}</span>
                  {chat.badge && <span style={{ width: '20px', height: '20px', background: activeId === chat.id ? 'white' : '#2563eb', color: activeId === chat.id ? '#2563eb' : 'white', fontSize: '10.5px', fontWeight: 700, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{chat.badge}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100vh', background: '#F8F9FE' }}>
        {/* Header */}
        <div style={{ background: '#fff', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #e5e7eb' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ position: 'relative' }}>
              <img src={pinkPanda} alt="Pink Panda" style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover' }} />
              <span style={{ position: 'absolute', bottom: '1px', right: '1px', width: '11px', height: '11px', background: '#22c55e', border: '2px solid white', borderRadius: '50%' }} />
            </div>
            <div>
              <p style={{ fontWeight: 700, fontSize: '15px', color: '#111827' }}>Pink Panda</p>
              <p style={{ fontSize: '12px', color: '#22c55e' }}>Online</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Video size={20} color="#9ca3af" style={{ cursor: 'pointer' }} />
            <Phone size={20} color="#9ca3af" style={{ cursor: 'pointer' }} />
            <Search size={20} color="#9ca3af" style={{ cursor: 'pointer' }} />
            <div style={{ width: '1px', height: '20px', background: '#e5e7eb' }} />
            <ChevronDown size={20} color="#9ca3af" style={{ cursor: 'pointer' }} />
          </div>
        </div>

        {/* Messages */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '24px', scrollbarWidth: 'none' }}>
          <div style={{ display: 'flex', marginBottom: '8px' }}>
            <div style={{ background: '#fff', borderRadius: '18px 18px 18px 4px', padding: '12px 16px', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
              <p style={{ fontSize: '14px', color: '#111827' }}>Hi 👋, How are ya ?</p>
              <p style={{ fontSize: '11px', color: '#9ca3af', marginTop: '4px', textAlign: 'right' }}>0:12</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '16px 0' }}>
            <div style={{ flex: 1, height: '1px', background: '#e5e7eb' }} />
            <span style={{ fontSize: '12px', color: '#9ca3af' }}>Today</span>
            <div style={{ flex: 1, height: '1px', background: '#e5e7eb' }} />
          </div>
          {['Hi 👋 Panda, not bad, u ?', 'Can you send me an abstract image?'].map((msg, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '6px' }}>
              <div style={{ background: '#2563eb', borderRadius: '18px 18px 4px 18px', padding: '12px 16px', maxWidth: '320px' }}>
                <p style={{ fontSize: '14px', color: 'white' }}>{msg}</p>
                <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.65)', marginTop: '4px', textAlign: 'right' }}>8:17</p>
              </div>
            </div>
          ))}
          <div style={{ marginBottom: '8px' }}>
            <div style={{ background: '#fff', borderRadius: '18px', padding: '8px', display: 'inline-block', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
              <img src={abstractImg} alt="Abstract" style={{ width: '180px', height: '150px', borderRadius: '12px', objectFit: 'cover', display: 'block' }} />
              <p style={{ fontSize: '11px', color: '#9ca3af', marginTop: '4px', textAlign: 'right' }}>10:35</p>
            </div>
            <div style={{ marginTop: '4px' }}><span style={{ fontSize: '13px' }}>🔥 1</span></div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '6px' }}>
            <div style={{ background: '#2563eb', borderRadius: '18px 18px 4px 18px', padding: '12px 16px' }}>
              <p style={{ fontSize: '14px', color: 'white' }}>Can you send it as file ?</p>
              <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.65)', marginTop: '4px', textAlign: 'right' }}>11:12</p>
            </div>
          </div>
          <div style={{ marginBottom: '8px' }}>
            <div style={{ background: '#fff', borderRadius: '16px', padding: '12px 16px', display: 'inline-flex', alignItems: 'center', gap: '12px', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
              <span style={{ fontSize: '18px' }}>🖼️</span>
              <span style={{ fontSize: '14px', color: '#111827', fontWeight: 500 }}>Abstract.png</span>
              <Download size={18} color="#9ca3af" />
            </div>
            <p style={{ fontSize: '11px', color: '#9ca3af', marginTop: '4px' }}>11:25</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <div style={{ background: '#2563eb', borderRadius: '18px 18px 4px 18px', padding: '12px 16px' }}>
              <p style={{ fontSize: '14px', color: 'white' }}>Thnx!</p>
              <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.65)', marginTop: '4px', textAlign: 'right' }}>11:28</p>
            </div>
          </div>
        </div>

        {/* Input */}
        <div style={{ background: '#fff', padding: '14px 20px', borderTop: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Link size={20} color="#9ca3af" style={{ cursor: 'pointer', flexShrink: 0 }} />
          <input type="text" placeholder="Write a message ..." style={{ flex: 1, border: 'none', outline: 'none', fontSize: '14px', color: '#374151', background: 'transparent' }} />
          <Smile size={20} color="#9ca3af" style={{ cursor: 'pointer', flexShrink: 0 }} />
          <div style={{ width: '38px', height: '38px', background: '#2563eb', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <Send size={18} color="white" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Archive