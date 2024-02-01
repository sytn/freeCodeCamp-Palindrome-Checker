const text_input = document.getElementById('text-input');
const check_btn = document.getElementById('check-btn');
const res_p = document.getElementById('result');

const isPalindrome = (x) => {
    const lowercaseWord = x.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    const reversedWord = lowercaseWord.split('').reverse().join('');
    return lowercaseWord === reversedWord;
}


check_btn.addEventListener('click', () => { 
    if (text_input.value === '') {
        alert('Please input a value');
    } else if (isPalindrome(text_input.value)){
        res_p.innerHTML = (`${text_input.value} is a palindrome.`);
    } else {
        res_p.innerHTML = (`${text_input.value} is not a palindrome.`);
    }
});