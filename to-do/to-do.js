const fs = require("fs");

let listToDo = [];

const saveDb = () => {
    let data = JSON.stringify(listToDo);
    fs.writeFile("db/data.json", data, (err) => {
        if (err) {
            throw new Error("Can not save file");
        }
    });
};

const create = (description) => {
    chargeDB();
    let toDoing = {
        description,
        completed: false,
    };
    listToDo.push(toDoing);
    saveDb();
    return toDoing;
};

const chargeDB = () => {
    try {
        listToDo = require("../db/data.json");
    } catch (error) {
        listToDo = [];
    }
};

const getList = () => {
    chargeDB();
    return listToDo;
};

const update = (description, completed = true) => {
    chargeDB();
    let index = listToDo.findIndex((task) => {
        return task.description === description;
    });
    if (index > -1) {
        listToDo[index].completed = completed;
        saveDb();
        return true;
    } else {
        return false;
    }
};

const deleteTask = (description) => {
    chargeDB();
    // let index = listToDo.findIndex((task) => task.description == description);
    // if (index > -1) {
    //     listToDo.splice(index, 1);
    //     saveDb();
    //     return true;
    // } else {
    //     return false;
    // }
    // The filte function allow quit or filter a element of array
    let newList = listToDo.filter((task) => task.description !== description);
    if (newList.length === listToDo.length) {
        return false;
    } else {
        listToDo = newList;
        saveDb();
        return true;
    }
};

module.exports = {
    create,
    getList,
    update,
    deleteTask,
};