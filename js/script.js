{
    let tasks = [];

    let hideDoneTask = false;

    const addNewTask = (newTaskContent) => {
        tasks = [
            ...tasks,
            { content: newTaskContent },
        ];

        render();
    };

    const removeTask = (taskIndex) => {
        tasks = [
            ...tasks.slice(0, taskIndex),
            ...tasks.slice(taskIndex + 1),
        ];

        render();
    };

    const toggleTaskDone = (taskIndex) => {
        tasks = [
            ...tasks.slice(0, taskIndex),
            { ...tasks[taskIndex], done: !tasks[taskIndex].done },
            ...tasks.slice(taskIndex + 1),
        ];

        render();
    };

    const toggleAlldone = () => {
        tasks = tasks.map((task) => ({
            ...task,
            done: true,
        }));

        render();
    };

    const toggleDoneTaskHide = () => {
        hideDoneTask = !hideDoneTask;

        render();
    };

    const bindEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });
        });

        const toggleDoneButtons = document.querySelectorAll(".js-done");

        toggleDoneButtons.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(index);
            });
        });

        const allDoneButton = document.querySelector(".js-allDoneButton");

        if (allDoneButton) {
            allDoneButton.addEventListener("click", () => {
                toggleAlldone();
            });
        };

        const hideShowButton = document.querySelector(".js-hideShowButton");

        if (hideShowButton) {
            hideShowButton.addEventListener("click", () => {
                toggleDoneTaskHide();
            });
        };
    };

    const renderTasks = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li class="taskContener__listItem ${task.done && hideDoneTask ? "taskContener__listItem--hidden" : ""}">
                <button class="taskContener__button taskContener__button--done js-done"> ${task.done ? "✔️" : ""} </button>
                <span class="taskContener__task ${task.done ? "taskContener__task--done" : ""}"> ${task.content} </span>
                <button class="taskContener__button js-remove">🗑</button>
            </li>
            `;
        }

        document.querySelector(".js-tasksList").innerHTML = htmlString;
    };

    const renderButtons = () => {
        const tasksLength = tasks.length;
        let hideAllDoneButtonString = "";

        if (tasksLength > 0) {
            hideAllDoneButtonString = `
                <button class="taskContener__headerButton js-hideShowButton"> ${hideDoneTask && tasks.some(({ done }) => done) ? "Show" : "Hide"} all done tasks </button>
            `
        }

        document.querySelector(".js-hideAllTasks").innerHTML = hideAllDoneButtonString;

        let makrAllDoneString = "";

        if (tasksLength > 0) {
            makrAllDoneString = `
                <button class="js-allDoneButton taskContener__headerButton"${tasks.every(({ done }) => done) ? "disabled" : ""}>Mark all done</button>
            `
        }

        document.querySelector(".js-markAlldone").innerHTML = makrAllDoneString;

    };

    const render = () => {
        renderTasks();
        renderButtons();
        bindEvents();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        document.querySelector(".js-inputField").focus();

        const newTaskContent = document.querySelector(".js-inputField").value.trim();

        if (newTaskContent === "") {
            return;

        }

        addNewTask(newTaskContent);

        document.querySelector(".js-inputField").value = "";
    };

    const init = () => {

        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}