{
   const onFormSubmit = (event) => {
    event.preventDefault();
   } 
   
    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    }

    init()
}