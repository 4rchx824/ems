function revealWord(num) {
    var id = "btn" + json[num].number;
    document.getElementById(id).innerHTML = `
    <p class="fw-light my-auto">
        Word 1: ${json[num].word1 ? json[num].word1 : "no word"}, Word 2: ${
        json[num].word2 ? json[num].word2 : "no word"
    }
    </p>
        `;

    document.getElementById(id).disabled = true;

    setTimeout(() => {
        document.getElementById(id).innerHTML = "Reveal Word";
        document.getElementById(id).disabled = false;
    }, 5000);
}

function checkWord(num) {
    var id = json[num].number;

    var correctText = [
        json[num].word1 != null
            ? json[num].word1.toLowerCase()
            : json[num].word1,
        json[num].word2 != null
            ? json[num].word2.toLowerCase()
            : json[num].word2,
    ];

    var imgId = document.getElementById("img" + id);
    var input = document.getElementById(id).value;
    var img = "";

    correctText.includes(input.toLowerCase())
        ? ((img = "success"), (json[num].state = true))
        : ((img = "error"), (json[num].state = false));

    var innerTag = `
<img
    src="./graphics/${img}.png"
    style="height: auto; width: auto"
/>
`;

    imgId.innerHTML = innerTag;
}

function hasAttempted(num) {
    if (!json[num].attempted) {
        total += 1;
    }
    json[num].attempted = true;

    document.getElementById("total").innerHTML = total;
}

var total = 0;
function counterCheck() {
    correct = 0;
    json.forEach((row) => {
        if (row.attempted && row.state) {
            correct++;
        }
    });

    updateCounter(correct, total);
}

function updateCounter(correct, total) {
    var correctID = document.getElementById("correct");
    var incorrectID = document.getElementById("incorrect");
    var incorrect = total - correct;

    incorrectID.innerHTML = incorrect;

    correctID.innerHTML = correct;
}

function result() {
    document.getElementById("resultBody").style.display = "block";

    document.getElementById("totalAttempt").innerHTML = total > 0 ? total : 0;
    document.getElementById("totalCorrect").innerHTML =
        correct > 0 ? correct : 0;
    document.getElementById("totalWrong").innerHTML =
        total - correct > 0 ? total - correct : 0;
    document.getElementById("totalNoAttempt").innerHTML = json.length - total;

    document.getElementById("wpm").innerHTML =
        seconds > 0 ? (total / (seconds / 60)).toPrecision(3) : 0;
}
