document.addEventListener("DOMContentLoaded", ()=> {
    const title  = document.querySelector("h1");
    const nav = document.querySelector("nav");
    const mainContent = document.querySelector("main");
    const aside = document.querySelector("aside");

    title.textContent = "Belajar Javascript Dasar - Interaksi Pertama! ";
    title.addEventListener("click", () => {
        nav.classList.toggle("show-nav");
    });

    document.addEventListener("keydown", (event) => {
        if(event.key=== "d") {
            document.body.classList
        }
        if (event.key === "f"){
            title.classList.toggle("big-text");
        }
    });

    let count = 0;
    mainContent.addEventListener("click", () =>{
        count++;
        aside.textContent = `Kamu klik konten ini sebanyak ${count} kali`;
    });

    nav.addEventListener("mouseover", () => {
        nav.classList.add("hover-effect");
    });

    nav.addEventListener("mouseout", () => {
        nav.classlist.add("hover-effect");
    });

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            document.body.classList.add("scroll-bg");
        } else {
            document.body.classList.remove("scrooll-bg");
        }
    });
});