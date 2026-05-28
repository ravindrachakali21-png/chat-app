import { Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import ChatList from './components/ChatList'
import EmptyState from './components/EmptyState'
import Profile from './components/Profile'
import Groups from './components/Groups'
import CallLog from './components/CallLog'
import Dashboard from './components/Dashboard'
import Updates from './components/Updates'
import Archive from './components/Archive'
import Settings from './components/Settings'

function App() {
  return (
    <div style={{ display: 'flex', width: '100vw', height: '100vh', background: '#fff', overflow: 'hidden' }}>
      <Sidebar />
      <Routes>
        <Route path="/" element={<><ChatList /><EmptyState /></>} />
        <Route path="/chat/:id" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/calls" element={<CallLog />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  )
}

export default App