// contains:
// attack flow
// correct/wrong logic
// HP state  

"use client"; 
import { useState } from "react"; 

export default function useBattleLogic() {
    

    // HP states
    const [playerHP, setPlayerHP] = useState(100);
    const [enemyHP, setEnemyHP] = useState(100);

    // Turn states
    const [IsPlayerTurn, setIsPlayerTurn] = useState(true)


    function answerHandling(correct_answer){ 
        if (correct_answer){ 

            setEnemyHP(prev => Math.max(prev - 20, 20))
        } else {
            setPlayerHP(prev => Math.max(prev - 20, 20))
        }

        setIsPlayerTurn (prev => !prev)
    }

    const isPlayerDead = playerHP <= 0 
    const isEnemyDead = enemyHP <= 0 


    return {
        playerHP,
        enemyHP,
        IsPlayerTurn,
        isPlayerDead,
        isEnemyDead,
        answerHandling

    }
}