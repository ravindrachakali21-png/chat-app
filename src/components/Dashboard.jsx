import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Search, Phone, Video, ChevronDown, Link, Smile, Send, Download, PhoneOff } from 'lucide-react'
import ChatList from './ChatList'
import { StarredPanel, MediaPanel, ContactPanel } from './RightPanel'
import abstractImg from '../assets/abstract-img.jpg'
import pinkPanda from '../assets/pink-panda.jpg'
import videoBg from '../assets/video-call-bg.jpg'
import videoThumb from '../assets/video-call-thumb.jpg'
import camel from '../assets/camel.jpg'
import horse from '../assets/horse.jpg'

const chatData = {
  1: { name: 'Pink Panda', status: 'Online', avatar: pinkPanda },
  2: { name: 'Dog Hat', status: 'Online', avatar: pinkPanda },
  3: { name: 'Cute Turtle', status: 'Online', avatar: pinkPanda },
  4: { name: 'Cool spirit', status: 'Online', avatar: pinkPanda },
  5: { name: 'strange cat', status: 'Online', avatar: pinkPanda },
  6: { name: 'Fire Fox', status: 'Offline', avatar: pinkPanda },
}

const Messages = () => (
  <div style={{ flex: 1, overflowY: 'auto', padding: '24px', scrollbarWidth: 'none', background: '#F8F9FE' }}>
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
)

const Dashboard = () => {
  const { id } = useParams()
  const chat = chatData[parseInt(id)] || chatData[1]
  const [showVideo, setShowVideo] = useState(false)
  const [showAudio, setShowAudio] = useState(false)
  const [audioConnected, setAudioConnected] = useState(false)
  const [rightPanel, setRightPanel] = useState(null)

  const handleAudioCall = () => {
    setShowAudio(true)
    setAudioConnected(false)
    setTimeout(() => setAudioConnected(true), 2000)
  }

  return (
    <div style={{ display: 'flex', flex: 1, height: '100vh', overflow: 'hidden' }}>
      <ChatList activeId={parseInt(id)} />

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100vh', position: 'relative', overflow: 'hidden' }}>

        {/* Header */}
        <div style={{ background: '#fff', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #e5e7eb', zIndex: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ position: 'relative' }}>
              <img src={chat.avatar} alt={chat.name} style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover' }} />
              <span style={{ position: 'absolute', bottom: '1px', right: '1px', width: '11px', height: '11px', background: '#22c55e', border: '2px solid white', borderRadius: '50%' }} />
            </div>
            <div>
              <p style={{ fontWeight: 700, fontSize: '15px', color: '#111827' }}>{chat.name}</p>
              <p style={{ fontSize: '12px', color: '#22c55e' }}>Online</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Video size={20} color="#9ca3af" style={{ cursor: 'pointer' }} onClick={() => setShowVideo(true)} />
            <Phone size={20} color="#9ca3af" style={{ cursor: 'pointer' }} onClick={handleAudioCall} />
            <Search size={20} color="#9ca3af" style={{ cursor: 'pointer' }} />
            <div style={{ width: '1px', height: '20px', background: '#e5e7eb' }} />
            <ChevronDown size={20} color="#9ca3af" style={{ cursor: 'pointer' }} onClick={() => setRightPanel(rightPanel ? null : 'contact')} />
          </div>
        </div>

        <Messages />

        {/* Input */}
        <div style={{ background: '#fff', padding: '14px 20px', borderTop: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Link size={20} color="#9ca3af" style={{ cursor: 'pointer', flexShrink: 0 }} />
          <input type="text" placeholder="Write a message ..." style={{ flex: 1, border: 'none', outline: 'none', fontSize: '14px', color: '#374151', background: 'transparent' }} />
          <Smile size={20} color="#9ca3af" style={{ cursor: 'pointer', flexShrink: 0 }} />
          <div style={{ width: '38px', height: '38px', background: '#2563eb', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <Send size={18} color="white" />
          </div>
        </div>

        {/* Video Call */}
        {showVideo && (
          <div style={{ position: 'absolute', top: 0, right: 0, width: '60%', height: '100%', zIndex: 20 }}>
            <img src={videoBg} alt="Video" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', top: '16px', right: '16px', width: '160px', height: '100px', borderRadius: '12px', overflow: 'hidden', border: '3px solid white' }}>
              <img src={videoThumb} alt="thumb" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ position: 'absolute', bottom: '40%', left: '50%', transform: 'translateX(-50%)' }}>
              <button onClick={() => setShowVideo(false)} style={{ background: '#ef4444', border: 'none', borderRadius: '50px', padding: '14px 28px', cursor: 'pointer' }}>
                <PhoneOff size={24} color="white" />
              </button>
            </div>
          </div>
        )}

        {/* Audio Call */}
        {showAudio && (
          <div style={{ position: 'absolute', top: 0, right: 0, width: '60%', height: '55%', background: 'white', zIndex: 20, borderRadius: '0 0 0 20px', boxShadow: '-4px 4px 20px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                <img src={camel} alt="Camel" style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #e5e7eb' }} />
                <span style={{ fontSize: '14px', fontWeight: 500 }}>Camel</span>
              </div>
              <svg width="80" height="30" viewBox="0 0 80 30">
                <path d="M0 15 Q10 5 20 15 Q30 25 40 15 Q50 5 60 15 Q70 25 80 15" stroke="#93c5fd" strokeWidth="2" fill="none" />
              </svg>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                <img src={horse} alt="Horse" style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #e5e7eb' }} />
                <span style={{ fontSize: '14px', fontWeight: 500 }}>Horse</span>
              </div>
            </div>
            {audioConnected ? (
              <>
                <p style={{ fontSize: '16px', fontWeight: 600, color: '#22c55e' }}>Connected</p>
                <p style={{ fontSize: '28px', fontWeight: 700, color: '#111827' }}>12 : 32</p>
              </>
            ) : (
              <p style={{ fontSize: '20px', fontWeight: 700, color: '#111827' }}>Connecting...</p>
            )}
            <button onClick={() => { setShowAudio(false); setAudioConnected(false) }} style={{ background: 'white', border: '1.5px solid #ef4444', color: '#ef4444', borderRadius: '10px', padding: '10px 32px', fontSize: '15px', fontWeight: 600, cursor: 'pointer' }}>
              Hang Up
            </button>
          </div>
        )}
      </div>

      {/* Right Panels */}
      {rightPanel === 'contact' && (
        <ContactPanel
          onClose={() => setRightPanel(null)}
          onMediaClick={() => setRightPanel('media')}
          onStarredClick={() => setRightPanel('starred')}
        />
      )}
      {rightPanel === 'media' && <MediaPanel onClose={() => setRightPanel('contact')} />}
      {rightPanel === 'starred' && <StarredPanel onClose={() => setRightPanel('contact')} />}
    </div>
  )
}

export default Dashboard