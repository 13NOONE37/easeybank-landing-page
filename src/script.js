/*Mobile menu */
const openButton = document.querySelector('.header--openMenu');
const headerNavigation = document.querySelector('.header--navigation');
const headerMask = document.querySelector('.header--navMask');

document.addEventListener('click', (e) => {
  if (openButton.contains(e.target) || headerNavigation.contains(e.target))
    return;

  openButton.classList.remove('header--openMenu__open');
  headerNavigation.classList.remove('header--navigation__open');
  headerMask.classList.remove('header--navMask__open');
});
openButton.addEventListener('click', () => {
  openButton.classList.toggle('header--openMenu__open');
  headerNavigation.classList.toggle('header--navigation__open');
  headerMask.classList.toggle('header--navMask__open');
});

/*Navigation indicator */
const indicatorElement = document.querySelector(
  '.header--navigation--indicator',
);
const navElements = document.querySelector('.header--navigation ul');

[...navElements.children].forEach((el) => {
  el.addEventListener('click', (e) => {
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const { left: navigationLeft } = headerNavigation.getBoundingClientRect();

    indicatorElement.style.width = `${width}px`;
    indicatorElement.style.transform = `translateX(${
      left - navigationLeft
    }px) `;
  });
});

/*GSAP */
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);
// let mm = gsap.matchMedia();

// const advantagesChildren = document.querySelector(
//   '.section__advantages .container',
// ).children;
// const articlesChildren = document.querySelector(
//   '.section__articles .container',
// ).children;
// mm.add(
//   {
//     isDesktop: '(min-width: 1100px)',
//     isTablet: '(min-width: 550px)',
//     isMobile: '(max-width:550px)',
//   },
//   (context) => {
//     const { isDesktop, isTablet, isMobile } = context.conditions;

//     [...advantagesChildren, ...articlesChildren].forEach((item, index) => {
//       gsap.fromTo(
//         item,
//         {
//           opacity: 0,
//           x: isDesktop || isTablet ? 0 : `${100 * Math.pow(-1, index)}%`,
//         },
//         {
//           opacity: 1,
//           x: 0,

//           scrollTrigger: {
//             trigger: item,
//             start: '0% 80%',
//           },
//           duration: 0.75,
//           ease: 'power1.out',
//         },
//       );
//     });
//   },
// );

// const heroMockup = document.querySelector('.section__hero--mockup');
// mm.add(
//   {
//     isDesktop: '(min-width:820px)',
//     isMobile: '(max-width:820px)',
//   },
//   (context) => {
//     const { isDesktop } = context.conditions;

//     gsap.fromTo(
//       heroMockup,
//       { opacity: 0, x: isDesktop ? 100 : 0, y: isDesktop ? 0 : -100 },
//       {
//         opacity: 1,
//         x: 0,
//         y: 0,
//         delay: 1.5,
//         duration: 0.75,
//         ease: 'sine.inOut',
//       },
//     );
//   },
// );

// const heroChildren = document.querySelector('.section__hero--text').children;
// gsap.fromTo(
//   heroChildren,
//   { opacity: 0, x: -100 },
//   {
//     opacity: 1,
//     x: 0,
//     delay: 0.5,
//     stagger: 0.25,
//     duration: 0.5,
//     ease: 'sine.inOut',
//   },
// );
