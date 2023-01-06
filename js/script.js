{
    const tasks = [
        {
            content: "task 1",
            done: false,
        },
        {
            content: "task 2",
            done: true,
        },
    ];

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li class="taskContener__listItem ${task.done ? "taskContener__listItem--done" : ""}">
            ${task.content}
            </li>
            `;
        }

        document.querySelector(".js-tasksList").innerHTML = htmlString;
    };

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });

        render();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-inputField").value.trim();

        if (newTaskContent === "") {
            return;
        }

        addNewTask(newTaskContent);
    };

    const init = () => {

        render();

        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}