/*
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]
*/

function digitize(n) {
  let arr = ('' + n).split('').map(Number)
  result = []
  for (var i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i])
  }

  return result
}

console.log(digitize(35231))

//Note: I do, in fact aware of .reverse(). but it'd ruin the fun, right ? ( >u0)
