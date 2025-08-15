import React from "react";
import VideoPlayer from "./VideoPlayer";
import LiveChat from "./LiveChat";

function App() {
  const streamUrl = import.meta.env.VITE_STREAM_URL;


  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col md:flex-row gap-4 p-4">
      {/* Video Section */}
      <div className="flex-1">
        <h1 className="text-center text-2xl font-bold mb-4">
          🚀 My Streaming App
        </h1>
        <VideoPlayer streamUrl={streamUrl} />
      </div>

      {/* Chat Section */}
      <LiveChat />
    </div>
  );
}

export default App;



// import React from "react";
// import VideoPlayer from "./VideoPlayer";

// function App() {
//   // ganti dengan link HLS (m3u8) dari Livepeer/Mux/OBS server
//   const streamUrl = "https://livepeercdn.studio/hls/ad575m7d4dx6ppuo/index.m3u8";

//   return (
//     <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
//       <h1 className="text-3xl font-bold mb-6">🚀 My Streaming App</h1>
//       <div className="w-full max-w-3xl">
//         <VideoPlayer streamUrl={streamUrl} />
//       </div>
//     </div>
//   );
// }

// export default App;
