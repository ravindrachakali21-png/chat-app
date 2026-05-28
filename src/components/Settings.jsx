import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Bell, Lock, Key, Palette, Image, FileText, Keyboard, HelpCircle, Plus, X, Search } from 'lucide-react'
import EmptyState from './EmptyState'
import myProfile from '../assets/my-profilee.jpg'
import dinesh from '../assets/dinesh.jpg'
import dogHat from '../assets/dog-hat.jpg'
import cuteTurtle from '../assets/cute-turtle.jpg'
import coolSpirit from '../assets/cool-spirit.jpg'
import strangeCat from '../assets/strange-cat.jpg'

// ── Reusable Radio Option ────────────────────────────────────────────────────
const RadioOption = ({ label, checked, onClick }) => (
  <div onClick={onClick} style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '16px 0', borderBottom: '1px solid #f3f4f6', cursor: 'pointer' }}>
    <div style={{ width: '20px', height: '20px', borderRadius: '50%', border: checked ? '6px solid #2563eb' : '2px solid #d1d5db', flexShrink: 0, transition: 'all 0.2s' }} />
    <span style={{ fontSize: '15px', color: '#111827' }}>{label}</span>
  </div>
)

// ── Reusable Checkbox Option ─────────────────────────────────────────────────
const CheckOption = ({ label, desc, checked, onClick }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', padding: '16px 0', borderBottom: '1px solid #f3f4f6', cursor: 'pointer' }} onClick={onClick}>
    <div>
      <p style={{ fontSize: '15px', color: '#111827', fontWeight: 500 }}>{label}</p>
      {desc && <p style={{ fontSize: '12px', color: '#9ca3af', marginTop: '3px', maxWidth: '260px' }}>{desc}</p>}
    </div>
    <div style={{ width: '20px', height: '20px', border: checked ? 'none' : '2px solid #d1d5db', borderRadius: '4px', background: checked ? '#2563eb' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
      {checked && <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
    </div>
  </div>
)

// ── Sub-screen wrapper ───────────────────────────────────────────────────────
const SubScreen = ({ title, subtitle, onBack, children }) => (
  <div style={{ width: '360px', minWidth: '360px', height: '100vh', background: '#fff', display: 'flex', flexDirection: 'column', borderRight: '1px solid #e5e7eb' }}>
    <div style={{ padding: '28px 20px 20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: subtitle ? '8px' : '24px' }}>
        <button onClick={onBack} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
          <ChevronLeft size={22} color="#111827" />
        </button>
        <h1 style={{ fontSize: '22px', fontWeight: 700, color: '#111827' }}>{title}</h1>
      </div>
      {subtitle && <p style={{ fontSize: '13px', color: '#2563eb', marginBottom: '20px', lineHeight: '1.5' }}>{subtitle}</p>}
    </div>
    <div style={{ flex: 1, overflowY: 'auto', padding: '0 20px 20px', scrollbarWidth: 'none' }}>
      {children}
    </div>
  </div>
)

// ── Notifications ────────────────────────────────────────────────────────────
const Notifications = ({ onBack }) => {
  const [checks, setChecks] = useState({ notifications: true, previews: true, reactions: false, ringtone: false, sounds: true })
  const toggle = key => setChecks(p => ({ ...p, [key]: !p[key] }))
  return (
    <SubScreen title="Notifications" onBack={onBack}>
      <CheckOption label="Notifications" desc="Show notifications for new messages" checked={checks.notifications} onClick={() => toggle('notifications')} />
      <CheckOption label="Show Previews" checked={checks.previews} onClick={() => toggle('previews')} />
      <CheckOption label="Show Reaction Notifications" checked={checks.reactions} onClick={() => toggle('reactions')} />
      <CheckOption label="Incoming call ringtone" checked={checks.ringtone} onClick={() => toggle('ringtone')} />
      <CheckOption label="Sounds" desc="Play sounds for incoming messages" checked={checks.sounds} onClick={() => toggle('sounds')} />
    </SubScreen>
  )
}

// ── Privacy ──────────────────────────────────────────────────────────────────
const Privacy = ({ onBack, onNavigate }) => {
  const [readReceipts, setReadReceipts] = useState(true)
  const items = [
    { key: 'lastSeen', label: 'Last Seen', value: 'Everyone' },
    { key: 'profilePhoto', label: 'Profile Photo', value: 'Everyone' },
    { key: 'about', label: 'About', value: 'Everyone' },
    { key: 'groups', label: 'Groups', value: 'Everyone' },
    { key: 'blocked', label: 'Blocked contacts', value: '9' },
  ]
  return (
    <SubScreen title="Privacy" onBack={onBack}>
      {items.map(item => (
        <div key={item.key} onClick={() => onNavigate(item.key)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 0', borderBottom: '1px solid #f3f4f6', cursor: 'pointer' }}>
          <div>
            <p style={{ fontSize: '15px', color: '#111827', fontWeight: 500 }}>{item.label}</p>
            <p style={{ fontSize: '12px', color: '#9ca3af', marginTop: '2px' }}>{item.value}</p>
          </div>
          <ChevronRight size={18} color="#9ca3af" />
        </div>
      ))}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', padding: '16px 0', borderBottom: '1px solid #f3f4f6' }}>
        <div>
          <p style={{ fontSize: '15px', color: '#111827', fontWeight: 500, marginBottom: '4px' }}>Read receipts</p>
          <p style={{ fontSize: '12px', color: '#9ca3af', maxWidth: '260px', lineHeight: '1.5' }}>If turned off, you won't send or receive read receipts. Read receipts are always sent for group chats.</p>
        </div>
        <div onClick={() => setReadReceipts(!readReceipts)} style={{ width: '20px', height: '20px', border: readReceipts ? 'none' : '2px solid #d1d5db', borderRadius: '4px', background: readReceipts ? '#2563eb' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, cursor: 'pointer', marginTop: '2px' }}>
          {readReceipts && <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
        </div>
      </div>
    </SubScreen>
  )
}

// ── Last Seen ────────────────────────────────────────────────────────────────
const LastSeen = ({ onBack }) => {
  const [selected, setSelected] = useState('Everyone')
  return (
    <SubScreen title="Last Seen" subtitle="If you don't share your Last Seen, you won't be able to see other people's Last Seen" onBack={onBack}>
      {['Everyone', 'My Contacts', 'Nobody'].map(opt => (
        <RadioOption key={opt} label={opt} checked={selected === opt} onClick={() => setSelected(opt)} />
      ))}
    </SubScreen>
  )
}

// ── Profile Photo ────────────────────────────────────────────────────────────
const ProfilePhoto = ({ onBack }) => {
  const [selected, setSelected] = useState('Everyone')
  return (
    <SubScreen title="Profile Photo" subtitle="Who can see my profile photo" onBack={onBack}>
      {['Everyone', 'My Contacts', 'Nobody'].map(opt => (
        <RadioOption key={opt} label={opt} checked={selected === opt} onClick={() => setSelected(opt)} />
      ))}
    </SubScreen>
  )
}

// ── About ────────────────────────────────────────────────────────────────────
const About = ({ onBack }) => {
  const [selected, setSelected] = useState('Everyone')
  return (
    <SubScreen title="About" subtitle="Who can see my about" onBack={onBack}>
      {['Everyone', 'My Contacts', 'Nobody'].map(opt => (
        <RadioOption key={opt} label={opt} checked={selected === opt} onClick={() => setSelected(opt)} />
      ))}
    </SubScreen>
  )
}

// ── Groups Privacy ───────────────────────────────────────────────────────────
const GroupsPrivacy = ({ onBack }) => {
  const [selected, setSelected] = useState('Everyone')
  return (
    <SubScreen title="Groups" subtitle="Who can add me to groups" onBack={onBack}>
      {['Everyone', 'My Contacts', 'Nobody'].map(opt => (
        <RadioOption key={opt} label={opt} checked={selected === opt} onClick={() => setSelected(opt)} />
      ))}
    </SubScreen>
  )
}

// ── Blocked Contacts ─────────────────────────────────────────────────────────
const BlockedContacts = ({ onBack }) => {
  const [showModal, setShowModal] = useState(false)
  const [blocked, setBlocked] = useState([
    { id: 1, name: 'Dinesh', about: 'Enjoy life to the fullest', avatar: dinesh },
    { id: 2, name: 'Dog Hat', about: 'You can call me at random..', avatar: dogHat },
    { id: 3, name: 'Cute Turtle', about: 'Almost there', avatar: cuteTurtle },
    { id: 4, name: 'Cool spirit', about: 'Fiddling with ideas', avatar: coolSpirit },
    { id: 5, name: 'strange cat', about: 'Omw to discover myself', avatar: strangeCat },
  ])

  const unblock = (id) => setBlocked(prev => prev.filter(b => b.id !== id))

  return (
    <>
      <SubScreen title="Blocked Contacts" onBack={onBack}>
        <div onClick={() => setShowModal(true)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', cursor: 'pointer' }}>
          <span style={{ fontSize: '14px', color: '#2563eb', fontWeight: 600 }}>Block New Contact</span>
          <Plus size={18} color="#2563eb" />
        </div>
        <div style={{ height: '1px', background: '#f3f4f6', marginBottom: '12px' }} />
        {blocked.map(contact => (
          <div key={contact.id} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 14px', background: '#fff', borderRadius: '16px', marginBottom: '8px', boxShadow: '0 1px 4px rgba(0,0,0,0.06)', border: '1px solid #f1f3f8' }}>
            <img src={contact.avatar} alt={contact.name} style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontWeight: 600, fontSize: '14.5px', color: '#111827' }}>{contact.name}</p>
              <p style={{ fontSize: '13px', color: '#9ca3af', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{contact.about}</p>
            </div>
            <button onClick={() => unblock(contact.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', flexShrink: 0 }}>
              <X size={16} color="#9ca3af" />
            </button>
          </div>
        ))}
      </SubScreen>

      {/* Block New Contact Modal */}
      {showModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50 }}>
          <div style={{ background: 'white', borderRadius: '20px', padding: '28px', width: '420px', boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', paddingBottom: '16px', borderBottom: '1px solid #f3f4f6' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#111827' }}>Block New Contact</h2>
              <button onClick={() => setShowModal(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                <X size={20} color="#111827" />
              </button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#F4F6FB', borderRadius: '14px', padding: '11px 16px', marginBottom: '20px' }}>
              <Search size={16} color="#9ca3af" />
              <input type="text" placeholder="Search" style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', fontSize: '14px' }} />
            </div>
            {[
              { id: 1, name: 'Dinesh', about: 'Enjoy life to the fullest', avatar: dinesh },
              { id: 2, name: 'Dog Hat', about: 'You can call me at random..', avatar: dogHat },
              { id: 3, name: 'Cute Turtle', about: 'Almost there', avatar: cuteTurtle },
              { id: 4, name: 'Cool spirit', about: 'Fiddling with ideas', avatar: coolSpirit },
              { id: 5, name: 'strange cat', about: 'Omw to discover myself', avatar: strangeCat },
            ].map((c, i, arr) => (
              <div key={c.id}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '12px 4px', cursor: 'pointer' }}>
                  <img src={c.avatar} alt={c.name} style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
                  <div>
                    <p style={{ fontWeight: 600, fontSize: '15px', color: '#111827' }}>{c.name}</p>
                    <p style={{ fontSize: '13px', color: '#9ca3af' }}>{c.about}</p>
                  </div>
                </div>
                {i < arr.length - 1 && <div style={{ height: '1px', background: '#f3f4f6' }} />}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

// ── Keyboard Shortcuts Modal ─────────────────────────────────────────────────
const KeyboardModal = ({ onClose }) => {
  const shortcuts = [
    [{ label: 'Mark as unread', keys: ['Cmd', 'Shift', 'U'] }, { label: 'Mute', keys: ['Cmd', 'Shift', 'M'] }],
    [{ label: 'Archive chat', keys: ['Cmd', 'Shift', 'E'] }, { label: 'Delete chat', keys: ['Cmd', 'Shift', 'D'] }],
    [{ label: 'Pin chat', keys: ['Cmd', 'Shift', 'P'] }, { label: 'Search', keys: ['Cmd', 'F'] }],
    [{ label: 'Search Chat', keys: ['Cmd', 'Shift', 'F'] }, { label: 'New Chat', keys: ['Cmd', 'N'] }],
    [{ label: 'Next Chat', keys: ['Ctrl', 'Tab'] }, { label: 'Previous Chat', keys: ['Ctrl', 'Shift', 'Tab'] }],
    [{ label: 'New Group', keys: ['Cmd', 'Shift', 'N'] }, { label: 'Profile & About', keys: ['Cmd', 'P'] }],
    [{ label: 'Increase speed of voice message', keys: ['Shift', '.'] }, { label: 'Decrease speed of voice message', keys: ['Shift', ','] }],
    [{ label: 'Settings', keys: ['Shift', ','] }, { label: 'Emoji Panel', keys: ['Cmd', 'E'] }],
    [{ label: 'Settings', keys: ['Cmd', 'G'] }, { label: 'Sticker Panel', keys: ['Cmd', 'S'] }],
  ]

  const Key = ({ k }) => (
    <span style={{ padding: '3px 8px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '12px', color: '#374151', background: '#f9fafb' }}>{k}</span>
  )

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50 }}>
      <div style={{ background: 'white', borderRadius: '20px', padding: '32px', width: '780px', boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#111827', marginBottom: '24px' }}>Keyboard Shortcuts</h2>
        {shortcuts.map((row, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '12px' }}>
            {row.map((item, j) => (
              <div key={j} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '4px 0' }}>
                <span style={{ fontSize: '13px', color: '#374151' }}>{item.label}</span>
                <div style={{ display: 'flex', gap: '4px' }}>
                  {item.keys.map((k, ki) => <Key key={ki} k={k} />)}
                </div>
              </div>
            ))}
          </div>
        ))}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
          <button onClick={onClose} style={{ background: '#2563eb', color: 'white', border: 'none', borderRadius: '10px', padding: '10px 28px', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>OK</button>
        </div>
      </div>
    </div>
  )
}

// ── Theme Modal ──────────────────────────────────────────────────────────────
const ThemeModal = ({ onClose }) => {
  const [selected, setSelected] = useState('Light')
  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50 }}>
      <div style={{ background: 'white', borderRadius: '20px', padding: '32px', width: '460px', boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#111827', marginBottom: '24px' }}>Choose Theme</h2>
        {['Light', 'Dark', 'System Default'].map(opt => (
          <RadioOption key={opt} label={opt} checked={selected === opt} onClick={() => setSelected(opt)} />
        ))}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '24px' }}>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#2563eb', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>Cancel</button>
          <button onClick={onClose} style={{ background: '#2563eb', color: 'white', border: 'none', borderRadius: '10px', padding: '10px 28px', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>Apply</button>
        </div>
      </div>
    </div>
  )
}

// ── Main Settings ────────────────────────────────────────────────────────────
const Settings = () => {
  const navigate = useNavigate()
  const [screen, setScreen] = useState('main')
  const [showKeyboard, setShowKeyboard] = useState(false)
  const [showTheme, setShowTheme] = useState(false)

  const menuItems = [
    { key: 'notifications', icon: Bell, label: 'Notifications' },
    { key: 'privacy', icon: Lock, label: 'Privacy' },
    { key: 'security', icon: Key, label: 'Security' },
    { key: 'theme', icon: Palette, label: 'Theme' },
    { key: 'wallpaper', icon: Image, label: 'Chat Wallpaper' },
    { key: 'account', icon: FileText, label: 'Request Account Info' },
    { key: 'keyboard', icon: Keyboard, label: 'Keyboard shortcuts' },
    { key: 'help', icon: HelpCircle, label: 'Help' },
  ]

  const handleMenu = (key) => {
    if (key === 'keyboard') { setShowKeyboard(true); return }
    if (key === 'theme') { setShowTheme(true); return }
    setScreen(key)
  }

  const renderLeft = () => {
    if (screen === 'notifications') return <Notifications onBack={() => setScreen('main')} />
    if (screen === 'privacy') return <Privacy onBack={() => setScreen('main')} onNavigate={(s) => setScreen(s)} />
    if (screen === 'lastSeen') return <LastSeen onBack={() => setScreen('privacy')} />
    if (screen === 'profilePhoto') return <ProfilePhoto onBack={() => setScreen('privacy')} />
    if (screen === 'about') return <About onBack={() => setScreen('privacy')} />
    if (screen === 'groups') return <GroupsPrivacy onBack={() => setScreen('privacy')} />
    if (screen === 'blocked') return <BlockedContacts onBack={() => setScreen('privacy')} />

    return (
      <div style={{ width: '360px', minWidth: '360px', height: '100vh', background: '#fff', display: 'flex', flexDirection: 'column', borderRight: '1px solid #e5e7eb' }}>
        {/* Header */}
        <div style={{ padding: '28px 20px 20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
              <ChevronLeft size={22} color="#111827" />
            </button>
            <h1 style={{ fontSize: '22px', fontWeight: 700, color: '#111827' }}>Settings</h1>
          </div>

          {/* Profile */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '8px' }}>
            <img src={myProfile} alt="Profile" style={{ width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover' }} />
            <div>
              <p style={{ fontWeight: 700, fontSize: '16px', color: '#111827' }}>Shreyansh shah</p>
              <p style={{ fontSize: '13px', color: '#9ca3af' }}>Exploring</p>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '0 20px 20px', scrollbarWidth: 'none' }}>
          {menuItems.map(({ key, icon: Icon, label }) => (
            <div key={key}>
              <div onClick={() => handleMenu(key)} style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '16px 0', cursor: 'pointer' }}>
                <Icon size={20} color="#6b7280" />
                <span style={{ fontSize: '15px', color: '#111827' }}>{label}</span>
              </div>
              <div style={{ height: '1px', background: '#f3f4f6' }} />
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', flex: 1, height: '100vh' }}>
      {renderLeft()}
      <EmptyState />
      {showKeyboard && <KeyboardModal onClose={() => setShowKeyboard(false)} />}
      {showTheme && <ThemeModal onClose={() => setShowTheme(false)} />}
    </div>
  )
}

export default Settings