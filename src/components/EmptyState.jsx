import chatIllustration from '../assets/chat-illustration.svg'

const EmptyState = () => {
  return (
    <div className="flex-1 min-w-0 h-screen bg-white flex flex-col items-center justify-center">
      <img
        src={chatIllustration}
        alt="Select a conversation"
        className="w-[260px] h-[260px] object-contain mb-8"
      />
      <p className="text-[15px] font-semibold text-gray-800">
        Select a conversation or start a{' '}
        <button className="text-blue-600 hover:underline font-semibold">new one</button>
      </p>
    </div>
  )
}

export default EmptyState