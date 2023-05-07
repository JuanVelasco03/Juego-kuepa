export const resetDefaultValue = (personRandomLevel: Array<any>, numItems: number) => {
    if (numItems == 2) {
        return [
            {
                element: personRandomLevel[0][0].element, id: personRandomLevel[0][0].id,
                gender: personRandomLevel[0][0].gender, list: 0
            },
            {
                element: personRandomLevel[0][1].element,
                id: personRandomLevel[0][1].id, list: 0
            }
        ]
    } else if (numItems == 3) {
        return [
            {
                element: personRandomLevel[1][0].element,
                id: personRandomLevel[1][0].id,
                gender: personRandomLevel[0][0].gender,
                list: 0
            },
            {
                element: personRandomLevel[1][1].element,
                id: personRandomLevel[1][1].id, list: 0
            },
            {
                element: personRandomLevel[1][2].element,
                id: personRandomLevel[1][2].id,
                list: 0
            },
        ]
    } else {
        return [
            {
                element: personRandomLevel[2][0].element,
                id: personRandomLevel[2][0].id,
                gender: personRandomLevel[2][0].gender,
                list: 0
            },
            {
                element: personRandomLevel[2][1].element,
                id: personRandomLevel[2][1].id, list: 0
            },
            {
                element: personRandomLevel[2][2].element,
                id: personRandomLevel[2][2].id, list: 0
            },
            {
                element: personRandomLevel[2][3].element,
                id: personRandomLevel[2][3].id, list: 0
            }
        ]
    }

}