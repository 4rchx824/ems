(function () {
    function r(e, n, t) {
        function o(i, f) {
            if (!n[i]) {
                if (!e[i]) {
                    var c = "function" == typeof require && require;
                    if (!f && c) return c(i, !0);
                    if (u) return u(i, !0);
                    var a = new Error("Cannot find module '" + i + "'");
                    throw ((a.code = "MODULE_NOT_FOUND"), a);
                }
                var p = (n[i] = { exports: {} });
                e[i][0].call(
                    p.exports,
                    function (r) {
                        var n = e[i][1][r];
                        return o(n || r);
                    },
                    p,
                    p.exports,
                    r,
                    e,
                    n,
                    t
                );
            }
            return n[i].exports;
        }
        for (
            var u = "function" == typeof require && require, i = 0;
            i < t.length;
            i++
        )
            o(t[i]);
        return o;
    }
    return r;
})()(
    {
        1: [
            function (require, module, exports) {
                json = require("./numbers.json");

                json.forEach((row) => {
                    document.getElementById("body").innerHTML += `
        <div class="row justify-content-center">
            <div class="col-sm-12 col-md-8 my-3">
                 <div class="card p-0 mx-auto shadow-lg">
                    <div class="card-header p-1">
                        <h1>${row.number}</h1>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-sm-9 d-flex align-items-center">
                                <input
                                    type="text"
                                    class="form-control"
                                    aria-label=""
                                    id="${row.number}"
                                    onchange="checkWord(${
                                        parseInt(row.number) - 1
                                    }); hasAttempted(${
                        parseInt(row.number) - 1
                    }); counterCheck(${parseInt(row.number) - 1})"
                                />
                            </div>
                            <div class="col-sm-3 p-3" id="img${row.number}">
                                <img
                                    src="./graphics/null.png"
                                    style="height: auto; width: auto"
                                />
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-sm-12">
                                <button
                                    type="button"
                                    class="btn btn-outline-dark w-100"
                                    onclick="revealWord(${
                                        parseInt(row.number) - 1
                                    })"
                                    id="btn${row.number}"
                                >
                                    Reveal Word
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
                });
            },
            { "./numbers.json": 2 },
        ],
        2: [
            function (require, module, exports) {
                module.exports = [
                    {
                        number: "01",
                        word1: "seat",
                        word2: "set",
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "02",
                        word1: "sun",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "03",
                        word1: "sam",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "04",
                        word1: "sar 21",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "05",
                        word1: "sail",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "06",
                        word1: "switch",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "07",
                        word1: "sock",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "08",
                        word1: "SAF",
                        word2: "surf",
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "09",
                        word1: "soap",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "10",
                        word1: "toes",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "11",
                        word1: "tit",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "12",
                        word1: "tin",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "13",
                        word1: "timtam",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "14",
                        word1: "tar",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "15",
                        word1: "tail",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "16",
                        word1: "torch",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "17",
                        word1: "teak",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "18",
                        word1: "tofu",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "19",
                        word1: "tap",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "20",
                        word1: "noose",
                        word2: "nose",
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "21",
                        word1: "net",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "22",
                        word1: "nun",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "23",
                        word1: "nemo",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "24",
                        word1: "nurse",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "25",
                        word1: "nail",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "26",
                        word1: "nacho",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "27",
                        word1: "nike",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "28",
                        word1: "nerf",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "29",
                        word1: "nap",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "30",
                        word1: "moose",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "31",
                        word1: "map",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "32",
                        word1: "man",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "33",
                        word1: "mom",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "34",
                        word1: "mars",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "35",
                        word1: "mail",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "36",
                        word1: "mocha",
                        word2: "mech",
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "37",
                        word1: "mookata",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "38",
                        word1: "mafia",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "39",
                        word1: "map",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "40",
                        word1: "rose",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "41",
                        word1: "rat",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "42",
                        word1: "rain",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "43",
                        word1: "ram",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "44",
                        word1: "ruler",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "45",
                        word1: "rail",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "46",
                        word1: "rich",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "47",
                        word1: "rake",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "48",
                        word1: "reef",
                        word2: "revise",
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "49",
                        word1: "rope",
                        word2: "rap",
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "50",
                        word1: "laser",
                        word2: "lazer",
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "51",
                        word1: "lot",
                        word2: "lottery",
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "52",
                        word1: "lan",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "53",
                        word1: "lamb",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "54",
                        word1: "liar",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "55",
                        word1: "lily",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "56",
                        word1: "leech",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "57",
                        word1: "leek",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "58",
                        word1: "leaf",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "59",
                        word1: "lap",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "60",
                        word1: "cheese",
                        word2: "chess",
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "61",
                        word1: "chit",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "62",
                        word1: "china",
                        word2: "chinese",
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "63",
                        word1: "charmander",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "64",
                        word1: "charizard",
                        word2: "chair",
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "65",
                        word1: "chili",
                        word2: "chill",
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "66",
                        word1: "church",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "67",
                        word1: "chalk",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "68",
                        word1: "chef",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "69",
                        word1: "chip",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "70",
                        word1: "gas",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "71",
                        word1: "gatorade",
                        word2: "gate",
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "72",
                        word1: "gun",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "73",
                        word1: "gum",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "74",
                        word1: "gear",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "75",
                        word1: "girl",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "76",
                        word1: "gacha",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "77",
                        word1: "gang",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "78",
                        word1: "gift",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "79",
                        word1: "gap",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "80",
                        word1: "fast",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "81",
                        word1: "fat",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "82",
                        word1: "fan",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "83",
                        word1: "family",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "84",
                        word1: "fire",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "85",
                        word1: "flame",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "86",
                        word1: "",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "87",
                        word1: "faggot",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "88",
                        word1: "",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "89",
                        word1: "frappe",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "90",
                        word1: "piss",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "91",
                        word1: "pet",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "92",
                        word1: "pan",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "93",
                        word1: "pomeranian",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "94",
                        word1: "pear",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "95",
                        word1: "pool",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "96",
                        word1: "puch",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "97",
                        word1: "pingpong",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "98",
                        word1: "parfait",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "99",
                        word1: "poop",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                    {
                        number: "100",
                        word1: "tissue",
                        word2: null,
                        attempted: false,
                        state: false,
                    },
                ];
            },
            {},
        ],
    },
    {},
    [1]
);
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

    correctText.includes(input)
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
