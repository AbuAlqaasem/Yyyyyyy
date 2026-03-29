"use client"

export function SentientSphere() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-[#1a1a1a] to-[#050505]">
      <div className="relative w-64 h-64">
        {/* Animated gradient sphere fallback */}
        <div className="absolute inset-0 rounded-full border border-white/10 animate-pulse" />
        <div className="absolute inset-4 rounded-full border border-white/5" />
        <div className="absolute inset-8 rounded-full border border-white/5" />
        
        {/* Center glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-2xl animate-pulse" />
        </div>
      </div>
    </div>
  )
}
