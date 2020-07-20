function sameFrequency(num1, num2){
    // good luck. Add any arguments you deem necessary.
    
      //1. Edge cases:
      //1.A Args are empty
      if(num1 === null && num2 === null) return false;
      //1.B It's not a number, it's empty, it's not the same length
      if(typeof num1 !== 'number' || typeof num2 !== 'number'){
          return false;
      }
      
      //2. Convert both to string array
      num1 = num1.toString().split('');
      num2 = num2.toString().split('');
  
      if(num1.length !== num2.length || (num1.length === 0 || num2.length === 0)){
          return false;
      }
  
      //3. Make an object for each number in each array, saving the frequency as value and the number as key
      let [freqNum1, freqNum2] = [{}, {}];
      for(let digit of num1){
          freqNum1[digit] = ++freqNum1[digit] || 1;
      }
      for(let digit of num2){
          freqNum2[digit] = ++freqNum2[digit] || 1;
      }
  
      //4. Loop object num2, try to find the number in object num1
      for(let key in freqNum2){
          if(!(key in freqNum1)){
              return false;
          }
  
          if(freqNum2[key] !== freqNum1[key]){
              return false;
          }
      }
  
      //5. Return true or false if they have the same frequency
          return true;
  }

  console.log(sameFrequency(281,182));
  console.log(sameFrequency(34,14));
  console.log(sameFrequency(3589578,5879385));
  console.log(sameFrequency(25,52));
  console.log(sameFrequency(333,333));
  console.log(sameFrequency(6451,1546));
  console.log(sameFrequency(22,222));
  console.log(sameFrequency());
  console.log(sameFrequency([], {}));
  console.log(sameFrequency([], []));
  console.log(sameFrequency({}, {}));