// battle page

// battle arena
// HP bars
// player/enemy
// attack cards
// quiz popup

"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import "../styles/battle.css";
import { Player, Enemy } from "../data/character_data";
import ResultModal from "../components/ResultModal";


export default function BattlePage() {
    // only create the level 1 characters

    const level = 1;
    const [player] = useState(() => new Player(level));
    const [enemy] = useState(() => new Enemy(level));

    const [showResult, setShowResult] = useState(false);
    const [playerWon, setPlayerWon] = useState(false);

    // add the card data to /data/card.js
    const cards = [
    {
        name: "Sword",
        icon: "/cards/card_easy.png",
        difficulty: "easy",
        damageBonus: 10,
    },
    {
        name: "Spoon",
        icon: "/cards/card_medium.png",
        difficulty: "medium",
        damageBonus: 10,
    },
    {
        name: "Spear",
        icon: "/cards/card_hard.png",
        difficulty: "hard",
        damageBonus: 20,
    },
    {
        name: "Wooden Stick",
        icon: "/cards/card_ultrahard.png",
        difficulty: "ultra hard",
        damageBonus: 40,
    },
    ];

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
        setPlayerWon(true);
        setShowResult(true);
    }

    if (playerHP <= 0) {
        setPlayerWon(false);
        setShowResult(true);
    }

    }, [enemyHP, playerHP]);

    return (
        <div className="battle-page">
            <div className="hud">
                {/* player HUD */}
                <div className="hud-player">

                    <div className="hp-bar">
                        <div
                            className="hp-fill player-hp"
                            style={{ width: `${playerHP}%` }}
                        />
                    </div>
                    <h3>{player.name}</h3>

                    <p className="hp-text">{playerHP} HP</p>
                </div>

                <div className="vs">VS</div>

                {/* enemy hud */}
                <div className="hud-enemy">
            
                    <div className="hp-bar">
                        <div
                            className="hp-fill enemy-hp"
                            style={{ width: `${enemyHP}%` }}
                        />
                    </div>
                    <h3>{enemy.name}</h3>

                    <p className="hp-text">{enemyHP} HP</p>

                </div>

            </div>

            {/* arena */}

            <div className="arena">
                <div className="fighter">
                    <Image
                        src="/characters/player.png"
                        alt="Player"
                        width={200}
                        height={300}
                        priority
                    />

                </div>

                {/* ENEMY */}

                <div className="fighter enemy-fighter">

                    <Image
                        src="/characters/bill_nye.png"
                        alt="Enemy"
                        width={200}
                        height={300}
                        priority
                    />


                </div>
            </div>

            {/* cards */}

            <div className="cards">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="card hover:scale-105 transition cursor-pointer"
                        onClick={() => {
                            setSelectedAttack({
                                name: card.name,
                                damage: player.attack_damage + card.damageBonus,
                                difficulty: card.difficulty,
                            });

                            setShowQuiz(true);
                        }}
                    >

                        <Image
                            src={card.icon}
                            alt={card.name}
                            width={350}
                            height={400}
                        />

                    </div>
                ))}

                {/* pop up quiz dynamic */}
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
            <ResultModal
                isOpen={showResult}
                won={playerWon}
                atarScore={92.45}

                onRetry={() => {
                    window.location.reload();
                }}

                onExit={() => {
                    window.location.href = "/";
                }}

                onLevelUp={() => {
                    alert("Next Level Coming Soon");
                }}
            />
        </div>
    )
}