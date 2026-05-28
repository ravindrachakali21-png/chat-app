import { useState } from 'react'
import { Search, Plus, X, Download, Smile, Send, Link, ChevronDown } from 'lucide-react'
import pinkPanda from '../assets/pink-panda.jpg'
import dogHat from '../assets/dog-hat.jpg'
import cuteTurtle from '../assets/cute-turtle.jpg'
import coolSpirit from '../assets/cool-spirit.jpg'
import strangeCat from '../assets/strange-cat.jpg'
import animalKingdom from '../assets/animal-kingdom.jpg'
import abstractImg from '../assets/abstract-img.jpg'

const groups = [
  { id: 1, name: 'Animal Kingdom', message: 'You: thnx!', time: '9:36', avatar: animalKingdom, online: true, pinned: true },
  { id: 2, name: 'Dog Hat', message: "It's so quite outside 🤨", time: '9:36', avatar: dogHat, badge: 2, online: true },
  { id: 3, name: 'Cute Turtle', message: "That's It. Goodbye!", time: '9:36', avatar: cuteTurtle, badge: 3, online: true },
  { id: 4, name: 'Cool spirit', message: 'Look what I found', time: '9:36', avatar: coolSpirit, online: true },
  { id: 5, name: 'strange cat', message: 'You: Hi, sorry to bother you...', time: '9:36', avatar: strangeCat, online: true, chevron: true },
]

const Groups = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div style={{ display: 'flex', flex: 1, height: '100vh', position: 'relative' }}>

      {/* Left Panel */}
      <div style={{ width: '360px', minWidth: '360px', height: '100vh', background: '#F4F6FB', display: 'flex', flexDirection: 'column', borderRight: '1px solid #e5e7eb' }}>

        {/* Header */}
        <div style={{ background: '#fff', padding: '28px 20px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ fontSize: '26px', fontWeight: 700, color: '#111827' }}>Groups</h1>
        </div>

        {/* Search */}
        <div style={{ background: '#fff', padding: '0 16px 14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#F4F6FB', borderRadius: '14px', padding: '11px 16px' }}>
            <Search size={16} color="#9ca3af" />
            <input type="text" placeholder="Search" style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', fontSize: '14px' }} />
          </div>
        </div>

        {/* Create New Group */}
        <div style={{ background: '#fff', padding: '0 20px 16px', borderBottom: '1px solid #f3f4f6' }}>
          <button
            onClick={() => setShowModal(true)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', background: 'none', border: 'none', cursor: 'pointer', color: '#2563eb', fontSize: '14px', fontWeight: 600 }}>
            Create New Group
            <Plus size={18} color="#2563eb" />
          </button>
        </div>

        {/* Groups List */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '12px', scrollbarWidth: 'none' }}>

          <p style={{ fontSize: '12.5px', fontWeight: 600, color: '#6b7280', padding: '4px 6px 10px' }}>Pinned</p>

          {groups.filter(g => g.pinned).map(g => (
            <div key={g.id} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 14px', background: '#2563eb', borderRadius: '16px', cursor: 'pointer', marginBottom: '6px' }}>
              <div style={{ position: 'relative', flexShrink: 0 }}>
                <img src={g.avatar} alt={g.name} style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }} />
                {g.online && <span style={{ position: 'absolute', bottom: '1px', right: '1px', width: '12px', height: '12px', background: '#22c55e', border: '2px solid white', borderRadius: '50%' }} />}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3px' }}>
                  <span style={{ fontWeight: 600, fontSize: '14.5px', color: 'white' }}>{g.name}</span>
                  <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)' }}>{g.time}</span>
                </div>
                <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.75)' }}>{g.message}</span>
              </div>
            </div>
          ))}

          <p style={{ fontSize: '12.5px', fontWeight: 600, color: '#6b7280', padding: '14px 6px 10px' }}>All Chats</p>

          {groups.filter(g => !g.pinned).map(g => (
            <div key={g.id} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 14px', background: '#fff', borderRadius: '16px', cursor: 'pointer', marginBottom: '6px', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
              <div style={{ position: 'relative', flexShrink: 0 }}>
                <img src={g.avatar} alt={g.name} style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }} />
                {g.online && <span style={{ position: 'absolute', bottom: '1px', right: '1px', width: '12px', height: '12px', background: '#22c55e', border: '2px solid white', borderRadius: '50%' }} />}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3px' }}>
                  <span style={{ fontWeight: 600, fontSize: '14.5px', color: '#111827' }}>{g.name}</span>
                  <span style={{ fontSize: '12px', color: '#9ca3af' }}>{g.time}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '13px', color: '#9ca3af' }}>{g.message}</span>
                  {g.badge && <span style={{ width: '20px', height: '20px', background: '#2563eb', color: 'white', fontSize: '11px', fontWeight: 700, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{g.badge}</span>}
                  {g.chevron && <ChevronDown size={14} color="#9ca3af" />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100vh', background: '#F8F9FE' }}>

        {/* Chat Header */}
        <div style={{ background: '#fff', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #e5e7eb' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ position: 'relative' }}>
              <img src={animalKingdom} alt="Animal Kingdom" style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover' }} />
              <span style={{ position: 'absolute', bottom: '1px', right: '1px', width: '11px', height: '11px', background: '#22c55e', border: '2px solid white', borderRadius: '50%' }} />
            </div>
            <div>
              <p style={{ fontWeight: 700, fontSize: '15px', color: '#111827' }}>Animal Kingdom</p>
              <p style={{ fontSize: '12px', color: '#9ca3af' }}>Pink Panda, Turtle, 212 others</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Search size={20} color="#9ca3af" style={{ cursor: 'pointer' }} />
            <ChevronDown size={20} color="#9ca3af" style={{ cursor: 'pointer' }} />
          </div>
        </div>

        {/* Messages */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '24px', scrollbarWidth: 'none' }}>

          {/* Received bubble */}
          <div style={{ display: 'flex', marginBottom: '8px' }}>
            <div style={{ background: '#fff', borderRadius: '18px 18px 18px 4px', padding: '12px 16px', maxWidth: '320px', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
              <p style={{ fontSize: '14px', color: '#111827' }}>Hi 👋, How are ya ?</p>
              <p style={{ fontSize: '11px', color: '#9ca3af', marginTop: '4px', textAlign: 'right' }}>0:12</p>
            </div>
          </div>

          {/* Date divider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '16px 0' }}>
            <div style={{ flex: 1, height: '1px', background: '#e5e7eb' }} />
            <span style={{ fontSize: '12px', color: '#9ca3af', fontWeight: 500 }}>Today</span>
            <div style={{ flex: 1, height: '1px', background: '#e5e7eb' }} />
          </div>

          {/* Sent bubbles */}
          {['Hi 👋 Panda, not bad, u ?', 'Can you send me an abstract image?'].map((msg, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '6px' }}>
              <div style={{ background: '#2563eb', borderRadius: '18px 18px 4px 18px', padding: '12px 16px', maxWidth: '320px' }}>
                <p style={{ fontSize: '14px', color: 'white' }}>{msg}</p>
                <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.65)', marginTop: '4px', textAlign: 'right' }}>8:17</p>
              </div>
            </div>
          ))}

          {/* Image message */}
          <div style={{ marginBottom: '8px' }}>
            <div style={{ background: '#fff', borderRadius: '18px', padding: '8px', display: 'inline-block', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
              <img
                src={abstractImg}
                alt="Abstract"
                style={{ width: '180px', height: '150px', borderRadius: '12px', objectFit: 'cover', display: 'block' }}
              />
              <p style={{ fontSize: '11px', color: '#9ca3af', marginTop: '4px', textAlign: 'right' }}>10:35</p>
            </div>
            <div style={{ marginTop: '4px' }}><span style={{ fontSize: '13px' }}>🔥 1</span></div>
          </div>

          {/* Sent bubble */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '6px' }}>
            <div style={{ background: '#2563eb', borderRadius: '18px 18px 4px 18px', padding: '12px 16px', maxWidth: '320px' }}>
              <p style={{ fontSize: '14px', color: 'white' }}>Can you send it as file ?</p>
              <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.65)', marginTop: '4px', textAlign: 'right' }}>11:12</p>
            </div>
          </div>

          {/* File message */}
          <div style={{ marginBottom: '8px' }}>
            <div style={{ background: '#fff', borderRadius: '16px', padding: '12px 16px', display: 'inline-flex', alignItems: 'center', gap: '12px', boxShadow: '0 1px 4px rgba(0,0,0,0.06)', minWidth: '200px' }}>
              <div style={{ width: '36px', height: '36px', background: '#F4F6FB', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '18px' }}>🖼️</span>
              </div>
              <span style={{ fontSize: '14px', color: '#111827', fontWeight: 500 }}>Abstract.png</span>
              <Download size={18} color="#9ca3af" style={{ cursor: 'pointer' }} />
            </div>
            <p style={{ fontSize: '11px', color: '#9ca3af', marginTop: '4px' }}>11:25</p>
          </div>

          {/* Sent Thnx */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '6px' }}>
            <div style={{ background: '#2563eb', borderRadius: '18px 18px 4px 18px', padding: '12px 16px' }}>
              <p style={{ fontSize: '14px', color: 'white' }}>Thnx!</p>
              <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.65)', marginTop: '4px', textAlign: 'right' }}>11:28</p>
            </div>
          </div>

        </div>

        {/* Message Input */}
        <div style={{ background: '#fff', padding: '14px 20px', borderTop: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Link size={20} color="#9ca3af" style={{ cursor: 'pointer', flexShrink: 0 }} />
          <input type="text" placeholder="Write a message ..." style={{ flex: 1, border: 'none', outline: 'none', fontSize: '14px', color: '#374151', background: 'transparent' }} />
          <Smile size={20} color="#9ca3af" style={{ cursor: 'pointer', flexShrink: 0 }} />
          <div style={{ width: '38px', height: '38px', background: '#2563eb', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <Send size={18} color="white" />
          </div>
        </div>
      </div>

      {/* Create Group Modal */}
      {showModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50 }}>
          <div style={{ background: 'white', borderRadius: '20px', padding: '28px', width: '420px', boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#111827' }}>Create New Group</h2>
              <button onClick={() => setShowModal(false)} style={{ background: '#6b7280', border: 'none', borderRadius: '50%', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <X size={16} color="white" />
              </button>
            </div>

            {/* Name Field */}
            <div style={{ position: 'relative', marginBottom: '20px' }}>
              <label style={{ position: 'absolute', top: '-9px', left: '12px', background: 'white', padding: '0 4px', fontSize: '12px', color: '#2563eb', fontWeight: 500 }}>Name</label>
              <input placeholder="Group Name" style={{ width: '100%', padding: '14px 16px', border: '1.5px solid #2563eb', borderRadius: '8px', fontSize: '15px', outline: 'none', fontFamily: 'inherit' }} />
            </div>

            {/* Members Field */}
            <div style={{ position: 'relative', marginBottom: '28px' }}>
              <label style={{ position: 'absolute', top: '-9px', left: '12px', background: 'white', padding: '0 4px', fontSize: '12px', color: '#9ca3af', fontWeight: 500 }}>Members</label>
              <div style={{ padding: '12px 16px', border: '1.5px solid #d1d5db', borderRadius: '8px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {['Chip', 'Chip'].map((name, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#F4F6FB', borderRadius: '20px', padding: '4px 10px 4px 6px' }}>
                    <img src={i === 0 ? coolSpirit : pinkPanda} alt={name} style={{ width: '24px', height: '24px', borderRadius: '50%', objectFit: 'cover' }} />
                    <span style={{ fontSize: '13px', color: '#374151' }}>{name}</span>
                    <X size={12} color="#9ca3af" style={{ cursor: 'pointer' }} />
                  </div>
                ))}
              </div>
            </div>

            <button style={{ width: '100%', padding: '14px', background: '#2563eb', border: 'none', borderRadius: '12px', color: 'white', fontSize: '15px', fontWeight: 600, cursor: 'pointer' }}>
              Create
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Groups