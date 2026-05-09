"use client";
import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import "../styles/battle.css";
import { Player, Enemy } from "../data/character_data";
import useBattleLogic from "../hooks/useBattleLogic";
import { dict } from "../data/q_and_a";
import ResultModal from "../components/ResultModal";

export default function BattlePage() {

    // const [timeRemaining, setTimeRemaining] = useState(30);
    // const [timesUp, setTimesUp] = useState(false);

    // function countdownTimer() {
    //     timeRemaining -= 1;
    //     if (timeRemaining <= 0) {
    //         setTimesUp(true);
    //         return;
    //     }
    // }

    // This is the function (put in a for loop)
    // setTimeout(countdownTimer, 1000);

    const [level, setLevel] = useState(1);

    const [showResult, setShowResult] = useState(false);
    const [playerWon, setPlayerWon] = useState(false);

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

    useEffect(() => {
        if (gameOver) {

            if (enemyHP <= 0) {
                setPlayerWon(true);
            } else {
                setPlayerWon(false);
            }

            setShowResult(true);
        }
    }, [gameOver, enemyHP]);

    const atarScore = Math.max(
        45,
        Math.round((playerHP / player.hp) * 99.95)
    ).toFixed(2);
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
                    <Image src="/characters/Player_sprite.png" alt="Player" width={100} height={200} priority />
                </div>
                <div className="fighter enemy-fighter">
                    <Image src="/characters/Bill_knife.png" alt="Enemy" width={200} height={300} priority />
                </div>
            </div>

            <div className="cards">
                {cards.map((card, index) => {

                    const totalDamage =
                        player.attack_damage + card.damageBonus;

                    return (
                        <div
                            key={index}
                            className="card"
                            onClick={() => {
                                setSelectedAttack({
                                    name: card.name,
                                    damage: totalDamage,
                                    difficulty: card.difficulty,
                                });

                                setShowQuiz(true);
                            }}
                        >
                            <div className="card-damage">
                                +{totalDamage} DMG
                            </div>

                            <Image
                                src={card.icon}
                                alt={card.name}
                                width={350}
                                height={400}
                                className="card-image"
                            />

                        </div>
                    );
                })}
            </div>

            {showQuiz && currentQuestion && (
                <div className="quiz-popup">
                    {/* <p>{currDifficulty}</p> */}
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
            <ResultModal
                isOpen={showResult}
                won={playerWon}
                atarScore={atarScore}

                onRetry={() => {
                    window.location.reload();
                }}

                onExit={() => {
                    window.location.href = "/";
                }}

                onLevelUp={() => {
                    setLevel(prev => prev + 1);
                    setShowResult(false);
                }}
            />
        </div>

    );
}