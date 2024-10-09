function checkPalindrome(input){

    return input == input.split("").reverse().join("");
}

console.log(checkPalindrome("ara"));