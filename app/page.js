export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white flex flex-col items-center justify-center px-6">

      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black z-0"></div>

      <div className="relative z-10 flex flex-col items-center">

        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          NEURO SPIN
        </h1>

        <p className="text-zinc-400 text-center max-w-md mb-10">
          Cyberpunk NFT Spin Platform for Farcaster Mini Apps
        </p>

        <button className="px-8 py-4 rounded-2xl bg-purple-600 hover:bg-purple-500 transition-all duration-300 text-lg font-semibold shadow-[0_0_30px_rgba(168,85,247,0.5)]">
          PLAY NOW
        </button>

      </div>

    </main>
  );
}
