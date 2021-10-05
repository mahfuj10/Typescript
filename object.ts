type data = {
    name:string,
    age:number,
    salary:number
}

const students:data = {
    name: 'kamal hussain',
    age: 114,
    salary: 56660
}

const empolye:{ name:string, age:number, salary:number } = {
    name:'solaiman',
    age:43,
    salary: 100000
}



function getSalary(player: { name: string, salary: number }): number {
    return player.salary;
}

getSalary({ name: 'kuddus', salary: 50 });

function getSalary2(player: data): number {
    return player.salary;
}