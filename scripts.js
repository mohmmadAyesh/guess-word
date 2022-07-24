const inputs=document.querySelector('.inputs');
const reset =document.querySelector('.reset-btn');
const hint =document.querySelector('.hint span');
const typingInput=document.querySelector('.typing-input');
const wrongLetter=document.querySelector('.wrong-letter span');
const guessLeft=document.querySelector('.guess-left span')
let word;
let incorrects=[];
let correct=[];
let maxGuesses;
function randomWord(){
    let ranObj=wordList[Math.floor(Math.random() * wordList.length)];
    word=ranObj.word;
    maxGuesses=8;
    correct=[];
    incorrects=[];
    console.log(word);
    inputs.innerHTML="";
    hint.innerText=ranObj.hint;
    guessLeft.innerText=maxGuesses;
    wrongLetter.innerText=incorrects; 
    for(let i=0;i<word.length;i++){
        const s=document.createElement('input');
        s.setAttribute("disabled","disabled");
        inputs.appendChild(s);
    }
    inputs.innerHTMl = "<p>samer</p>"
}
function initGame(e){
    let key=e.target.value;
    if(key.match(/^[A-Za-z]+$/) && !correct.includes(` ${key}`)){
        console.log(key);
    if(word.includes(key)){
        for(let i=0;i<word.length;i++){
            if(word[i] === key){
                correct.push(key);
                inputs.querySelectorAll('input')[i].value=key;
            }
        }
    }
    else{
        maxGuesses--;
        if(!incorrects.includes(` ${key}`)){
            incorrects.push(` ${key}`);
        }
    }
    guessLeft.innerText=maxGuesses;
    wrongLetter.innerText=incorrects;
}
    typingInput.value="";
    setTimeout(()=>{
        if(correct.length===word.length){
        alert('Congragulation you found the word');
    }
    else if(maxGuesses<1){
        alert('Game Over! you dont have remaining guesses');
        for(let i=0;i<word.length;i++){
            inputs.querySelectorAll('input')[i].value=word[i];
        }
    }});
}

randomWord();

reset.addEventListener('click',randomWord);
typingInput.addEventListener('input',initGame);
inputs.addEventListener('click',()=>typingInput.focus());
document.addEventListener('keydown',()=>typingInput.focus());