/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

function solution(string) {
    let res = []
      for (i=0; i<string.length; i++){
          if (string[i] === string[i].toUpperCase()){
              res[i] = " " + string[i]
          } else {
            res[i] = string[i]
          }
      }
      return res.join('');
    }

console.log(solution("camelCasing"));