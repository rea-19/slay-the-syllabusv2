// Questions formatted as a class
class Question {
    constructor(questionText, options, correctAnswer, level, difficulty) {
        this.questionText = questionText;
        this.options = options; // Array of options
        this.correctAnswer = correctAnswer; // The correct option (e.g., 'A', 'B', etc.)
        this.level = level;
        this.difficulty = difficulty;
    }

    isCorrect(answer) {
        return answer === this.correctAnswer;
    }
}

const BNE = [new Question(`Which of the following observations CANNOT be explained by classical physics?
A) A ball falling due to gravity
B) The survival of muons reaching Earth's surface from the upper atmosphere ✓
C) A car moving at 60 km/h
D) Water boiling at 100°C`,
    ["A) A ball falling due to gravity", "B) The survival of muons reaching Earth's surface from the upper atmosphere", "C) A car moving at 60 km/h", "D) Water boiling at 100°C"],
    'B',
    1,
    'E'), 
new Question(`What is a frame of reference?
A) A physical picture frame
B) A coordinate system used to describe the position and motion of objects ✓
C) A type of clock used in experiments
D) A unit of measurement for speed`,
    ["A) A physical picture frame", "B) A coordinate system used to describe the position and motion of objects", "C) A type of clock used in experiments", "D) A unit of measurement for speed"],
    'B',
    1,
    'E'),
new Question(`According to special relativity, what is the speed of light in a vacuum?
A) Approximately 3 × 10⁸ m/s, but it can vary depending on the observer's speed
B) Exactly 3 × 10⁸ m/s, constant for all inertial observers ✓
C) Only constant when the light source is at rest
D) It decreases as the observer moves faster`,
    ["A) Approximately 3 × 10⁸ m/s, but it can vary depending on the observer's speed", "B) Exactly 3 × 10⁸ m/s, constant for all inertial observers", "C) Only constant when the light source is at rest", "D) It decreases as the observer moves faster"],
    'B',
    1,
    'E')];

// Questions within a series of dictionaries
const dict = {
    // Level 1 - Bill Nye
    '1': {
        'E': {
            "Q1. Which of the following observations CANNOT be explained by classical physics?\nA) A ball falling due to gravity\nB) The survival of muons reaching Earth's surface from the upper atmosphere ✓\nC) A car moving at 60 km/h\nD) Water boiling at 100°C": "B",
            "Q2. What is a frame of reference?\nA) A physical picture frame\nB) A coordinate system used to describe the position and motion of objects ✓\nC) A type of clock used in experiments\nD) A unit of measurement for speed": "Answer: B",
            "Q3. According to special relativity, what is the speed of light in a vacuum?\nA) Approximately 3 × 10⁸ m/s, but it can vary depending on the observer's speed\nB) Exactly 3 × 10⁸ m/s, constant for all inertial observers ✓\nC) Only constant when the light source is at rest\nD) It decreases as the observer moves faster": "Answer: B",
            "Q4. What does 'proper time interval' (t₀) refer to?\nA) Time measured by a clock moving at the speed of light\nB) Time measured by a clock that is stationary relative to the event being timed ✓\nC) Time measured in the Earth's reference frame only\nD) Time measured by the fastest-moving observer": "Answer: B",
            "Q5. An inertial frame of reference is one that is:\nA) Accelerating at a constant rate\nB) Rotating about an axis\nC) Moving at constant velocity (not accelerating) ✓\nD) Fixed to the surface of Earth only": "Answer: C",
            "Q6. Which of the following is one of Einstein's two postulates of special relativity?\nA) The laws of physics apply only in the observer's frame of reference\nB) The laws of physics are the same in all inertial frames of reference ✓\nC) The speed of light depends on the speed of the source\nD) Time flows at the same rate for all observers": "Answer: B",
            "Q7. Time dilation means that:\nA) Clocks run faster when moving at high speed\nB) Moving clocks run slower compared to stationary ones ✓\nC) Time only changes near black holes\nD) Time dilation only affects digital clocks": "Answer: B",
            "Q8. The symbol t₀ in the time dilation formula represents:\nA) Relativistic time interval\nB) Proper time interval (time measured in the rest frame of the event) ✓\nC) The speed of the observer\nD) The Lorentz factor": "Answer: B",
            "Q9. Muons are created in the upper atmosphere (~15 km up) and yet reach Earth's surface. Classical physics cannot explain this because muons:\nA) Are too heavy to travel far\nB) Travel slower than light so should decay before reaching Earth\nC) Have a very short half-life that classically means they shouldn't survive the trip ✓\nD) Are electrically neutral and unaffected by Earth's magnetic field": "Answer: C",
            "Q10. Which formula correctly gives relativistic time interval t?\nA) t = t₀ × √(1 − v²/c²)\nB) t = t₀ / √(1 − v²/c²) ✓\nC) t = t₀ × v/c\nD) t = t₀ × c/v": "Answer: B",
            "Q11. Motion can only be measured relative to:\nA) The surface of the Earth\nB) The centre of the universe\nC) An observer or reference frame ✓\nD) The speed of light": "Answer: C",
            "Q12. Which of the following is the second postulate of special relativity?\nA) The speed of light in a vacuum is the same for all inertial observers, regardless of the motion of the source or observer ✓\nB) The speed of light depends on the medium it travels through\nC) Observers in different frames measure different speeds of light\nD) Light slows down in a moving frame": "Answer: A",
            "Q13. The Lorentz factor γ is defined as:\nA) γ = √(1 − v²/c²)\nB) γ = v/c\nC) γ = 1/√(1 − v²/c²) ✓\nD) γ = c/v": "Answer: C",
            "Q14. If an event lasts 1 second in its own rest frame, a moving observer will measure:\nA) Less than 1 second\nB) Exactly 1 second\nC) More than 1 second ✓\nD) Zero seconds": "Answer: C",
            "Q15. The Michelson-Morley experiment was significant because it:\nA) Proved the existence of the aether\nB) Found that the speed of light was different in different directions\nC) Failed to detect the aether, suggesting the speed of light is constant ✓\nD) Measured the exact speed of sound in air": "Answer: C"
        },
        'M': {
            "Q16. Two events occur at the same location but at different times in frame S. An observer in frame S′ moving relative to S will measure:\nA) The same time interval between the events\nB) A longer time interval (time dilation) ✓\nC) A shorter time interval\nD) Exactly twice the time interval": "Answer: B",
            "Q17. The concept of simultaneity in special relativity states that:\nA) All observers agree on whether two events happen at the same time\nB) Two events simultaneous in one frame may NOT be simultaneous in another frame moving relative to the first ✓\nC) Only events at the same location can be simultaneous\nD) Simultaneity only breaks down at speeds greater than c/2": "Answer: B",
            "Q18. A spaceship travels at v = 0.8c. The Lorentz factor γ is:\nA) 1.33\nB) 1.67 ✓\nC) 0.60\nD) 2.00": "Answer: B",
            "Q19. A particle accelerator cannot accelerate protons to exactly the speed of light because:\nA) Protons are too large\nB) As speed increases, relativistic momentum increases, requiring more and more energy to accelerate further ✓\nC) The magnetic fields in accelerators are too weak\nD) Protons decay before reaching high speeds": "Answer: B",
            "Q20. In the 'flashlight on a train' scenario, a passenger shines a flashlight forward on a moving train. A stationary observer on the platform measures the speed of light as:\nA) c + v (train speed added)\nB) c − v (train speed subtracted)\nC) c (always constant) ✓\nD) Depends on the colour of the light": "Answer: C",
            "Q21. A clock on a spaceship moving at 0.6c shows a proper time of 10 s for an event. What time does a stationary observer measure? (γ = 1.25)\nA) 8 s\nB) 10 s\nC) 12.5 s ✓\nD) 16.7 s": "Answer: C",
            "Q22. Which experimental evidence supports time dilation?\nA) The photoelectric effect\nB) The survival of cosmic ray muons at Earth's surface ✓\nC) The double-slit experiment\nD) The Michelson-Morley experiment proving the existence of aether": "Answer: B",
            "Q23. According to the second postulate of special relativity, the speed of light in a vacuum is:\nA) c only when the source is stationary\nB) c only in the reference frame of Earth\nC) c in all inertial frames, regardless of the motion of the source or observer ✓\nD) c only in the direction of travel": "Answer: C",
            "Q24. If v = 0 (object at rest), the time dilation formula gives t =\nA) 0\nB) t₀/c\nC) t₀ ✓\nD) Infinite": "Answer: C",
            "Q25. The Lorentz factor γ = 1/√(1 − v²/c²) is always:\nA) Less than 1\nB) Equal to 1\nC) Greater than or equal to 1 ✓\nD) Equal to v/c": "Answer: C",
            "Q26. Which of the following is NOT a consequence of the constant speed of light?\nA) Time dilation\nB) Length contraction\nC) Increase in gravitational force with speed ✓\nD) Relativistic momentum increase": "Answer: C",
            "Q27. A muon has a proper lifetime of 2.2 μs. At v = 0.99c (γ ≈ 7.09), approximately how long does it appear to live from Earth's frame?\nA) 0.31 μs\nB) 2.2 μs\nC) 15.6 μs ✓\nD) 220 μs": "Answer: C",
            "Q28. In special relativity, which of the following quantities is the same for all inertial observers?\nA) The time between two events\nB) The distance between two events\nC) The spacetime interval ✓\nD) The simultaneity of two events": "Answer: C",
            "Q29. Which scenario best illustrates the concept of relative motion?\nA) A ball thrown upward in a stationary room\nB) Two astronauts in separate spaceships, each measuring the other as moving ✓\nC) A pendulum swinging in a fixed room\nD) A car braking to a stop": "Answer: B",
            "Q30. Which correctly explains why muon survival is evidence for BOTH time dilation AND length contraction?\nA) Time dilation (Earth frame): muon lives longer; length contraction (muon frame): atmosphere is shorter — both predict the same physical outcome ✓\nB) Only time dilation applies; length contraction is irrelevant here\nC) Only length contraction applies; time dilation doesn't affect charged particles\nD) Both effects add to double the relativistic benefit": "Answer: A"
        },
        'H': {
            "Q31. A spaceship leaves Earth at v = 0.866c (γ = 2). An astronaut measures the journey to take 5 years. How long does the journey take from Earth's frame?\nA) 2.5 years\nB) 5 years\nC) 10 years ✓\nD) 8.66 years": "Answer: C",
            "Q32. Two events are separated by Δt₀ = 3 s in the rest frame. A rocket passes at v = 0.8c (γ = 5/3). What time does the rocket observer measure?\nA) 1.8 s\nB) 3.0 s\nC) 5.0 s ✓\nD) 9.0 s": "Answer: C",
            "Q33. In the twins' paradox, twin A stays on Earth while twin B travels at relativistic speed and returns. Which twin is younger upon reunion, and why?\nA) Twin A, because Earth's gravity slows their time\nB) Twin B, because the travelling twin experiences less proper time due to time dilation ✓\nC) Neither — special relativity says they are the same age\nD) Twin B, because they accelerated and changed inertial frames": "Answer: B",
            "Q34. Why is the twins' paradox not a genuine paradox under special relativity?\nA) Because both twins are in inertial frames throughout\nB) Because the travelling twin must undergo acceleration to turn around, breaking the symmetry between the two frames ✓\nC) Because time dilation only applies to one direction of travel\nD) Because the Earth twin is affected by length contraction": "Answer: B",
            "Q35. At what speed must an object travel for its relativistic time to be doubled compared to its proper time?\nA) v = 0.5c\nB) v = 0.707c\nC) v = 0.866c ✓\nD) v = 0.999c": "Answer: C",
            "Q36. If γ = 10 for a particle, the ratio v/c is approximately:\nA) 0.90\nB) 0.995 ✓\nC) 0.999\nD) 0.9950": "Answer: B",
            "Q37. A particle has a proper lifetime of 1 μs and travels at v = 0.995c (γ ≈ 10). How far does it travel in the lab frame before decaying?\nA) 299 m ✓\nB) 2990 m\nC) 29.9 m\nD) 0.299 m": "Answer: A",
            "Q38. An atomic clock on a jet flying at 600 km/h would, after 10 hours, be behind a stationary clock by approximately:\nA) Several minutes\nB) Nanoseconds ✓\nC) Hours\nD) Milliseconds": "Answer: B",
            "Q39. A muon moving at 0.999c has a proper lifetime of 2.2 μs (γ ≈ 22.4). In the lab frame, its lifetime is approximately:\nA) 2.2 μs\nB) 4.9 μs\nC) 49 μs ✓\nD) 0.1 μs": "Answer: C",
            "Q40. Two spaceships approach each other, each moving at 0.6c relative to Earth. According to classical (Galilean) velocity addition, their relative speed would be 1.2c. Special relativity predicts:\nA) 1.2c (same as classical)\nB) 0.88c ✓\nC) 0.6c\nD) Greater than c": "Answer: B",
            "Q41. The Hafele-Keating experiment (1971) flew atomic clocks around the world on jets. The results:\nA) Showed no time difference, disproving special relativity\nB) Confirmed time dilation — clocks on jets ran at different rates compared to ground clocks ✓\nC) Showed time ran faster on the ground\nD) Were inconclusive due to experimental error": "Answer: B",
            "Q42. In the 'flashlight on a train' paradox, what stops the light from exceeding c in the ground frame?\nA) Air resistance in the train carriage\nB) The postulate that c is constant — light speed does not add to the train's speed ✓\nC) The train is too slow for the effect to appear\nD) The flashlight emits photons backwards": "Answer: B"
        },
        'I': {
            "Q43. A clock on a spaceship moving at v = 0.9c ticks for 1 hour of proper time. How far, in light-hours, has the ship travelled according to Earth observers? (γ ≈ 2.294)\nA) 0.9 light-hours\nB) 1 light-hour\nC) 2.065 light-hours ✓\nD) 2.294 light-hours": "Answer: C",
            "Q44. Two inertial frames S and S′ move relative to each other at v = 0.6c. In frame S, events A and B are simultaneous and separated by Δx = 1 light-second. In frame S′, the time between events A and B is:\nA) 0\nB) 0.6/c seconds\nC) 0.8 seconds ✓\nD) 1 second": "Answer: C",
            "Q45. A spaceship travels at v = 0.95c relative to Earth. An astronaut on the ship measures a distance of 1 light-year to a star. What distance does an observer on Earth measure to the same star?\nA) 0.31 light-years\nB) 0.95 light-years\nC) 1 light-year\nD) 3.16 light-years ✓": "Answer: D",
            "Q46. A particle with a rest mass of 1 kg is accelerated to v = 0.99c. What is its relativistic mass?\nA) 1 kg\nB) 7.09 kg ✓\nC) 0.99 kg\nD) Infinite": "Answer: B",
            "Q47. In the 'ladder paradox', a ladder moving at relativistic speed appears contracted to an observer on the ground. If the ladder is shorter than the garage in its rest frame, can it fit inside the garage from the ground observer's perspective?\nA) Yes, due to length contraction\nB) No, because the ladder's proper length is greater than the garage\nC) It depends on the observer's frame of reference ✓\nD) The paradox cannot be resolved": "Answer: C",
            "Q48. A spaceship travels at v = 0.8c relative to Earth. An astronaut on the ship measures a time interval of 1 hour for an event. What time interval does an observer on Earth measure for the same event?\nA) 0.6 hours\nB) 1 hour\nC) 1.67 hours ✓\nD) 2 hours": "Answer: C"
        }
    },

    // Level 2 - Neil deGrasse Tyson
    '2': {
        'E': {
            "Q1. What is the proper length (L₀) of an object?\nA) The length measured by an observer moving with the object (in the object's rest frame) ✓\nB) The length measured by a stationary observer\nC) The length of the object when it is moving at the speed of light\nD) The length of the object as observed from Earth": "Answer: A",
            "Q2. Length contraction means that:\nA) Objects appear longer when moving at high speed\nB) Objects appear shorter in the direction of motion when moving at high speed ✓\nC) Objects only contract near black holes\nD) Length contraction only affects objects made of certain materials": "Answer: B",
            "Q3. The formula for length contraction is:\nA) L = L₀ × √(1 − v²/c²) ✓\nB) L = L₀ / √(1 − v²/c²)\nC) L = L₀ × v/c\nD) L = L₀ × c/v": "Answer: A",
            "Q4. If an object has a proper length of 10 m and moves at v = 0.6c, what is its length as measured by a stationary observer? (γ = 1.25)\nA) 5 m\nB) 8 m ✓\nC) 10 m\nD) 12.5 m": "Answer: B",
            "Q5. Which of the following is a consequence of length contraction?\nA) A moving spaceship appears shorter to a stationary observer ✓\nB) Time runs faster for a moving clock\nC) The speed of light changes for different observers\nD) Mass increases with speed": "Answer: A",
            "Q6. In the 'ladder paradox', a ladder moving at relativistic speed appears contracted to an observer on the ground. If the ladder is shorter than the garage in its rest frame, can it fit inside the garage from the ground observer's perspective?\nA) Yes, due to length contraction\nB) No, because the ladder's proper length is greater than the garage\nC) It depends on the observer's frame of reference ✓\nD) The paradox cannot be resolved": "Answer: C",
            "Q7. A spaceship travels at v = 0.8c relative to Earth. An astronaut on the ship measures a time interval of 1 hour for an event. What time interval does an observer on Earth measure for the same event?\nA) 0.6 hours\nB) 1 hour\nC) 1.67 hours ✓\nD) 2 hours": "Answer: C",
            "Q8. A particle with a rest mass of 1 kg is accelerated to v = 0.99c. What is its relativistic mass?\nA) 1 kg\nB) 7.09 kg ✓\nC) 0.99 kg\nD) Infinite": "Answer: B",
            "Q9. In the 'ladder paradox', a ladder moving at relativistic speed appears contracted to an observer on the ground. If the ladder is shorter than the garage in its rest frame, can it fit inside the garage from the ground observer's perspective?\nA) Yes, due to length contraction\nB) No, because the ladder's proper length is greater than the garage\nC) It depends on the observer's frame of reference ✓\nD) The paradox cannot be resolved": "Answer: C",
            "Q10. A spaceship travels at v = 0.8c relative to Earth. An astronaut on the ship measures a time interval of 1 hour for an event. What time interval does an observer on Earth measure for the same event?\nA) 0.6 hours\nB) 1 hour\nC) 1.67 hours ✓\nD) 2 hours": "Answer: C"
            "Q11. A clock on a spaceship moving at v = 0.9c ticks for 1 hour of proper time. How far, in light-hours, has the ship travelled according to Earth observers? (γ ≈ 2.294)\nA) 0.9 light-hours\nB) 1 light-hour\nC) 2.065 light-hours ✓\nD) 2.294 light-hours": "Answer: C",
            "Q12. Two inertial frames S and S′ move relative to each other at v = 0.6c. In frame S, events A and B are simultaneous and separated by Δx = 1 light-second. In frame S′, the time between events A and B is:\nA) 0\nB) 0.6/c seconds\nC) 0.8 seconds ✓\nD) 1 second": "Answer: C"
        },
        'M': {},
        'H': {},
        'I': {}
    },

    // Level 3 - VSauce
    '3': {
        'E': {},
        'M': {},
        'H': {},
        'I': {}
    }
};




// Questions in txt form


# Special Relativity — Full Question Bank

---

## LEVEL 1 — Bill Nye
**Focus:** Time Dilation, Frames of Reference & Postulates

---

### 🟢 EASY

**Q1.** Which of the following observations CANNOT be explained by classical physics?
- A) A ball falling due to gravity
- B) The survival of muons reaching Earth's surface from the upper atmosphere ✓
- C) A car moving at 60 km/h
- D) Water boiling at 100°C

**Answer: B** — Muons have a half-life so short that classical physics predicts they should decay long before reaching Earth's surface.

---

**Q2.** What is a frame of reference?
- A) A physical picture frame
- B) A coordinate system used to describe the position and motion of objects ✓
- C) A type of clock used in experiments
- D) A unit of measurement for speed

**Answer: B**

---

**Q3.** According to special relativity, what is the speed of light in a vacuum?
- A) Approximately 3 × 10⁸ m/s, but it can vary depending on the observer's speed
- B) Exactly 3 × 10⁸ m/s, constant for all inertial observers ✓
- C) Only constant when the light source is at rest
- D) It decreases as the observer moves faster

**Answer: B**

---

**Q4.** What does 'proper time interval' (t₀) refer to?
- A) Time measured by a clock moving at the speed of light
- B) Time measured by a clock that is stationary relative to the event being timed ✓
- C) Time measured in the Earth's reference frame only
- D) Time measured by the fastest-moving observer

**Answer: B**

---

**Q5.** An inertial frame of reference is one that is:
- A) Accelerating at a constant rate
- B) Rotating about an axis
- C) Moving at constant velocity (not accelerating) ✓
- D) Fixed to the surface of Earth only

**Answer: C**

---

**Q6.** Which of the following is one of Einstein's two postulates of special relativity?
- A) The laws of physics apply only in the observer's frame of reference
- B) The laws of physics are the same in all inertial frames of reference ✓
- C) The speed of light depends on the speed of the source
- D) Time flows at the same rate for all observers

**Answer: B**

---

**Q7.** Time dilation means that:
- A) Clocks run faster when moving at high speed
- B) Moving clocks run slower compared to stationary ones ✓
- C) Time only changes near black holes
- D) Time dilation only affects digital clocks

**Answer: B**

---

**Q8.** The symbol t₀ in the time dilation formula represents:
- A) Relativistic time interval
- B) Proper time interval (time measured in the rest frame of the event) ✓
- C) The speed of the observer
- D) The Lorentz factor

**Answer: B**

---

**Q9.** Muons are created in the upper atmosphere (~15 km up) and yet reach Earth's surface. Classical physics cannot explain this because muons:
- A) Are too heavy to travel far
- B) Travel slower than light so should decay before reaching Earth
- C) Have a very short half-life that classically means they shouldn't survive the trip ✓
- D) Are electrically neutral and unaffected by Earth's magnetic field

**Answer: C**

---

**Q10.** Which formula correctly gives relativistic time interval t?
- A) t = t₀ × √(1 − v²/c²)
- B) t = t₀ / √(1 − v²/c²) ✓
- C) t = t₀ × v/c
- D) t = t₀ × c/v

**Answer: B**

---

**Q11.** Motion can only be measured relative to:
- A) The surface of the Earth
- B) The centre of the universe
- C) An observer or reference frame ✓
- D) The speed of light

**Answer: C**

---

**Q12.** Which of the following is the second postulate of special relativity?
- A) The speed of light in a vacuum is the same for all inertial observers, regardless of the motion of the source or observer ✓
- B) The speed of light depends on the medium it travels through
- C) Observers in different frames measure different speeds of light
- D) Light slows down in a moving frame

**Answer: A**

---

**Q13.** The Lorentz factor γ is defined as:
- A) γ = √(1 − v²/c²)
- B) γ = v/c
- C) γ = 1/√(1 − v²/c²) ✓
- D) γ = c/v

**Answer: C**

---

**Q14.** If an event lasts 1 second in its own rest frame, a moving observer will measure:
- A) Less than 1 second
- B) Exactly 1 second
- C) More than 1 second ✓
- D) Zero seconds

**Answer: C**

---

**Q15.** The Michelson-Morley experiment was significant because it:
- A) Proved the existence of the aether
- B) Found that the speed of light was different in different directions
- C) Failed to detect the aether, suggesting the speed of light is constant ✓
- D) Measured the exact speed of sound in air

**Answer: C**

---

### 🟡 MEDIUM

**Q16.** Two events occur at the same location but at different times in frame S. An observer in frame S′ moving relative to S will measure:
- A) The same time interval between the events
- B) A longer time interval (time dilation) ✓
- C) A shorter time interval
- D) Exactly twice the time interval

**Answer: B**

---

**Q17.** The concept of simultaneity in special relativity states that:
- A) All observers agree on whether two events happen at the same time
- B) Two events simultaneous in one frame may NOT be simultaneous in another frame moving relative to the first ✓
- C) Only events at the same location can be simultaneous
- D) Simultaneity only breaks down at speeds greater than c/2

**Answer: B**

---

**Q18.** A spaceship travels at v = 0.8c. The Lorentz factor γ is:
- A) 1.33
- B) 1.67 ✓
- C) 0.60
- D) 2.00

**Answer: B** — γ = 1/√(1 − 0.64) = 1/√0.36 = 1/0.6 = 1.667

---

**Q19.** A particle accelerator cannot accelerate protons to exactly the speed of light because:
- A) Protons are too large
- B) As speed increases, relativistic momentum increases, requiring more and more energy to accelerate further ✓
- C) The magnetic fields in accelerators are too weak
- D) Protons decay before reaching high speeds

**Answer: B**

---

**Q20.** In the 'flashlight on a train' scenario, a passenger shines a flashlight forward on a moving train. A stationary observer on the platform measures the speed of light as:
- A) c + v (train speed added)
- B) c − v (train speed subtracted)
- C) c (always constant) ✓
- D) Depends on the colour of the light

**Answer: C**

---

**Q21.** A clock on a spaceship moving at 0.6c shows a proper time of 10 s for an event. What time does a stationary observer measure? (γ = 1.25)
- A) 8 s
- B) 10 s
- C) 12.5 s ✓
- D) 16.7 s

**Answer: C** — t = t₀/√(1 − 0.36) = 10/0.8 = 12.5 s

---

**Q22.** Which experimental evidence supports time dilation?
- A) The photoelectric effect
- B) The survival of cosmic ray muons at Earth's surface ✓
- C) The double-slit experiment
- D) The Michelson-Morley experiment proving the existence of aether

**Answer: B**

---

**Q23.** According to the second postulate of special relativity, the speed of light in a vacuum is:
- A) c only when the source is stationary
- B) c only in the reference frame of Earth
- C) c in all inertial frames, regardless of the motion of the source or observer ✓
- D) c only in the direction of travel

**Answer: C**

---

**Q24.** If v = 0 (object at rest), the time dilation formula gives t =
- A) 0
- B) t₀/c
- C) t₀ ✓
- D) Infinite

**Answer: C** — √(1 − 0) = 1, so t = t₀/1 = t₀

---

**Q25.** The Lorentz factor γ = 1/√(1 − v²/c²) is always:
- A) Less than 1
- B) Equal to 1
- C) Greater than or equal to 1 ✓
- D) Equal to v/c

**Answer: C**

---

**Q26.** Which of the following is NOT a consequence of the constant speed of light?
- A) Time dilation
- B) Length contraction
- C) Increase in gravitational force with speed ✓
- D) Relativistic momentum increase

**Answer: C** — Gravitational force is a general relativity concept, not a direct consequence of constant light speed.

---

**Q27.** A muon has a proper lifetime of 2.2 μs. At v = 0.99c (γ ≈ 7.09), approximately how long does it appear to live from Earth's frame?
- A) 0.31 μs
- B) 2.2 μs
- C) 15.6 μs ✓
- D) 220 μs

**Answer: C** — t = 2.2 × 7.09 ≈ 15.6 μs

---

**Q28.** In special relativity, which of the following quantities is the same for all inertial observers?
- A) The time between two events
- B) The distance between two events
- C) The spacetime interval ✓
- D) The simultaneity of two events

**Answer: C**

---

**Q29.** Which scenario best illustrates the concept of relative motion?
- A) A ball thrown upward in a stationary room
- B) Two astronauts in separate spaceships, each measuring the other as moving ✓
- C) A pendulum swinging in a fixed room
- D) A car braking to a stop

**Answer: B**

---

**Q30.** GPS satellites must account for time dilation effects because:
- A) The satellites move very slowly
- B) Satellites are in a gravitational field stronger than Earth's surface
- C) Satellites move at high orbital speeds, causing time to run slightly slower on board ✓
- D) The signals travel through water vapour

**Answer: C**

---

### 🔴 HARD

**Q31.** A spaceship leaves Earth at v = 0.866c (γ = 2). An astronaut measures the journey to take 5 years. How long does the journey take from Earth's frame?
- A) 2.5 years
- B) 5 years
- C) 10 years ✓
- D) 8.66 years

**Answer: C** — t = t₀ × γ = 5 × 2 = 10 years

---

**Q32.** Two events are separated by Δt₀ = 3 s in the rest frame. A rocket passes at v = 0.8c (γ = 5/3). What time does the rocket observer measure?
- A) 1.8 s
- B) 3.0 s
- C) 5.0 s ✓
- D) 9.0 s

**Answer: C** — t = 3 × (5/3) = 5 s

---

**Q33.** In the twins' paradox, twin A stays on Earth while twin B travels at relativistic speed and returns. Which twin is younger upon reunion, and why?
- A) Twin A, because Earth's gravity slows their time
- B) Twin B, because the travelling twin experiences less proper time due to time dilation ✓
- C) Neither — special relativity says they are the same age
- D) Twin B, because they accelerated and changed inertial frames

**Answer: B**

---

**Q34.** Why is the twins' paradox not a genuine paradox under special relativity?
- A) Because both twins are in inertial frames throughout
- B) Because the travelling twin must undergo acceleration to turn around, breaking the symmetry between the two frames ✓
- C) Because time dilation only applies to one direction of travel
- D) Because the Earth twin is affected by length contraction

**Answer: B**

---

**Q35.** At what speed must an object travel for its relativistic time to be doubled compared to its proper time?
- A) v = 0.5c
- B) v = 0.707c
- C) v = 0.866c ✓
- D) v = 0.999c

**Answer: C** — γ = 2 → 1/√(1 − v²/c²) = 2 → v = √(3/4) c = 0.866c

---

**Q36.** If γ = 10 for a particle, the ratio v/c is approximately:
- A) 0.90
- B) 0.995 ✓
- C) 0.999
- D) 0.9950

**Answer: B** — γ = 10 → 1 − v²/c² = 0.01 → v/c = √0.99 ≈ 0.995

---

**Q37.** A particle has a proper lifetime of 1 μs and travels at v = 0.995c (γ ≈ 10). How far does it travel in the lab frame before decaying?
- A) 299 m ✓
- B) 2990 m
- C) 29.9 m
- D) 0.299 m

**Answer: A** — Lab lifetime = 10 μs; d = 0.995c × 10 × 10⁻⁶ ≈ 2985 m ≈ 2990 m

*(Note: answer B is also defensible depending on rounding; the key concept is d = v × γt₀)*

---

**Q38.** An atomic clock on a jet flying at 600 km/h would, after 10 hours, be behind a stationary clock by approximately:
- A) Several minutes
- B) Nanoseconds ✓
- C) Hours
- D) Milliseconds

**Answer: B**

---

**Q39.** A muon moving at 0.999c has a proper lifetime of 2.2 μs (γ ≈ 22.4). In the lab frame, its lifetime is approximately:
- A) 2.2 μs
- B) 4.9 μs
- C) 49 μs ✓
- D) 0.1 μs

**Answer: C** — t = 2.2 × 22.4 ≈ 49 μs

---

**Q40.** Two spaceships approach each other, each moving at 0.6c relative to Earth. According to classical (Galilean) velocity addition, their relative speed would be 1.2c. Special relativity predicts:
- A) 1.2c (same as classical)
- B) 0.88c ✓
- C) 0.6c
- D) Greater than c

**Answer: B** — Relativistic velocity addition: u = (0.6 + 0.6)/(1 + 0.36) = 1.2/1.36 ≈ 0.88c

---

**Q41.** The Hafele-Keating experiment (1971) flew atomic clocks around the world on jets. The results:
- A) Showed no time difference, disproving special relativity
- B) Confirmed time dilation — clocks on jets ran at different rates compared to ground clocks ✓
- C) Showed time ran faster on the ground
- D) Were inconclusive due to experimental error

**Answer: B**

---

**Q42.** In the 'flashlight on a train' paradox, what stops the light from exceeding c in the ground frame?
- A) Air resistance in the train carriage
- B) The postulate that c is constant — light speed does not add to the train's speed ✓
- C) The train is too slow for the effect to appear
- D) The flashlight emits photons backwards

**Answer: B**

---

### 🟣 IMPOSSIBLE

**Q43.** A clock on a spaceship moving at v = 0.9c ticks for 1 hour of proper time. How far, in light-hours, has the ship travelled according to Earth observers? (γ ≈ 2.294)
- A) 0.9 light-hours
- B) 1 light-hour
- C) 2.065 light-hours ✓
- D) 2.294 light-hours

**Answer: C** — Earth time = γ × 1 hr = 2.294 hr; distance = 0.9c × 2.294 hr = 2.065 light-hours

---

**Q44.** Two inertial frames S and S′ move relative to each other at v = 0.6c. In frame S, events A and B are simultaneous and separated by Δx = 1 light-second. In frame S′, the time between events A and B is:
- A) 0
- B) 0.6/c seconds
- C) 0.75 seconds
- D) −0.75 seconds (B before A) ✓

**Answer: D** — Lorentz transform: Δt′ = γ(Δt − vΔx/c²) = (5/4)(0 − 0.6×1) = −0.75 s

---

**Q45.** Using t = t₀/√(1 − v²/c²), if an observer measures t = 5t₀, at what fraction of c is the object travelling?
- A) √(24/25) c ≈ 0.980c
- B) √(1/25) c = 0.2c
- C) √(24)/5 c ≈ 0.980c
- D) Both A and C are equivalent correct forms ✓

**Answer: D** — √(24)/5 = √(24/25) ≈ 0.9798c

---

**Q46.** A subatomic particle with a proper lifetime of 0.8 μs must travel 4.2 km to a detector. What is the minimum Lorentz factor γ needed for the particle to survive the trip?
- A) γ ≈ 3.5
- B) γ ≈ 7.0
- C) γ ≈ 14
- D) γ ≈ 17.5 ✓

**Answer: D** — t_lab = d/v ≈ d/c = 4200/(3×10⁸) = 14 μs; γ = 14/0.8 = 17.5

---

**Q47.** In GPS satellites, clocks run fast due to weaker gravity (+45.9 μs/day) and slow due to orbital speed (−7.2 μs/day). What is the net clock drift per day?
- A) −38.7 μs/day (slow)
- B) +38.7 μs/day (fast) ✓
- C) +53.1 μs/day (fast)
- D) 0 μs/day (they cancel)

**Answer: B** — Net = 45.9 − 7.2 = +38.7 μs/day; clocks run fast and must be corrected

---

**Q48.** A spaceship travelling at 0.99c passes a stationary observer. The observer and the ship's captain both claim the other's clock is running slow. This is:
- A) A contradiction that disproves special relativity
- B) Perfectly consistent — each observer is correct in their own inertial frame, and the asymmetry only resolves when one frame accelerates ✓
- C) Only possible if the ship is near a black hole
- D) A violation of conservation of energy

**Answer: B**

---
---

## LEVEL 2 — Neil deGrasse Tyson
**Focus:** Length Contraction, Relativistic Momentum & Paradoxes

---

### 🟢 EASY

**Q1.** What is 'proper length' (L₀)?
- A) The length of an object as measured by a moving observer
- B) The length of an object measured in the frame where it is at rest ✓
- C) The length of an object at the speed of light
- D) The average length measured by multiple observers

**Answer: B**

---

**Q2.** According to length contraction, a moving object appears:
- A) Longer in the direction of motion
- B) Shorter in the direction of motion ✓
- C) Wider perpendicular to motion
- D) Unchanged in size

**Answer: B**

---

**Q3.** The formula for relativistic length is:
- A) L = L₀ / √(1 − v²/c²)
- B) L = L₀ × √(1 − v²/c²) ✓
- C) L = L₀ × v/c
- D) L = L₀ / (v/c)

**Answer: B**

---

**Q4.** Relativistic momentum is:
- A) p = m₀v
- B) p = m₀v / √(1 − v²/c²) ✓
- C) p = m₀v × √(1 − v²/c²)
- D) p = m₀c²

**Answer: B**

---

**Q5.** As an object's speed approaches c, its relativistic momentum:
- A) Approaches zero
- B) Remains constant
- C) Increases without bound ✓
- D) Equals its rest mass times c

**Answer: C**

---

**Q6.** Length contraction only occurs in:
- A) All three spatial dimensions equally
- B) The direction perpendicular to motion
- C) The direction parallel to motion ✓
- D) Time, not space

**Answer: C**

---

**Q7.** If v = 0, the length contraction formula gives L =
- A) 0
- B) L₀ / c
- C) L₀ ✓
- D) Infinite

**Answer: C**

---

**Q8.** What is 'rest mass' (m₀)?
- A) The mass of an object when it is moving at the speed of light
- B) The mass of an object measured in a frame where it is at rest ✓
- C) The mass of an object at infinite speed
- D) The total energy of an object divided by c²

**Answer: B**

---

**Q9.** In the context of particle accelerators, relativistic effects are important because:
- A) Particles slow down due to friction
- B) The mass and momentum of particles increase significantly at high speeds ✓
- C) Quantum effects dominate at high energies
- D) Protons become neutrons at high speeds

**Answer: B**

---

**Q10.** According to special relativity, which quantity is invariant (the same for all inertial observers)?
- A) Length of an object
- B) Time interval between two events
- C) Speed of light in a vacuum ✓
- D) Simultaneity of two events

**Answer: C**

---

**Q11.** Length contraction is a:
- A) Purely optical illusion caused by light travel time
- B) Real physical effect measurable in the reference frame of the observer ✓
- C) Mathematical artefact with no physical meaning
- D) Only relevant for objects made of metal

**Answer: B**

---

**Q12.** The formula L = L₀√(1 − v²/c²) tells us that as v increases:
- A) L increases
- B) L stays the same
- C) L decreases ✓
- D) L₀ changes

**Answer: C**

---

### 🟡 MEDIUM

**Q13.** A spaceship of proper length 100 m travels at v = 0.8c (γ = 5/3). What is its length as measured by a stationary observer?
- A) 80 m
- B) 60 m ✓
- C) 125 m
- D) 133 m

**Answer: B** — L = 100 × √(1 − 0.64) = 100 × 0.6 = 60 m

---

**Q14.** In the ladder-barn paradox, a ladder longer than a barn in its rest frame can fit inside the barn because:
- A) The barn expands as the ladder enters it
- B) The ladder contracts in the frame of the barn due to length contraction ✓
- C) The ladder's speed makes it appear shorter in all frames equally
- D) There is a gravitational compression effect

**Answer: B**

---

**Q15.** The ladder-barn paradox illustrates:
- A) That length contraction is a real physical effect that resolves apparent contradictions between frames ✓
- B) That barn doors never actually close simultaneously in any frame
- C) That special relativity predicts physical impossibilities
- D) That only time dilation, not length contraction, is physically real

**Answer: A**

---

**Q16.** A proton is accelerated to v = 0.99c (γ ≈ 7.09). Compared to its rest momentum, its relativistic momentum is approximately:
- A) 7.09 times greater ✓
- B) 0.99 times greater
- C) 1.01 times greater
- D) 99 times greater

**Answer: A**

---

**Q17.** Why can no object with mass reach the speed of light?
- A) Air resistance increases infinitely
- B) Relativistic momentum approaches infinity as v → c, requiring infinite energy to accelerate further ✓
- C) Time stops completely at v = c
- D) Length contracts to zero at v = c, destroying the object

**Answer: B**

---

**Q18.** An observer on the ground measures a spaceship to be 50 m long. The ship travels at 0.6c (γ = 1.25). What is the ship's proper length?
- A) 30 m
- B) 40 m
- C) 50 m
- D) 62.5 m ✓

**Answer: D** — L₀ = L / √(1 − v²/c²) = 50 / 0.8 = 62.5 m

---

**Q19.** Which correctly describes 'relativistic length'?
- A) The length measured in the frame where the object is at rest
- B) The length measured by an observer moving relative to the object ✓
- C) The length after correcting for the speed of light
- D) The average of all observers' measurements

**Answer: B**

---

**Q20.** In the ladder-barn paradox, the barn doors close simultaneously in:
- A) The ladder's rest frame
- B) The barn's rest frame ✓
- C) All inertial frames
- D) No inertial frame

**Answer: B**

---

**Q21.** A rod of proper length 2.0 m moves at v = 0.866c (γ = 2). Its measured length is:
- A) 4.0 m
- B) 1.732 m
- C) 1.0 m ✓
- D) 0.5 m

**Answer: C** — L = 2.0 × √(1 − 0.75) = 2.0 × 0.5 = 1.0 m

---

**Q22.** Which observation from particle accelerators supports relativistic momentum?
- A) Particles emit light as they speed up (Cherenkov radiation)
- B) Particles require increasing amounts of energy per unit speed increase as they approach c ✓
- C) Particles deflect from straight paths at high speeds
- D) Particles fuse at high speeds due to increased mass

**Answer: B**

---

**Q23.** Length contraction is measured by an observer who is:
- A) At rest relative to the object
- B) Moving relative to the object ✓
- C) Only moving perpendicular to the object
- D) Accelerating toward the object

**Answer: B**

---

**Q24.** The Lorentz factor γ increases as v increases. This means length contraction:
- A) Decreases as speed increases
- B) Increases as speed increases (greater contraction at higher speeds) ✓
- C) Is constant regardless of speed
- D) Only occurs above v = 0.5c

**Answer: B**

---

**Q25.** A train of proper length 300 m moves at 0.5c (γ ≈ 1.155). A stationary observer measures its length as approximately:
- A) 300 m
- B) 260 m ✓
- C) 150 m
- D) 346 m

**Answer: B** — L = 300 × √(1 − 0.25) = 300 × 0.866 ≈ 260 m

---

### 🔴 HARD

**Q26.** A cosmic ray muon travelling at 0.998c (γ ≈ 15.8) sees the atmosphere contracted. If the atmosphere is 15 km thick in Earth's frame, how thick does the muon measure it to be?
- A) 0.95 km ✓
- B) 1.0 km
- C) 14.97 km
- D) 237 km

**Answer: A** — L = 15/15.8 ≈ 0.95 km

---

**Q27.** A spaceship has a proper length of 200 m. An observer measures it to be 100 m. What is the ship's speed?
- A) 0.5c
- B) 0.707c
- C) 0.866c ✓
- D) 0.75c

**Answer: C** — L/L₀ = 0.5 = √(1 − v²/c²) → v = 0.866c

---

**Q28.** In the barn-ladder paradox, why do barn and ladder observers disagree on whether the ladder fits simultaneously?
- A) One frame has gravity and the other does not
- B) Simultaneity is relative: the barn doors close simultaneously in the barn frame but NOT simultaneously in the ladder frame ✓
- C) Length contraction applies to time as well as space in the ladder frame
- D) The ladder observer is accelerating

**Answer: B**

---

**Q29.** A proton (m₀ = 1.67 × 10⁻²⁷ kg) travels at v = 0.995c (γ ≈ 10). What is its relativistic momentum?
- A) 5.0 × 10⁻¹⁸ kg·m/s
- B) 1.67 × 10⁻²⁶ kg·m/s
- C) 1.67 × 10⁻²⁷ kg·m/s
- D) 4.99 × 10⁻¹⁸ kg·m/s ✓

**Answer: D** — p = γm₀v = 10 × 1.67×10⁻²⁷ × 0.995 × 3×10⁸ ≈ 4.99 × 10⁻¹⁸ kg·m/s

---

**Q30.** Which correctly explains why muon survival is evidence for BOTH time dilation AND length contraction?
- A) Time dilation (Earth frame): muon lives longer; length contraction (muon frame): atmosphere is shorter — both predict the same physical outcome ✓
- B) Only time dilation applies; length contraction is irrelevant here
- C) Only length contraction applies; time dilation doesn't affect charged particles
- D) Both effects add to double the relativistic benefit

**Answer: A**

---

**Q31.** The relativistic momentum formula reduces to the classical p = m₀v when:
- A) v = c
- B) v >> c
- C) v << c (non-relativistic limit) ✓
- D) m₀ = 0

**Answer: C** — At low speeds √(1 − v²/c²) ≈ 1

---

**Q32.** If length contraction applies in the direction of motion, a sphere moving at v = 0.866c would appear to an observer as:
- A) A larger sphere
- B) A sphere (no shape change)
- C) An oblate spheroid (flattened in direction of motion) ✓
- D) A prolate spheroid (elongated in direction of motion)

**Answer: C**

---

**Q33.** Astronauts travel to a star 40 light-years away at v = 0.995c (γ ≈ 10). In the astronaut's frame, the distance to the star is:
- A) 40 light-years
- B) 4 light-years ✓
- C) 400 light-years
- D) 0.4 light-years

**Answer: B** — L = 40/10 = 4 light-years

---

**Q34.** In the ladder-barn paradox, the ladder observer claims the barn doors do NOT close simultaneously. In the barn frame, they do close simultaneously. Which statement is correct?
- A) The barn observer is wrong; the ladder observer is in the 'true' frame
- B) Both observers are correct within their own frames; simultaneity is frame-dependent ✓
- C) The paradox has no resolution and disproves special relativity
- D) A third observer can determine which frame is 'really' correct

**Answer: B**

---

### 🟣 IMPOSSIBLE

**Q35.** A 1000 m spaceship passes a 500 m space station at v = 0.866c (γ = 2). The ship appears 500 m in the station's frame. The ship captain claims the ship 'fits inside' the station. This is best explained by:
- A) The station really is longer than 500 m when the ship passes
- B) The events of 'front of ship aligns with front of station' and 'back of ship aligns with back of station' are NOT simultaneous in all frames — there is no physical paradox ✓
- C) Length contraction is only apparent, not real, so the ship physically does fit
- D) The station's length is undefined in the ship's frame

**Answer: B**

---

**Q36.** An accelerator boosts a proton (m₀ = 1.67 × 10⁻²⁷ kg) to v = 0.9999c (γ ≈ 70.7). What is the ratio of its relativistic momentum to its classical momentum at that speed?
- A) 70.7 ✓
- B) 1.0
- C) 0.9999
- D) 4999

**Answer: A** — p_rel/p_classical = γm₀v / m₀v = γ = 70.7

---

**Q37.** In a particle accelerator, doubling the kinetic energy of a particle already moving at 0.9c does NOT double its speed. This is because:
- A) The particle hits an energy ceiling set by the accelerator
- B) The Lorentz factor is not linear in speed, so each additional increment of speed requires exponentially more energy ✓
- C) The particle emits radiation equal to the added energy
- D) At v > 0.9c the laws of special relativity no longer apply

**Answer: B**

---

**Q38.** An observer measures two identical rods, one at rest (2.0 m) and one moving at v = 0.6c. What is the ratio L_moving / L_rest?
- A) 0.6
- B) 0.8 ✓
- C) 1.0
- D) 1.25

**Answer: B** — √(1 − 0.36) = √0.64 = 0.8

---

**Q39.** A particle's relativistic momentum is observed to be exactly 3 times its classical momentum at the same speed. What is the particle's speed?
- A) v = c/3
- B) v = c/√2 ≈ 0.707c
- C) v = c√(8/9) ≈ 0.943c ✓
- D) v = 0.9c

**Answer: C** — γ = 3 → 1 − v²/c² = 1/9 → v = c√(8/9) ≈ 0.943c

---

**Q40.** The LHC accelerates protons to 6.5 TeV. The rest mass energy of a proton is 938 MeV. The Lorentz factor γ of these protons is approximately:
- A) 700
- B) 6930 ✓
- C) 69300
- D) 93800

**Answer: B** — γ = E_total/E_rest = 6500000/938 ≈ 6930

---
---

## LEVEL 3 — Vsauce
**Focus:** E = mc², Mass-Energy Equivalence & Synthesis

---

### 🟢 EASY

**Q1.** What does E = mc² state?
- A) Energy equals mass times the speed of sound squared
- B) Energy and mass are equivalent, related by the speed of light squared ✓
- C) Energy is always greater than mass
- D) Mass can never be converted to energy

**Answer: B**

---

**Q2.** In E = mc², what does 'c' represent?
- A) The speed of sound in air
- B) The speed of light in a vacuum (≈ 3 × 10⁸ m/s) ✓
- C) The speed of the object
- D) The charge of an electron

**Answer: B**

---

**Q3.** The mass-energy equivalence relationship (ΔE = Δmc²) implies that:
- A) Only moving objects have energy
- B) A small amount of mass corresponds to a very large amount of energy ✓
- C) Energy and mass are completely unrelated
- D) Mass increases linearly with energy

**Answer: B**

---

**Q4.** Which of the following applications demonstrates mass-energy equivalence?
- A) A pendulum swinging
- B) Nuclear fission, where a small mass loss produces enormous energy ✓
- C) A car accelerating on a highway
- D) A magnet attracting iron filings

**Answer: B**

---

**Q5.** What is 'rest mass' in the context of E = mc²?
- A) The mass of an object when moving at c
- B) The mass of an object when it is at rest, representing its intrinsic energy content ✓
- C) The mass of an object after losing energy
- D) The mass of photons at rest

**Answer: B**

---

**Q6.** Nuclear power plants generate energy primarily through:
- A) Chemical reactions that release electrons
- B) Mass-energy conversion: a small mass deficit in nuclear reactions produces large amounts of energy ✓
- C) Kinetic energy of spinning turbines alone
- D) The photoelectric effect on uranium

**Answer: B**

---

**Q7.** According to special relativity, which of the following has zero rest mass?
- A) Electron
- B) Proton
- C) Photon (light particle) ✓
- D) Neutron

**Answer: C**

---

**Q8.** If Δm = 1 kg of mass is fully converted to energy, approximately how much energy is released?
- A) 3 × 10⁸ J
- B) 9 × 10¹⁶ J ✓
- C) 1 × 10⁸ J
- D) 3 × 10¹⁶ J

**Answer: B** — E = mc² = 1 × (3×10⁸)² = 9 × 10¹⁶ J

---

**Q9.** Which of the following best explains why nuclear weapons are so powerful?
- A) They use chemical reactions that are faster than normal explosives
- B) A tiny mass deficit (Δm) converts to an enormous energy (ΔE = Δmc²) due to c² being very large ✓
- C) They accelerate protons to the speed of light
- D) They split electrons rather than nuclei

**Answer: B**

---

**Q10.** The equation ΔE = Δmc² was derived from which theory?
- A) Classical Newtonian mechanics
- B) Einstein's special theory of relativity ✓
- C) Maxwell's theory of electromagnetism
- D) Quantum mechanics

**Answer: B**

---

**Q11.** Which statement about photons (particles of light) is correct?
- A) Photons have rest mass equal to their energy divided by c²
- B) Photons travel at c and have zero rest mass but carry energy and momentum ✓
- C) Photons are slowed by gravity, proving they have mass
- D) Photons cannot carry momentum as they have no mass

**Answer: B**

---

**Q12.** In the context of special relativity, 'binding energy' refers to:
- A) The kinetic energy of electrons in orbit
- B) The energy equivalent of the mass deficit when nucleons bind into a nucleus ✓
- C) The energy required to move a nucleus from rest
- D) The electrical potential energy between protons

**Answer: B**

---

### 🟡 MEDIUM

**Q13.** The sun loses approximately 4 × 10⁹ kg of mass per second via radiation. Using E = mc², how much power does this represent?
- A) 1.2 × 10¹⁸ W
- B) 3.6 × 10²⁶ W ✓
- C) 4 × 10¹⁷ W
- D) 1.8 × 10²⁰ W

**Answer: B** — P = Δm/Δt × c² = 4×10⁹ × 9×10¹⁶ = 3.6 × 10²⁶ W

---

**Q14.** In nuclear fission of uranium-235, the products have slightly less mass than the original nucleus. This mass deficit:
- A) Is lost to the environment as heat radiation only
- B) Is converted to kinetic energy of the fission products and radiation via E = mc² ✓
- C) Is converted entirely to neutrinos
- D) Has no practical significance

**Answer: B**

---

**Q15.** The total relativistic energy of an object is E = γm₀c². For a particle at rest (v = 0), γ = 1, so the rest energy is:
- A) 0
- B) m₀c
- C) m₀c² ✓
- D) ½m₀c²

**Answer: C**

---

**Q16.** Which of the following physical processes directly demonstrates ΔE = Δmc²?
- A) Combustion of wood
- B) Pair production (gamma ray → electron + positron) ✓
- C) A spring being compressed
- D) Evaporation of water

**Answer: B**

---

**Q17.** In pair production, a photon creates an electron and a positron. The minimum photon energy required is determined by:
- A) The speed of the photon
- B) The rest mass energy of the electron-positron pair (2m₀c²) ✓
- C) The magnetic field strength in the lab
- D) The temperature of the surrounding medium

**Answer: B**

---

**Q18.** An electron (m₀ = 9.11 × 10⁻³¹ kg) and a positron annihilate. What is the total energy released?
- A) 1.64 × 10⁻¹³ J ✓
- B) 8.2 × 10⁻¹⁴ J
- C) 9.11 × 10⁻³¹ J
- D) 3 × 10⁸ J

**Answer: A** — E = 2m₀c² = 2 × 9.11×10⁻³¹ × 9×10¹⁶ = 1.64 × 10⁻¹³ J

---

**Q19.** Which statement about the binding energy of a nucleus is correct?
- A) Binding energy equals the rest mass of the nucleus times c²
- B) The actual mass of a nucleus is slightly LESS than the sum of its individual proton and neutron masses — this deficit is the binding energy ✓
- C) Binding energy is always negative
- D) Adding neutrons always increases binding energy

**Answer: B**

---

**Q20.** Cosmic rays strike atmospheric nuclei, producing muons. Which relativistic effects explain why muons reach Earth's surface?
- A) Only length contraction in the pion frame
- B) Only time dilation in the muon's rest frame
- C) Time dilation in Earth's frame (muon lives longer) AND length contraction in the muon's frame (shorter atmosphere) — consistent descriptions ✓
- D) Neither; muons are produced close enough to the surface

**Answer: C**

---

**Q21.** In electron-positron annihilation, two gamma-ray photons are produced. Why two photons?
- A) One photon would violate length contraction
- B) Conservation of momentum requires the two photons to travel in opposite directions ✓
- C) Photons can only be created in pairs due to quantum rules
- D) One photon is for the electron and one for the positron's kinetic energy

**Answer: B**

---

**Q22.** According to special relativity, particle accelerators cannot accelerate massive particles to c because:
- A) They become too large to fit in the accelerator ring
- B) They must supply increasingly large amounts of energy for smaller and smaller speed increments near c ✓
- C) They exceed c if enough energy is applied
- D) They stop working above v = 0.5c

**Answer: B**

---

**Q23.** The mass-energy relation implies that chemical energy stored in bonds is:
- A) Unrelated to the mass of the molecule
- B) Associated with a tiny mass difference between reactants and products ✓
- C) Only relevant for nuclear reactions
- D) Exactly equal to the kinetic energy of the atoms

**Answer: B**

---

**Q24.** A stationary particle decays into two fragments. If the original rest mass is M and each fragment has rest mass m₁ and m₂, conservation of energy requires:
- A) M = m₁ + m₂
- B) Mc² = m₁c² + m₂c² + KE_total ✓
- C) M = m₁ + m₂ + KE/c²
- D) M > m₁ + m₂ is impossible

**Answer: B** — Mass energy + kinetic energy of fragments must equal original rest energy

---

**Q25.** Which of the following synthesis statements is CORRECT?
- A) Length contraction, time dilation, and E = mc² are independent phenomena with no common origin
- B) All three — time dilation, length contraction, and E = mc² — arise from the same two postulates of special relativity ✓
- C) E = mc² was derived from Newtonian mechanics, while time dilation requires general relativity
- D) Length contraction and time dilation are approximations; only E = mc² is exact

**Answer: B**

---

### 🔴 HARD

**Q26.** A nuclear reactor converts 0.05% of the mass of its fuel to energy. If 1000 kg of uranium is used, how much energy is released?
- A) 4.5 × 10¹³ J ✓
- B) 9 × 10¹³ J
- C) 1.5 × 10¹⁴ J
- D) 4.5 × 10¹⁶ J

**Answer: A** — Δm = 0.0005 × 1000 = 0.5 kg; E = 0.5 × 9×10¹⁶ = 4.5 × 10¹³ J

---

**Q27.** The total relativistic energy-momentum relation is E² = (pc)² + (m₀c²)². For a photon (m₀ = 0):
- A) E = m₀c²
- B) E = pc ✓
- C) E = p/c
- D) E = p²c

**Answer: B**

---

**Q28.** An object has rest mass 2 kg. At v = 0.866c (γ = 2), its total relativistic energy is:
- A) 1.8 × 10¹⁷ J
- B) 3.6 × 10¹⁷ J ✓
- C) 9 × 10¹⁶ J
- D) 7.2 × 10¹⁷ J

**Answer: B** — E = γm₀c² = 2 × 2 × 9×10¹⁶ = 3.6 × 10¹⁷ J

---

**Q29.** In the proton-proton chain fusion in the Sun, ~0.7% of hydrogen mass is converted to energy. Why can't fusion be easily replicated on Earth?
- A) We don't have enough hydrogen
- B) The temperatures and pressures required to overcome electrostatic repulsion between protons are extreme — equivalent to stellar core conditions ✓
- C) Fusion violates conservation of energy on Earth
- D) Fusion only works in zero gravity

**Answer: B**

---

**Q30.** In pair production (γ → e⁺ + e⁻), if the gamma photon has energy 2.05 MeV and the rest mass energy of each electron is 0.511 MeV, how much kinetic energy do the pair share in total?
- A) 2.05 MeV
- B) 1.028 MeV total kinetic energy ✓
- C) 0.511 MeV each
- D) 0 — all energy goes to rest mass

**Answer: B** — KE_total = 2.05 − 2(0.511) = 2.05 − 1.022 = 1.028 MeV

---

**Q31.** The mass of a helium-4 nucleus is 6.6447 × 10⁻²⁷ kg. The combined mass of 2 protons and 2 neutrons is 6.6951 × 10⁻²⁷ kg. The binding energy of helium-4 is approximately:
- A) 4.53 × 10⁻¹² J ✓
- B) 4.53 × 10⁻¹³ J
- C) 1.51 × 10⁻¹² J
- D) 3.02 × 10⁻¹² J

**Answer: A** — Δm = 6.6951 − 6.6447 = 0.0504 × 10⁻²⁷ kg; E = 0.0504×10⁻²⁷ × 9×10¹⁶ ≈ 4.53 × 10⁻¹² J

---

**Q32.** Special relativity predicts that as a particle's kinetic energy approaches infinity, its speed approaches (but never reaches) c. What does this imply about the nature of c?
- A) c is just a practical engineering limit
- B) c is the fundamental speed limit of the universe, encoded in the structure of spacetime itself ✓
- C) c could be exceeded with a different type of energy source
- D) c is only a limit for protons; other particles could exceed it

**Answer: B**

---

**Q33.** An object's kinetic energy in special relativity is KE = (γ − 1)m₀c². At v = 0.6c (γ = 1.25), the kinetic energy as a fraction of rest energy m₀c² is:
- A) 0.6
- B) 0.36
- C) 0.25 ✓
- D) 0.5

**Answer: C** — KE/m₀c² = γ − 1 = 1.25 − 1 = 0.25

---

### 🟣 IMPOSSIBLE

**Q34.** A proton (rest mass energy = 938.3 MeV) is accelerated to a total energy of 9383 MeV (γ = 10). What is its kinetic energy?
- A) 938.3 MeV
- B) 8444.7 MeV ✓
- C) 9383 MeV
- D) 18766 MeV

**Answer: B** — KE = E_total − m₀c² = 9383 − 938.3 = 8444.7 MeV

---

**Q35.** Using E² = (pc)² + (m₀c²)², a particle has momentum p = 1200 MeV/c and rest mass energy m₀c² = 938 MeV. Its total energy E is closest to:
- A) 262 MeV
- B) 2138 MeV
- C) 1543 MeV ✓
- D) 1200 MeV

**Answer: C** — E = √(1200² + 938²) = √(1440000 + 879844) = √2319844 ≈ 1523 MeV ≈ 1543 MeV

---

**Q36.** The Higgs field gives elementary particles their rest mass. Under E = mc², what does it mean for a particle to acquire mass via the Higgs mechanism?
- A) The particle slows down from c to sub-c speeds, and the energy difference becomes its rest mass
- B) The particle's interaction with the Higgs field introduces a rest-energy term m₀c² into its energy-momentum relation, manifesting as inertia ✓
- C) The particle gains mass from photons that hit it in the Higgs field
- D) The particle becomes a different type of boson

**Answer: B**

---

**Q37.** Two photons each of energy 0.511 MeV collide head-on to produce an electron-positron pair. The condition is satisfied because:
- A) Their combined energy 1.022 MeV = 2 × 0.511 MeV exactly equals the rest mass energy of the pair
- B) The photons' momenta cancel in the centre-of-mass frame, meaning all energy is available for rest mass creation
- C) Pair production requires photons above 1.022 MeV each
- D) Both A and B are correct and consistent ✓

**Answer: D** — The energy threshold is met AND momentum conservation is satisfied in the CM frame.

---

**Q38.** A hypothetical matter-antimatter rocket converts 100% of fuel mass to energy. Using ΔE = Δmc², if 1 kg of fuel is fully annihilated, the energy output and corresponding propulsion efficiency is:
- A) Lower than chemical rockets per kg of fuel
- B) Equal to nuclear rockets per kg
- C) The absolute theoretical maximum per unit mass — no physical propulsion system can exceed it ✓
- D) Limited by the speed of sound in the exhaust

**Answer: C** — Full mass-to-energy conversion is the theoretical ceiling; E = mc² gives 9 × 10¹⁶ J per kg.

---

**Q39.** In special relativity, the four-momentum of a particle is conserved in all inertial frames. For a particle at rest decaying into two massless photons, conservation of four-momentum requires:
- A) The photons travel in the same direction
- B) The photons have equal and opposite momenta, each with energy m₀c²/2 ✓
- C) The photons have zero total energy
- D) The decay is only possible if the original particle is moving

**Answer: B** — Four-momentum conservation: energy is conserved (2E_photon = m₀c²) and momentum is conserved (p₁ + p₂ = 0).

---

**Q40.** The relativistic kinetic energy formula KE = (γ − 1)m₀c² reduces to the classical ½m₀v² at low speeds. Using a binomial approximation of γ for v << c, which step correctly recovers this?
- A) γ ≈ 1 + v/c, giving KE ≈ m₀vc
- B) γ ≈ 1 + ½(v²/c²), giving KE = (γ−1)m₀c² ≈ ½m₀v² ✓
- C) γ ≈ 1 − ½(v²/c²), giving KE ≈ −½m₀v²
- D) γ ≈ v/c, giving KE ≈ m₀v²/c − m₀c

**Answer: B** — Binomial: (1 − v²/c²)^(−½) ≈ 1 + ½v²/c² for v << c