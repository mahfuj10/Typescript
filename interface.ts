interface Player {
    name: string,
    club: string,
    salary: number,
    wife?: string
}

const messy:Player = {
    name: 'L messey',
    club: 'xyz',
    salary: 120000,
    wife: 'Nosimon ara begum'
}

const hannan:Player = {
    name: "A Hannan",
    club: "dhaka",
    salary: 2000
}


interface Employee {
    name: string,
    designation: string,
    salary: number
    age: number
}

interface Developer extends Employee {
    language: string,
    codeEditor: string,
    typingSpeed: number
}

const zuku: Developer = {
    name: 'Zukerberg',
    salary: 1100,
    age: 31,
    designation: 'Facebooker',
    language: 'js',
    codeEditor: 'VS Code',
    typingSpeed: 65
}