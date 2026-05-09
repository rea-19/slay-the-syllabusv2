// contains:
// attack flow
// correct/wrong logic
// HP state  

"use client"; 
import {useState, useEffect } from "react"; 
import characters from "../data/character_data"

export default function useBattleLogic() {

    const enemyOrder = ["billNye", "tyson", "vsauce"]
    const playerOrder = ["Flop", "Average", "ATARmaxxer"]

    const [playerKey, setPlayerKey] = useState("Flop")
    const playerType = characters[playerKey]

    const [enemyKey, setEnemyKey] = useState("billNye")
    const enemyType = characters[enemyKey]
   
    // HP states
    const [playerHP, setPlayerHP] = useState(playerType.hp);
    const [enemyHP, setEnemyHP] = useState(enemyType.hp);

    // Turn states
    const [IsPlayerTurn, setIsPlayerTurn] = useState(true)


    useEffect(() => {
        setPlayerHP(playerType.hp);
    }, [playerKey]) 

    useEffect(() => {
        setEnemyHP(enemyType.hp);
    }, [enemyKey]) 


    useEffect(() => {
        setIsPlayerTurn(true);
    },[enemyKey])


    const isPlayerDead = playerHP <= 0 
    const isEnemyDead = enemyHP <= 0

    function answerHandling(correct_answer){ 

        if (!IsPlayerTurn) return;

        if (isPlayerDead || isEnemyDead) return;

        if (correct_answer){ 
            setEnemyHP(prev => Math.max(prev - playerType.attack_damage, 0))
        } else {
            setPlayerHP(prev => Math.max(prev - enemyType.attack_damage, 0))
        }
        setIsPlayerTurn (prev => !prev)
    }

    


    function nextEnemy() {
        const cur_index = enemyOrder.indexOf(enemyKey)
        const next_key = enemyOrder[cur_index + 1]

        if (next_key){
            setEnemyKey(next_key)

            //progress here
        }
    }

    

    function nextPlayer(){ 
        const cur_index = playerOrder.indexOf(playerKey)
        const next_key = playerOrder[cur_index + 1]

        if (next_key){
            setPlayerKey(next_key)
        }
    }

    return {
        playerHP,
        enemyHP,
        IsPlayerTurn,
        isPlayerDead,
        isEnemyDead,
        answerHandling,
        nextEnemy,
        nextPlayer

    }
}