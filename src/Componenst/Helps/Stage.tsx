import { IdentityCard } from './IdentityCard.tsx'
import { IRandomPersonInformation } from '../../types/types'
import { Words } from './Words.tsx'
import '../../css/identity_card.css'

interface IProps {
    listRandom: IRandomPersonInformation[],
    setListRandom: React.Dispatch<React.SetStateAction<IRandomPersonInformation[]>>,
    nextLevel: () => void,
    exercise: number,
    level: number,
    stage: number
}


export const Stage = ({ listRandom, setListRandom, nextLevel, exercise, level, stage}: IProps) => {
    return (
        <>
            <div className='App'>
                <div className='text'>
                    <p>Completa la tarjeta de identidad arrastrando las palabras de la derecha hacia donde le corresponde en la imagen de la tarjeta.</p>
                </div>
                <div className='indentity-exercices'>
                    <h1>Nivel {level}</h1>
                    <h2>{`${exercise} de ${stage} ejercicios`}</h2>
                </div>
                <>
                    <div className='game' >
                        <IdentityCard listRandom={listRandom} setListRandom={setListRandom} />
                        <Words listRandom={listRandom} setListRandom={setListRandom} nextLevel={nextLevel} exercise={exercise} />
                    </div>
                </>
            </div>
        </>
    )
}


