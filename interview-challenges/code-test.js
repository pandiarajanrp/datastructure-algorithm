/*
    Question
    - Calculate the total-score of all homeschooled students
    - total-score = sum of (math, physics, history)
*/
 
const input = [
  {
    id: 5,
    name: "Luke",
    math: 98,
    physics: 56,
    history: 94,
    isHomeschooled: true,
  },
  {
    id: 82,
    name: "Sabine",
    math: 73,
    physics: 99,
    history: 30,
    isHomeschooled: false,
  },
  {
    id: 22,
    name: "Zeb",
    math: 20,
    physics: 59,
    history: 20,
    isHomeschooled: false,
  },
  {
    id: 15,
    name: "Ezra",
    math: 43,
    physics: 67,
    history: 100,
    isHomeschooled: true,
  },
  {
    id: 11,
    name: "Caleb",
    math: 71,
    physics: 85,
    history: 70,
    isHomeschooled: true,
  },
];
 
const getTotalScore = (students = []) => {
  //check if students param is valid else return 0
  //if (!students || !Array.isArray(students) || !students.length) return 0

  //filter input by isHomeschooled
  //calculate the score by add of math, physics, history in filtered data
  return students.filter(item => item.isHomeschooled).reduce(
    (accumalator, { math, physics, history }) => accumalator += math + physics + history,
    0
  )
};
 
const totalScore = getTotalScore(input);

console.log(totalScore);

// describe("test", () => {
//   it("should work", () => {
//     const totalScore = getTotalScore(input);
//     expect(totalScore).toEqual(684);
//   });
// });