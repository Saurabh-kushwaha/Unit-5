function Teacher(age, gender) {
    this.age = age;
    this.gender = gender;
}
// 1st 
function Person(age, gender, name, subject) {
    Teacher.call(this, age, gender);
    this.name = name;
    this.subject = subject;
}
const teacher_1 = new Person(21, "male", "Chitransh", "math");
 console.log(teacher_1);
// 2nd
function Person(age, gender, name, subject) {
    Teacher.apply(this, [age, gender]);
    this.name = name;
    this.subject = subject;
}
const teacher_2 = new Person(18, "female", "Chitranshi", "english");
 console.log(teacher_2);
// 3rd
function Person(age, gender, name, subject) {
    const x = Teacher.bind(this, age, gender);
    x()
    this.name = name;
    this.subject = subject;
}
const teacher_3 = new Person(34, "male", "Chitra", "hindi");
console.log(teacher_3);