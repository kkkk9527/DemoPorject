let text = ["What do you call a droid that takes the long way around? R2 detour",
    "I ate a clock yesterday. It was so time consuming.",
    "I made a playlist for hiking.it has music from Peanuts,and Eminem. I call it my Trail",
    "You know that cemetery up the road? People are dying to get in there."
]

let a = document.getElementById("but1");
let b = document.getElementById("textShow");
b.innerText = text[0];
let pageNumber = 1;
a.addEventListener('click', () => {
    b.innerText = text[pageNumber];
    pageNumber++;
    if (pageNumber > 3) pageNumber = 0;
});