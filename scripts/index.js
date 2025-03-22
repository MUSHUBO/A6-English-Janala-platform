console.log("I am connected");

// loading box
const showBoxLoader = () => {
    document.getElementById("box-loader").classList.remove("hidden");
    document.getElementById("vocabulary-container").classList.add("hidden");
};
const hideBoxLoader = () => {
    document.getElementById("box-loader").classList.add("hidden");
    document.getElementById("vocabulary-container").classList.remove("hidden");
};

// button selection 
function removeActiveClass() {
    const activeButtons = document.getElementsByClassName("active");
    for (let button of activeButtons) {
        button.classList.remove("active")
    }
};

// button 
function vocabularyBtn() {
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then((response) => response.json())
        .then((data) => displayData(data.data))
};

// vocabulary 
function allVocabulary() {
    fetch("https://openapi.programming-hero.com/api/words/all")
        .then((response) => response.json())
        .then((data) => displayVocabulary(data.data))
};

// Vocabulary
const loadVocabulary = (level) => {
    showBoxLoader();
    const url = `https://openapi.programming-hero.com/api/level/${level}`;
    console.log(url)

    fetch(url)
        .then(response => response.json())
        .then(data => {

            removeActiveClass()
            const clickButton = document.getElementById(`btn-primary${level}`);
            clickButton.classList.add("active")
            // console.log(clickButton);

            displayVocabulary(data.data);
        })

};

// single card
const loadCard = (vocabularyInfo) => {
    console.log(vocabularyInfo)
    const url = (`https://openapi.programming-hero.com/api/word/${vocabularyInfo}`)

    fetch(url)
        .then(response => response.json())
        .then(data => displayCard(data.data))
}



// {
//     "word": "Eager",
//     "meaning": "আগ্রহী",
//     "pronunciation": "ইগার",
//     "level": 1,
//     "sentence": "The kids were eager to open their gifts.",
//     "points": 1,
//     "partsOfSpeech": "adjective",
//     "synonyms": [
//         "enthusiastic",
//         "excited",
//         "keen"
//     ],
//     "id": 5
// }

const displayCard = (cardInfo) => {
    console.log(cardInfo)
    document.getElementById("card_details").showModal();
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = `
    
    <div class="shadow-sm p-4 rounded-lg">
        <h2 class="text-2xl font-semibold" >${cardInfo.word}  (<i class="fa-solid fa-microphone-lines"></i>:${cardInfo.pronunciation})</h2>
        <div class="mt-5 space-y-2">
            <h4 class="font-semibold">meaning:</h4> 
            <h4>${cardInfo.meaning == null ? `অর্থ খুঁজে পাওয়া যায়নি।` : `${cardInfo.meaning}`}</h4>
        </div>
        <div class="my-6 space-y-2">
            <h4 class="font-semibold">Example:</h4> 
            <h4>${cardInfo.sentence}</h4>
        </div>
        <div class="space-y-2">
            <h4>সমার্থক শব্দ গুলো:</h4>
            <div class="flex gap-4">
                <h4 class="bg-[#EDF7FF] rounded-md text-center px-2 py-1">${cardInfo.synonyms[0] == undefined ? `` : `${cardInfo.synonyms[0]}`}</h4>
                <h4 class="bg-[#EDF7FF] rounded-md text-center px-2 py-1">${cardInfo.synonyms[1] == undefined ? `` : `${cardInfo.synonyms[1]}`}</h4>
                <h4 class="bg-[#EDF7FF] rounded-md text-center px-2 py-1">${cardInfo.synonyms[2] == undefined ? `` : `${cardInfo.synonyms[2]}`}</h4>
            </div>
        </div>
    </div>
    
    `;

}


// {
//     "id": 101,
//     "level_no": 1,
//     "lessonName": "Basic Vocabulary"
// }

function displayData(data) {
    // console.log(data);

    // access all btn
    const buttonContainer = document.getElementById('button-container');

    // All Data API 
    for (let btnData of data) {
        const btnDiv = document.createElement('div');

        btnDiv.innerHTML = `
         <button id="btn-primary${btnData.level_no}" onclick="loadVocabulary(${btnData.level_no})" class="btn btn-outline btn-primary">
         <i class="fa-solid fa-book-open"></i> Lesson-${btnData.level_no}</button>
        `;

        buttonContainer.append(btnDiv);
    };

};


// {
//     "id": 5,
//     "level": 1,
//     "word": "Eager",
//     "meaning": "আগ্রহী",
//     "pronunciation": "ইগার"
// }

function displayVocabulary(allVocabulary) {
    // console.log(allVocabulary)

    const vocabularyContainer = document.getElementById('vocabulary-container');

    vocabularyContainer.innerHTML = "";

    if (allVocabulary.length == 0) {
        hideBoxLoader()
        vocabularyContainer.innerHTML = `
            <div class="col-span-full flex flex-col justify-center items-center text-center space-y-3">
                <img class="w-[120px]" src="assets/alert-error.png" alt="">
                <p class="text-[#79716B] text-sm">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
                <h3 class="font-medium text-4xl">নেক্সট Lesson এ যান</h3>
            </div>
        `;
        return;
    };


    for (let vocabulary of allVocabulary) {
        // console.log(vocabulary);

        const vocabularyDiv = document.createElement('div');
        vocabularyDiv.innerHTML = `
        
        <div class=" bg-white h-full rounded-xl p-4 shadow-xl">
            <div class="card-body items-center text-center border-1 border-[#C6BDBD] rounded-lg hover:bg-sky-50">

                <h2 class="card-title font-bold"> ${vocabulary.word} </h2>
                <p> Meaning / Pronunciation </p>
               <h2 class="card-title font-bold"> ${vocabulary.meaning == null ? `অর্থ নেই` : ` ${vocabulary.meaning}`} / ${vocabulary.pronunciation} </h2> 

                <div class=" flex lg:gap-36 md:gap-14 gap-2 mt-10">
                    <button onclick="loadCard(${vocabulary.id})" class="btn h-10 w-10 "> <i class="fa-solid fa-circle-question"></i> </button>
                    <button class="btn h-10 w-10"> <i class="fa-solid fa-volume-high"></i> </button>
                </div>
            </div>
        </div>
        
        `;

        vocabularyContainer.append(vocabularyDiv);
    };

    hideBoxLoader();
};



vocabularyBtn();
