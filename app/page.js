"use client";
import {useRouter} from "next/navigation";
import {useState} from "react";


export default function Home() {
   const router = useRouter();
   const [showInstructions, setShowInstructions] = useState(false);
  return (
    <div style={{ background: "blue", width: "100vw", display: "flex", height: "100vh", flexDirection: "column",
  alignItems: "center", justifyContent: "center" }}>
      <button onClick={() => router.push("/battle")}>Play Game</button>
      <button onClick={() => setShowInstructions(true)}>Instructions</button>
      
      {showInstructions && (<img src="/backgrounds/instrucions.png" onClick={() => setShowInstructions(false)} />)}
    </div>
  );
}