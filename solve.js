function remLongestPalindrome(str) {
   //define isPalindrome function
   function isPalindrome(str) {
        //define a variable that is the reverse of the string
        let reverse = str.split('').reverse().join('');
        //if the string is equal to the reverse of the string, return true
        if (str === reverse) {
            return true;
        }
        //if the string is not equal to the reverse of the string, return false
        else {
            return false;
        }
    }
    //write a function that removes the longest palindrome from a string
    function removePalindrome(str) {
        let longest = "";
        //find the longest palindrome in the string by first checking if the given str is a palindrome,
        //if not, remove the last character of the string one at a time, until you find a palindrome
        if (isPalindrome(str)) {
            return [str, ""];
        } else {
            for (let i = str.length - 1; i >= 0; i--) {
                let newStr = str.slice(0, i);
                if (isPalindrome(newStr)) {
                    longest = newStr;
                    break;
                }
            }

            return [longest, str.replace(longest, "")];
        }
    }

    if (str === "") {
        return "";
    }
    let [longest, remaining] = removePalindrome(str);
    if (longest.length === 1) return remaining;
    else return remLongestPalindrome(remaining);
    

}

console.log(remLongestPalindrome('oyoq'))