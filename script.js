let questions = [
  { q: "Who created JavaScript?", a: ["Brendan Eich", "Elon Musk", "Bill Gates", "Mark Zuckerberg"], correct: 0 },
  { q: "What does jQuery help with?", a: ["Styling", "Server Management", "DOM Manipulation", "Video Editing"], correct: 2 },
  { q: "Which symbol is used for jQuery?", a: ["$", "#", "@", "&"], correct: 0 },
  { q: "Which HTML tag is for JavaScript?", a: ["<script>;", "&lt;javascript&gt", "&lt;script&gt", "&lt;code&gt"], correct: 2 },
  { q: "Which jQuery method hides elements?", a: ["vanish()", "hide()", "none()", "remove()"], correct: 1 },
  { q: "Which method adds click event?", a: ["click()", "onClick()", "press()", "tap()"], correct: 0 },
  { q: "What does DOM stand for?", a: ["Document Object Model", "Data Object Module", "Design Order Map", "Digital Output Mode"], correct: 0 },
  { q: "What does === mean?", a: ["Assign value", "Compare value only", "Compare value & type", "Check errors only"], correct: 2 },
  { q: "Which loop runs at least once?", a: ["for loop", "while loop", "do…while loop", "foreach loop"], correct: 2 },
  { q: "Correct command to print?", a: ["console.print()", "log.console()", "console.log()", "print()"], correct: 2 }
];

let index = 0;
let score = 0;

function loadQuestion() {
  let q = questions[index];
  $("#question-box").html(`
    <h3 style="font-size:22px;">${q.q}</h3>
    ${q.a.map((choice, i) => `<button class="option" data-index="${i}">${choice}</button>`).join("")}
  `);

  $(".option").click(function () {
    $(".option").removeClass("selected");
    $(this).addClass("selected");
    $(".option").addClass("disabled");

    let userAnswer = $(this).data("index");
    if (userAnswer == questions[index].correct) score++;

    $("#nextBtn").show();

    if (index === questions.length - 1) {
      $("#nextBtn").hide();
      $("#finishBtn").show();
    }
  });
}

$("#nextBtn").click(function () {
  index++;
  loadQuestion();
  $(this).hide();
});

$("#finishBtn").click(function () {
  $(".score").show();
  $("#score").text(score);

  let resultHTML = `
    <h2>Quiz Finished!</h2>
    <p>Your Final Score: <strong>${score}/10</strong></p>
    <h3>All Questions & Correct Answers:</h3>
    <ul style="text-align:left; margin-top:10px; font-size:18px;">
  `;

  questions.forEach((q, i) => {
    resultHTML += `
      <li>
        <strong>Q${i + 1}:</strong> ${q.q}<br>
        ✔ Correct Answer: <span style="color:green;">${q.a[q.correct]}</span>
      </li><br>
    `;
  });

  resultHTML += "</ul>";

  $("#question-box").html(resultHTML);
  $(this).hide();
});

loadQuestion();
  
