import { useState } from 'react'
import { getRandomPersonInformationLevel1 } from '../../services/getRandomPersonInformationLevel1.ts'
import { Stage } from '../Helps/Stage.tsx'
import { informationL1} from '../../functions/getInformation.ts'
import { nextLevel } from '../../functions/nextLevel.ts'

interface IProps {
    exercise: number,
    setExercise: React.Dispatch<React.SetStateAction<number>>
}

const personRandom = getRandomPersonInformationLevel1(informationL1)


export const Level1 = ({ exercise, setExercise }: IProps) => {
    // const personRandomLevel2 = getRandomPersonInformation();
    const [listRandomLevel1, setListRandomLevel1] = useState<Array<any>>(personRandom[0])

    const handleClick = () => {
        const validateLevel1 = listRandomLevel1[1].list === 3 && listRandomLevel1[0].list === 4
        nextLevel(validateLevel1, exercise, setExercise, informationL1, setListRandomLevel1, personRandom, 2, 0)
    }


    return (
        <>
            <div className='App'>
                <>
                    <Stage listRandom={listRandomLevel1} setListRandom={setListRandomLevel1} nextLevel={handleClick} exercise={exercise} level={1} stage={5} />
                </>
            </div>
        </>
    )
}



