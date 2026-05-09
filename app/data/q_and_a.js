export const dict = {
    // Boss 1: Bill Nye
    1: {
        E: [
            {
                q: "Which of the following observations CANNOT be explained by classical physics?",
                a: [
                    { text: "A ball falling due to gravity", correct: false },
                    { text: "The survival of muons reaching Earth's surface from the upper atmosphere", correct: true },
                    { text: "A car moving at 60 km/h", correct: false },
                    { text: "Water boiling at 100°C", correct: false }
                ]
            },
            {
                q: "What is a frame of reference?",
                a: [
                    { text: "A physical picture frame", correct: false },
                    { text: "A coordinate system used to describe the position and motion of objects", correct: true },
                    { text: "A type of clock used in experiments", correct: false },
                    { text: "A unit of measurement for speed", correct: false }
                ]
            },
            {
                q: "According to special relativity, what is the speed of light in a vacuum?",
                a: [
                    { text: "Approximately 3 × 10⁸ m/s, but it can vary depending on the observer's speed", correct: false },
                    { text: "Exactly 3 × 10⁸ m/s, constant for all inertial observers", correct: true },
                    { text: "Only constant when the light source is at rest", correct: false },
                    { text: "It decreases as the observer moves faster", correct: false }
                ]
            },
            {
                q: "What does 'proper time interval' (t₀) refer to?",
                a: [
                    { text: "Time measured by a clock moving at the speed of light", correct: false },
                    { text: "Time measured by a clock that is stationary relative to the event being timed", correct: true },
                    { text: "Time measured in the Earth's reference frame only", correct: false },
                    { text: "Time measured by the fastest-moving observer", correct: false }
                ]
            },
            {
                q: "An inertial frame of reference is one that is:",
                a: [
                    { text: "Accelerating at a constant rate", correct: false },
                    { text: "Rotating about an axis", correct: false },
                    { text: "Moving at constant velocity (not accelerating)", correct: true },
                    { text: "Fixed to the surface of Earth only", correct: false }
                ]
            },
            {
                q: "Which of the following is one of Einstein's two postulates of special relativity?",
                a: [
                    { text: "The laws of physics apply only in the observer's frame of reference", correct: false },
                    { text: "The laws of physics are the same in all inertial frames of reference", correct: true },
                    { text: "The speed of light depends on the speed of the source", correct: false },
                    { text: "Time flows at the same rate for all observers", correct: false }
                ]
            },
            {
                q: "Time dilation means that:",
                a: [
                    { text: "Clocks run faster when moving at high speed", correct: false },
                    { text: "Moving clocks run slower compared to stationary ones", correct: true },
                    { text: "Time only changes near black holes", correct: false },
                    { text: "Time dilation only affects digital clocks", correct: false }
                ]
            },
            {
                q: "The symbol t₀ in the time dilation formula represents:",
                a: [
                    { text: "Relativistic time interval", correct: false },
                    { text: "Proper time interval (time measured in the rest frame of the event)", correct: true },
                    { text: "The speed of the observer", correct: false },
                    { text: "The Lorentz factor", correct: false }
                ]
            },
            {
                q: "Muons are created in the upper atmosphere (~15 km up) and yet reach Earth's surface. Classical physics cannot explain this because muons:",
                a: [
                    { text: "Are too heavy to travel far", correct: false },
                    { text: "Travel slower than light so should decay before reaching Earth", correct: false },
                    { text: "Have a very short half-life that classically means they shouldn't survive the trip", correct: true },
                    { text: "Are electrically neutral and unaffected by Earth's magnetic field", correct: false }
                ]
            },
            {
                q: "Which formula correctly gives relativistic time interval t?",
                a: [
                    { text: "t = t₀ × √(1 − v²/c²)", correct: false },
                    { text: "t = t₀ / √(1 − v²/c²)", correct: true },
                    { text: "t = t₀ × v/c", correct: false },
                    { text: "t = t₀ × c/v", correct: false }
                ]
            },
            {
                q: "Motion can only be measured relative to:",
                a: [
                    { text: "The surface of the Earth", correct: false },
                    { text: "The centre of the universe", correct: false },
                    { text: "An observer or reference frame", correct: true },
                    { text: "The speed of light", correct: false }
                ]
            },
            {
                q: "Which of the following is the second postulate of special relativity?",
                a: [
                    { text: "The speed of light in a vacuum is the same for all inertial observers, regardless of the motion of the source or observer", correct: true },
                    { text: "The speed of light depends on the medium it travels through", correct: false },
                    { text: "Observers in different frames measure different speeds of light", correct: false },
                    { text: "Light slows down in a moving frame", correct: false }
                ]
            },
            {
                q: "The Lorentz factor γ is defined as:",
                a: [
                    { text: "γ = √(1 − v²/c²)", correct: false },
                    { text: "γ = v/c", correct: false },
                    { text: "γ = 1/√(1 − v²/c²)", correct: true },
                    { text: "γ = c/v", correct: false }
                ]
            },
            {
                q: "If an event lasts 1 second in its own rest frame, a moving observer will measure:",
                a: [
                    { text: "Less than 1 second", correct: false },
                    { text: "Exactly 1 second", correct: false },
                    { text: "More than 1 second", correct: true },
                    { text: "Zero seconds", correct: false }
                ]
            },
            {
                q: "The Michelson-Morley experiment was significant because it:",
                a: [
                    { text: "Proved the existence of the aether", correct: false },
                    { text: "Found that the speed of light was different in different directions", correct: false },
                    { text: "Failed to detect the aether, suggesting the speed of light is constant", correct: true },
                    { text: "Measured the exact speed of sound in air", correct: false }
                ]
            }
        ],
        M: [
            {
                q: "Two events occur at the same location but at different times in frame S. An observer in frame S′ moving relative to S will measure:",
                a: [
                    { text: "The same time interval between the events", correct: false },
                    { text: "A longer time interval (time dilation)", correct: true },
                    { text: "A shorter time interval", correct: false },
                    { text: "Exactly twice the time interval", correct: false }
                ]
            },
            {
                q: "The concept of simultaneity in special relativity states that:",
                a: [
                    { text: "All observers agree on whether two events happen at the same time", correct: false },
                    { text: "Two events simultaneous in one frame may NOT be simultaneous in another frame moving relative to the first", correct: true },
                    { text: "Only events at the same location can be simultaneous", correct: false },
                    { text: "Simultaneity only breaks down at speeds greater than c/2", correct: false }
                ]
            },
            {
                q: "A spaceship travels at v = 0.8c. The Lorentz factor γ is:",
                a: [
                    { text: "1.33", correct: false },
                    { text: "1.67", correct: true },
                    { text: "0.60", correct: false },
                    { text: "2.00", correct: false }
                ]
            },
            {
                q: "A particle accelerator cannot accelerate protons to exactly the speed of light because:",
                a: [
                    { text: "Protons are too heavy to accelerate", correct: false },
                    { text: "It would require infinite energy", correct: true },
                    { text: "Protons are unstable at high speeds", correct: false },
                    { text: "The accelerator is not powerful enough", correct: false }
                ]
            },
            {
                q: "In the 'flashlight on a train' scenario, a passenger shines a flashlight forward on a moving train. A stationary observer on the platform measures the speed of light as:",
                a: [
                    { text: "c + v (train speed added)", correct: false },
                    { text: "c − v (train speed subtracted)", correct: false },
                    { text: "c (always constant)", correct: true },
                    { text: "Depends on the colour of the light", correct: false }
                ]
            },
            {
                q: "A clock on a spaceship moving at 0.6c shows a proper time of 10 s for an event. What time does a stationary observer measure? (γ = 1.25)",
                a: [
                    { text: "8 s", correct: false },
                    { text: "10 s", correct: false },
                    { text: "12.5 s", correct: true },
                    { text: "16.7 s", correct: false }
                ]
            },
            {
                q: "Which experimental evidence supports time dilation?",
                a: [
                    { text: "The photoelectric effect", correct: false },
                    { text: "The survival of cosmic ray muons at Earth's surface", correct: true },
                    { text: "The double-slit experiment", correct: false },
                    { text: "The Michelson-Morley experiment proving the existence of aether", correct: false }
                ]
            },
            {
                q: "According to the second postulate of special relativity, the speed of light in a vacuum is:",
                a: [
                    { text: "c only when the source is stationary", correct: false },
                    { text: "c only in the reference frame of Earth", correct: false },
                    { text: "c in all inertial frames, regardless of the motion of the source or observer", correct: true },
                    { text: "c only in the direction of travel", correct: false }
                ]
            },
            {
                q: "If v = 0 (object at rest), the time dilation formula gives t =",
                a: [
                    { text: "0", correct: false },
                    { text: "t₀/c", correct: false },
                    { text: "t₀", correct: true },
                    { text: "Infinite", correct: false }
                ]
            },
            {
                q: "The Lorentz factor γ = 1/√(1 − v²/c²) is always:",
                a: [
                    { text: "Greater than 1", correct: true },
                    { text: "Less than 1", correct: false },
                    { text: "Equal to 1", correct: false },
                    { text: "Undefined", correct: false }
                ]
            },
            {
                q: "Which of the following is NOT a consequence of the constant speed of light?",
                a: [
                    { text: "Time dilation", correct: false },
                    { text: "Length contraction", correct: false },
                    { text: "Simultaneity is relative", correct: false },
                    { text: "Mass increases with speed", correct: true }
                ]
            },
            {
                q: "A muon has a proper lifetime of 2.2 μs. At v = 0.99c (γ ≈ 7.09), approximately how long does it appear to live from Earth's frame?",
                a: [
                    { text: "0.31 μs", correct: false },
                    { text: "2.2 μs", correct: false },
                    { text: "15.6 μs", correct: true },
                    { text: "220 μs", correct: false }
                ]
            },
            {
                q: "In special relativity, which of the following quantities is the same for all inertial observers?",
                a: [
                    { text: "The time between two events", correct: false },
                    { text: "The distance between two events", correct: false },
                    { text: "The spacetime interval", correct: true },
                    { text: "The simultaneity of two events", correct: false }
                ]
            },
            {
                q: "Which scenario best illustrates the concept of relative motion?",
                a: [
                    { text: "A ball thrown upward in a stationary room", correct: false },
                    { text: "Two astronauts in separate spaceships, each measuring the other as moving", correct: true },
                    { text: "A pendulum swinging in a fixed room", correct: false },
                    { text: "A car braking to a stop", correct: false }
                ]
            },
            {
                q: "GPS satellites must account for time dilation effects because:",
                a: [
                    { text: "The satellites move very slowly", correct: false },
                    { text: "Satellites are in a gravitational field stronger than Earth's surface", correct: false },
                    { text: "Satellites move at high orbital speeds, causing time to run slightly slower on board", correct: true },
                    { text: "GPS signals travel faster than light", correct: false }
                ]
            }
        ],
        H: [
            {
                q: "A spaceship leaves Earth at v = 0.866c (γ = 2). An astronaut measures the journey to take 5 years. How long does the journey take from Earth's frame?",
                a: [
                    { text: "2.5 years", correct: false },
                    { text: "5 years", correct: false },
                    { text: "10 years", correct: true },
                    { text: "8.66 years", correct: false }
                ]
            },
            {
                q: "Two events are separated by Δt₀ = 3 s in the rest frame. A rocket passes at v = 0.8c (γ = 5/3). What time does the rocket observer measure?",
                a: [
                    { text: "1.8 s", correct: false },
                    { text: "3.0 s", correct: false },
                    { text: "5.0 s", correct: true },
                    { text: "9.0 s", correct: false }
                ]
            },
            {
                q: "In the twins' paradox, twin A stays on Earth while twin B travels at relativistic speed and returns. Which twin is younger upon reunion, and why?",
                a: [
                    { text: "Twin A, because Earth's gravity slows their time", correct: false },
                    { text: "Twin B, because the travelling twin experiences less proper time due to time dilation", correct: true },
                    { text: "Neither — special relativity says they are the same age", correct: false },
                    { text: "Twin B, because they accelerated and changed inertial frames", correct: false }
                ]
            },
            {
                q: "Why is the twins' paradox not a genuine paradox under special relativity?",
                a: [
                    { text: "Because both twins are in inertial frames throughout", correct: false },
                    { text: "Because the travelling twin must undergo acceleration to turn around, breaking the symmetry between the two frames", correct: true },
                    { text: "Because time dilation only applies to one direction of travel", correct: false },
                    { text: "Because the Earth twin is affected by length contraction", correct: false }
                ]
            },
            {
                q: "At what speed must an object travel for its relativistic time to be doubled compared to its proper time?",
                a: [
                    { text: "v = 0.5c", correct: false },
                    { text: "v = 0.707c", correct: false },
                    { text: "v = 0.866c", correct: true },
                    { text: "v = 0.999c", correct: false }
                ]
            },
            {
                q: "If γ = 10 for a particle, the ratio v/c is approximately:",
                a: [
                    { text: "0.90", correct: false },
                    { text: "0.995", correct: true },
                    { text: "0.999", correct: false },
                    { text: "0.9950", correct: false }
                ]
            },
            {
                q: "A particle has a proper lifetime of 1 μs and travels at v = 0.995c (γ ≈ 10). How far does it travel in the lab frame before decaying?",
                a: [
                    { text: "299 m", correct: true },
                    { text: "2990 m", correct: false },
                    { text: "29.9 m", correct: false },
                    { text: "0.299 m", correct: false }
                ]
            },
            {
                q: "An atomic clock on a jet flying at 600 km/h would, after 10 hours, be behind a stationary clock by approximately:",
                a: [
                    { text: "Several minutes", correct: false },
                    { text: "Nanoseconds", correct: true },
                    { text: "Hours", correct: false },
                    { text: "Milliseconds", correct: false }
                ]
            },
            {
                q: "A muon moving at 0.999c has a proper lifetime of 2.2 μs (γ ≈ 22.4). In the lab frame, its lifetime is approximately:",
                a: [
                    { text: "2.2 μs", correct: false },
                    { text: "4.9 μs", correct: false },
                    { text: "49 μs", correct: true },
                    { text: "0.1 μs", correct: false }
                ]
            },
            {
                q: "Two spaceships approach each other, each moving at 0.6c relative to Earth. Classical mechanics predicts 1.2c relative speed. Special relativity predicts:",
                a: [
                    { text: "1.2c (same as classical)", correct: false },
                    { text: "0.88c", correct: true },
                    { text: "0.6c", correct: false },
                    { text: "Greater than c", correct: false }
                ]
            },
            {
                q: "The Hafele-Keating experiment (1971) flew atomic clocks around the world on jets. The results:",
                a: [
                    { text: "Showed no time difference, disproving special relativity", correct: false },
                    { text: "Confirmed time dilation — clocks on jets ran at different rates compared to ground clocks", correct: true },
                    { text: "Showed time ran faster on the ground", correct: false },
                    { text: "Were inconclusive due to experimental error", correct: false }
                ]
            },
            {
                q: "In the 'flashlight on a train' paradox, what stops the light from exceeding c in the ground frame?",
                a: [
                    { text: "Air resistance in the train carriage", correct: false },
                    { text: "The postulate that c is constant — light speed does not add to the train's speed", correct: true },
                    { text: "The train is too slow for the effect to appear", correct: false },
                    { text: "The flashlight emits photons backwards", correct: false }
                ]
            }
        ],
        I: [
            {
                q: "A clock on a spaceship moving at v = 0.9c ticks for 1 hour of proper time. How far, in light-hours, has the ship travelled according to Earth observers? (γ ≈ 2.294)",
                a: [
                    { text: "0.9 light-hours", correct: false },
                    { text: "1 light-hour", correct: false },
                    { text: "2.065 light-hours", correct: true },
                    { text: "2.294 light-hours", correct: false }
                ]
            },
            {
                q: "Two inertial frames S and S′ move relative to each other at v = 0.6c. In frame S, events A and B are simultaneous and separated by Δx = 1 light-second. In frame S′, the time between events A and B is:",
                a: [
                    { text: "0 seconds", correct: false },
                    { text: "0.6/c seconds", correct: false },
                    { text: "0.75 second", correct: false },
                    { text: "-0.75 seconds (B before A)", correct: true }
                ]
            },
            {
                q: "Using t = t₀/√(1 − v²/c²), if an observer measures t = 5t₀, which forms correctly express the object's speed?",
                a: [
                    { text: "√(24/25) c ≈ 0.980c", correct: false },
                    { text: "√(1/25) c = 0.2c", correct: false },
                    { text: "√(24)/5 c ≈ 0.980c", correct: false },
                    { text: "Both A and C are equivalent correct forms", correct: true }
                ]
            },
            {
                q: "A subatomic particle with a proper lifetime of 0.8 μs must travel 4.2 km to a detector. What is the minimum Lorentz factor γ needed for the particle to survive the trip?",
                a: [
                    { text: "γ ≈ 3.5", correct: false },
                    { text: "γ ≈ 7.0", correct: false },
                    { text: "γ ≈ 14", correct: false },
                    { text: "γ ≈ 17.5", correct: true }
                ]
            },
            {
                q: "In GPS satellites, clocks run fast due to weaker gravity (+45.9 μs/day) and slow due to orbital speed (−7.2 μs/day). What is the net clock drift per day?",
                a: [
                    { text: "−38.7 μs/day (slow)", correct: false },
                    { text: "+38.7 μs/day (fast)", correct: true },
                    { text: "+53.1 μs/day (fast)", correct: false },
                    { text: "0 μs/day (they cancel)", correct: false }
                ]
            },
            {
                q: "A spaceship travelling at 0.99c passes a stationary observer. Both claim the other's clock is running slow. This is:",
                a: [
                    { text: "A contradiction that disproves special relativity", correct: false },
                    { text: "Perfectly consistent — each observer is correct in their own inertial frame, and the asymmetry only resolves when one frame accelerates", correct: true },
                    { text: "Only possible if the ship is near a black hole", correct: false },
                    { text: "A violation of conservation of energy", correct: false }
                ]
            }
        ]
    },

    // Boss 2: Neil deGrasse Tyson
    2: {
        E: [
            {
                q: "What is 'proper length' (L₀)?",
                a: [
                    { text: "The length of an object as measured by a moving observer", correct: false },
                    { text: "The length of an object measured in the frame where it is at rest", correct: true },
                    { text: "The length of an object at the speed of light", correct: false },
                    { text: "The average length measured by multiple observers", correct: false }
                ]
            },
            {
                q: "According to length contraction, a moving object appears:",
                a: [
                    { text: "Longer in the direction of motion", correct: false },
                    { text: "Shorter in the direction of motion", correct: true },
                    { text: "Wider perpendicular to motion", correct: false },
                    { text: "Unchanged in size", correct: false }
                ]
            },
            {
                q: "The formula for relativistic length is:",
                a: [
                    { text: "L = L₀ / √(1 − v²/c²)", correct: false },
                    { text: "L = L₀ × √(1 − v²/c²)", correct: true },
                    { text: "L = L₀ × v/c", correct: false },
                    { text: "L = L₀ / (v/c)", correct: false }
                ]
            },
            {
                q: "Relativistic momentum is:",
                a: [
                    { text: "p = m₀v", correct: false },
                    { text: "p = m₀v / √(1 − v²/c²)", correct: true },
                    { text: "p = m₀v × √(1 − v²/c²)", correct: false },
                    { text: "p = m₀c²", correct: false }
                ]
            },
            {
                q: "As an object's speed approaches c, its relativistic momentum:",
                a: [
                    { text: "Approaches zero", correct: false },
                    { text: "Remains constant", correct: false },
                    { text: "Increases without bound", correct: true },
                    { text: "Equals its rest mass times c", correct: false }
                ]
            },
            {
                q: "Length contraction only occurs in:",
                a: [
                    { text: "All three spatial dimensions equally", correct: false },
                    { text: "The direction perpendicular to motion", correct: false },
                    { text: "The direction parallel to motion", correct: true },
                    { text: "Time, not space", correct: false }
                ]
            },
            {
                q: "If v = 0, the length contraction formula gives L =",
                a: [
                    { text: "0", correct: false },
                    { text: "L₀ / c", correct: false },
                    { text: "L₀", correct: true },
                    { text: "Infinite", correct: false }
                ]
            },
            {
                q: "What is 'rest mass' (m₀)?",
                a: [
                    { text: "The mass of an object when it is moving at the speed of light", correct: false },
                    { text: "The mass of an object measured in a frame where it is at rest", correct: true },
                    { text: "The mass of an object at infinite speed", correct: false },
                    { text: "The total energy of an object divided by c²", correct: false }
                ]
            },
            {
                q: "In the context of particle accelerators, relativistic effects are important because:",
                a: [
                    { text: "Particles slow down due to friction", correct: false },
                    { text: "The mass and momentum of particles increase significantly at high speeds", correct: true },
                    { text: "Quantum effects dominate at high energies", correct: false },
                    { text: "Protons become neutrons at high speeds", correct: false }
                ]
            },
            {
                q: "According to special relativity, which quantity is invariant (the same for all inertial observers)?",
                a: [
                    { text: "Length of an object", correct: false },
                    { text: "Time interval between two events", correct: false },
                    { text: "Speed of light in a vacuum", correct: true },
                    { text: "Simultaneity of two events", correct: false }
                ]
            },
            {
                q: "Length contraction is a:",
                a: [
                    { text: "Purely optical illusion caused by light travel time", correct: false },
                    { text: "Real physical effect measurable in the reference frame of the observer", correct: true },
                    { text: "Mathematical artefact with no physical meaning", correct: false },
                    { text: "Only relevant for objects made of metal", correct: false }
                ]
            },
            {
                q: "The formula L = L₀√(1 − v²/c²) tells us that as v increases:",
                a: [
                    { text: "L increases", correct: false },
                    { text: "L stays the same", correct: false },
                    { text: "L decreases", correct: true },
                    { text: "L₀ changes", correct: false }
                ]
            }
        ],
        M: [
            {
                q: "A spaceship of proper length 100 m travels at v = 0.8c (γ = 5/3). What is its length as measured by a stationary observer?",
                a: [
                    { text: "80 m", correct: false },
                    { text: "60 m", correct: true },
                    { text: "125 m", correct: false },
                    { text: "133 m", correct: false }
                ]
            },
            {
                q: "In the ladder-barn paradox, a ladder longer than a barn in its rest frame can fit inside the barn because:",
                a: [
                    { text: "The barn expands as the ladder enters it", correct: false },
                    { text: "The ladder contracts in the frame of the barn due to length contraction", correct: true },
                    { text: "The ladder's speed makes it appear shorter in all frames equally", correct: false },
                    { text: "There is a gravitational compression effect", correct: false }
                ]
            },
            {
                q: "The ladder-barn paradox illustrates:",
                a: [
                    { text: "That length contraction is a real physical effect that resolves apparent contradictions between frames", correct: true },
                    { text: "That barn doors never actually close simultaneously in any frame", correct: false },
                    { text: "That special relativity predicts physical impossibilities", correct: false },
                    { text: "That only time dilation, not length contraction, is physically real", correct: false }
                ]
            },
            {
                q: "A proton is accelerated to v = 0.99c (γ ≈ 7.09). Compared to its rest momentum, its relativistic momentum is approximately:",
                a: [
                    { text: "7.09 times greater", correct: true },
                    { text: "0.99 times greater", correct: false },
                    { text: "1.01 times greater", correct: false },
                    { text: "99 times greater", correct: false }
                ]
            },
            {
                q: "Why can no object with mass reach the speed of light?",
                a: [
                    { text: "Air resistance increases infinitely", correct: false },
                    { text: "Relativistic momentum approaches infinity as v → c, requiring infinite energy to accelerate further", correct: true },
                    { text: "Time stops completely at v = c", correct: false },
                    { text: "Length contracts to zero at v = c, destroying the object", correct: false }
                ]
            },
            {
                q: "An observer on the ground measures a spaceship to be 50 m long. The ship travels at 0.6c (γ = 1.25). What is the ship's proper length?",
                a: [
                    { text: "30 m", correct: false },
                    { text: "40 m", correct: false },
                    { text: "50 m", correct: false },
                    { text: "62.5 m", correct: true }
                ]
            },
            {
                q: "Which correctly describes 'relativistic length'?",
                a: [
                    { text: "The length measured in the frame where the object is at rest", correct: false },
                    { text: "The length measured by an observer moving relative to the object", correct: true },
                    { text: "The length after correcting for the speed of light", correct: false },
                    { text: "The average of all observers' measurements", correct: false }
                ]
            },
            {
                q: "In the ladder-barn paradox, the barn doors close simultaneously in:",
                a: [
                    { text: "The ladder's rest frame", correct: false },
                    { text: "The barn's rest frame", correct: true },
                    { text: "All inertial frames", correct: false },
                    { text: "No inertial frame", correct: false }
                ]
            },
            {
                q: "A rod of proper length 2.0 m moves at v = 0.866c (γ = 2). Its measured length is:",
                a: [
                    { text: "4.0 m", correct: false },
                    { text: "1.732 m", correct: false },
                    { text: "1.0 m", correct: true },
                    { text: "0.5 m", correct: false }
                ]
            },
            {
                q: "Which observation from particle accelerators supports relativistic momentum?",
                a: [
                    { text: "Particles emit light as they speed up (Cherenkov radiation)", correct: false },
                    { text: "Particles require increasing amounts of energy per unit speed increase as they approach c", correct: true },
                    { text: "Particles deflect from straight paths at high speeds", correct: false },
                    { text: "Particles fuse at high speeds due to increased mass", correct: false }
                ]
            },
            {
                q: "Length contraction is measured by an observer who is:",
                a: [
                    { text: "At rest relative to the object", correct: false },
                    { text: "Moving relative to the object", correct: true },
                    { text: "Only moving perpendicular to the object", correct: false },
                    { text: "Accelerating toward the object", correct: false }
                ]
            },
            {
                q: "The Lorentz factor γ increases as v increases. This means length contraction:",
                a: [
                    { text: "Decreases as speed increases", correct: false },
                    { text: "Increases as speed increases (greater contraction at higher speeds)", correct: true },
                    { text: "Is constant regardless of speed", correct: false },
                    { text: "Only occurs above v = 0.5c", correct: false }
                ]
            },
            {
                q: "A train of proper length 300 m moves at 0.5c (γ ≈ 1.155). A stationary observer measures its length as approximately:",
                a: [
                    { text: "300 m", correct: false },
                    { text: "260 m", correct: true },
                    { text: "150 m", correct: false },
                    { text: "346 m", correct: false }
                ]
            }
        ],
        H: [
            {
                q: "A cosmic ray muon travelling at 0.998c (γ ≈ 15.8) sees the atmosphere contracted. If the atmosphere is 15 km thick in Earth's frame, how thick does the muon measure it to be?",
                a: [
                    { text: "0.95 km", correct: true },
                    { text: "1.0 km", correct: false },
                    { text: "14.97 km", correct: false },
                    { text: "237 km", correct: false }
                ]
            },
            {
                q: "A spaceship has a proper length of 200 m. An observer measures it to be 100 m. What is the ship's speed?",
                a: [
                    { text: "0.5c", correct: false },
                    { text: "0.707c", correct: false },
                    { text: "0.866c", correct: true },
                    { text: "0.75c", correct: false }
                ]
            },
            {
                q: "In the barn-ladder paradox, why do barn and ladder observers disagree on whether the ladder fits simultaneously?",
                a: [
                    { text: "One frame has gravity and the other does not", correct: false },
                    { text: "Simultaneity is relative: the barn doors close simultaneously in the barn frame but NOT simultaneously in the ladder frame", correct: true },
                    { text: "Length contraction applies to time as well as space in the ladder frame", correct: false },
                    { text: "The ladder observer is accelerating", correct: false }
                ]
            },
            {
                q: "A proton (m₀ = 1.67 × 10⁻²⁷ kg) travels at v = 0.995c (γ ≈ 10). What is its relativistic momentum?",
                a: [
                    { text: "5.0 × 10⁻¹⁸ kg·m/s", correct: false },
                    { text: "1.67 × 10⁻²⁶ kg·m/s", correct: false },
                    { text: "1.67 × 10⁻²⁷ kg·m/s", correct: false },
                    { text: "4.99 × 10⁻¹⁸ kg·m/s", correct: true }
                ]
            },
            {
                q: "Which correctly explains why muon survival is evidence for BOTH time dilation AND length contraction?",
                a: [
                    { text: "Time dilation (Earth frame): muon lives longer; length contraction (muon frame): atmosphere is shorter — both predict the same physical outcome", correct: true },
                    { text: "Only time dilation applies; length contraction is irrelevant here", correct: false },
                    { text: "Only length contraction applies; time dilation doesn't affect charged particles", correct: false },
                    { text: "Both effects add to double the relativistic benefit", correct: false }
                ]
            },
            {
                q: "The relativistic momentum formula reduces to the classical p = m₀v when:",
                a: [
                    { text: "v = c", correct: false },
                    { text: "v >> c", correct: false },
                    { text: "v << c (non-relativistic limit)", correct: true },
                    { text: "m₀ = 0", correct: false }
                ]
            },
            {
                q: "If length contraction applies in the direction of motion, a sphere moving at v = 0.866c would appear to an observer as:",
                a: [
                    { text: "A larger sphere", correct: false },
                    { text: "A sphere (no shape change)", correct: false },
                    { text: "An oblate spheroid (flattened in direction of motion)", correct: true },
                    { text: "A prolate spheroid (elongated in direction of motion)", correct: false }
                ]
            },
            {
                q: "Astronauts travel to a star 40 light-years away at v = 0.995c (γ ≈ 10). In the astronaut's frame, the distance to the star is:",
                a: [
                    { text: "40 light-years", correct: false },
                    { text: "4 light-years", correct: true },
                    { text: "400 light-years", correct: false },
                    { text: "0.4 light-years", correct: false }
                ]
            },
            {
                q: "In the ladder-barn paradox, both frames claim to be correct about simultaneity. Which statement is correct?",
                a: [
                    { text: "The barn observer is wrong; the ladder observer is in the 'true' frame", correct: false },
                    { text: "Both observers are correct within their own frames; simultaneity is frame-dependent", correct: true },
                    { text: "The paradox has no resolution and disproves special relativity", correct: false },
                    { text: "A third observer can determine which frame is 'really' correct", correct: false }
                ]
            }
        ],
        I: [
            {
                q: "A 1000 m spaceship passes a 500 m space station at v = 0.866c (γ = 2). The ship captain claims the ship 'fits inside' the station. This is best explained by:",
                a: [
                    { text: "The station really is longer than 500 m when the ship passes", correct: false },
                    { text: "The events of 'front aligns' and 'back aligns' are NOT simultaneous in all frames — there is no physical paradox", correct: true },
                    { text: "Length contraction is only apparent, not real, so the ship physically does fit", correct: false },
                    { text: "The station's length is undefined in the ship's frame", correct: false }
                ]
            },
            {
                q: "An accelerator boosts a proton (m₀ = 1.67 × 10⁻²⁷ kg) to v = 0.9999c (γ ≈ 70.7). What is the ratio of its relativistic momentum to its classical momentum at that speed?",
                a: [
                    { text: "70.7", correct: true },
                    { text: "1.0", correct: false },
                    { text: "0.9999", correct: false },
                    { text: "4999", correct: false }
                ]
            },
            {
                q: "In a particle accelerator, doubling the kinetic energy of a particle already moving at 0.9c does NOT double its speed. This is because:",
                a: [
                    { text: "The particle hits an energy ceiling set by the accelerator", correct: false },
                    { text: "The Lorentz factor is not linear in speed, so each additional increment of speed requires exponentially more energy", correct: true },
                    { text: "The particle emits radiation equal to the added energy", correct: false },
                    { text: "At v > 0.9c the laws of special relativity no longer apply", correct: false }
                ]
            },
            {
                q: "An observer measures two identical rods, one at rest (2.0 m) and one moving at v = 0.6c. What is the ratio L_moving / L_rest?",
                a: [
                    { text: "0.6", correct: false },
                    { text: "0.8", correct: true },
                    { text: "1.0", correct: false },
                    { text: "1.25", correct: false }
                ]
            },
            {
                q: "A particle's relativistic momentum is observed to be exactly 3 times its classical momentum at the same speed. What is the particle's speed?",
                a: [
                    { text: "v = c/3", correct: false },
                    { text: "v = c/√2 ≈ 0.707c", correct: false },
                    { text: "v = c√(8/9) ≈ 0.943c", correct: true },
                    { text: "v = 0.9c", correct: false }
                ]
            },
            {
                q: "The LHC accelerates protons to 6.5 TeV. The rest mass energy of a proton is 938 MeV. The Lorentz factor γ of these protons is approximately:",
                a: [
                    { text: "700", correct: false },
                    { text: "6930", correct: true },
                    { text: "69300", correct: false },
                    { text: "93800", correct: false }
                ]
            }
        ]
    },

    // Boss 3: Vsauce
    3: {
        E: [
            {
                q: "What does E = mc² state?",
                a: [
                    { text: "Energy equals mass times the speed of sound squared", correct: false },
                    { text: "Energy and mass are equivalent, related by the speed of light squared", correct: true },
                    { text: "Energy is always greater than mass", correct: false },
                    { text: "Mass can never be converted to energy", correct: false }
                ]
            },
            {
                q: "In E = mc², what does 'c' represent?",
                a: [
                    { text: "The speed of sound in air", correct: false },
                    { text: "The speed of light in a vacuum (≈ 3 × 10⁸ m/s)", correct: true },
                    { text: "The speed of the object", correct: false },
                    { text: "The charge of an electron", correct: false }
                ]
            },
            {
                q: "The mass-energy equivalence relationship (ΔE = Δmc²) implies that:",
                a: [
                    { text: "Only moving objects have energy", correct: false },
                    { text: "A small amount of mass corresponds to a very large amount of energy", correct: true },
                    { text: "Energy and mass are completely unrelated", correct: false },
                    { text: "Mass increases linearly with energy", correct: false }
                ]
            },
            {
                q: "Which of the following applications demonstrates mass-energy equivalence?",
                a: [
                    { text: "A pendulum swinging", correct: false },
                    { text: "Nuclear fission, where a small mass loss produces enormous energy", correct: true },
                    { text: "A car accelerating on a highway", correct: false },
                    { text: "A magnet attracting iron filings", correct: false }
                ]
            },
            {
                q: "What is 'rest mass' in the context of E = mc²?",
                a: [
                    { text: "The mass of an object when moving at c", correct: false },
                    { text: "The mass of an object when it is at rest, representing its intrinsic energy content", correct: true },
                    { text: "The mass of an object after losing energy", correct: false },
                    { text: "The mass of photons at rest", correct: false }
                ]
            },
            {
                q: "Nuclear power plants generate energy primarily through:",
                a: [
                    { text: "Chemical reactions that release electrons", correct: false },
                    { text: "Mass-energy conversion: a small mass deficit in nuclear reactions produces large amounts of energy", correct: true },
                    { text: "Kinetic energy of spinning turbines alone", correct: false },
                    { text: "The photoelectric effect on uranium", correct: false }
                ]
            },
            {
                q: "According to special relativity, which of the following has zero rest mass?",
                a: [
                    { text: "Electron", correct: false },
                    { text: "Proton", correct: false },
                    { text: "Photon (light particle)", correct: true },
                    { text: "Neutron", correct: false }
                ]
            },
            {
                q: "If Δm = 1 kg of mass is fully converted to energy, approximately how much energy is released?",
                a: [
                    { text: "3 × 10⁸ J", correct: false },
                    { text: "9 × 10¹⁶ J", correct: true },
                    { text: "1 × 10⁸ J", correct: false },
                    { text: "3 × 10¹⁶ J", correct: false }
                ]
            },
            {
                q: "Which of the following best explains why nuclear weapons are so powerful?",
                a: [
                    { text: "They use chemical reactions that are faster than normal explosives", correct: false },
                    { text: "A tiny mass deficit (Δm) converts to an enormous energy (ΔE = Δmc²) due to c² being very large", correct: true },
                    { text: "They accelerate protons to the speed of light", correct: false },
                    { text: "They split electrons rather than nuclei", correct: false }
                ]
            },
            {
                q: "The equation ΔE = Δmc² was derived from which theory?",
                a: [
                    { text: "Classical Newtonian mechanics", correct: false },
                    { text: "Einstein's special theory of relativity", correct: true },
                    { text: "Maxwell's theory of electromagnetism", correct: false },
                    { text: "Quantum mechanics", correct: false }
                ]
            },
            {
                q: "Which statement about photons (particles of light) is correct?",
                a: [
                    { text: "Photons have rest mass equal to their energy divided by c²", correct: false },
                    { text: "Photons travel at c and have zero rest mass but carry energy and momentum", correct: true },
                    { text: "Photons are slowed by gravity, proving they have mass", correct: false },
                    { text: "Photons cannot carry momentum as they have no mass", correct: false }
                ]
            },
            {
                q: "In the context of special relativity, 'binding energy' refers to:",
                a: [
                    { text: "The kinetic energy of electrons in orbit", correct: false },
                    { text: "The energy equivalent of the mass deficit when nucleons bind into a nucleus", correct: true },
                    { text: "The energy required to move a nucleus from rest", correct: false },
                    { text: "The electrical potential energy between protons", correct: false }
                ]
            }
        ],
        M: [
            {
                q: "The sun loses approximately 4 × 10⁹ kg of mass per second via radiation. Using E = mc², how much power does this represent?",
                a: [
                    { text: "1.2 × 10¹⁸ W", correct: false },
                    { text: "3.6 × 10²⁶ W", correct: true },
                    { text: "4 × 10¹⁷ W", correct: false },
                    { text: "1.8 × 10²⁰ W", correct: false }
                ]
            },
            {
                q: "In nuclear fission of uranium-235, the products have slightly less mass than the original nucleus. This mass deficit:",
                a: [
                    { text: "Is lost to the environment as heat radiation only", correct: false },
                    { text: "Is converted to kinetic energy of the fission products and radiation via E = mc²", correct: true },
                    { text: "Is converted entirely to neutrinos", correct: false },
                    { text: "Has no practical significance", correct: false }
                ]
            },
            {
                q: "The total relativistic energy of an object is E = γm₀c². For a particle at rest (v = 0), γ = 1, so the rest energy is:",
                a: [
                    { text: "0", correct: false },
                    { text: "m₀c", correct: false },
                    { text: "m₀c²", correct: true },
                    { text: "½m₀c²", correct: false }
                ]
            },
            {
                q: "Which of the following physical processes directly demonstrates ΔE = Δmc²?",
                a: [
                    { text: "Combustion of wood", correct: false },
                    { text: "Pair production (gamma ray → electron + positron)", correct: true },
                    { text: "A spring being compressed", correct: false },
                    { text: "Evaporation of water", correct: false }
                ]
            },
            {
                q: "In pair production, a photon creates an electron and a positron. The minimum photon energy required is determined by:",
                a: [
                    { text: "The speed of the photon", correct: false },
                    { text: "The rest mass energy of the electron-positron pair (2m₀c²)", correct: true },
                    { text: "The magnetic field strength in the lab", correct: false },
                    { text: "The temperature of the surrounding medium", correct: false }
                ]
            },
            {
                q: "An electron (m₀ = 9.11 × 10⁻³¹ kg) and a positron annihilate. What is the total energy released?",
                a: [
                    { text: "1.64 × 10⁻¹³ J", correct: true },
                    { text: "8.2 × 10⁻¹⁴ J", correct: false },
                    { text: "9.11 × 10⁻³¹ J", correct: false },
                    { text: "3 × 10⁸ J", correct: false }
                ]
            },
            {
                q: "Which statement about the binding energy of a nucleus is correct?",
                a: [
                    { text: "Binding energy equals the rest mass of the nucleus times c²", correct: false },
                    { text: "The actual mass of a nucleus is slightly LESS than the sum of its individual proton and neutron masses — this deficit is the binding energy", correct: true },
                    { text: "Binding energy is always negative", correct: false },
                    { text: "Adding neutrons always increases binding energy", correct: false }
                ]
            },
            {
                q: "Cosmic rays strike atmospheric nuclei, producing muons. Which relativistic effects explain why muons reach Earth's surface?",
                a: [
                    { text: "Only length contraction in the pion frame", correct: false },
                    { text: "Only time dilation in the muon's rest frame", correct: false },
                    { text: "Time dilation in Earth's frame AND length contraction in the muon's frame — consistent descriptions", correct: true },
                    { text: "Neither; muons are produced close enough to the surface", correct: false }
                ]
            },
            {
                q: "In electron-positron annihilation, two gamma-ray photons are produced. Why two photons?",
                a: [
                    { text: "One photon would violate length contraction", correct: false },
                    { text: "Conservation of momentum requires the two photons to travel in opposite directions", correct: true },
                    { text: "Photons can only be created in pairs due to quantum rules", correct: false },
                    { text: "One photon is for the electron and one for the positron's kinetic energy", correct: false }
                ]
            },
            {
                q: "According to special relativity, particle accelerators cannot accelerate massive particles to c because:",
                a: [
                    { text: "They become too large to fit in the accelerator ring", correct: false },
                    { text: "They must supply increasingly large amounts of energy for smaller and smaller speed increments near c", correct: true },
                    { text: "They exceed c if enough energy is applied", correct: false },
                    { text: "They stop working above v = 0.5c", correct: false }
                ]
            },
            {
                q: "The mass-energy relation implies that chemical energy stored in bonds is:",
                a: [
                    { text: "Unrelated to the mass of the molecule", correct: false },
                    { text: "Associated with a tiny mass difference between reactants and products", correct: true },
                    { text: "Only relevant for nuclear reactions", correct: false },
                    { text: "The dominant form of energy in chemical reactions", correct: false }
                ]
            },
            {
                q: "A stationary particle decays into two fragments. Conservation of energy requires:",
                a: [
                    { text: "M = m1 + m2", correct: false },
                    { text: "Mc² = m1c² + m2c² + KE total", correct: true },
                    { text: "M = m1 + m2 + KE/c²", correct: false },
                    { text: "M > m1 + m2 is impossible", correct: false }
                ]
            },
            {
                q: "Which of the following synthesis statements is CORRECT?",
                a: [
                    { text: "Length contraction, time dilation, and E = mc² are independent phenomena with no common origin", correct: false },
                    { text: "All three — time dilation, length contraction, and E = mc² — arise from the same two postulates of special relativity", correct: true },
                    { text: "E = mc² was derived from Newtonian mechanics, while time dilation requires general relativity", correct: false },
                    { text: "Length contraction and time dilation are approximations; only E = mc² is exact", correct: false }
                ]
            }
        ],
        H: [
            {
                q: "A nuclear reactor converts 0.05% of the mass of its fuel to energy. If 1000 kg of uranium is used, how much energy is released?",
                a: [
                    { text: "4.5 × 10¹³ J", correct: true },
                    { text: "9 × 10¹³ J", correct: false },
                    { text: "1.5 × 10¹⁴ J", correct: false },
                    { text: "4.5 × 10¹⁶ J", correct: false }
                ]
            },
            {
                q: "The total relativistic energy-momentum relation is E² = (pc)² + (m₀c²)². For a photon (m₀ = 0):",
                a: [
                    { text: "E = m₀c²", correct: false },
                    { text: "E = pc", correct: true },
                    { text: "E = p/c", correct: false },
                    { text: "E = p²c", correct: false }
                ]
            },
            {
                q: "An object has rest mass 2 kg. At v = 0.866c (γ = 2), its total relativistic energy is:",
                a: [
                    { text: "1.8 × 10¹⁷ J", correct: false },
                    { text: "3.6 × 10¹⁷ J", correct: true },
                    { text: "9 × 10¹⁶ J", correct: false },
                    { text: "7.2 × 10¹⁷ J", correct: false }
                ]
            },
            {
                q: "In the proton-proton chain fusion in the Sun, ~0.7% of hydrogen mass is converted to energy. Why can't fusion be easily replicated on Earth?",
                a: [
                    { text: "We don't have enough hydrogen", correct: false },
                    { text: "The temperatures and pressures required to overcome electrostatic repulsion between protons are extreme — equivalent to stellar core conditions", correct: true },
                    { text: "Fusion violates conservation of energy on Earth", correct: false },
                    { text: "Fusion only works in zero gravity", correct: false }
                ]
            },
            {
                q: "In pair production (γ → e⁺ + e⁻), if the gamma photon has energy 2.05 MeV and the rest mass energy of each electron is 0.511 MeV, how much kinetic energy do the pair share in total?",
                a: [
                    { text: "2.05 MeV", correct: false },
                    { text: "1.028 MeV total kinetic energy", correct: true },
                    { text: "0.511 MeV each", correct: false },
                    { text: "0 — all energy goes to rest mass", correct: false }
                ]
            },
            {
                q: "The mass of a helium-4 nucleus is 6.6447 × 10⁻²⁷ kg. The combined mass of 2 protons and 2 neutrons is 6.6951 × 10⁻²⁷ kg. The binding energy of helium-4 is approximately:",
                a: [
                    { text: "4.53 × 10⁻¹² J", correct: true },
                    { text: "4.53 × 10⁻¹³ J", correct: false },
                    { text: "1.51 × 10⁻¹² J", correct: false },
                    { text: "3.02 × 10⁻¹² J", correct: false }
                ]
            },
            {
                q: "Special relativity predicts that as a particle's kinetic energy approaches infinity, its speed approaches (but never reaches) c. What does this imply about the nature of c?",
                a: [
                    { text: "c is just a practical engineering limit", correct: false },
                    { text: "c is the fundamental speed limit of the universe, encoded in the structure of spacetime itself", correct: true },
                    { text: "c could be exceeded with a different type of energy source", correct: false },
                    { text: "c is only a limit for protons; other particles could exceed it", correct: false }
                ]
            },
            {
                q: "An object's kinetic energy in special relativity is KE = (γ − 1)m₀c². At v = 0.6c (γ = 1.25), the kinetic energy as a fraction of rest energy m₀c² is:",
                a: [
                    { text: "0.6", correct: false },
                    { text: "0.36", correct: false },
                    { text: "0.25", correct: true },
                    { text: "0.5", correct: false }
                ]
            }
        ],
        I: [
            {
                q: "A proton (rest mass energy = 938.3 MeV) is accelerated to a total energy of 9383 MeV (γ = 10). What is its kinetic energy?",
                a: [
                    { text: "938.3 MeV", correct: false },
                    { text: "8444.7 MeV", correct: true },
                    { text: "9383 MeV", correct: false },
                    { text: "18766 MeV", correct: false }
                ]
            },
            {
                q: "Using E² = (pc)² + (m₀c²)², a particle has momentum p = 1200 MeV/c and rest mass energy m₀c² = 938 MeV. Its total energy E is closest to:",
                a: [
                    { text: "262 MeV", correct: false },
                    { text: "2138 MeV", correct: false },
                    { text: "1543 MeV", correct: true },
                    { text: "1200 MeV", correct: false }
                ]
            },
            {
                q: "The Higgs field gives elementary particles their rest mass. Under E = mc², what does it mean for a particle to acquire mass via the Higgs mechanism?",
                a: [
                    { text: "The particle slows down from c to sub-c speeds, and the energy difference becomes its rest mass", correct: false },
                    { text: "The particle's interaction with the Higgs field introduces a rest-energy term m₀c² into its energy-momentum relation, manifesting as inertia", correct: true },
                    { text: "The particle gains mass from photons that hit it in the Higgs field", correct: false },
                    { text: "The particle becomes a different type of boson", correct: false }
                ]
            },
            {
                q: "Two photons each of energy 0.511 MeV collide head-on to produce an electron-positron pair. The condition is satisfied because:",
                a: [
                    { text: "Their combined energy 1.022 MeV exactly equals the rest mass energy of the pair", correct: false },
                    { text: "The photons' momenta cancel in the centre-of-mass frame, meaning all energy is available for rest mass creation", correct: false },
                    { text: "Pair production requires photons above 1.022 MeV each", correct: false },
                    { text: "Both A and B are correct and consistent", correct: true }
                ]
            },
            {
                q: "A hypothetical matter-antimatter rocket converts 100% of fuel mass to energy. Using ΔE = Δmc², if 1 kg of fuel is fully annihilated:",
                a: [
                    { text: "Lower energy output than chemical rockets per kg", correct: false },
                    { text: "Equal energy output to nuclear rockets per kg", correct: false },
                    { text: "The absolute theoretical maximum per unit mass — no physical propulsion system can exceed it", correct: true },
                    { text: "Limited by the speed of sound in the exhaust", correct: false }
                ]
            },
            {
                q: "In special relativity, for a particle at rest decaying into two massless photons, conservation of four-momentum requires:",
                a: [
                    { text: "The photons travel in the same direction", correct: false },
                    { text: "The photons have equal and opposite momenta, each with energy m₀c²/2", correct: true },
                    { text: "The photons have zero total energy", correct: false },
                    { text: "The decay is only possible if the original particle is moving", correct: false }
                ]
            },
            {
                q: "The relativistic kinetic energy formula KE = (γ − 1)m₀c² reduces to ½m₀v² at low speeds. Which binomial approximation of γ correctly recovers this?",
                a: [
                    { text: "γ ≈ 1 + v/c, giving KE ≈ m₀vc", correct: false },
                    { text: "γ ≈ 1 + ½(v²/c²), giving KE = (γ−1)m₀c² ≈ ½m₀v²", correct: true },
                    { text: "γ ≈ 1 − ½(v²/c²), giving KE ≈ −½m₀v²", correct: false },
                    { text: "γ ≈ v/c, giving KE ≈ m₀v²/c − m₀c", correct: false }
                ]
            }
        ]
    }
};
