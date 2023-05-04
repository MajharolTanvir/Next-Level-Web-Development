// Spread operator with generic constraints

interface MandatoryInterface {
    name: string;
    age: number;
    salary: number;
}

const addMeInMyCrushMind = <T extends MandatoryInterface>(myInfo: T) => {
    const crush = "Kate winslet"
    const newData = { ...myInfo, crush } 
    return newData
}

type MyInfoType = {
    name: string,
    age: number,
    salary: number
    other?: boolean
    other2: null
}

const myInfo: MyInfoType = {
    name: "Persian",
    age: 100,
    salary: 10000000,
    other: false,
    other2: null
}

const result5 = addMeInMyCrushMind<MyInfoType>(myInfo)