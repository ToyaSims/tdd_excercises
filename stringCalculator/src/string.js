
function Add(numbers) {
    try {
        //tell function to return 0 if theres no value entered
        if (numbers == " " || numbers == "") return 0

        //split entered value into array 
        let result = 0;
        var number = numbers.split(/[//;\n,]/);

        //used for loop to parse all values in array to a string
        for(var i =0; i < number.length;i++){
      
            var num = parseInt(number[i]);

            //check if value is negetive number,if it is,throw an exception
            if(num < 0){
                throw new Error("negatives not allowed" + " " + num)
            }
            
            //sum all values in array
           result+= num
            
        }

        return result

    } catch (error) {
        //display error
        console.log('error: ' + error);
    }
  }
  
 