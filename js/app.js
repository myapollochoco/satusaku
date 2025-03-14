//aminbutton
// let increment = true;

//     document.querySelector('.aminbutton').addEventListener('click', function() {
//         let currentNumber = parseInt(this.textContent);
//         if (increment) {
//             this.textContent = currentNumber + 1;
//             this.classList.add('aminhit');
//         } else {
//             this.textContent = currentNumber - 1;
//             this.classList.remove('aminhit');
//         }
//         increment = !increment; // Toggle the increment variable
//     });

// //aminbutton2
// let increment = true;
// let amincount = document.querySelectorAll('.amin_count');

//     document.querySelectorAll('.aminbutton').addEventListener('click', function() {
//         let currentNumber = parseInt(amincount.textContent);
//         if (increment) {
//             amincount.textContent = currentNumber + 1;
//             this.classList.add('aminhit');
//         } else {
//             amincount.textContent = currentNumber - 1;
//             this.classList.remove('aminhit');
//         }
//         increment = !increment; // Toggle the increment variable
//     });

//AMIN BUTTON 3 LOOP
let amincounts = document.querySelectorAll('.amin_count');
let buttons = document.querySelectorAll('.aminbutton');

buttons.forEach((button, index) => {
    button.addEventListener('click', function() {
        let currentNumber = parseInt(amincounts[index].textContent);
        let increment = !this.classList.contains('aminhit');
        
        if (increment) {
            amincounts[index].textContent = currentNumber + 1;
            this.classList.add('aminhit');
        } else {
            amincounts[index].textContent = currentNumber - 1;
            this.classList.remove('aminhit');
        }
    });
});


// SLIDER TESTIMONI
let currentIndex = 0;

function showSlide(index) {
    const testiWrap = document.querySelector('.testimoni_wrap');
    const slideItems = document.querySelector('.testimoni_items').clientWidth;
    testiWrap.style.transform = `translateX(${-index * slideItems}px)`;

    const counterWrap = document.querySelector('.counter_items_wrap');
    const counterItems = document.querySelector('.counter_numbers').clientHeight;
    counterWrap.style.transform = `translateY(${-index * counterItems}px)`;
}

function nextSlide() {
    const slideItems = document.querySelectorAll('.testimoni_items');
    currentIndex = (currentIndex + 1) % slideItems.length;
    showSlide(currentIndex);
}

function prevSlide() {
    const slideItems = document.querySelectorAll('.testimoni_items');
    currentIndex = (currentIndex - 1 + slideItems.length) % slideItems.length;
    showSlide(currentIndex);
}

showSlide(currentIndex);

// SLIDER TESTIMONI END

// ACCORDION
document.querySelectorAll('.faq_header').forEach(header => {
    header.addEventListener('click', () => {
        const faqItem = header.parentElement;
        const content = faqItem.querySelector('.faq_content');
        const icon = header.querySelector('.icon');

        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
            icon.textContent = 'keyboard_arrow_up';
        } else {
            content.style.display = 'none';
            icon.textContent = 'keyboard_arrow_down';
        }
    });
});

// HORZ SCROLL
const tabsWrap = document.getElementById('tabsWrap');
tabsWrap.addEventListener('wheel', (event) => {
  if (event.deltaY !== 0) {
    event.preventDefault();
    tabsWrap.scrollLeft += event.deltaY;
  }
});

//hamburger menu
const hamburgerMenu = document.getElementById('hamburgermenu');
const openhamburger = document.getElementById('openhambtn');
const closehamburger = document.getElementById('closehambtn');

openhamburger.addEventListener('click', () => {
    hamburgerMenu.style.display = 'block';
});
closehamburger.addEventListener('click', () => {
    hamburgerMenu.style.display = 'none ';
});

//G up animation
document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.goUp').forEach(function(element) {
        gsap.fromTo(element, 
            { 
                opacity: 0, 
                y: 50 
            },
            { 
                opacity: 1, 
                stagger: 0.1,
                y: 0,
                duration: 1,
                // ease: "power3.out",
                ease: "power3.inOut",
                scrollTrigger: {
                    trigger: element,
                    start: 'top 90%', // Adjust this as needed
                    end: 'bottom 20%', // Adjust this as needed
                    toggleActions: 'play none none reset'
                }
            }
        );
    });

    gsap.utils.toArray('.goUp_d1').forEach(function(element) {
        gsap.fromTo(element, 
            { 
                opacity: 0, 
                y: 50 
            },
            { 
                opacity: 1, 
                stagger: 0.1,
                y: 0,
                duration: 1,
                delay: 1,
                // ease: "power3.out",
                ease: "power3.inOut",
                scrollTrigger: {
                    trigger: element,
                    start: 'top 90%', // Adjust this as needed
                    end: 'bottom 20%', // Adjust this as needed
                    toggleActions: 'play none none reset'
                }
            }
        );
    });

    //fadein
    gsap.utils.toArray('.fadein').forEach(function(element) {
        gsap.fromTo(element, 
            { 
                opacity: 0, 
                // y: 50 
            },
            { 
                opacity: 1, 
                // stagger: 0.1,
                // y: 0,
                duration: 1,
                // delay: 1,
                // ease: "power3.out",
                ease: "power3.inOut",
                scrollTrigger: {
                    trigger: element,
                    start: 'top 90%', // Adjust this as needed
                    end: 'bottom 20%', // Adjust this as needed
                    toggleActions: 'play none none none'
                }
            }
        );
    });
});

// document.addEventListener('DOMContentLoaded', function() {
//     gsap.registerPlugin(ScrollTrigger);

//     gsap.utils.toArray('.goUp').forEach(function(element) {
//         const timeline = gsap.timeline({
//             scrollTrigger: {
//                 trigger: element,
//                 start: 'top 80%', // Adjust this as needed
//                 end: 'bottom 20%', // Adjust this as needed
//                 toggleActions: 'play none none none'
//             }
//         });

//         timeline.fromTo(element.children, 
//             { 
//                 opacity: 0, 
//                 y: 50 
//             },
//             { 
//                 opacity: 1, 
//                 y: 0,
//                 duration: 0.6,
//                 // stagger: 0.2 // Delay between animations of children elements
//             }
//         );
//     });
// });



//heading split type

document.addEventListener('DOMContentLoaded', function() {
    const splitText = document.querySelectorAll('.subtitle-container');
    splitText.forEach((char, i) => {
        const text = new SplitType(char, { types: ['chars', 'words'] });
        gsap.from(text.chars, {
            scrollTrigger: {
                trigger: char,
                start: 'top 90%',
                end: 'top 5%',
                toggleActions: "play none none reset",
                //              restart play pause resume reverse reset complete(jump to finish) none 
                //              onEnter onLeave onEnterBack onLeaveBack
                // scrub: 2,
                // markers: true,
            },
            // opacity: 0.2,
            // stagger: 0.1,
            yPercent: 120,
            stagger: 0.05,
            // ease: "back.out",
            // ease: "elastic.out",
            ease: "power3.inOut",
            duration: .5,
            delay: .25
            
        });
    });
  });


//top nav bar
document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger);

    let lastScroll = 0;

    ScrollTrigger.create({
        start: 'top top',
        end: 'bottom bottom',
        // markers: true,
        scrub: true,
        onUpdate: (self) => {
            let currentScroll = self.scroll();

            if (currentScroll > lastScroll) {
                // Scrolling Down
                gsap.to('header', { 
                    y: '-100%', 
                    // duration: 0.3,
                    // scrub: true 
                });
                // gsap.to('.nav-top-bar', { y: '-100%', duration: 0.3 });
            } else {
                // Scrolling Up
                gsap.to('header', { 
                    y: '0%', 
                    // duration: 0.3 
                });
                // gsap.to('.nav-top-bar', { y: '0%', duration: 0.3 });
            }
            lastScroll = currentScroll;
        }
    });
});