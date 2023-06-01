
let listImg = document.querySelectorAll('.img img');

let target = -1;
for (let i = 0; i < listImg.length; i++) {
    listImg[i].addEventListener('click', (e) => {
        if (target == -1) {
            listImg[i].classList.toggle('active');
            target = i;
            return;
        }
        if (listImg[target].classList.contains('active')) {
            listImg[target].classList.remove('active')
        }
        if (target == i) {
            target = -1;
            return;
        }
        listImg[i].classList.toggle('active');
        target = i;
    });
}