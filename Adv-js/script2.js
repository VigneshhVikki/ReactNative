class Student {
    constructor(name, age, rollNo) {
        this.name = name;
        this.age = age;
        this.rollNo = rollNo;
    }
    print(schoolName) {
        console.log(this.name + " age is " + this.age + "is from " + schoolName);
    }
}

class School extends Student{
    constructor(name,student_name,student_age,student_rollNo) {
        super(student_name,student_age,student_rollNo);
        this.schoolName = name;

    }
}

const student1 = new School("Jose School", "John",14,1);

console.log(student1);