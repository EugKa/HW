// function lighter() {
//     const light = document.querySelector('.list');
//     let lightIsActive;

//     const btnSwitche = (button) => {
//         btnOff();
//         lightIsActive = button;

//         button.classList.add('active')
//     }

//     const btnOff = () => {
//         if (lightIsActive) {
//             lightIsActive.classList.remove('active')
//         }
//     }

//     const addClick = () => {
//         light.addEventListener('click', (event) => {
//             if (event.target.classList.contains('button')) {
//                 btnSwitche(event.target);
//             }
//         })
//     }

//     addClick();
// }

// lighter();

function superLighter() {

    const lights = document.querySelectorAll('.button');
    for (let i = 0; i < lights.length; i++) {
        lights[i].addEventListener('click', () => {
            lights[i].classList.toggle('active');
            for (let j = 0; j < lights.length; j++) {
                if (j != i) {
                    lights[j].classList.remove('active');
                }
            }
        });
    }

}
superLighter();