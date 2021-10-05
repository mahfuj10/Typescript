"use strict";
var students = {
    name: 'kamal hussain',
    age: 114,
    salary: 56660
};
var empolye = {
    name: 'solaiman',
    age: 43,
    salary: 100000
};
function getSalary(player) {
    return player.salary;
}
getSalary({ name: 'kuddus', salary: 50 });
function getSalary2(player) {
    return player.salary;
}
