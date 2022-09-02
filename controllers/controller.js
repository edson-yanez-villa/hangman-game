export const clickButton = (event, words) => {
    const buttonType = event.dataset.tipo;
    console.log(buttonType);
    // if (buttons[buttonType]) {
    //     buttons[buttonType](event);
    // }
};

const buttons = {
    goLogin: (event) => goToLogin(event),
    goConsoles: (event) => goToConsoles(event),
    searchButton: (event) => search(event),
    buttonEdit: (event) => editProduct(event),
    buttonRemove: (event) => removeProduct(event),
};