const roster = [
    {
        name: 'Anwar',
        grades: [97, 87, 99]
    },
    {
        name: 'Sophie',
        grades: [75, 22, 85]
    },
    {
        name: 'Ron',
        grades: [64, 77, 90]
    }
];
const teacher = 'Harriet'

/* A student is passing if their GPA is > 70 */
function calculateGPA(grades) {
    return Math.floor((grades.reduce((currSum, currValue) => currSum + currValue)) / grades.length);
}

// Your code goes here


function Student(name, grades) {
    this.name = name;
    this.grades = grades;
}
Student.prototype.getGrades = function () {
    return this.grades;
};
Student.prototype.checkIsPassing = function () {
    return calculateGPA(this.grades) > 70;
};

function CourseRoster(roster, teacher) {
    this.roster = roster;
    this.teacher = teacher;
}

CourseRoster.prototype.getRoster = function () {
    return this.roster.map((student) => student.name).toString();
};

CourseRoster.prototype.returnGraduatingStudents = function () {
    return this.roster.filter((student) => {
        if (student.checkIsPassing()) {
            return student;
        }
    }).map((student)=>{
        return student.name;
    });
};

const studentArray = roster.map(student => new Student(student.name, student.grades));
const result = new CourseRoster([...studentArray], teacher);

console.log(studentArray);
console.log(result);
console.log(result.getRoster());
console.log(result.returnGraduatingStudents());
