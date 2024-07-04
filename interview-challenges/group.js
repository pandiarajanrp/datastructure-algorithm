/*
    Context
    - The solution will validate a list of events where each event is part of a group
    - Each group has to be validated independently but the order of events is irrespective of groups
    - There are 4 states: A,B,C,D each state cannot be repeated directly (A -> A for same group)
 
    Validation logic:
    - For each group: state transitions have to go to different state
    - EXTRA1: group states have to start with A
    - EXTRA2: group states have to follow order ABCD
*/
 
const validate = (input) => {
  const map = {}
  for (const event of input) {
    const { group_id, state } = event;
    map[group_id] = map[group_id] || [];
    const groupMap = map[group_id];

    if (!groupMap.includes(state)) {
      groupMap.push(state)
    } else {
      return false;
    }
  }
  console.log(map)
  return true;

};

const input = [
  {
    group_id: 1,
    state: "A",
  },
  {
    group_id: 1,
    state: "B",
  },
  {
    group_id: 1,
    state: "C",
  },
];

const input2 = [
  {
    group_id: 1,
    state: "A",
  },
  {
    group_id: 1,
    state: "A",
  },
  {
    group_id: 1,
    state: "B",
  },
  {
    group_id: 1,
    state: "B",
  },
  {
    group_id: 1,
    state: "C",
  },
];

const input3 = [
  {
    group_id: 1,
    state: "A",
  },
  {
    group_id: 2,
    state: "A",
  },
  {
    group_id: 2,
    state: "B",
  },
  {
    group_id: 1,
    state: "B",
  },
  {
    group_id: 1,
    state: "C",
  },
];

const result = validate(input);
const result2 = validate(input2);
const result3 = validate(input3);

console.log(result)
console.log(result2)
console.log(result3)


 
// describe("test", () => {
 
//   it("1 group - success", () => {
//     const input = [
//       {
//         group_id: 1,
//         state: "A",
//       },
//       {
//         group_id: 1,
//         state: "B",
//       },
//       {
//         group_id: 1,
//         state: "C",
//       },
//     ];
 
//     const result = validate(
//       input,
//     );
//     expect(result).toEqual(true);
//   });
 
//   it("1 group - failure", () => {
//     const input = [
//       {
//         group_id: 1,
//         state: "A",
//       },
//       {
//         group_id: 1,
//         state: "A",
//       },
//       {
//         group_id: 1,
//         state: "B",
//       },
//       {
//         group_id: 1,
//         state: "B",
//       },
//       {
//         group_id: 1,
//         state: "C",
//       },
//     ];
 
//     const result = validate(
//       input,
//     );
//     expect(result).toEqual(false);
//   });
 
//   it("2 group - success", () => {
//     const input = [
//       {
//         group_id: 1,
//         state: "A",
//       },
//       {
//         group_id: 2,
//         state: "A",
//       },
//       {
//         group_id: 2,
//         state: "B",
//       },
//       {
//         group_id: 1,
//         state: "B",
//       },
//       {
//         group_id: 1,
//         state: "C",
//       },
//     ];
 
//     const result = validate(
//       input,
//     );
//     expect(result).toEqual(true);
//   });
 
//   it("2 group - failure", () => {
//     const input = [
//       {
//         group_id: 2,
//         state: "A",
//       },
//       {
//         group_id: 2,
//         state: "B",
//       },
//       {
//         group_id: 1,
//         state: "A",
//       },
//       {
//         group_id: 1,
//         state: "A",
//       },
//     ];
 
//     const result = validate(
//       input,
//     );
//     expect(result).toEqual(false);
//   });
 
//   it("2 groups - failure started with state B", () => {
//     const input = [
//       {
//         group_id: 1,
//         state: "A",
//       },
//       {
//         group_id: 1,
//         state: "B",
//       },
//       {
//         group_id: 2,
//         state: "B",
//       },
//     ];
 
//     const result = validate(
//       input,
//     );
//     expect(result).toEqual(false);
//   });
 
//   it("2 groups - state C -> state B is not allowed", () => {
//     const input = [
//       {
//         group_id: 1,
//         state: "A",
//       },
//       {
//         group_id: 1,
//         state: "B",
//       },
//       {
//         group_id: 1,
//         state: "C",
//       },
//       {
//         group_id: 1,
//         state: "B",
//       },
//       {
//         group_id: 2,
//         state: "A",
//       },
//       {
//         group_id: 2,
//         state: "B",
//       },
//     ];
 
//     const result = validate(
//       input,
//     );
//     expect(result).toEqual(false);
//   });
 
//   it("1 group - failure failure started with state B", () => {
//     const input = [
//       {
//         group_id: 1,
//         state: "B",
//       },
//       {
//         group_id: 1,
//         state: "C",
//       },
//       {
//         group_id: 1,
//         state: "D",
//       },
//     ];
 
//     const result = validate(
//       input,
//     );
//     expect(result).toEqual(false);
//   });
 
//   it("1 group - failure incorrect order", () => {
//     const input = [
//       {
//         group_id: 1,
//         state: "A",
//       },
//       {
//         group_id: 1,
//         state: "C",
//       },
//       {
//         group_id: 1,
//         state: "B",
//       },
//       {
//         group_id: 1,
//         state: "D",
//       },
//     ];
 
//     const result = validate(
//       input,
//     );
//     expect(result).toEqual(false);
//   });
// });