import { useState } from 'react'
import { getRandomPersonInformationLevel1 } from '../../services/getRandomPersonInformationLevel1.ts'
import { Stage } from '../Helps/Stage.tsx'
import {informationL2} from '../../functions/getInformation.ts'
import { nextLevel } from '../../functions/nextLevel.ts'

interface IProps {
    exercise: number,
    setExercise: React.Dispatch<React.SetStateAction<number>>
}

const personRandom = getRandomPersonInformationLevel1(informationL2)


export const Level2 = ({ exercise, setExercise }: IProps) => {
    // const personRandomLevel2 = getRandomPersonInformation();
    const [listRandomLevel2, setListRandomLevel2] = useState<Array<any | undefined>>(personRandom[1])

    const handleClick = () => {
        const validateLevel2 = listRandomLevel2[0].list === 4 && listRandomLevel2[1].list === 2 && listRandomLevel2[2].list == 3
        nextLevel(validateLevel2, exercise, setExercise, informationL2, setListRandomLevel2, personRandom, 3, 1)
    }


    return (
        <>
            <div className='App'>
                <>
                    <Stage listRandom={listRandomLevel2} setListRandom={setListRandomLevel2} nextLevel={handleClick} exercise={exercise} level={2} stage={10} />
                </>
            </div>
        </>
    )
}



