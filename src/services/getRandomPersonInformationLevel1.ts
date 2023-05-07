export const getRandomPersonInformationLevel1 = (information:any)=> {

    const removeRandom = (array: any) => {
        while (array.length) {
            const random = Math.floor(Math.random() * array.length);
            const el = array.splice(random, 1)[0];
            return el
        }
    };

    const randomPerson = removeRandom(information.names)
    const randomSurName = removeRandom(information.surNames)
    const randomAge = removeRandom(information.ages)


    const data1 = [
        {
            id: "nationality",
            element: randomPerson.nationality,
            gender: randomPerson.gender,
            list: 0
        },
        {
            id: "age",
            element: randomAge.age,
            list: 0
        }
    ]

    const data2 = [
        {
            id: "nationality",
            element: randomPerson.nationality,
            gender: randomPerson.gender,
            list: 0
        },
        {
            id: "surName",
            element: randomSurName.surName,
            list: 0
        },
        {
            id: "age",
            element: randomAge.age,
            list: 0
        }
    ]

    const data3 = [
        {
            id: "nationality",
            element: randomPerson.nationality,
            gender: randomPerson.gender,
            list: 0
        },
        {
            id: "surName",
            element: randomSurName.surName,
            list: 0
        },
        {
            id: "age",
            element: randomAge.age,
            list: 0
        },
        {
            id: "name",
            element: randomPerson.name,
            list: 0
        }
    ]

    return [data1, data2, data3];
}