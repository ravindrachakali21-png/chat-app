import { useState } from 'react'
import { Search, Phone, Video, X, ArrowUpRight, Download, Smile, Send, Link, ChevronDown } from 'lucide-react'
import pinkPanda from '../assets/pink-panda.jpg'
import dogHat from '../assets/dog-hat.jpg'
import cuteTurtle from '../assets/cute-turtle.jpg'
import coolSpirit from '../assets/cool-spirit.jpg'
import strangeCat from '../assets/strange-cat.jpg'
import dinesh from '../assets/dinesh.jpg'
import abstractImg from '../assets/abstract-img.jpg'

const calls = [
  { id: 1, name: 'Dinesh', time: 'Yesterday, 21:29', avatar: dinesh, type: 'audio' },
  { id: 2, name: 'Dog Hat', time: 'Yesterday, 16:53', avatar: dogHat, type: 'audio' },
  { id: 3, name: 'Cute Turtle', time: 'Yesterday, 16:53', avatar: cuteTurtle, type: 'audio' },
  { id: 4, name: 'Cool spirit', time: 'Yesterday, 16:53', avatar: coolSpirit, type: 'video' },
  { id: 5, name: 'strange cat', time: 'Yesterday, 16:53', avatar: strangeCat, type: 'video' },
]

const CallLog = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div style={{ display: 'flex', flex: 1, height: '100vh', position: 'relative' }}>

      {/* Left Panel */}
      <div style={{ width: '360px', minWidth: '360px', height: '100vh', background: '#F4F6FB', display: 'flex', flexDirection: 'column', borderRight: '1px solid #e5e7eb' }}>

        <div style={{ background: '#fff', padding: '28px 20px 16px' }}>
          <h1 style={{ fontSize: '26px', fontWeight: 700, color: '#111827' }}>Call Log</h1>
        </div>

        {/* Search */}
        <div style={{ background: '#fff', padding: '0 16px 14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#F4F6FB', borderRadius: '14px', padding: '11px 16px' }}>
            <Search size={16} color="#9ca3af" />
            <input type="text" placeholder="Search" style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', fontSize: '14px' }} />
          </div>
        </div>

        {/* Start new conversation */}
        <div style={{ background: '#fff', padding: '0 20px 16px', borderBottom: '1px solid #f3f4f6' }}>
          <button
            onClick={() => setShowModal(true)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', background: 'none', border: 'none', cursor: 'pointer', color: '#2563eb', fontSize: '14px', fontWeight: 600 }}>
            Start new conversation
            <Phone size={18} color="#2563eb" />
          </button>
        </div>

        {/* Call List */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '12px', scrollbarWidth: 'none' }}>
          {calls.map(call => (
            <div key={call.id} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 14px', background: '#fff', borderRadius: '16px', cursor: 'pointer', marginBottom: '6px', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
              <img src={call.avatar} alt={call.name} style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <p style={{ fontWeight: 600, fontSize: '14.5px', color: '#111827', marginBottom: '3px' }}>{call.name}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <ArrowUpRight size={13} color="#22c55e" />
                  <span style={{ fontSize: '12.5px', color: '#9ca3af' }}>{call.time}</span>
                </div>
              </div>
              {call.type === 'audio'
                ? <Phone size={20} color="#22c55e" />
                : <Video size={20} color="#22c55e" />
              }
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window - same as Groups */}
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
              <img src={abstractImg} alt="Abstract" style={{ width: '180px', height: '150px', borderRadius: '12px', objectFit: 'cover' }} />
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

      {/* Start New Conversation Modal */}
      {showModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50 }}>
          <div style={{ background: 'white', borderRadius: '20px', padding: '24px', width: '420px', boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}>

            {/* Search + Close */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '10px', background: '#F4F6FB', borderRadius: '14px', padding: '11px 16px' }}>
                <Search size={16} color="#9ca3af" />
                <input type="text" placeholder="Search" style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', fontSize: '14px' }} />
              </div>
              <button onClick={() => setShowModal(false)} style={{ background: '#6b7280', border: 'none', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}>
                <X size={16} color="white" />
              </button>
            </div>

            {/* Contact list */}
            {calls.map((c, i) => (
              <div key={c.id}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '12px 4px' }}>
                  <img src={c.avatar} alt={c.name} style={{ width: '46px', height: '46px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
                  <div style={{ flex: 1 }}>
                    <p style={{ fontWeight: 600, fontSize: '15px', color: '#111827' }}>{c.name}</p>
                    <p style={{ fontSize: '12.5px', color: '#9ca3af' }}>{c.time}</p>
                  </div>
                  <Phone size={20} color="#22c55e" style={{ cursor: 'pointer' }} />
                  <Video size={20} color="#22c55e" style={{ cursor: 'pointer' }} />
                </div>
                {i < calls.length - 1 && <div style={{ height: '1px', background: '#f3f4f6' }} />}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default CallLog