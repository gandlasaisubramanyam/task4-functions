//     ******* print odd numbers in array using IIFE function *****

var arr = [1,2,3,4,5,6,7,8,9];
var temp=[];
(function (arr) {
  
    for (var i=0;i<arr.length;i++){
      
      if(arr[i]%2 !=0){
        
        temp.push(arr[i]);
      }
    }
      return temp;   

}
) (arr);


// *************************************************************************************************************

//** Convert all the strings to title caps in a string array

var str =["guvi geeks"];
var temp = [];
( function(str) {
str = str[0].split(" ");
for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    temp.push(str[i]);
}
return temp.join(' ');
}
)(str);


// *************************************************************************************************************

//**    Sum of all numbers in an array

var arr = [4, 8, 7, 13, 12]
var sum = 0;
var add;
  
( function(arr){

    for (var i = 0; i< arr.length; i++) {
         sum += arr[i];
       
    }
    return sum;
}) 
console.log(add(arr));

// *************************************************************************************************************


//** Return all the prime numbers in an array

var arr1= [2, 3, 4, 5, 6, 7, 8, 9, 10];
var num=0;


(function (num) {
  for (let i= 2; num > i ; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}
) (num);
console.log(arr1.filter(isPrime));


// *************************************************************************************************************


// ** Return all the palindromes in an array

let arr = ["foo", "racecar", "pineapple", "porcupine", "pineenip",'pap','aaaa'];

let ans =[];

function isPalindrome(s)
{  
    let a = s;
    s = s.split('').reverse().join('');
    return s == a;
}


(function(arr){
    for (let i = 0; i < arr.length; i++){
      if (isPalindrome(arr[i])) {

           ans.push(arr[i]);
       }
   }
   return ans;

}
) (arr);
console.log(palindrome(arr));


// *************************************************************************************************************


//**             Remove duplicates from an array

var arr = ["apple", "mango", "apple",
            "orange", "mango", "mango"];
 
    (function(arr) {
        return arr.filter((item,
            index) => arr.indexOf(item) === index);
    }
 
   )
   console.log(remove(arr));

// *************************************************************************************************************

//Rotate an array by k times

var nums = [1,2,3,4,5,6];
var k = 2;

(function(nums, k) {

    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
  
    return nums;
  })
console.log(rotateArray1(nums,k));