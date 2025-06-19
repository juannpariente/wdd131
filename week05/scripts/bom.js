const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

let chapterArray = getChapterList() || [];

chapterArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener("click", function(){
    if (input.value.trim() !== "") {
        displayList(input.value);
        chapterArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus();
    }else {
        input.focus();
    }
});

function displayList(item) {
    let li = document.createElement("li");
    let deleteButton = document.createElement("button");
    li.textContent = item;
    deleteButton.textContent = "❌";
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener("click", function(){
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chapterArray = chapterArray.filter((item) => item !== chapter);
    setChapterList();
}

function setChapterList(){
    localStorage.setItem("myFavBOMList", JSON.stringify(chapterArray));
}

function getChapterList(){
    return JSON.parse(localStorage.getItem("myFavBOMList"));
}