class Student {
    constructor(name, age, rollNo) {
        this.name = name;
        this.age = age;
        this.rollNo = rollNo;
    }
}

const student = new Student("John", 12, 1);
const student1 = new Student("Jack", 13, 2);

console.log(student);
console.log(student1);