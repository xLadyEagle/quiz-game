const correctAnswers = ["A", "A", "B", "A", "A", "B", "B", "B"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");

form.addEventListener("submit", e =>{
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value, form.q8.value];

    //check answers
    userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]){
        score += 12.5;
    }
});

    // show result on page

    scrollTo(0,0);

    
    result.classList.remove("d-none");

    let output = 0;
    const timer = setInterval(() =>{
        result.querySelector("span").textContent = `${output}%`;
        if (output === score){
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10);
});
