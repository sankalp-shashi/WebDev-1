function clickAbout()
{
    scrollTo(0,800);   
}
function clickcases()
{
    scrollTo(0,1600);
}
function clickHome()
{
    scrollTo(0,0);
}

document.querySelector('about').onclick = clickAbout;
document.querySelector('cases').onclick = clickcases;
document.querySelector('home').onclick = clickHome;

let backToTop = document.querySelector('button');
function scrollToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function firstCaseToggle(){
    let firstCaseText = document.getElementById("firstCase");
    let secondCaseText = document.getElementById("secondCase");
    let thirdCaseText = document.getElementById("thirdCase");
    let blankCaseText = document.getElementById("blankCase");
    if (secondCaseText.style.display === "block") {
        secondCaseText.style.display = "none";
    }
    else if (thirdCaseText.style.display === "block") {
        thirdCaseText.style.display = "none";
    }
    
    else if (blankCaseText.style.display === "block") {
        blankCaseText.style.display = "none";
        firstCaseText.style.display = "block";
        scrollTo(0,2000);
    }
    else {
        blankCaseText.style.display = "block";
        firstCaseText.style.display = "none";
    }
}


function secondCaseToggle(){
    let firstCaseText = document.getElementById("firstCase");
    let secondCaseText = document.getElementById("secondCase");
    let thirdCaseText = document.getElementById("thirdCase");
    let blankCaseText = document.getElementById("blankCase");
    if (firstCaseText.style.display === "block") {
        firstCaseText.style.display = "none";
    }
    else if (thirdCaseText.style.display === "block") {
        thirdCaseText.style.display = "none";
    }
    else if (blankCaseText.style.display === "block") { 
        blankCaseText.style.display = "none";
    }
    if (secondCaseText.style.display === "none") {
        secondCaseText.style.display = "block";
        scrollTo(0,2000);
    }
    else {
        secondCaseText.style.display = "none";
        blankCaseText.style.display = "block";
    }
}


function thirdCaseToggle(){
    let firstCaseText = document.getElementById("firstCase");
    let secondCaseText = document.getElementById("secondCase");
    let thirdCaseText = document.getElementById("thirdCase");
    let blankCaseText = document.getElementById("blankCase");
    if (secondCaseText.style.display === "block") {
        secondCaseText.style.display = "none";
    }
    else if (firstCaseText.style.display === "block") {
        firstCaseText.style.display = "none";
    }
    else if (blankCaseText.style.display === "block") { 
        blankCaseText.style.display = "none";
    }
    if (thirdCaseText.style.display === "none") {
        thirdCaseText.style.display = "block";
        scrollTo(0,2000);
    }
    else {
        thirdCaseText.style.display = "none";
        blankCaseText.style.display = "block";
    }
}
