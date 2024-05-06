/*heree we ask javascript to generate two numbers randomly for us from 1 to 10 */
const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

/*here we are assigning variable name questionEl to represent the html element that has the id=question */
const questionEl = document.getElementById("question");

const inputEl = document.getElementById("input");

const formEl = document.getElementById("form");

const scoreEl = document.getElementById("score")

let score = JSON.parse(localStorage.getItem("score"));

if (!score){
    score = 0;
}

scoreEl.innerText = `score: ${score}`


/*Here we ask javascript to write this question into the html element with id=question which has the variable name questionEl. the dollar sign is used because num1 and num2 are variables and must used dollar sign*/
questionEl.innerText = `What is ${num1} multiply by ${num2}?`;


const correctAns = num1 * num2;

formEl.addEventListener("submit", ()=>{
const userAns = +inputEl.value  /*here the + sign is added to convert the user input from string to number */

if (userAns === correctAns){
    score++;
    updateLocalStorage()
}
else{
    score--;
    updateLocalStorage()
}
});

function updateLocalStorage(){
    /*the score here is a number, so we can not save the score directly to the local storage so we convert it to string using JSON.stringify method. its for the security of the browser.  */
   localStorage.setItem("score", JSON.stringify(score))
}