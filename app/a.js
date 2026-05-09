"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import "../styles/battle.css";

import { Player, Enemy } from "../data/character_data";

export default function BattlePage() {

    // =========================
    // CHARACTER SETUP
    // =========================

    const level = 1;

    const [player] = useState(() => new Player(level));
    const [enemy] = useState(() => new Enemy(level));

    // =========================
    // CARD DATA
    // =========================

    const cards = [
        {
            name: "Sword",
            icon: "/cards/1_card.png",
            difficulty: "easy",
            damageBonus: 10,
        },
        {
            name: "Spoon",
            icon: "/cards/2_card.png",
            difficulty: "medium",
            damageBonus: 15,
        },
        {
            name: "Spear",
            icon: "/cards/3_card.png",
            difficulty: "hard",
            damageBonus: 25,
        },
        {
            name: "Wooden Stick",
            icon: "/cards/4_card.png",
            difficulty: "ultra hard",
            damageBonus: 40,
        },
    ];

    // =========================
    // HP STATE
    // =========================

    const [playerHP, setPlayerHP] = useState(player.hp);
    const [enemyHP, setEnemyHP] = useState(enemy.hp);

    // =========================
    // QUIZ STATE
    // =========================

    const [showQuiz, setShowQuiz] = useState(false);

    const [selectedAttack, setSelectedAttack] = useState(null);

    // =========================
    // ANSWER LOGIC
    // =========================

    function handleAnswer(correct) {

        if (correct) {

            setEnemyHP((prev) =>
                Math.max(prev - selectedAttack.damage, 0)
            );

        } else {

            setPlayerHP((prev) =>
                Math.max(prev - 15, 0)
            );
        }

        setShowQuiz(false);
    }

    // =========================
    // WIN / LOSE LOGIC
    // =========================

    useEffect(() => {

        if (enemyHP <= 0) {
            alert("YOU WIN!");
        }

        if (playerHP <= 0) {
            alert("YOU LOSE!");
        }

    }, [enemyHP, playerHP]);

    // =========================
    // PAGE
    // =========================

    return (

        <div className="battle-page">

            {/* ========================= */}
            {/* HUD */}
            {/* ========================= */}

            <div className="hud">

                {/* PLAYER HUD */}

                <div className="hud-player">

                    <h3>{player.name}</h3>

                    <div className="hp-bar">
                        <div
                            className="hp-fill player-hp"
                            style={{ width: `${playerHP}%` }}
                        />
                    </div>

                    <p className="hp-text">{playerHP} HP</p>

                </div>

                {/* VS */}

                <div className="vs">
                    VS
                </div>

                {/* ENEMY HUD */}

                <div className="hud-enemy">

                    <h3>{enemy.name}</h3>

                    <div className="hp-bar">
                        <div
                            className="hp-fill enemy-hp"
                            style={{ width: `${enemyHP}%` }}
                        />
                    </div>

                    <p className="hp-text">{enemyHP} HP</p>

                </div>

            </div>

            {/* ========================= */}
            {/* ARENA */}
            {/* ========================= */}

            <div className="arena">

                {/* PLAYER */}

                <div className="fighter">

                    <Image
                        src="/player.png"
                        alt="Player"
                        width={300}
                        height={300}
                        priority
                    />

                    <p className="fighter-name">
                        {player.name}
                    </p>

                </div>

                {/* ENEMY */}

                <div className="fighter enemy-fighter">

                    <Image
                        src="/billy_nye.png"
                        alt="Enemy"
                        width={300}
                        height={300}
                        priority
                    />

                    <p className="fighter-name">
                        {enemy.name}
                    </p>

                </div>

            </div>

            {/* ========================= */}
            {/* CARDS */}
            {/* ========================= */}

            <div className="cards">

                {cards.map((card, index) => (

                    <div
                        key={index}
                        className="card"
                    >

                        {/* CARD IMAGE */}

                        <Image
                            src={card.icon}
                            alt={card.name}
                            width={120}
                            height={160}
                        />

                        {/* CARD INFO */}

                        <div className="card-info">

                            <h3>{card.name}</h3>

                            <p>
                                Difficulty: {card.difficulty}
                            </p>

                            <p>
                                Damage:
                                {" "}
                                {player.attack_damage + card.damageBonus}
                            </p>

                        </div>

                        {/* ATTACK BUTTON */}

                        <button
                            onClick={() => {

                                setSelectedAttack({
                                    name: card.name,
                                    damage:
                                        player.attack_damage +
                                        card.damageBonus,
                                    difficulty: card.difficulty,
                                });

                                setShowQuiz(true);
                            }}
                        >
                            Attack
                        </button>

                    </div>

                ))}

            </div>

            {/* ========================= */}
            {/* QUIZ POPUP */}
            {/* ========================= */}

            {showQuiz && (

                <div className="quiz-popup">

                    <h2>Physics Question</h2>

                    <p>
                        What is Newton&apos;s Second Law?
                    </p>

                    <div className="answers">

                        <button
                            onClick={() => handleAnswer(true)}
                        >
                            F = ma
                        </button>

                        <button
                            onClick={() => handleAnswer(false)}
                        >
                            E = mc²
                        </button>

                        <button
                            onClick={() => handleAnswer(false)}
                        >
                            V = IR
                        </button>

                        <button
                            onClick={() => handleAnswer(false)}
                        >
                            p = mv
                        </button>

                    </div>

                </div>

            )}

        </div>
    );
}