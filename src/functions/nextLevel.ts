import { alertWinLevel } from "./alertWinLevel"
import Swal from "sweetalert2"
import { getRandomPersonInformationLevel1 } from "../services/getRandomPersonInformationLevel1"
import { resetDefaultValue } from "../services/resetDefaultValue"

export const nextLevel = (validacion: boolean, exercise: number, setExercise: any, information: any, setListRandom: any, personRandom: any, numData: number, numberList: number) => {

    if (exercise >= 15 && validacion) {
        Swal.fire({
            icon: 'success',
            title: 'Felicidades!',
            text: 'Acabas de completar los 15 ejercicios de los 3 niveles, da click en ok para volver a empezar'
        }).then(res => {
            if (!res.isConfirmed || res.isConfirmed) {
                setExercise(1)
            }
        })
    } else {
        if (validacion) {
            setExercise(exercise + 1)
            if (exercise == 10 || exercise == 5) {
                alertWinLevel("Has pasado a la siguiente fase, esta será un poco mas dificíl")
            } else {
                Swal.fire(
                    'Buen trabajo',
                    `Has pasado al al siguiente ejercicio`,
                    'success'
                ).then(res => {
                    if (!res.isConfirmed || res.isConfirmed) {
                        // setListRandomLevel1(getRandomPersonInformationLevel1(informationL1))
                        const personRandomLevel = getRandomPersonInformationLevel1(information)
                        setListRandom(personRandomLevel[numberList])
                    }
                })
            }
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Respuesta Incorrecta!',
                text: 'Intentalo de nuevo!'
            }).then(res => {
                if (!res.isConfirmed || res.isConfirmed) {
                    setListRandom(resetDefaultValue(personRandom, numData));
                }
            })
        }
    }

}