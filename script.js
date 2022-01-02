//document selector
const wordE1 = document.getElementById('word');
const wrongLettersE1 = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');
//query selector
const figureParts = document.querySelectorAll(".figure-part")
//words to guess
const words = ['application', 'programming', 'interface', 'wizard', 'javascript', 'code', 'computer','bootcamp', 'ducktape', 'prayers'];
let selectWord = words[Math.floor(Math.random() * words.length)];
//guessing letters
const correctLetters =[];
const wrongLetters = [];

//show hidden word
function displayWord(){
    wordE1.innerHTML = `
  ${selectWord
    .split('')
    .map(
    letter =>`
    <span class = "letter">
    ${correctLetters.includes(letter) ? letter : ''}
    </span>
    `
    )
    .join('')}
    `;
    const innerWord = wordE1.innerText.replace(/\n/g,'');

    if(innerWord === selectWord){
        finalMessage.innerText = 'Congrats!!! You are a winner!!!';
        popup.style.display='flex';

    }
}
    //updated/display wrong letters
    function updateWrongLetterE1(){
        wrongLettersE1.innerHTML = `
        ${wrongLetters.length > 0 ? `<p>wrong</p>` : ''}
        ${wrongLetters.map(letter => `<span>${letter}</span>`)}
        `;
    //display parts
    figureParts.forEach((part,index) =>{
        const errors = wrongLetters.length;
        if(index < errors){
        part.style.display = 'block'
        }else{
        part.style.display = 'none';
    }
});
    // check if lost
    if(wrongLetters.length === figureParts.length){
        finalMessage.innerText = "That's a loss. Better Luck next time!";
        popup.style.display = 'flex';
    }
}
//display notification
function showNotification(){
    notification.classList.add('show');
    
    setTimeout(() =>{
        notification.classList.remove('show');
    },2000);
}
//keydown letter press
window.addEventListener('keydown', e => {
    if(e.keyCode >= 65 && e.keyCode <= 90){
        const letter = e.key;

        if(selectWord.includes(letter)){
            if(!correctLetters.includes(letter)){
                correctLetters.push(letter);

                displayWord();
            } else{
                showNotification();
            } if(!wrongLetters.includes(letter)){
                    wrongLetters.push(letter);

                    updateWrongLetterE1();
                } else{
                    showNotification();
                }
            }
        }
    });
//restart game/ play again
playAgainBtn.addEventListener('click', () => {
    correctLetters.splice(0);
    wrongLetters.splice(0);

    selectWord = words[math.floor(math.random() * words.length)];
    displayWord();
    updateWrongLetterE1();
    popup.style.display = "none";

});
displayWord();

