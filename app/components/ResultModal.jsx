// victory/defeat pop up

// if win show show the next boss button | exit
// if lose show the retry | exit


"use client";

import Image from "next/image";

export default function ResultModal({
    isOpen,
    won,
    atarScore,
    onRetry,
    onExit,
    onLevelUp,
}) {

    if (!isOpen) return null;

    return (
        <div className="result-overlay">

            <div className="result-modal">

                <Image
                    src={
                        won
                            ? "/win_lose_modal/win_modal.png"
                            : "/win_lose_modal/atar_defeat.png"
                    }
                    alt={won ? "Victory" : "Defeat"}
                    width={700}
                    height={500}
                />

                <h1 className="atar-score">
                    ATAR: {atarScore}
                </h1>

                <div className="result-buttons">

                    <button onClick={onExit} className="image-button">
                        <Image
                            src="/buttons/exit_button.png"
                            alt="Exit"
                            width={220}
                            height={80}
                        />
                    </button>


                    {won ? (
                        <button onClick={onLevelUp} className="image-button">
                            <Image
                                src="/buttons/level_up_button.png"
                                alt="Level Up"
                                width={220}
                                height={80}
                            />
                        </button>
                    ) : (
                        <button onClick={onRetry} className="image-button">
                            <Image
                                src="/buttons/retry_button.png"
                                alt="Retry"
                                width={220}
                                height={80}
                            />
                        </button>
                    )}

                </div>
            </div>
        </div>
    );
}

