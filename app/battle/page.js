// battle page

// battle arena
// HP bars
// player/enemy
// attack cards
// quiz popup

"use client";
import "../../styles/battle.css";

import { useState } from "react";

export default function BattlePage() {

    const [playerHP, setPlayerHP] = useState(100);
    const [enemyHP, setEnemyHP] = useState(100);

    const [showQuiz, setShowQuiz] = useState(false);
    const [selectedAttack, setSelectedAttack] = useState(null);

    return (
        <div className="battle-page">
            <h1>Slay the Syllabus</h1>

                {/* arena */}
            <div className="arena"></div>
                <div className="player">
                    {/* add the player image!!!!!! */}
                    <img src="" alt="player"></img>
                    <p>Player HP: {playerHP}</p>
                </div>

                {/* enemy */}

                <div className="enemy">
                    {/* add the player image!!!!!! */}
                    <img src="" alt="player"></img>
                    <p>Enemy HP: {enemyHP}</p>
                </div>

                {/* cards */}

                <div className="cards">
                    <button
                        onClick={() => {
                            setSelectedAttack({
                            name: "Light Attack",
                            damage: 10,
                            });

                            setShowQuiz(true);
                        }}
                        >
                        Light Attack
                    </button>

                    <button
                        onClick={() => {
                            setSelectedAttack({
                            name: "Medium Attack",
                            damage: 10,
                            });

                            setShowQuiz(true);
                        }}
                        >
                        Medium Attack
                    </button>

                    <button
                        onClick={() => {
                            setSelectedAttack({
                            name: "Light Attack",
                            damage: 10,
                            });

                            setShowQuiz(true);
                        }}
                        >
                        Heavy Attack
                    </button>
                    
                    <button
                        onClick={() => {
                            setSelectedAttack({
                            name: "Ultimate Attack",
                            damage: 10,
                            });

                            setShowQuiz(true);
                        }}
                        >
                        Ultimate Attack
                    </button>
                </div>
        </div>
    )
}