"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "./styles/page.css"; 

export default function Home() {
  const router = useRouter();
  const [showInstructions, setShowInstructions] = useState(false);

  return (
    <div style={{ width: "100vw", height: "100vh", background: "black", position: "relative" }}>
      <img
        src="/backgrounds/another_intro_page.png"
        style={{ width: "100%", height: "100%", objectFit: "contain", pointerEvents: "none" }}
      />

     

      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
      }}>

      <img src="/buttons/play_button.png" onClick={() => router.push("/battle")} className="home-btn" />
      <img src="/buttons/instructions_button.png" onClick={() => setShowInstructions(true)} className="home-btn" />

        {/* <button onClick={() => router.push("/battle")}>Play Game</button>
        <button onClick={() => setShowInstructions(true)}>Instructions</button> */}
      
      </div>

      {showInstructions && (
        <img
          src="/backgrounds/instructionsV2.png"
          onClick={() => setShowInstructions(false)}
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
        />
      )}
    </div>
  );
}