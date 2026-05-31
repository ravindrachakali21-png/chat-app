import { useNavigate } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import myProfile from '../assets/my-profile.jpg'
import EmptyState from './EmptyState'

const Profile = () => {
  const navigate = useNavigate()

  return (
    <>
      <style>{`
        .profile-wrapper { display: flex; flex: 1; height: 100vh; }

        /* Left panel */
        .profile-left {
          width: 360px;
          min-width: 360px;
          height: 100vh;
          background: #fff;
          border-right: 1px solid #e5e7eb;
          padding: 28px 24px;
        }

        /* Right empty state */
        .profile-right { display: flex; flex: 1; }

        /* ── Mobile (< 768px) ── */
        @media (max-width: 767px) {
          .profile-left {
            width: 100%;
            min-width: unset;
            height: 100vh;
            border-right: none;
            padding: 20px 16px;
            overflow-y: auto;
          }
          .profile-right { display: none; }
        }
      `}</style>

      <div className="profile-wrapper">
        {/* Left Panel */}
        <div className="profile-left">

          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
            <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}>
              <ChevronLeft size={22} color="#111827" />
            </button>
            <h1 style={{ fontSize: '24px', fontWeight: 700, color: '#111827' }}>Profile</h1>
          </div>

          {/* Avatar */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
            <div style={{ width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden', border: '3px solid #e5e7eb' }}>
              <img src={myProfile} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>

          {/* Name Field */}
          <div style={{ position: 'relative', marginBottom: '8px' }}>
            <label style={{
              position: 'absolute', top: '-9px', left: '12px',
              background: 'white', padding: '0 4px',
              fontSize: '12px', color: '#2563eb', fontWeight: 500
            }}>Name</label>
            <input
              defaultValue="Shreyansh shah"
              style={{
                width: '100%', padding: '14px 16px',
                border: '1.5px solid #2563eb', borderRadius: '8px',
                fontSize: '15px', color: '#111827', outline: 'none',
                fontFamily: 'inherit', boxSizing: 'border-box'
              }}
            />
          </div>

          {/* Helper text */}
          <p style={{ fontSize: '12.5px', color: '#6b7280', marginBottom: '20px', paddingLeft: '4px' }}>
            This name is visible to your contacts
          </p>

          {/* About Field */}
          <div style={{ position: 'relative', marginBottom: '28px' }}>
            <label style={{
              position: 'absolute', top: '-9px', left: '12px',
              background: 'white', padding: '0 4px',
              fontSize: '12px', color: '#9ca3af', fontWeight: 500
            }}>About</label>
            <textarea
              defaultValue="Hey there, I am learning from coding monk"
              rows={4}
              style={{
                width: '100%', padding: '14px 16px',
                border: '1.5px solid #d1d5db', borderRadius: '8px',
                fontSize: '14px', color: '#374151', outline: 'none',
                resize: 'none', fontFamily: 'inherit', lineHeight: '1.5',
                boxSizing: 'border-box'
              }}
            />
          </div>

          {/* Save Button */}
          <button style={{
            width: '100%', padding: '13px',
            border: '1.5px solid #2563eb', borderRadius: '10px',
            background: 'white', color: '#2563eb',
            fontSize: '15px', fontWeight: 600, cursor: 'pointer'
          }}>
            Save
          </button>

        </div>

        {/* Right Empty State */}
        <div className="profile-right">
          <EmptyState />
        </div>
      </div>
    </>
  )
}

export default Profile