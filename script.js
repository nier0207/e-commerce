// Questions organized by programming language
const questionsByLanguage = {
    python: {
        name: "Python",
        icon: "🐍",
        levels: {
            1: [ // Easy - Basic Concepts
                { word: "PRINT", question: "What function is used to output text in Python?", hint: "Used to display things on screen" },
                { word: "INPUT", question: "What function is used to get user input?", hint: "Reads from keyboard" },
                { word: "STRING", question: "What data type is used for text?", hint: "Surrounded by quotes" },
                { word: "INTEGER", question: "What data type is used for whole numbers?", hint: "No decimal points" },
                { word: "FLOAT", question: "What data type is used for decimal numbers?", hint: "Has decimal point" }
            ],
            2: [ // Medium - Core Features
                { word: "LIST", question: "What data structure can hold multiple items in order?", hint: "Uses square brackets []" },
                { word: "DICTIONARY", question: "What stores key-value pairs?", hint: "Uses curly braces {}" },
                { word: "FUNCTION", question: "What do you call a reusable block of code?", hint: "Defined with 'def'" },
                { word: "LOOP", question: "What repeats a block of code multiple times?", hint: "for and while" },
                { word: "CONDITIONAL", question: "What statement executes code based on conditions?", hint: "if, elif, else" }
            ],
            3: [ // Hard - Advanced Topics
                { word: "DECORATOR", question: "What modifies the behavior of a function?", hint: "Uses @ syntax" },
                { word: "GENERATOR", question: "What yields values one at a time?", hint: "Uses 'yield' keyword" },
                { word: "LAMBDA", question: "What is a small anonymous function?", hint: "One-line function" },
                { word: "INHERITANCE", question: "What allows a class to inherit from another?", hint: "OOP concept" },
                { word: "EXCEPTION", question: "What handles runtime errors?", hint: "try-except block" }
            ],
            4: [ // Expert - Expert Level
                { word: "METACLASS", question: "What is a class of a class?", hint: "Creates classes" },
                { word: "ASYNC", question: "What keyword is used for asynchronous programming?", hint: "async/await" },
                { word: "CONTEXTMANAGER", question: "What manages resources with 'with' statement?", hint: "Handles setup/teardown" },
                { word: "MULTITHREADING", question: "What allows concurrent execution?", hint: "Threads" },
                { word: "PACKAGE", question: "What organizes modules into directories?", hint: "Requires __init__.py" }
            ]
        }
    },
    javascript: {
        name: "JavaScript",
        icon: "🌐",
        levels: {
            1: [ // Easy - Basic Concepts
                { word: "CONSOLE", question: "What object is used for logging in browser?", hint: "Used for debugging" },
                { word: "ALERT", question: "What function shows a popup message?", hint: "Browser notification" },
                { word: "VARIABLE", question: "What stores data using let or const?", hint: "Container for values" },
                { word: "FUNCTION", question: "What is a reusable block of code?", hint: "Use function keyword" },
                { word: "ARRAY", question: "What holds multiple values in order?", hint: "Uses square brackets" }
            ],
            2: [ // Medium - Core Features
                { word: "PROMISE", question: "What handles asynchronous operations?", hint: "then/catch" },
                { word: "ASYNC", question: "What keyword makes a function return a promise?", hint: "Used with await" },
                { word: "OBJECT", question: "What stores key-value pairs?", hint: "Uses curly braces" },
                { word: "CLASS", question: "What is a blueprint for creating objects?", hint: "ES6 feature" },
                { word: "ARROW", question: "What function has a shorter syntax?", hint: "Uses =>" }
            ],
            3: [ // Hard - Advanced Topics
                { word: "CLOSURE", question: "What remembers its outer variables?", hint: "Function inside function" },
                { word: "PROTOTYPE", question: "What is the inheritance mechanism?", hint: "Chain of objects" },
                { word: "CALLBACK", question: "What function is passed as an argument?", hint: "Executed later" },
                { word: "MODULE", question: "What organizes code into separate files?", hint: "import/export" },
                { word: "FETCH", question: "What API is used for HTTP requests?", hint: "Modern AJAX" }
            ],
            4: [ // Expert - Expert Level
                { word: "PROXY", question: "What creates a custom behavior for operations?", hint: "Traps" },
                { word: "GENERATOR", question: "What function can be paused and resumed?", hint: "Uses yield" },
                { word: "WEBPACK", question: "What is a module bundler?", hint: "Build tool" },
                { word: "TYPESCRIPT", question: "What adds types to JavaScript?", hint: "Superset" },
                { word: "REACT", question: "What UI library is made by Facebook?", hint: "Components" }
            ]
        }
    },
    java: {
        name: "Java",
        icon: "☕",
        levels: {
            1: [ // Easy - Basic Concepts
                { word: "CLASS", question: "What is a blueprint for objects?", hint: "Has main method" },
                { word: "OBJECT", question: "What is an instance of a class?", hint: "Created with new" },
                { word: "METHOD", question: "What is a function inside a class?", hint: "Performs actions" },
                { word: "STATIC", question: "What keyword makes a method belong to class?", hint: "No instance needed" },
                { word: "STRING", question: "What class is used for text?", hint: "Immutable" }
            ],
            2: [ // Medium - Core Features
                { word: "ARRAYLIST", question: "What resizable array implementation?", hint: "From java.util" },
                { word: "INHERITANCE", question: "What allows class to inherit from another?", hint: "extends keyword" },
                { word: "INTERFACE", question: "What defines a contract for classes?", hint: "implements" },
                { word: "OVERRIDE", question: "What annotation is used to redefine a method?", hint: "@" },
                { word: "CONSTRUCTOR", question: "What initializes an object?", hint: "Same name as class" }
            ],
            3: [ // Hard - Advanced Topics
                { word: "THREAD", question: "What allows concurrent execution?", hint: "Runnable" },
                { word: "SYNCHRONIZED", question: "What keyword ensures thread safety?", hint: "Lock" },
                { word: "EXCEPTION", question: "What handles runtime errors?", hint: "try-catch" },
                { word: "GENERICS", question: "What provides type safety?", hint: "Angle brackets" },
                { word: "LAMBDA", question: "What is a functional programming feature?", hint: "->" }
            ],
            4: [ // Expert - Expert Level
                { word: "STREAMS", question: "What processes collections functionally?", hint: "filter, map, reduce" },
                { word: "REFLECTION", question: "What inspects classes at runtime?", hint: "Class.forName" },
                { word: "SPRING", question: "What popular framework uses dependency injection?", hint: "Boot" },
                { word: "HIBERNATE", question: "What is an ORM framework?", hint: "JPA" },
                { word: "MAVEN", question: "What is a build automation tool?", hint: "pom.xml" }
            ]
        }
    },
    cpp: {
        name: "C++",
        icon: "⚡",
        levels: {
            1: [ // Easy - Basic Concepts
                { word: "COUT", question: "What is used for output in C++?", hint: "<< operator" },
                { word: "CIN", question: "What is used for input in C++?", hint: ">> operator" },
                { word: "INT", question: "What data type is for integers?", hint: "Whole numbers" },
                { word: "STRING", question: "What class is for text?", hint: "Needs #include" },
                { word: "VECTOR", question: "What dynamic array class?", hint: "From STL" }
            ],
            2: [ // Medium - Core Features
                { word: "POINTER", question: "What stores memory addresses?", hint: "Uses *" },
                { word: "REFERENCE", question: "What is an alias to a variable?", hint: "Uses &" },
                { word: "CLASS", question: "What is a user-defined type?", hint: "Has methods" },
                { word: "INHERITANCE", question: "What allows class to derive from another?", hint: ":" },
                { word: "VIRTUAL", question: "What keyword enables polymorphism?", hint: "Override" }
            ],
            3: [ // Hard - Advanced Topics
                { word: "TEMPLATE", question: "What allows generic programming?", hint: "template <typename T>" },
                { word: "NAMESPACE", question: "What organizes code to avoid naming conflicts?", hint: "std" },
                { word: "OPERATOR", question: "What allows overloading of symbols?", hint: "+, -, *" },
                { word: "SMARTPOINTER", question: "What manages memory automatically?", hint: "unique_ptr, shared_ptr" },
                { word: "EXCEPTION", question: "What handles errors?", hint: "try-catch" }
            ],
            4: [ // Expert - Expert Level
                { word: "MOVE", question: "What semantics transfer resources?", hint: "&&, std::move" },
                { word: "CONSTEXPR", question: "What keyword evaluates at compile time?", hint: "constexpr" },
                { word: "LAMBDA", question: "What is an anonymous function?", hint: "[](){}" },
                { word: "MULTITHREADING", question: "What uses std::thread?", hint: "Concurrency" },
                { word: "BOOST", question: "What popular C++ library?", hint: "Libraries" }
            ]
        }
    },
    csharp: {
        name: "C#",
        icon: "🎮",
        levels: {
            1: [ // Easy - Basic Concepts
                { word: "CONSOLE", question: "What class is used for input/output?", hint: "WriteLine" },
                { word: "STRING", question: "What data type is for text?", hint: "System.String" },
                { word: "INT", question: "What data type is for integers?", hint: "Whole numbers" },
                { word: "BOOL", question: "What data type is for true/false?", hint: "Boolean" },
                { word: "CLASS", question: "What is a blueprint for objects?", hint: "Contains fields and methods" }
            ],
            2: [ // Medium - Core Features
                { word: "PROPERTY", question: "What provides get and set accessors?", hint: "Encapsulation" },
                { word: "INTERFACE", question: "What defines a contract?", hint: "I prefix" },
                { word: "INHERITANCE", question: "What allows class to derive from another?", hint: ":" },
                { word: "OVERRIDE", question: "What keyword redefines a virtual method?", hint: "override" },
                { word: "LIST", question: "What generic collection?", hint: "List<T>" }
            ],
            3: [ // Hard - Advanced Topics
                { word: "LINQ", question: "What provides query capabilities?", hint: "Language Integrated Query" },
                { word: "DELEGATE", question: "What is a type-safe function pointer?", hint: "Similar to callback" },
                { word: "EVENT", question: "What enables publisher-subscriber pattern?", hint: "event keyword" },
                { word: "ASYNC", question: "What keyword is for asynchronous programming?", hint: "await" },
                { word: "GENERICS", question: "What provides type-safe data structures?", hint: "<T>" }
            ],
            4: [ // Expert - Expert Level
                { word: "ATTRIBUTE", question: "What adds metadata to code?", hint: "[ ]" },
                { word: "REFLECTION", question: "What inspects types at runtime?", hint: "Type, Assembly" },
                { word: "UNITY", question: "What game engine uses C#?", hint: "Game development" },
                { word: "ASP", question: "What web framework for C#?", hint: ".NET Core" },
                { word: "ENTITY", question: "What ORM framework?", hint: "Entity Framework" }
            ]
        }
    }
};

let currentLanguage = "python";
let currentLevel = 1;
let currentQuestionIndex = 0;
let currentWord = '';
let currentQuestion = '';
let currentHint = '';
let guessedLetters = [];
let wrongGuesses = 0;
let score = 0;
let gameActive = true;
let levelQuestions = [];

const maxWrongGuesses = 6;

const elements = {
    landingPage: document.getElementById('landingPage'),
    gameContainer: document.getElementById('gameContainer'),
    currentLangIcon: document.getElementById('currentLangIcon'),
    currentLangName: document.getElementById('currentLangName'),
    backButton: document.getElementById('backButton'),
    levelSelector: document.getElementById('levelSelector'),
    currentLevel: document.getElementById('currentLevel'),
    question: document.getElementById('question'),
    hint: document.getElementById('hint'),
    wordDisplay: document.getElementById('wordDisplay'),
    keyboard: document.getElementById('keyboard'),
    wrongAttempts: document.getElementById('wrongAttempts'),
    score: document.getElementById('score'),
    messageBox: document.getElementById('messageBox'),
    levelComplete: document.getElementById('levelComplete'),
    newGameBtn: document.getElementById('newGameBtn'),
    hangmanParts: {
        head: document.getElementById('head'),
        body: document.getElementById('body'),
        leftArm: document.getElementById('leftArm'),
        rightArm: document.getElementById('rightArm'),
        leftLeg: document.getElementById('leftLeg'),
        rightLeg: document.getElementById('rightLeg')
    }
};

function selectLanguage(lang) {
    currentLanguage = lang;
    const langData = questionsByLanguage[lang];
    
    // Update language info display
    elements.currentLangIcon.textContent = langData.icon;
    elements.currentLangName.textContent = langData.name;
    
    // Hide landing page and show game
    elements.landingPage.style.display = 'none';
    elements.gameContainer.style.display = 'block';
    
    // Initialize game
    initGame();
}

function goBackToLanding() {
    elements.gameContainer.style.display = 'none';
    elements.landingPage.style.display = 'flex';
    // Reset game state
    currentQuestionIndex = 0;
    score = 0;
    wrongGuesses = 0;
}

function initGame() {
    const langData = questionsByLanguage[currentLanguage];
    currentLevel = parseInt(elements.levelSelector.value);
    elements.currentLevel.textContent = `Level ${currentLevel}`;
    levelQuestions = langData.levels[currentLevel];
    currentQuestionIndex = 0;
    score = 0;
    updateScore();
    loadQuestion();
    createKeyboard();
    resetHangman();
}

function loadQuestion() {
    if (currentQuestionIndex < levelQuestions.length) {
        const q = levelQuestions[currentQuestionIndex];
        currentWord = q.word.toUpperCase();
        currentQuestion = q.question;
        currentHint = q.hint;
        guessedLetters = [];
        wrongGuesses = 0;
        gameActive = true;
        
        elements.question.textContent = currentQuestion;
        elements.hint.textContent = `💡 Hint: ${currentHint}`;
        updateWordDisplay();
        updateWrongAttempts();
        enableKeyboard(true);
        elements.messageBox.classList.remove('show');
        elements.levelComplete.style.display = 'none';
        resetHangman();
    } else {
        // Level Complete
        elements.levelComplete.style.display = 'block';
        elements.levelComplete.innerHTML = `🎉 Level ${currentLevel} Complete! 🎉<br>Score: ${score}/${levelQuestions.length}`;
        gameActive = false;
        enableKeyboard(false);
    }
}

function updateWordDisplay() {
    let display = '';
    for (let letter of currentWord) {
        if (guessedLetters.includes(letter)) {
            display += letter + ' ';
        } else {
            display += '_ ';
        }
    }
    elements.wordDisplay.textContent = display.trim();
}

function checkWin() {
    return currentWord.split('').every(letter => guessedLetters.includes(letter));
}

function checkLoss() {
    return wrongGuesses >= maxWrongGuesses;
}

function handleGuess(letter) {
    if (!gameActive || guessedLetters.includes(letter)) return;

    guessedLetters.push(letter);
    const button = document.querySelector(`[data-letter="${letter}"]`);
    
    if (currentWord.includes(letter)) {
        button.classList.add('correct');
        updateWordDisplay();
        
        if (checkWin()) {
            score++;
            updateScore();
            elements.messageBox.textContent = '🎉 Correct! Proceeding to next word...';
            elements.messageBox.className = 'message-box show success';
            elements.wordDisplay.classList.add('win-animation');
            setTimeout(() => elements.wordDisplay.classList.remove('win-animation'), 500);
            
            setTimeout(() => {
                currentQuestionIndex++;
                loadQuestion();
            }, 1500);
        }
    } else {
        button.classList.add('wrong');
        wrongGuesses++;
        updateWrongAttempts();
        updateHangman();
        
        if (checkLoss()) {
            gameActive = false;
            elements.messageBox.textContent = `😢 Game Over! The word was: ${currentWord}`;
            elements.messageBox.className = 'message-box show error';
            enableKeyboard(false);
        }
    }
    
    button.disabled = true;
}

function updateHangman() {
    const parts = ['head', 'body', 'leftArm', 'rightArm', 'leftLeg', 'rightLeg'];
    for (let i = 0; i < wrongGuesses; i++) {
        if (i < parts.length) {
            elements.hangmanParts[parts[i]].style.display = 'block';
        }
    }
}

function resetHangman() {
    Object.values(elements.hangmanParts).forEach(part => {
        part.style.display = 'none';
    });
}

function createKeyboard() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    elements.keyboard.innerHTML = '';
    letters.forEach(letter => {
        const button = document.createElement('button');
        button.className = 'key';
        button.textContent = letter;
        button.dataset.letter = letter;
        button.addEventListener('click', () => handleGuess(letter));
        elements.keyboard.appendChild(button);
    });
}

function enableKeyboard(enable) {
    document.querySelectorAll('.key').forEach(button => {
        button.disabled = !enable;
    });
}

function updateWrongAttempts() {
    elements.wrongAttempts.textContent = `${wrongGuesses}/${maxWrongGuesses}`;
}

function updateScore() {
    elements.score.textContent = score;
}

// Event Listeners
document.querySelectorAll('.programming-card').forEach(card => {
    card.addEventListener('click', () => {
        selectLanguage(card.dataset.lang);
    });
});

elements.backButton.addEventListener('click', () => {
    goBackToLanding();
});

elements.levelSelector.addEventListener('change', () => {
    initGame();
});

elements.newGameBtn.addEventListener('click', () => {
    initGame();
});