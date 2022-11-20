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

const student = new Student("John", 12, 1);
const student1 = new Student("Jack", 13, 2);

student.print("Tinker School");
student1.print("Bellfoyle School");