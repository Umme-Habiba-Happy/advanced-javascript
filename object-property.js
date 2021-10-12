const students = [
    { id: 21, name: 'omar sunny' },
    { id: 31, name: ' manna' },
    { id: 41, name: 'moyuri' },
    { id: 51, name: 'deepjol' }
];

// for (let i = 0; i < students.length; i++) {
 
//     const output = []
//     const object = students[i].name;
//     output.push(object);
//     console.log(output);
//     // console.log(object.name);

//     // console.log(students[i].name)


// }



const names = students.map(s => s.name);
console.log(names);


const id = students.map (s => s.id);
console.log(id);
const bigger = students.filter(s=> s.id>40);
console.log(bigger);
const smaller = students.find(s => s.id<40);
console.log(smaller);
