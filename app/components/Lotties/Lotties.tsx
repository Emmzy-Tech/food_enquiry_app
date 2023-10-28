import React, { useRef } from "react";

export default function Lottie(source: string) {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <div className="container">
      <main className="m-2">
        <lottie-player
          id="firstLottie"
          ref={ref}
          autoplay
          controls
          loop
          mode="normal"
          src={source}
          style={{ width: "300px", height: "300px" }}
        ></lottie-player>
      </main>
    </div>
  );
}