/* eslint-disable max-lines-per-function */
/*
Create a school object. The school object uses the student object from the previous exercise. It has methods that use and update information about the student. Be sure to check out the previous exercise for the other arguments that might be needed by the school object. Implement the following methods for the school object:

addStudent: Adds a student by creating a new student and adding the student to a collection of students. The method adds a constraint that the year can only be any of the following values: '1st', '2nd', '3rd', '4th', or '5th'. Returns a student object if year is valid otherwise it logs "Invalid Year".
enrollStudent: Enrolls a student in a course.
addGrade: Adds the grade of a student for a course.
getReportCard: Logs the grades of a student for all courses. If the course has no grade, it uses "In progress" as the grade.
courseReport: Logs the grades of all students for a given course name. Only student with grades are part of the course report.

*/
function createStudent(name, year) {
  let student = {
    name,
    year,
    courses: [],
    notes: {},

    info() {
      return `${this.name} is a ${year} year student`;
    },

    listCourses() {
      return this.courses;
    },

    addCourse(course) {
      this.courses.push(course);
    },

    addNote(code, note) {
      if (!this.notes.hasOwnProperty(code)) {
        this.notes[code] = [];
      }
      this.notes[code].push(note);
    },

    updateNote(code, note) {
      this.notes[code] = [note];
    },

    viewNotes() {
      Object.keys(this.notes).forEach(code => {
        let course = this.courses.find(course => course.code === Number(code));
        console.log(`${course.name}: ${this.notes[code].join('; ')}`);
      });
    },
  };

  return student;
}


let school = {
  students: {},
  courses: {},

  addStudent(name, year) {
    const VALID_YEARS = ['1st', '2nd', '3rd', '4th', '5th'];
    if (VALID_YEARS.includes(year)) {
      let student = createStudent(name, year);
      this.students[name] = student;
      return student;
    } else {
      console.log("Invalid Year");
    }
    return null;
  },

  enrollStudent(student, course) {
    student.addCourse(course);
    this.courses[course.name] = course;
  },

  addGrade(student, courseName, grade) {
    let course = student.courses.find(course => course.name === courseName);
    course.grade = grade;
  },

  getReportCard(student) {
    student.listCourses().forEach(course => {
      if (course.hasOwnProperty('grade')) {
        console.log(`${course.name}: ${course.grade}`);
      } else {
        console.log(`${course.name}: In progress`);
      }
    });
  },

  courseReport(courseName) {
    if (!this.courses.hasOwnProperty(courseName)) return undefined;

    let grades = [];

    console.log(`=${courseName} Grades=`);
    Object.keys(this.students).forEach(studentName => {
      let foundCourse = this.students[studentName]
        .listCourses()
        .find(course => course.name === courseName) || {};
      if (foundCourse.hasOwnProperty('grade')) {
        grades.push(foundCourse.grade);
        console.log(`${studentName}: ${foundCourse.grade}`);
      }
    });

    if (grades.length !== 0) {
      let courseAverage = Math.floor(grades
        .reduce((acc, curr) => acc + curr, 0) / grades.length);

      console.log('---');
      console.log(`Course Average: ${courseAverage}`);
    }

  }

};

let foo = school.addStudent('foo', '3rd');
school.enrollStudent(foo, { name: 'Math', code: 101 });
school.enrollStudent(foo, { name: 'Advanced Math', code: 102 });
school.enrollStudent(foo, { name: 'Physics', code: 202 });
school.addGrade(foo, 'Math', 95);
school.addGrade(foo, 'Advanced Math', 90);
// school.getReportCard(foo);

let bar = school.addStudent('bar', '1st');
school.enrollStudent(bar, { name: 'Math', code: 101 });
school.addGrade(bar, 'Math', 91);
// school.getReportCard(bar);

let qux = school.addStudent('qux', '2nd');
school.enrollStudent(qux, { name: 'Math', code: 101 });
school.enrollStudent(qux, { name: 'Advanced Math', code: 102 });
school.addGrade(qux, 'Math', 93);
school.addGrade(qux, 'Advanced Math', 90);
// school.getReportCard(qux);

// console.log(foo);
// console.log(bar);
// console.log(qux);

school.courseReport('Math');
school.courseReport('Advanced Math');
school.courseReport('Physics');