/*
    Context
    - The solution will validate a list of events where each event is part of a group
    - Each group has to be validated independently but the order of events is irrespective of groups
    - There are 4 states: A,B,C,D each state cannot be repeated directly (A ->; A for same group)
 
    Validation logic:
    - For each group: state transitions have to go to different state
    - EXTRA1: group states have to start with A
    - EXTRA2: group states have to follow order ABCD

*/
const checkOrder = {
  B: 0,
  C: 1,
  D: 2
};

function canPushElement(arr, element) {
  const order = { 'A': 0, 'B': 1, 'C': 2, 'D': 3 };

  if (!order.hasOwnProperty(element)) {
    return false; // If the element is not a, b, c, or d, return false
  }

  for (let i = 0; i < order[element]; i++) {
    if (order[element] < order[arr[i]]) {
      return false; // If the new element is out of order, return false
    }
  }
  return true;
}

const validate2 = (input) => {
  const map = {}

  for (const event of input) {
    const { group_id, state } = event;
    map[group_id] = map[group_id] || [];
    if (!map[group_id].includes(state)) {
      map[group_id].push(state);
    } else {
      return false;
    }
  }
  console.log(map)
  return true
};

const validate = (input) => {
  const map = {}

  let result = true;

  for (const event of input) {
    if (!result) return result;
    const { group_id, state } = event;
    map[group_id] = map[group_id] || [];

    if ((map[group_id].includes(state))) return false

    const groupLen = map[group_id].length;
    const groupMap = map[group_id]

    switch (group_id) {
      case 1:
        if (groupLen === 0 || (groupLen > 0 && groupMap[0] === 'A')) {
          groupMap.push(state);
          break;
        } else {
          result = false;
        }
      case 2:
        if (groupLen === 0 && state !== 'A') {
          result = false;
          break;
        }

        if (canPushElement(groupMap, state)) {
          groupMap.push(state);
          break;
        } else {
          result = false;
        }
      default:
        result = false
    }
  }
  return result
};

const inputCase1 = [
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

const inputCase2 = [
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

const inputCase3 = [
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

const inputCase4 = [
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
    state: "A",
  },
  {
    group_id: 1,
    state: "A",
  },
];

const inputCase5 = [
  {
    group_id: 1,
    state: "A",
  },
  {
    group_id: 1,
    state: "B",

  },
  {
    group_id: 2,
    state: "B",
  },
];

const inputCase6 = [
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
  {
    group_id: 1,
    state: "B",
  },
  {
    group_id: 2,
    state: "A",
  },
  {
    group_id: 2,
    state: "B",
  },
];

const case1 = validate(inputCase1);
const case2 = validate(inputCase2);
const case3 = validate(inputCase3);
const case4 = validate(inputCase4);
const case5 = validate(inputCase5);
const case6 = validate(inputCase6);

console.log("true", case1)
console.log("false", case2)
console.log("true", case3)
console.log("false", case4)
console.log("false", case5)
console.log("false", case6)

// describe("test", () => {
//   it("1 group - success", () => {
//     const input = [
//       {
//         group_id: 1,
//         state:"A",
//       },
//       {
//         group_id: 1,
//         state:"B",
//       },
//       {
//         group_id: 1,
//         state:"C",
//       },
//     ];

//     const result = validate(input);
//     expect(result).toEqual(true);
//   });

//   it("1 group - failure", () => {
//     const input = [
//       {
//         group_id: 1,
//         state:"A",
//       },
//       {
//         group_id: 1,
//         state:"A",
//       },
//       {
//         group_id: 1,
//         state:"B",
//       },
//       {
//         group_id: 1,
//         state:"B",
//       },
//       {
//         group_id: 1,
//         state:"C",
//       },
//     ];

//     const result = validate(input);
//     expect(result).toEqual(false);
//   });

//   it("2 group - success", () => {
//     const input = [
//       {
//         group_id: 1,
//         state:"A",
//       },
//       {
//         group_id: 2,
//         state:"A",
//       },
//       {
//         group_id: 2,
//         state:"B",
//       },
//       {
//         group_id: 1,
//         state:"B",
//       },
//       {
//         group_id: 1,
//         state:"C",
//       },
//     ];

//     const result = validate(input);
//     expect(result).toEqual(true);
//   });

//   it("2 group - failure", () => {
//     const input = [
//       {
//         group_id: 2,
//         state:"A",
//       },
//       {
//         group_id: 2,
//         state:"B",
//       },

//       {
//         group_id: 1,
//         state:"A",
//       },
//       {
//         group_id: 1,
//         state:"A",
//       },
//     ];

//     const result = validate(input);
//     expect(result).toEqual(false);
//   });

//   it("2 groups - failure started with state B", () => {
//     const input = [
//       {
//         group_id: 1,
//         state:"A",
//       },
//       {
//         group_id: 1,
//         state:"B",

//       },
//       {
//         group_id: 2,
//         state:"B",
//       },
//     ];

//     const result = validate(input);
//     expect(result).toEqual(false);
//   });

//   it("2 groups - state C ->; state B is not allowed", () => {
//     const input = [
//       {
//         group_id: 1,
//         state:"A",
//       },
//       {
//         group_id: 1,
//         state:"B",
//       },
//       {
//         group_id: 1,
//         state:"C",
//       },
//       {
//         group_id: 1,
//         state:"B",
//       },
//       {
//         group_id: 2,
//         state:"A",
//       },
//       {
//         group_id: 2,
//         state:"B",
//       },
//     ];

//     const result = validate(input);
//     expect(result).toEqual(false);
//   });
// });