

class Student {
    constructor(name) {

        this.name = name
    }
}
Student.prototype.printdetail = function () {
    console.log(`Hi, my name is ${this.name}`);
}

const student = new Student("mithun")
student.printdetail()
