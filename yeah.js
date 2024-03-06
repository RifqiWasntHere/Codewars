function generateHashtag (str) {
    let res = [], temp = ''
    if (str.trim().length > 0){
        temp = str.split(' ')
        temp.forEach(element => {
            res.push( element[0].toUpperCase() + element.substr(1))
        });   
    } else {
        return false
    }

    res = res.join('')
     if (res.length < 140){
         return "#" + res
     } else {
        return false
    }
}
console.log(generateHashtag("Do We have A Hashtag"));
console.log(generateHashtag("code" + " ".repeat(140) + "wars"))

//https://www.codewars.com/kata/52449b062fb80683ec000024?;