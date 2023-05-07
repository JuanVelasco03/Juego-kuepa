import { useState } from 'react'
import { getRandomPersonInformationLevel1 } from '../../services/getRandomPersonInformationLevel1.ts'
import { Stage } from '../Helps/Stage.tsx'
import {informationL3 } from '../../functions/getInformation.ts'
import { nextLevel } from '../../functions/nextLevel.ts'

interface IProps {
    exercise: number,
    setExercise: React.Dispatch<React.SetStateAction<number>>
}

const personRandom = getRandomPersonInformationLevel1(informationL3)

export const Level3 = ({ exercise, setExercise }: IProps) => {
    // const personRandomLevel2 = getRandomPersonInformation();
    const [listRandomLevel3, setListRandomLevel3] = useState<Array<any | undefined>>(personRandom[2])

    const handleClick = () => {
        const validateLevel3 = listRandomLevel3[0].list == 4 && listRandomLevel3[1].list == 2 && listRandomLevel3[2].list == 3 && listRandomLevel3[3].list == 1
        nextLevel(validateLevel3, exercise, setExercise, informationL3, setListRandomLevel3, personRandom, 4, 2)
    }

    return (
        <>
            <div className='App'>
                <>
                    <Stage listRandom={listRandomLevel3} setListRandom={setListRandomLevel3} nextLevel={handleClick} exercise={exercise} level={3} stage={15} />
                </>
            </div>
        </>
    )
}