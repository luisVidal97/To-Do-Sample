const argv = require("./config/yargs").argv;
const toDoing = require("./to-do/to-do");
const colors = require("colors");

let command = argv._[0];

switch (command) {
    case "create":
        let task = toDoing.create(argv.description);
        console.log(task);
        break;
    case "list":
        let list = toDoing.getList();
        for (let task of list) {
            console.log("============ To Do =========".green);
            console.log(task.description);
            console.log("status: ", task.completed);
            console.log("============================".green);
        }
        break;
    case "update":
        let update = toDoing.update(argv.description, argv.completed);
        console.log(update);
        break;
    case "delete":
        let deleteT = toDoing.deleteTask(argv.description);
        console.log(deleteT);
        break;
    default:
        console.log("command is not recognized");
}