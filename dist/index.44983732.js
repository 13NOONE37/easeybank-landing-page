/*Mobile menu */ const openButton = document.querySelector(".header--openMenu");
const headerNavigation = document.querySelector(".header--navigation");
const headerMask = document.querySelector(".header--navMask");
document.addEventListener("click", (e)=>{
    if (openButton.contains(e.target) || headerNavigation.contains(e.target)) return;
    openButton.classList.remove("header--openMenu__open");
    headerNavigation.classList.remove("header--navigation__open");
    headerMask.classList.remove("header--navMask__open");
});
openButton.addEventListener("click", ()=>{
    openButton.classList.toggle("header--openMenu__open");
    headerNavigation.classList.toggle("header--navigation__open");
    headerMask.classList.toggle("header--navMask__open");
});
/*Navigation indicator */ const indicatorElement = document.querySelector(".header--navigation--indicator");
const navElements = document.querySelector(".header--navigation ul");
[
    ...navElements.children
].forEach((el)=>{
    el.addEventListener("click", (e)=>{
        const { left, width } = e.currentTarget.getBoundingClientRect();
        const { left: navigationLeft } = headerNavigation.getBoundingClientRect();
        indicatorElement.style.width = `${width}px`;
        indicatorElement.style.transform = `translateX(${left - navigationLeft}px) `;
    });
});
/*GSAP */ document.addEventListener("DOMContentLoaded", (event)=>{
    gsap.registerPlugin(ScrollTrigger);
    const advantagesChildren = document.querySelector(".section__advantages .container").children;
    gsap.fromTo(advantagesChildren, {
        opacity: 0
    }, {
        opacity: 1
    });
});

//# sourceMappingURL=index.44983732.js.map
