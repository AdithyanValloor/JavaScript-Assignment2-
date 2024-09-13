const strIndex = (str) => {

    let result = ''
    let string = str.toUpperCase()
   
    for(let i = 0 ; i < string.length ; i++){

        result += `${i} ${string[i]} `   

    }

    return result
    
}

let userString = prompt('Enter a string')

document.write(strIndex(userString))

