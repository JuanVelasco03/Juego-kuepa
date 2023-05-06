import { useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { IdentityCard } from './IdentityCard.tsx'
import { getRandomPersonInformation } from '../../services/getRandomPersonInformation.ts'
import { Words } from './Words.tsx'
import '../../css/identity_card.css'



function Level1() {
    const personRandom = getRandomPersonInformation();
    const [listRandom, setListRandom] = useState(personRandom)
    const [exercise, setExercise] = useState(1)

    const winLevel = (title: string) => {
        Swal.fire(
            'Buen trabajo',
            `${title}`,
            'success'
        )
    }

    const nextLevel = () => {
        if (listRandom[0].list == 4 && listRandom[1].list == 3) {
            setExercise(exercise + 1)
            setListRandom(personRandom)
            if (exercise == 5) {
                winLevel("Has pasado a la siguiente fase, esta sera un poco mas dificil")
            } else {
                winLevel("Has pasado al siguiente ejercicio, preparate")
            }
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Respuesta Incorrecta!',
                text: 'Intentalo de nuevo!'
            })
        }
    }

    return (
        <>
            <div className='App'>
                <div className='text'>
                    <p>Completa la tarjeta de identidad arrastrando las palabras de la derecha hacia donde le corresponde en la imagen de la tarjeta.</p>
                </div>
                {

                    exercise === 1 && (
                        <>
                            <p>"Ejercicio 1"</p>
                            <div className='game' >
                                <IdentityCard listRandom={listRandom} setListRandom={setListRandom} />
                                <Words listRandom={listRandom} setListRandom={setListRandom} nextLevel={nextLevel} exercise={exercise} />
                            </div>
                        </>
                    )
                }
                {
                    exercise === 2 && (
                        <div className='game' >
                            <IdentityCard listRandom={listRandom} setListRandom={setListRandom} />
                            <Words listRandom={listRandom} setListRandom={setListRandom} nextLevel={nextLevel} exercise={exercise} />
                        </div>
                    )
                }
                {
                    exercise === 3 && (
                        <div className='game' >
                            <IdentityCard listRandom={listRandom} setListRandom={setListRandom} />
                            <Words listRandom={listRandom} setListRandom={setListRandom} nextLevel={nextLevel} exercise={exercise} />
                        </div>
                    )
                }
                {
                    exercise === 4 && (
                        <div className='game' >
                            <IdentityCard listRandom={listRandom} setListRandom={setListRandom} />
                            <Words listRandom={listRandom} setListRandom={setListRandom} nextLevel={nextLevel} exercise={exercise} />
                        </div>
                    )
                }
                {
                    exercise === 5 && (
                        <div className='game' >
                            <IdentityCard listRandom={listRandom} setListRandom={setListRandom} />
                            <Words listRandom={listRandom} setListRandom={setListRandom} nextLevel={nextLevel} exercise={exercise} />
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Level1


