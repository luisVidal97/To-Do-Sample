const description = {
    // this meaning that the attribute or flag is required
    demand: true,
    alias: "d",
    desc: "Description of task to doing",
};
const completed = {
    default: true,
    alias: "c",
    desc: "Mark with completed or pending Task",
};

const argv = require("yargs")
    .command("create", "Create an element to do", {
        description,
    })
    .command("update", "Update completed status of a task", {
        description,
        completed,
    })
    .command("delete", "Delete a task to do", {
        description,
    })
    .help().argv;

module.exports = { argv };