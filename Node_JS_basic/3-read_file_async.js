const fs = require('fs').promises;

function countStudents(path) {
  return fs.readFile(path, { encoding: 'utf8' })
    .then((data) => {
      const lines = data.split('\n').filter(Boolean);

      const students = lines.slice(1);

      const validStudents = students.filter((line) => line.length > 0 && !line.startsWith(','));

      console.log(`Number of students: ${validStudents.length}`);

      const studentsByField = {};

      validStudents.forEach((student) => {
        const [, firstName, , field] = student.split(',');

        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        studentsByField[field].push(firstName);
      });

      Object.keys(studentsByField).forEach((field) => {
        console.log(`Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsByField[field].join(', ')}`);
      });
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;