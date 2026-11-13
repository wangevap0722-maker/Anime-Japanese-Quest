
// ====================
// 開始冒險
// ====================

function startQuest() {
    alert("🌸 歡迎來到二次元日文任務所！\n\n你的日文冒險即將開始！");
}

// ====================
// 單字冒險
// ====================

const words = [
    { word: "桜", kana: "さくら", meaning: "櫻花" },
    { word: "猫", kana: "ねこ", meaning: "貓" },
    { word: "学校", kana: "がっこう", meaning: "學校" },
    { word: "友達", kana: "ともだち", meaning: "朋友" },
    { word: "星", kana: "ほし", meaning: "星星" }
];

let currentIndex = 0;

function showMeaning() {
    document.getElementById("meaning").hidden = false;
}

function nextWord() {
    currentIndex++;

    if (currentIndex >= words.length) {
        currentIndex = 0;
    }

    document.getElementById("word").innerText =
        words[currentIndex].word;

    document.getElementById("kana").innerText =
        "假名：" + words[currentIndex].kana;

    document.getElementById("meaning").innerText =
        "🌸 " + words[currentIndex].meaning;

    document.getElementById("meaning").hidden = true;
}

// ====================
// 文法修練
// ====================

const grammars = [
    {
        name: "～わりに",
        meaning: "明明……卻……、與……相比",
        example: "この店は安いわりに、おいしいです。",
        translation: "這家店明明很便宜，卻很好吃。"
    },
    {
        name: "～だけでなく",
        meaning: "不只……而且……",
        example: "彼は日本語だけでなく、英語も話せます。",
        translation: "他不只會說日文，也會說英文。"
    },
    {
        name: "～をきっかけに",
        meaning: "以……為契機",
        example: "日本旅行をきっかけに、日本語を勉強し始めました。",
        translation: "以日本旅行為契機，開始學習日文。"
    }
];

let grammarIndex = 0;

function nextGrammar() {
    grammarIndex++;

    if (grammarIndex >= grammars.length) {
        grammarIndex = 0;
    }

    document.getElementById("grammarName").innerText =
        grammars[grammarIndex].name;

    document.getElementById("grammarMeaning").innerText =
        grammars[grammarIndex].meaning;

    document.getElementById("grammarExample").innerText =
        grammars[grammarIndex].example;

    document.getElementById("grammarTranslation").innerText =
        grammars[grammarIndex].translation;
}

// ====================
// 挑戰測驗
// ====================

const questions = [
    {
        question: "「猫」的中文意思是什麼？",
        options: ["狗", "貓", "兔子"],
        answer: 1
    },
    {
        question: "「桜」的中文意思是什麼？",
        options: ["櫻花", "星星", "學校"],
        answer: 0
    },
    {
        question: "「友達」的中文意思是什麼？",
        options: ["老師", "家人", "朋友"],
        answer: 2
    }
];

let questionIndex = 0;
let scoreCount = 0;
let answered = false;

// ====================
// 冒險者等級與經驗值
// ====================

let levelCount = 1;
let expCount = 0;

function updateAdventurer() {
    document.getElementById("level").innerText =
        "Lv. " + levelCount;

    document.getElementById("exp").innerText =
        "EXP：" + expCount + " / 30";

    // 更新 EXP 進度條
    document.getElementById("expProgress").style.width =
        (expCount / 30 * 100) + "%";
}

// ====================
// 判斷答案
// ====================

function checkAnswer(selected) {
    if (answered) {
        return;
    }

    const result = document.getElementById("result");

    if (selected === questions[questionIndex].answer) {
        result.innerText = "🎉 答對了！獲得 10 分和 10 EXP！";

        scoreCount += 10;
        expCount += 10;

        // 經驗值滿 30 就升級
        if (expCount >= 30) {
            levelCount++;
            expCount -= 30;

            result.innerText += " 🏆 恭喜升級！";
        }

        updateAdventurer();

    } else {
        result.innerText = "❌ 答錯了，再接再厲！";
    }

    answered = true;

    document.getElementById("score").innerText =
        "目前分數：" + scoreCount + " 分";
}

// ====================
// 下一題
// ====================

function nextQuestion() {
    questionIndex++;

    if (questionIndex >= questions.length) {
        questionIndex = 0;
    }

    document.getElementById("question").innerText =
        questions[questionIndex].question;

    const options = document.getElementById("options");
    options.innerHTML = "";

    questions[questionIndex].options.forEach(function(option, index) {
        const button = document.createElement("button");

        button.innerText = option;

        button.onclick = function() {
            checkAnswer(index);
        };

        options.appendChild(button);
    });

    document.getElementById("result").innerText = "";

    answered = false;
}

// ====================
// 網站載入完成
// ====================

updateAdventurer();

console.log("🌸 二次元日文任務所載入成功！");
