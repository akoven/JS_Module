const Person = require('./person');//pull this class in if it's in a different folder

class Student extends Person{
  constructor(firstName,lastName,major, GPA){
    super(firstName, lastName);//the parameters are the variables that we're inheriting from the parent class
    this.major = major;
    this.GPA = GPA;
  }

  static compareGPA(student1,student2){
    if(student1 instanceof Student && student2 instanceof Student){
      if(student1.GPA > student2.GPA){
        return `${student1.firstName} ${student1.lastName} has the higher GPA.`;
      }else{
        return `${student2.firstName} ${student2.lastName} has the higher GPA.`;
      }
    }

    if(student1.GPA === student2.GPA){
      return 'both students have the same GPA';
    }
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}
