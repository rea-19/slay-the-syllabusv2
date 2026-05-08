// battle page

// battle arena
// HP bars
// player/enemy
// attack cards
// quiz popup

"use client";
import "../../styles/battle.css";

import { useState } from "react";

export default function BattlePage() {

    const [playerHP, setPlayerHP] = useState(100);
    const [enemyHP, setEnemyHP] = useState(100);

    return (
        <div className="battle-page">
            <h1>Slay the Syllabus</h1>

            <div className="arena"></div>
                <div className="player">
                    {/* add the player image!!!!!! */}
                    <img src="" alt="player"></img>
                    <p>Player HP: {playerHP}</p>
                </div>

                <div className="enemy">
                    {/* add the player image!!!!!! */}
                    <img src="" alt="player"></img>
                    <p>Enemy HP: {enemyHP}</p>
                </div>

                <div className="cards">
                    <button>Light Attack</button>
                    <button>Medium Attack</button>
                    <button>Heavy Attack</button>
                    <button>Ultimate Attack</button>
                </div>
        </div>
    )
}