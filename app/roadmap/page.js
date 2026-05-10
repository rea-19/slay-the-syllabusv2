"use client";
import { useState } from "react";
import {useRouter} from "next/navigation";

export default function roadmap() {
  const [hovered, setHovered] = useState(null);
  const router = useRouter();

  const btnStyle = (id) => ({
    position: "absolute",
    padding: 0,
    border: "4px solid white",
    borderRadius: "50%",
    width: 170,
    height: 170,
    overflow: "hidden",
    cursor: "pointer",
    opacity: hovered === id ? 0.7 : 1,
    transition: "all 0.2s ease",
    transform: hovered === id ? "scale(1.08)" : "scale(1)",
    background: "transparent",
  });

  return (
    <div style={{ width: "100vw", height: "100vh", background: "black" }}>
      <img
        src="/backgrounds/ROADMAP.png"
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
        
      />
      <button
        style={{ ...btnStyle("bill"), top: "76.5%", left: "24%" }}
        onMouseEnter={() => setHovered("bill")}
        onMouseLeave={() => setHovered(null)}
        onClick={() => router.push("/battle?boss=bill")}
      >
        <img src="/characters/BILL_head.png" style={{width: "120%", height: "120%", objectFit: "cover", transform: "scale(1.2)"}} />
      </button>

      <button
        style={{ ...btnStyle("neil"), top: "56%", left: "46.25%" }}
        onMouseEnter={() => setHovered("neil")}
        onMouseLeave={() => setHovered(null)}
        onClick={() => router.push("/battle?boss=neil")}
      >
        <img src="/characters/Neil_head.png" style={{ width: "120%", height: "120%", objectFit: "cover", transform: "scale(1.2)" }} />
      </button>

      <button
        style={{ ...btnStyle("vsauce"), top: "53%", left: "71.25%" }}
        onMouseEnter={() => setHovered("vsauce")}
        onMouseLeave={() => setHovered(null)}
        onClick={() => router.push("/battle?boss=vsauce")}
      >
        <img src="/characters/Vsauce_head.png" style={{ width: "120%", height: "120%", objectFit: "cover", transform: "scale(1.2)" }} />
      </button>

    </div>
  );
}