import { getAllSessions } from '../services/metrics'

export default function DoctorDashboard() {
  const sessions = getAllSessions()
  return (
    <div className="min-h-screen relative">
      {/* Background SVG */}
      <div className="fixed inset-0 z-0">
        <img 
          src="/src/assets/background of doctor portal.svg" 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 p-6 max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-6 text-gray-900" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>Doctor Dashboard</h1>
      <p className="text-sm text-gray-800 mb-6 font-semibold drop-shadow-md bg-white/70 backdrop-blur-sm p-3 rounded-lg inline-block">Exploratory demo metrics (not medical diagnostics).</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sessions.length === 0 && (
          <div className="p-4 border rounded bg-white/90 backdrop-blur-sm font-semibold">No sessions yet. Play a game to generate metrics.</div>
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
