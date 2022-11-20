let tempName;

class Student {
    constructor(name, age, rollNo) {
        this.name = name;
        this.age = age;
        this.rollNo = rollNo;
        tempName = "Joker"
    }
}

const student1 = new Student("John", 14, 1);

console.log(tempName);