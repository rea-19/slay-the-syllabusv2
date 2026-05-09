"use client";
import { Player } from "../data/character_data";
import { useRouter } from "next/navigation";

export default function Results() {
  const player = new Player(1);
  const router = useRouter();

  return (
    <div style={{ background: "green", width: "100vw", height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <h1 style={{ color: "white" }}>Your ATAR: {player.atar}</h1>
      <div style={{ display: "flex", gap: "50px" }}>
        <button onClick={() => router.push("/")}>RETRY</button>
        <button>EXIT</button>
      </div>
    </div>
  );
}