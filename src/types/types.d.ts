export interface IRandomPersonInformation { 
    id: string,
    element?: string,
    gender?: string,
    list: number,
    
}

export interface IInformation {
    names: {[]},
    surNames: {[]},
    ages: {[]},
    nationalities: {[]}
}

export interface IResetValue{
    personRandomLevel: any
}

export interface IDefaultData {
    element: string,
    id: string,
    gender?: string,
    list: number
}