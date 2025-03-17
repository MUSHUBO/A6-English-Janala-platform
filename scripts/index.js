console.log("I am connected");

function vocabularyBtn() {
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then((response) => response.json())
        .then((data) => displayData(data.data))
}

// {
//     "id": 101,
//     "level_no": 1,
//     "lessonName": "Basic Vocabulary"
// }

function displayData(data) {
    console.log(data);
    // access all btn
    const buttonContainer = document.getElementById('button-container')
    
    // api all data
    for (let btnData of data) {
        const btnDiv = document.createElement('div')
        btnDiv.innerHTML = `
         <button id="" class="btn btn-outline btn-primary">
         <i class="fa-solid fa-book-open"></i> Lesson -${btnData.level_no}</button>
        `;

        buttonContainer.append(btnDiv);
    }
}


vocabularyBtn();