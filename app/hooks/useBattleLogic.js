"use client";

import { useState, useEffect } from "react";
import { Player, Enemy } from "../data/character_data";

export default function useBattleLogic(level = 1) {

    const [player, setPlayer] = useState(() => new Player(level));
    const [enemy, setEnemy] = useState(() => new Enemy(level));

    const [playerHP, setPlayerHP] = useState(player.hp);
    const [enemyHP, setEnemyHP] = useState(enemy.hp);

    const [isPlayerTurn, setIsPlayerTurn] = useState(true);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        const p = new Player(level);
        const e = new Enemy(level);

        setPlayer(p);
        setEnemy(e);

        setPlayerHP(p.hp);
        setEnemyHP(e.hp);

        setGameOver(false);
        setIsPlayerTurn(true);
    }, [level]);

    const isPlayerDead = playerHP <= 0;
    const isEnemyDead = enemyHP <= 0;

    useEffect(() => {
        if (isPlayerDead || isEnemyDead) {
            setGameOver(true);
        }
    }, [isPlayerDead, isEnemyDead]);

    function answerHandling(correct, damage = player.attack_damage) {

        if (gameOver) return;

        if (correct) {
            setEnemyHP(prev => Math.max(prev - damage, 0));
        } else {
            // using the attributes
            setPlayerHP(prev => Math.max(prev - enemy.attack_damage, 0));
        }

        // flip that shit
        setIsPlayerTurn(prev => !prev);
    }

    return {
        player,
        enemy,
        playerHP,
        enemyHP,
        isPlayerTurn,
        isPlayerDead,
        isEnemyDead,
        gameOver,
        answerHandling
    };
}