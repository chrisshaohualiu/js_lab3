let submissions = [
  {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "2018-05-14",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2019-07-05",
    passed: false,
  },
  {
    name: "Jill",
    score: 77,
    date: "2020-04-22",
    passed: true,
  },
];

// Declare a function named addSubmission
// ○ Parameter(s): array, newName, newScore, newDate
// ○ Functionality: construct an object and push it into the array. The object must
// have the same properties as the objects already in the array. Use conditional
// statements to set the value for the passed property to true if the score is
// greater than or equal to 60 and false otherwise

const addSubmissions = (array, newName, newScore, newDate) => {
  array.push({
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  });
};

// Declare a function named deleteSubmissionByIndex
// ○ Parameter(s): array, index
// ○ Functionality: remove the object from the array at the specified index using
// the splice method

const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};

// deleteSubmissionByIndex(submissions, 4);
// console.log(submissions);

// Declare a function named deleteSubmissionByName
// ○ Parameter(s): array, name
// ○ Functionality: remove the object from the array that has the provided name.
// Incorporate the findIndex method and the splice method.

const deleteSubmissionByName = (array, name) => {
  array.splice(
    array.findIndex((student) => student.name === name),
    1
  );
};

//deleteSubmissionByName(submissions, "Jill");
//console.log(submissions);

// Declare a function named editSubmission
// ○ Parameter(s): array, index, score
// ○ Functionality: update an object’s score in the array at the specified index. Use
// conditional statements to set the value for the passed property to true if the
// score is greater than or equal to 60 and false otherwise.

const editSubmission = (array, index, score) => {
  array[index].score = score;
  array[index].passed = score >= 60;
};

// editSubmission(submissions, 1, 40);
// console.log(submissions);

// Declare a function named findSubmissionByName
// ○ Parameter(s): array, name
// ○ Functionality: return the object in the array that has the provided name. Use the
// find method.

const findSubmissionByName = (array, name) => {
  return array.find((item) => item.name === name);
};

//console.log(findSubmissionByName(submissions, "Joe"));

// Declare a function named findLowestScore
// ○ Parameter(s): array
// ○ Functionality: return the object in the array that has the lowest score. Use the
// forEach method to loop through the whole array

const findLowestScore = (array) => {
  let lowScoreStudent;
  array.forEach((student) => {
    if (lowScoreStudent === undefined) {
      lowScoreStudent = student;
    } else if (lowScoreStudent.score > student.score) {
      lowScoreStudent = student;
    }
  });
  return lowScoreStudent;
};

// editSubmission(submissions, 1, 40);
// console.log(findLowestScore(submissions));

// 8. Declare a function named findAverageScore
// ○ Parameter(s): array
// ○ Functionality: return the average quiz score. Use a for...of loop

const findAverageScore = (array) => {
  let sum = 0;
  for (let item of array) {
    sum += item.score;
  }
  return sum / array.length;
};

console.log(findAverageScore(submissions));

// 9. Declare a function named filterPassing
// ○ Parameter(s): array
// ○ Functionality: return a new array using the filter method. The filter method
// should find objects in the array that have passing scores.

const filterPassing = (array) => {
  return array.filter((student) => student.passed);
};

//console.log(filterPassing(submissions));

// 10. Declare a function named filter90AndAbove
// ○ Parameter(s): array
// ○ Functionality: return a new array using the filter method. The filter method
// should find objects in the array that have scores greater than or equal to 90.

const filter90AndAbove = (array) => {
  return array.filter((student) => student.score >= 90);
};

//console.log(filter90AndAbove(submissions));

const createRange = (start, end) => {
  let range = [];
  for (let i = start; i <= end; i++) {
    range.push(i);
  }
  return range;
};

const countElements = (array) => {
  let key = {};
  array.forEach((element) => {
    if (key.hasOwnProperty(element)) {
      key[element]++;
    } else {
      key[element] = 1;
    }
  });
  return key;
};

let arr1 = ["a", "b", "c", "a", "a", "b", "d", "d", "d", "d"];
console.log(arr1);
console.log(countElements(arr1));
