import { information } from '../functions/getInformation.ts'

export interface IRandomPersonInformation { 
    id: string,
    element: string,
    gender?: string,
    list: number,
}

export const getRandomPersonInformation = ():IRandomPersonInformation[] => {
        const randomPerson = information.nombres[Math.floor(Math.random() * information.nombres.length)]
        // const randomSurName = information.apellidos[Math.floor(Math.random() * information.apellidos.length)]
        const randomAge = information.edades[Math.floor(Math.random() * information.edades.length)];
        const nacionalidad = { nacionalidad: "Dominicano", genero: "Masculino"}
    
        if (randomPerson.nombre === "Mariela" || randomPerson.nombre === "Alejandra") {
            nacionalidad.genero = "Femenino"
            nacionalidad.nacionalidad = "Dominicana"
        }
        const data:IRandomPersonInformation[] = [
            {
                id: "nationality",
                element: nacionalidad.nacionalidad,
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
