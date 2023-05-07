import { useState } from 'react'
import { Level1 } from './Level1/Level1.tsx'
import { Level2 } from './Level2/Level2.tsx'
import { Level3 } from './Level 3/Level3.tsx'

function Levels() {
    const [exercise, setExercise] = useState<number>(1)

    return (
        <>
            <div className='App'>
                {exercise <= 5 ? (
                    <>
                        <Level1 exercise={exercise} setExercise={setExercise} />
                    </>
                ) :
                    ""
                }
                {exercise >= 6 && exercise <= 10 ? (
                    <>
                        <Level2 exercise={exercise} setExercise={setExercise} />
                    </>
                ) :
                    ""
                }
                { exercise >= 11 && exercise <= 15 ? (
                    <>
                        <Level3 exercise={exercise} setExercise={setExercise} />
                    </>
                ) :
                    ""
                }
            </div>
        </>
    )
}

export default Levels