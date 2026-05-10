"use client";
import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import "../styles/battle.css";
import useBattleLogic from "../hooks/useBattleLogic";
import { dict } from "../data/q_and_a";
import ResultModal from "../components/ResultModal";

export default function BattlePage() {
    const searchParams = useSearchParams();
    const boss = searchParams.get("boss");
    
    const getInitialLevel = () => {
        switch (boss) {
            case "bill":
                return 1;

            case "neil":
                return 2;

            case "vsauce":
                return 3;

            default:
                return 1;
        }
    };

const [level, setLevel] = useState(getInitialLevel);

    const [playerAttacking, setPlayerAttacking] = useState(false);
    const [enemyAttacking, setEnemyAttacking] = useState(false);

    const [showVictory, setShowVictory] = useState(false);
    const [hasHandledGameOver, setHasHandledGameOver] = useState(false);

    const [playerHit, setPlayerHit] = useState(false);
    const [enemyHit, setEnemyHit] = useState(false);

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

    const [questionIndexes, setQuestionIndexes] = useState({
        E: 0, M: 0, H: 0, I: 0
    });

    const [showQuiz, setShowQuiz] = useState(false);
    const [selectedAttack, setSelectedAttack] = useState(null);

    const cards = [
        { name: "Sword", icon: "/cards/card_easy.png", damageBonus: 10, difficulty: "E" },
        { name: "Spoon", icon: "/cards/card_medium.png", damageBonus: 20, difficulty: "M" },
        { name: "Spear", icon: "/cards/card_hard.png", damageBonus: 30, difficulty: "H" },
        { name: "Wooden Stick", icon: "/cards/card_ultrahard.png", damageBonus: 50, difficulty: "I" },
    ];

    const backgrounds = {
        1: "/backgrounds/level1.png",
        2: "/backgrounds/level2.png",
        3: "/backgrounds/level3.png",
    };

    const enemySprites = {
        1: "/characters/Bill_knife.png",
        2: "/characters/Neil_tyson.png",
        3: "/characters/v-sauce.png",
    };

    const battleBackground = {
        backgroundImage: `url(${backgrounds[level]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };

    const currentEnemySprite =
        enemySprites[level] ?? "/characters/Bill_knife.png";

    const currDifficulty = selectedAttack?.difficulty;

    const currentQuestion = currDifficulty
        ? questionPools[currDifficulty][questionIndexes[currDifficulty]]
        : null;

    async function handleAnswer(option) {
        const correct = option.correct;

        if (correct) {
            setPlayerAttacking(true);
            setTimeout(() => setEnemyHit(true), 300);
            setTimeout(() => {
                setPlayerAttacking(false);
                setEnemyHit(false);
            }, 1800);
        } else {
            setEnemyAttacking(true);
            setTimeout(() => setPlayerHit(true), 300);
            setTimeout(() => {
                setEnemyAttacking(false);
                setPlayerHit(false);
            }, 1800);
        }

        setShowQuiz(false);

        setTimeout(() => {
            if (!selectedAttack) return;

            answerHandling(correct, selectedAttack.damage);

            setQuestionIndexes(prev => ({
                ...prev,
                [currDifficulty]:
                    (prev[currDifficulty] + 1) %
                    questionPools[currDifficulty].length
            }));

            setSelectedAttack(null);
        }, 2000);
    }

    useEffect(() => {
        if (!gameOver) return;
        if (hasHandledGameOver) return;

        setHasHandledGameOver(true);

        const isWin = enemyHP <= 0;

        setPlayerWon(isWin);

        if (isWin && level === 3) {
            setShowVictory(true);
            setShowResult(false);
        } else {
            setShowResult(true);
        }

    }, [gameOver, enemyHP, level]);
    useEffect(() => {
        setHasHandledGameOver(false);
    }, [level]);

    if (showVictory) {
        return (
            <div className="victory-screen">
                <Image
                    src="/backgrounds/victory_screen.png"
                    alt="Victory"
                    fill
                    priority
                    className="victory-bg"
                />

                <h1 className="victory-title">VICTORY</h1>
            </div>
        );
    }

    const atarScore = Math.max(
        45,
        Math.round((playerHP / player.hp) * 99.95)
    ).toFixed(2);

    

    return (
        <div className="battle-page" style={battleBackground}>


            <div className="hud">
                <div className="hud-player">
                    <div className="hp-bar">
                        <div className="hp-fill player-hp" style={{ width: `${(playerHP / player.hp) * 100}%` }} />
                    </div>
                    <h3>{player.name}</h3>
                    <p className="hp-text">{playerHP} HP</p>
                </div>

                <div className="vs">VS</div>

                <div className="hud-enemy">
                    <div className="hp-bar">
                        <div className="hp-fill enemy-hp" style={{ width: `${(enemyHP / enemy.hp) * 100}%` }} />
                    </div>
                    <h3>{enemy.name}</h3>
                    <p className="hp-text">{enemyHP} HP</p>
                </div>
            </div>


            <div className="arena">
                <div className={`fighter ${playerAttacking ? "player-attack" : ""} ${playerHit ? "player-hit" : ""}`}>
                    <Image
                        src="/characters/Player_sprite.png"
                        alt="Player"
                        width={100}
                        height={200}
                        priority
                    />
                </div>

                <div className={`fighter enemy-fighter ${enemyAttacking ? "enemy-attack" : ""} ${enemyHit ? "enemy-hit" : ""}`}>
                    <Image
                        key={level}
                        src={currentEnemySprite}
                        alt="Enemy"
                        width={200}
                        height={300}
                        priority
                    />
                </div>
            </div>


            <div className="cards">
                {cards.map((card, index) => {
                    const totalDamage = player.attack_damage + card.damageBonus;

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
                                width={200}
                                height={400}
                                className="card-image"
                            />
                        </div>
                    );
                })}
            </div>

            {showQuiz && currentQuestion && (
                <div className="quiz-popup">
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

            <button
                className="skip-victory-btn"
                onClick={() => setShowVictory(true)}
            >
                Skip To Victory
            </button>

            <ResultModal
                isOpen={showResult && !showVictory}
                won={playerWon}
                atarScore={atarScore}
                onRetry={() => window.location.reload()}
                onExit={() => (window.location.href = "/")}
                onLevelUp={() => {
                    if (level === 3) return;

                    setLevel(prev => prev + 1);
                    setShowResult(false);
                }}
            />

        </div>
    );
}