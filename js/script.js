{
    const tasks = [
        {
            content: "task 1",
            done: true,
        },
        {
            content: "task 2",
            done: false,
        },
    ];

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li>
            ${task.content}
            </li>
            `;
        }

        document.querySelector(".js-tasksList").innerHTML = htmlString;
    };


    //    const onFormSubmit = (event) => {
    //     event.preventDefault();
    //    } 

    const init = () => {
        // const formElement = document.querySelector(".js-form");

        // formElement.addEventListener("submit", onFormSubmit);

        render();
    };

    init();
}