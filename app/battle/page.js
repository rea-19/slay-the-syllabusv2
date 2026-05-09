// battle page

// battle arena
// HP bars
// player/enemy
// attack cards
// quiz popup

"use client";
import "../styles/battle.css";

import { useState } from "react";

export default function BattlePage() {

    const [playerHP, setPlayerHP] = useState(100);
    const [enemyHP, setEnemyHP] = useState(100);

    const [showQuiz, setShowQuiz] = useState(false);
    const [selectedAttack, setSelectedAttack] = useState(null);

    // answer logic
    function handleAnswer(correct) {
        if (correct) {
            setEnemyHP(enemyHP - selectedAttack.damage);
        } else {
            setPlayerHP(playerHP - 15);
        }

        setShowQuiz(false);
    }


    // add win/lose logic
    if (enemyHP <= 0) {
        alert("YOU WIN");
    }

    if (playerHP <= 0) {
        alert("YOU LOSE");
    }

    return (
        <div className="battle-page">
            <h1>Slay the Syllabus</h1>

                {/* arena */}
            <div className="arena"></div>
                <div className="player">
                    {/* add the player image!!!!!! */}
                    {/* <img src="" alt="player"></img> */}
                    <div className="hp-bar">
                        <div
                            className="hp-fill"
                            style={{ width: `${playerHP}%` }}
                        ></div>
                    </div>
                </div>

                {/* enemy */}

                <div className="enemy">
                    {/* add the player image!!!!!! */}
                    {/* <img src="" alt="player"></img> */}
                    <div className="hp-bar">
                        <div
                            className="hp-fill"
                            style={{ width: `${playerHP}%` }}
                        ></div>
                    </div>
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

                {/* pop up quiz interface */}
                {showQuiz && (
                    <div className="quiz-popup">
                        <h2>Physics Question</h2>

                        <p>What is Newton's Second Law?</p>

                        <div className="answers">
                        <button onClick={() => handleAnswer(true)}>
                            F = ma
                        </button>

                        <button onClick={() => handleAnswer(false)}>
                            E = mc²
                        </button>

                        <button onClick={() => handleAnswer(false)}>
                            V = IR
                        </button>

                        <button onClick={() => handleAnswer(false)}>
                            p = mv
                        </button>
                        </div>
                    </div>
                )}
        </div>
    )
}