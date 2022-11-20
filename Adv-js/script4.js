function Student(name,age,rollNo){
    this.name= name;
    this.age= age;
    this.rollNo = rollNo;
}
Student.prototype.print = function () {
    console.log(this.name + " studies well");
};

const student1 = new Student("John", 14, 1);
const student2 = new Student("Jacob", 13, 2);


student1.print();
student2.print();