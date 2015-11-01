function Session(student, examsAmount, labsPerExam) {

    this.student = student || null;
    this.examsAmount = examsAmount || 0;
    this.labsPerExam = labsPerExam || 0;

    this.begin = function () {
        passExams(this.student, this.examsAmount, this.labsPerExam);
    };

    var passExams = function (student, examsAmount, labsPerExam) {
        for (var i = 0; i < examsAmount; i++) {
            makeLabs(student, labsPerExam);
            student.passExam();

        }
    };

    var makeLabs = function (student, labsPerExam) {
        for (var i = 0; i < labsPerExam; i++) {
            student.makeLab();
        }
    };
}
