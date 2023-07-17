//     ******* print odd numbers in array using Arrow function*****

var arr = [1,2,3,4,5,6,7,8,9];
var temp=[];

var odd = (arr) => {
  
  for (var i=0;i<arr.length;i++){
    
    if(arr[i]%2 !=0){
      
      temp.push(arr[i]);
    }
  }
    return temp;   
}
console.log(odd(arr));


// *************************************************************************************************************


//Convert all the strings to title caps in a string array

var str =["geek for geek"];
var temp = [];

var titleCase= (str)=> {
  
str = str[0].split(" ");

for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    temp.push(str[i]);
}

return temp.join(' ');

}

console.log(titleCase(str));


// *************************************************************************************************************


 //Sum of all numbers in an array

 var arr = [4, 8, 7, 13, 12]
 var sum = 0;
   
   var add =(arr)=>{
 
     for (var i = 0; i< arr.length; i++) {
          sum += arr[i];
        
     }
     return sum;
 }
 console.log(add(arr));


// *************************************************************************************************************

//** Return all the prime numbers in an array

var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]

numArray = numArray.filter((number) => {
  
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});

console.log(numArray);


// *************************************************************************************************************

//Return all the palindromes in an array

let arr = ["foo", "racecar", "pineapple", "porcupine", "pineenip",'pap','aaaa'];

let ans =[];

function isPalindrome(s)
{  
    let a = s;
    s = s.split('').reverse().join('');
    return s == a;
}


var palindrome = (arr) => {
     for (let i = 0; i < arr.length; i++){
       if (isPalindrome(arr[i])) {

            ans.push(arr[i]);
        }
    }
    return ans;
}

console.log(palindrome(arr));

// *************************************************************************************************************


//Return median of two sorted arrays of the same size


// *************************************************************************************************************


//**             Remove duplicates from an array

var arr = ["apple", "mango", "apple",
            "orange", "mango", "mango"];
 
    var remove = (arr) => {
        return arr.filter((item,
            index) => arr.indexOf(item) === index);
    }
 
    console.log(remove(arr));


// *************************************************************************************************************


//Rotate an array by k times

var nums = [1,2,3,4,5,6];
var k = 2;

var rotateArray1=(nums, k) => {

    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
  
    return nums;
  }
  console.log(rotateArray1(nums,k));