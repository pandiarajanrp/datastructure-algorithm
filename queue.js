/**
 * Creating a Queue by JS Array
 */

/**
 * Using push and shift
 * In this approach the array index will be re index whenever we delete an item in the beginning of an array
 */

const queue = [];

queue.push("United State")
queue.push("Canada")
queue.push("Mexico")

//["United States", "Canada", "Mexico"]

queue.shift()
queue.shift()
queue.shift()

//[]

/**
 * Using unshift and pop
 * In this approach the array index will be re index whenever we insert an item in the beginning of an array
 */
const queue2 = [];

queue2.unshift("United State")
queue2.unshift("Canada")
queue2.unshift("Mexico")

//["Mexico", "Canada", "United States"]

queue2.pop()
queue2.pop()
queue2.pop()

//[]