// battle page

// battle arena
// HP bars
// player/enemy
// attack cards
// quiz popup

"use client";
import { useState, useEffect } from "react";
import "../styles/battle.css";
import { Player, Enemy } from "../data/character_data";


export default function BattlePage() {
    // only create the level 1 characters

    const level = 1;
    const player = new Player(level);
    const enemy = new Enemy(level);

    const [playerHP, setPlayerHP] = useState(player.hp);
    const [enemyHP, setEnemyHP] = useState(enemy.hp);

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
    useEffect(() => {
    if (enemyHP <= 0) {
        alert("YOU WIN");
    }

    if (playerHP <= 0) {
        alert("YOU LOSE");
    }
    }, [enemyHP, playerHP]);

    return (
        <div className="battle-page">
            <h1>Slay the Syllabus</h1>

                {/* arena */}
            <div className="arena"></div>
                <div className="player">
                    {/* add the player image!!!!!! */}
                    {/* <img src="" alt="player"></img> */}
                    <h2>{player.name}</h2>
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
                    <h2>{enemy.name}</h2>
                    <div className="hp-bar">
                        <div
                            className="hp-fill"
                            style={{ width: `${enemyHP}%` }}
                        ></div>
                    </div>
                </div>

                {/* cards */}

                <div className="cards">
                    <button
                        onClick={() => {

                            setSelectedAttack({
                            name: "Light Attack",
                            damage: player.attack_damage + 10, // level of the player + attack damage depending on the card
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
                            damage: player.attack_damage + 20,
                            });

                            setShowQuiz(true);
                        }}
                        >
                        Medium Attack
                    </button>

                    <button
                        onClick={() => {
                            setSelectedAttack({
                            name: "Heavy Attack",
                            damage: player.attack_damage + 30,
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
                            damage: player.attack_damage + 40,
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