"use client";

import useBattleLogic from "../hooks/useBattleLogic";

export default function TestPage() {
  const {
    playerHP,
    enemyHP,
    isPlayerDead,
    isEnemyDead,
    answerHandling,
    nextEnemy
  } = useBattleLogic();

  return (
    <div style={{ padding: 20 }}>
      <h1>Battle Test</h1>

      <p>Player HP: {playerHP}</p>
      <p>Enemy HP: {enemyHP}</p>

      <button onClick={() => answerHandling(true)}>
        Correct Answer
      </button>

      <button onClick={() => answerHandling(false)}>
        Wrong Answer
      </button>

      <button onClick={nextEnemy}>
        Next Boss
      </button>

      <h3>
        {isPlayerDead && "💀 Player Dead"}
        {isEnemyDead && "🏆 Enemy Dead"}
      </h3>
    </div>
  );
}
