import React, { useEffect, useRef } from "react";
import Hls from "hls.js";

const VideoPlayer = ({ streamUrl }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    let hls;

    if (Hls.isSupported()) {
      hls = new Hls();
      hls.loadSource(streamUrl);
      hls.attachMedia(video);

      hls.on(Hls.Events.ERROR, function (_, data) {
        console.error("HLS.js error:", data);
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = streamUrl;
    }

    return () => {
      if (hls) hls.destroy();
    };
  }, [streamUrl]);

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-700">
      {/* LIVE badge */}
      <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md z-10">
        🔴 LIVE
      </div>

      {/* Video */}
      <video
        ref={videoRef}
        className="w-full h-auto bg-black"
        controls
        autoPlay
        muted
        playsInline
        poster="https://dummyimage.com/1280x720/1a1a1a/ffffff&text=Stream+belum+dimulai"
      />
    </div>
  );
};

export default VideoPlayer;



// import React, { useEffect, useRef } from "react";
// import Hls from "hls.js";

// const VideoPlayer = ({ streamUrl }) => {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const video = videoRef.current;
//     let hls;

//     if (Hls.isSupported()) {
//       hls = new Hls();
//       hls.loadSource(streamUrl);
//       hls.attachMedia(video);

//       hls.on(Hls.Events.ERROR, function (_, data) {
//         console.error("HLS.js error:", data);
//       });
//     } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
//       // fallback Safari
//       video.src = streamUrl;
//     }

//     return () => {
//       if (hls) hls.destroy();
//     };
//   }, [streamUrl]);

//   return (
//     <div className="w-full">
//       <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-700">
//         {/* LIVE badge overlay */}
//         <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md z-10">
//           🔴 LIVE
//         </div>

//         {/* Video */}
//         <video
//           ref={videoRef}
//           className="w-full h-auto bg-black"
//           controls
//           autoPlay
//           muted
//           playsInline
//           poster="https://dummyimage.com/1280x720/1a1a1a/ffffff&text=Stream+belum+dimulai"
//         />
//       </div>
//     </div>
//   );
// };

// export default VideoPlayer;

