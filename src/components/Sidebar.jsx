import { MessageCircle, Users, Phone, Settings } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'
import myAvatar from '../assets/my-avatar.jpg'

const Sidebar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/' || location.pathname.startsWith('/chat')
    return location.pathname.startsWith(path)
  }

  const iconBtn = (path, Icon) => (
    <div onClick={() => navigate(path)} style={{
      width: '46px', height: '46px', borderRadius: '14px',
      background: isActive(path) ? '#2563eb' : 'transparent',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      cursor: 'pointer', marginBottom: '8px',
      boxShadow: isActive(path) ? '0 4px 12px rgba(37,99,235,0.35)' : 'none',
      transition: 'all 0.2s'
    }}>
      <Icon size={20} color={isActive(path) ? 'white' : '#9ca3af'} />
    </div>
  )

  return (
    <div style={{ width: '72px', minWidth: '72px', height: '100vh', background: '#F4F6FB', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px 0', borderRight: '1px solid #e5e7eb' }}>

      {/* Logo */}
      <div onClick={() => navigate('/')} style={{ width: '46px', height: '46px', borderRadius: '14px', background: 'linear-gradient(135deg, #facc15, #4ade80, #3b82f6)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '28px', boxShadow: '0 4px 12px rgba(59,130,246,0.3)', cursor: 'pointer' }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M13 3L4 14h8l-1 7 9-11h-8l1-10z" fill="white" />
        </svg>
      </div>

      {iconBtn('/', MessageCircle)}
      {iconBtn('/groups', Users)}
      {iconBtn('/calls', Phone)}

      <div style={{ width: '32px', height: '1px', background: '#d1d5db', margin: '8px 0' }} />

      {iconBtn('/settings', Settings)}

      <div style={{ flex: 1 }} />

      {/* Toggle */}
      <div style={{ width: '46px', height: '26px', background: '#2563eb', borderRadius: '999px', position: 'relative', marginBottom: '16px', cursor: 'pointer' }}>
        <div style={{ position: 'absolute', right: '3px', top: '3px', width: '20px', height: '20px', background: 'white', borderRadius: '50%', boxShadow: '0 1px 4px rgba(0,0,0,0.2)' }} />
      </div>

      {/* Avatar */}
      <div onClick={() => navigate('/profile')} style={{ width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', border: '2px solid white', boxShadow: '0 2px 8px rgba(0,0,0,0.15)', cursor: 'pointer' }}>
        <img src={myAvatar} alt="avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
    </div>
  )
}

export default Sidebar