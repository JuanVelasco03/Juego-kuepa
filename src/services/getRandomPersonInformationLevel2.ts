import { informationL1 as information } from '../functions/getInformation.ts'
import { IRandomPersonInformation } from '../types/types';

export const getRandomPersonInformationLevel1 = ():IRandomPersonInformation[] => {
        const randomPerson = information.nombres[Math.floor(Math.random() * information.nombres.length)]
        const randomSurName = information.apellidos[Math.floor(Math.random() * information.apellidos.length)]
        const randomAge = information.edades[Math.floor(Math.random() * information.edades.length)];
        const nacionalidad = { nacionalidad: "Dominicano", genero: "Masculino"}

    
        if (randomPerson.nombre === "Mariela" || randomPerson.nombre === "Alejandra") {
            nacionalidad.genero = "Femenino"
            nacionalidad.nacionalidad = "Dominicana"
        }
        const data:IRandomPersonInformation[] = [
            {
                id: "name",
                element: randomPerson.nombre,
                list: 0
            },
            {
                id: "nationality",
                element: nacionalidad.nacionalidad,
                list: 0
            },
            {
                id: "surName",
                element: randomSurName.apellido,
                list: 0
            },
            {
                id: "age",
                element: randomAge.edad,
                list: 0
            }
        ]
        
    return data;
}
