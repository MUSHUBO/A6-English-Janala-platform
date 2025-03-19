console.log("I am connected");

function vocabularyBtn() {
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then((response) => response.json())
        .then((data) => displayData(data.data))
};

function allVocabulary() {
    fetch("https://openapi.programming-hero.com/api/words/all")
        .then((response) => response.json())
        .then((data) => displayVocabulary(data.data))
};

// Vocabulary
const loadVocabulary= (level) => {
    const url = `https://openapi.programming-hero.com/api/level/${level}`;
    // console.log(url)

    fetch(url)
    .then(response=>response.json())
    .then(data=>displayVocabulary(data.data))
    
};


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
         <button onclick="loadVocabulary(${btnData.level_no})" class="btn btn-outline btn-primary">
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

    vocabularyContainer.innerHTML="";
    
    if(allVocabulary.length==0){
        vocabularyContainer.innerHTML=`
            <div class="col-span-full flex flex-col justify-center items-center text-center space-y-3">
                <img class="w-[120px]" src="assets/alert-error.png" alt="">
                <p class="text-[#79716B] text-sm">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
                <h3 class="font-medium text-4xl">নেক্সট Lesson এ যান</h3>
            </div>
        `;
        return;
    };

    for (let vocabulary of allVocabulary) {
        // console.log(vocabulary)

        const vocabularyDiv = document.createElement('div');
        vocabularyDiv.innerHTML = `
        
        <div class=" bg-white w-96">
            <div class="card-body items-center text-center">

                <h2 class="card-title font-bold"> ${vocabulary.word} </h2>
                <p> Meaning / Pronunciation </p>
               <h2 class="card-title font-bold"> ${vocabulary.meaning} / ${vocabulary.pronunciation} </h2> 

                <div class="card-actions flex lg:gap-44 mt-10">
                    <button class="btn bg-[#1A91FF10] h-10 w-10"> <i class="fa-solid fa-circle-question"></i> </button>
                    <button class="btn bg-[#1A91FF10] h-10 w-10"> <i class="fa-solid fa-volume-high"></i> </button>
                </div>
            </div>
        </div>
        
        `

        vocabularyContainer.append(vocabularyDiv)
    };
};



vocabularyBtn();
