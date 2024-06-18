const buttonWorks = document.getElementById('button-works');
const works = document.getElementsByClassName('hide');
const images = document.getElementsByClassName('work');


for (let x = 3; x < images.length; x++) {
    // images[x].style.display = 'none';
    images[x].classList.add('hide');
}



buttonWorks.addEventListener('click', () => {
    
    // works.style.display = 'block';
    for (let i = 0; i < works.length; i++) {
        // works[i].style.display = 'block';
        works[i].classList.toggle('show');
    }

    if (buttonWorks.innerHTML === 'Посмотреть все работы') {
        buttonWorks.innerHTML = 'Скрыть работы';
    } else {
        buttonWorks.innerHTML = 'Посмотреть все работы';
    }

})

const tel = document.getElementById('tel');
tel.addEventListener('click', () => {
    const text = tel.innerText;
    navigator.clipboard.writeText(text)
    .then(() => {
      tel.innerText = 'Скопировано';
      setTimeout(() => {
        tel.innerText = text;
      }, 2000);

    })
    .catch((error) => {
      console.error("Failed to copy text:", error);
    });
})

const resume = document.getElementById('resume');
resume.addEventListener('click', () => {
    window.open('./resume.pdf');
})
const navigation = document.getElementById('navigation');

const menu = document.getElementById('menu');
menu.addEventListener('click', () => {
    navigation.classList.toggle('active');
    
    
})

navigation.addEventListener('click', () => {
    navigation.classList.remove('active');
})