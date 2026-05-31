import { MessageCircle, Users, Phone, Settings } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

const MobileNav = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const theme = useTheme()

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/' || location.pathname.startsWith('/chat')
    return location.pathname.startsWith(path)
  }

  const tabs = [
    { path: '/', icon: MessageCircle, label: 'Chats' },
    { path: '/groups', icon: Users, label: 'Groups' },
    { path: '/calls', icon: Phone, label: 'Calls' },
    { path: '/settings', icon: Settings, label: 'Settings' },
  ]

  return (
    <>
      {/* ── Mobile-only bottom nav (hidden on desktop) ── */}
      <style>{`
        .mobile-nav-bar { display: flex; }
        @media (min-width: 768px) {
          .mobile-nav-bar { display: none !important; }
        }
      `}</style>

      <div
        className="mobile-nav-bar"
        style={{
          width: '100%',
          height: '64px',
          background: theme.headerBg,
          borderTop: `1px solid ${theme.border}`,
          alignItems: 'center',
          justifyContent: 'space-around',
          flexShrink: 0,
          transition: 'background 0.3s',
        }}
      >
        {tabs.map(({ path, icon: Icon, label }) => (
          <button
            key={path}
            onClick={() => navigate(path)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '3px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px 20px',
              color: isActive(path) ? '#2563eb' : theme.textSecondary,
            }}
          >
            <Icon size={22} color={isActive(path) ? '#2563eb' : theme.textSecondary} />
            <span
              style={{
                fontSize: '11px',
                fontWeight: isActive(path) ? 600 : 400,
                color: isActive(path) ? '#2563eb' : theme.textSecondary,
              }}
            >
              {label}
            </span>
          </button>
        ))}
      </div>
    </>
  )
}

export default MobileNav