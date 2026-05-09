"use client";
import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import "../styles/battle.css";
import { Player, Enemy } from "../data/character_data";
import useBattleLogic from "../hooks/useBattleLogic";
import { dict } from "../data/q_and_a";

export default function BattlePage() {

    const [level, setLevel] = useState(1);

    const difficulties = ["E", "M", "H", "I"];

    const {
        player,
        enemy,
        playerHP,
        enemyHP,
        gameOver,
        answerHandling
    } = useBattleLogic(level);


    const questionPools = useMemo(() =>
        Object.fromEntries(difficulties.map(d => [d, dict[level][d]])),
    [level]);

    const [questionIndexes, setQuestionIndexes] = useState({ E: 0, M: 0, H: 0, I: 0 });
    const [showQuiz, setShowQuiz] = useState(false);
    const [selectedAttack, setSelectedAttack] = useState(null);

    const cards = [
        { name: "Sword",       icon: "/cards/card_easy.png",      damageBonus: 10, difficulty: "E" },
        { name: "Spoon",       icon: "/cards/card_medium.png",    damageBonus: 20, difficulty: "M" },
        { name: "Spear",       icon: "/cards/card_hard.png",      damageBonus: 30, difficulty: "H" },
        { name: "Wooden Stick",icon: "/cards/card_ultrahard.png", damageBonus: 50, difficulty: "I" },
    ];

    const currDifficulty = selectedAttack?.difficulty;
    const currentQuestion = currDifficulty
        ? questionPools[currDifficulty][questionIndexes[currDifficulty]]
        : null;

    function handleAnswer(option) {
        const correct = option.correct;
        answerHandling(correct, selectedAttack.damage);

        setQuestionIndexes(prev => ({
            ...prev,
            [currDifficulty]: (prev[currDifficulty] + 1) % questionPools[currDifficulty].length
        }));

        setShowQuiz(false);
        setSelectedAttack(null);
    }

    if (gameOver) {
        return (
            <div className="battle-page">
                <h1>{enemyHP <= 0 ? "GOOD JOB BUDDY YOU WON :)" : "HAH YOU LOST JACKASS"}</h1>
                {/* TEMP: next boss for testing */}
                {level < 3 && (
                    <button onClick={() => setLevel(prev => prev + 1)}>
                        DEV: Next Boss
                    </button>
                )}
            </div>
        );
    }

    return (
        <div className="battle-page">
            <div className="hud">
                <div className="hud-player">
                    <div className="hp-bar">
                        <div className="hp-fill player-hp" style={{ width: `${playerHP}%` }} />
                    </div>
                    <h3>{player.name}</h3>
                    <p className="hp-text">{playerHP} HP</p>
                </div>

                <div className="vs">VS</div>

                <div className="hud-enemy">
                    <div className="hp-bar">
                        <div className="hp-fill enemy-hp" style={{ width: `${enemyHP}%` }} />
                    </div>
                    <h3>{enemy.name}</h3>
                    <p className="hp-text">{enemyHP} HP</p>
                </div>
            </div>

            <div className="arena">
                <div className="fighter">
                    <Image src="/characters/player.png" alt="Player" width={200} height={300} priority />
                </div>
                <div className="fighter enemy-fighter">
                    <Image src="/characters/bill_nye.png" alt="Enemy" width={200} height={300} priority />
                </div>
            </div>

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
                        <Image src={card.icon} alt={card.name} width={350} height={400} />
                    </div>
                ))}
            </div>

            {showQuiz && currentQuestion && (
                <div className="quiz-popup">
                    <p>{currDifficulty}</p>
                    <h2>{currentQuestion.q}</h2>
                    <div className="answers">
   
                        {currentQuestion.a.map((opt, i) => (
                            <button key={i} onClick={() => handleAnswer(opt)}>
                                {opt.text}
                            </button>
                        ))}
                    </div>
                </div>
            )}

        </div>
    );
}