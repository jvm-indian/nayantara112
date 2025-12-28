import { getAllSessions } from '../services/metrics'

export default function AdminDashboard() {
  const sessions = getAllSessions()
  const totalSessions = sessions.length
  const avgFollow = totalSessions ? Math.round(sessions.reduce((a, s) => a + s.followAccuracy, 0) / totalSessions) : 0
  const totalBlinks = sessions.reduce((a, s) => a + s.blinkCount, 0)
  const focusSeconds = sessions.reduce((a, s) => a + s.focusHoldSeconds, 0)

  return (
    <div className="min-h-screen relative">
      {/* Background SVG */}
      <div className="fixed inset-0 z-0">
        <img 
          src="/src/assets/background of admin portal.svg" 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 p-6 max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-6 text-gray-900" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>Admin Dashboard</h1>
      <p className="text-sm text-gray-800 mb-6 font-semibold drop-shadow-md bg-white/70 backdrop-blur-sm p-3 rounded-lg inline-block">Usage metrics for the demo (aggregated).</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="p-4 border rounded bg-white/90 backdrop-blur-sm shadow-lg">
          <div className="text-xs text-gray-500">Total Sessions</div>
          <div className="text-2xl font-semibold">{totalSessions}</div>
        </div>
        <div className="p-4 border rounded bg-white/90 backdrop-blur-sm shadow-lg">
          <div className="text-xs text-gray-500">Avg Follow Accuracy</div>
          <div className="text-2xl font-semibold">{avgFollow}%</div>
        </div>
        <div className="p-4 border rounded bg-white/90 backdrop-blur-sm shadow-lg">
          <div className="text-xs text-gray-500">Total Focus (sec)</div>
          <div className="text-2xl font-semibold">{focusSeconds}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {sessions.length === 0 && (
          <div className="p-4 border rounded bg-white/90 backdrop-blur-sm font-semibold">No sessions yet.</div>
        )}
        {sessions.map(s => (
          <div key={s.id} className="p-4 border rounded bg-white/90 backdrop-blur-sm shadow-lg">
            <div className="font-semibold">Session {s.id.slice(0,6)}</div>
            <div className="text-xs text-gray-500">Started: {new Date(s.startedAt).toLocaleString()}</div>
            {s.endedAt && (
              <div className="text-xs text-gray-500">Ended: {new Date(s.endedAt).toLocaleString()}</div>
            )}
            <div className="mt-2">
              <div>Follow Accuracy: {s.followAccuracy}%</div>
              <div>Blinks: {s.blinkCount}</div>
              <div>Focus Hold (sec): {s.focusHoldSeconds}</div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}
