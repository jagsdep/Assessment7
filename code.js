// 1) Sum Zero

function addToZero(array){

    for (let i=0; i<array.length; i++){
        for(let j=0; j<array.length; j++)


        if (array[i] + array[j] === 0)

               
            return true;
                      
                    
    }
            return false;
                
                
}
        
console.log(addToZero([ 1]))


//Unique Characters

 function hasUniqueChars(str){

    for(let i = 0; i < str.length; i++){
        for(let j = i + 1; j < str.length; j++)
            if (str[i] === str[j])
                return false;

            }
                return true;

            }
             
console.log(hasUniqueChars('wirofh'))
 
    

//Pangram Sentence

function isPangram(string){

    let stringArr = string.toLowerCase();
    let alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabets.length; i++) {
      if(stringArr.indexOf(alphabets[i]) < 0){
        return false;
      }
    }
    return true;
  }
  console.log(isPangram("I like cats, but not mice"))
    


//Longest Word

function findLongestWord(str){
   
  var strSplit = str.split(' ');


  var longestWord = 0;

  for(var i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWord){
	longestWord = strSplit[i].length; 
     }
  }
  return longestWord;
   
}  
     
console.log(findLongestWord("hi, hello"))
