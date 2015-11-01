/**
 * Represents Session class
 * @param {Student} student defines student
 * @param {number} examsAmount define amount of exams
 * @param {number} labsPerExam defines amount of labs per exam
 * @constructor
 */
function Session(student, examsAmount, labsPerExam) {

    this.student = student || null;
    this.examsAmount = examsAmount || 0;
    this.labsPerExam = labsPerExam || 0;

    /**
     * begins session
     */
    this.begin = function () {
        passExams(this.student, this.examsAmount, this.labsPerExam);
    };

    /**
     * makes student pass exams
     * @param {Student} student defines student
     * @param {number} examsAmount define amount of exams
     * @param {number} labsPerExam defines amount of labs per exam
     */
    var passExams = function (student, examsAmount, labsPerExam) {
        for (var i = 0; i < examsAmount; i++) {
            makeLabs(student, labsPerExam);
            student.passExam();

        }
    };
    /**
     * makes student make labs
     * @param {Student} student defines student
     * @param {number} labsPerExam defines amount of labs per exam
     */
    var makeLabs = function (student, labsPerExam) {
        for (var i = 0; i < labsPerExam; i++) {
            student.makeLab();
        }
    };
}
