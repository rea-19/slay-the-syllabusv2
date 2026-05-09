"use client";

import { useState, useEffect } from "react";
import useBattleLogic from "../hooks/useBattleLogic";
import "../styles/page.css";
import { round_complete } from "../data/q_and_a";

export default function TestPage() {
  const [activeQuest, setActiveQuest] = useState(1);

  // Watch round_complete — polls every 300ms
  useEffect(() => {
    const interval = setInterval(() => {
      if (round_complete && activeQuest <= 3) {
        setActiveQuest(prev => prev + 1);
      }
    }, 300);

    return () => clearInterval(interval); // cleanup on unmount
  }, [activeQuest]);

  function handleQuestClick(questNumber) {
    if (questNumber !== activeQuest) return;
    console.log("Starting quest", questNumber);
  }

  return (
    <div className="page">
      <div className="quest-grid">
        <button
          className={`quest-btn ${activeQuest > 1 ? "complete" : ""} ${activeQuest === 1 ? "available" : ""}`}
          id="quest-1"
          onClick={() => handleQuestClick(1)}
        >
          <img src="quest1.jpg" alt="Quest 1" />
          <span>Bill Nye The Science Guy</span>
        </button>

        <button
          className={`quest-btn ${activeQuest <= 2 ? "locked" : ""} ${activeQuest === 2 ? "available" : ""} ${activeQuest > 2 ? "complete" : ""}`}
          id="quest-2"
          onClick={() => handleQuestClick(2)}
          disabled={activeQuest < 2}
        >
          <img src="quest2.jpg" alt="Quest 2" />
          <span>Neil De Grasse Tyson</span>
        </button>

        <button
          className={`quest-btn ${activeQuest <= 3 ? "locked" : ""} ${activeQuest === 3 ? "available" : ""} ${activeQuest > 3 ? "complete" : ""}`}
          id="quest-3"
          onClick={() => handleQuestClick(3)}
          disabled={activeQuest < 3}
        >
          <img src="quest3.jpg" alt="Quest 3" />
          <span>It's VSauce, Michael!</span>
        </button>
      </div>
    </div>
  );
}