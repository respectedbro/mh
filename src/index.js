const buttons = document.querySelectorAll('.store__catigory-button');

const changeActiveBtn = (event ) => {
    const target = event.target;
    buttons.forEach((button) => {
        button.classList.remove('store__catigory-button_active');
    });

    target.classList.add('store__catigory-button_active');
};

buttons.forEach((button) => {
    button.addEventListener('click', changeActiveBtn);
});