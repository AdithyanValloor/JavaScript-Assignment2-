const strIndex = (str) => {

    let result = ''
    let string = str.toUpperCase()
   
    for(let i = 0 ; i < string.length ; i++){

        result += `${i} ${string[i]} `   

    }

    return result
    
}

const UserInput = ( ) => {

    let userString = document.getElementById('userInput').value;

    var str = /^[a-zA-Z]+$/;

    var resultDisplay = document.getElementById('result')
    
    resultDisplay.style.display = 'block'
    
    if(!userString){

        resultDisplay.textContent = 'Please enter a value!!'
        console.log('please enter a value');  

    }else if(!userString.match(str)){
        
        resultDisplay.textContent = 'Please enter a string!!'
        console.log('please enter a string'); 
        
    }
    
    
    else{

        resultDisplay.textContent = `${strIndex(userString)}`
        console.log(`${strIndex(userString)}`);  

    }

}

