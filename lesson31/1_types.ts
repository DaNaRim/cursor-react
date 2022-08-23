const loading: boolean = false

const int: number = 42
const float: number = 4.2
const num: number = 3e10

const message: string = "Typescript Lecture"

const numberArray: number[] = [1, 1, 2, 4, 5, 8, 13]
const numberArray2: Array<number> = [1, 1, 2, 4, 5, 8, 13]

const words: string[] = ["Hello", "Typescript"]

const users: {login: string, password: string}[] = [
    {login: "login", password: "12332"},
    {login: "login", password: "12332"},
]

//Tuple
const concat: [string, number] = ["ABCD", 12345]

let variable: any = 42
variable = "New String"
variable = []

function sayHello(name: string): void {
    console.log("".concat(name, " hello"))
}

sayHello("Nikita")

function throwError(message: string): never {
    throw new Error(message)
}

function infinite(): never {
    while (true) {

    }
}

type Login = string
const login: Login = "admin"

type SUB_TYPE = "ASD" | "QWE"
const tt: SUB_TYPE = "ASD"

type ID = string | number | []
const id1: ID = 1
const id2: ID = "12"
const id3: ID = []

type SomeType = string | null | undefined