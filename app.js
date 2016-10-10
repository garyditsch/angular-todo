'use strict';

// Define Angular module and controller.

angular.module('app', [])
    .controller('TodoController', TodoController)

function TodoController() {
    const ctrl = this;
        

    ctrl.taskList = [];
    ctrl.showingForm = true;
    ctrl.showingSaveNewTaskButton = true;
   
    // Define input values, and reset function.
    ctrl.taskModel = {
        task: '',
        dateAdded: '',
        dateDue:'',
    };


    // Displays form so user can add task
    ctrl.showTaskForm = function() {
        ctrl.showingForm = true;
    }

    ctrl.clearForm = function() {
        ctrl.taskModel = {
            task: '',
            dateAdded: '',
            dateDue:'',
        }
    }

    // This function allows user to complete task
    ctrl.completeTask = function(index) {
        ctrl.taskList[index].completed = true;
    };

    // this function allow user to uncomplete task
    ctrl.uncompleteTask = function(index) {
        ctrl.taskList[index].completed = false;
    };

    // this function allows user to delete task
    ctrl.deleteTask = function(index) { 
        ctrl.taskList.splice(index, 1);     
    }


    // Add a new task to taskList on new form input.
    ctrl.addNewTask = function() {
        var task = {
            task:ctrl.taskModel.task,
            dateAdded:ctrl.taskModel.dateAdded,
            dateDue:ctrl.taskModel.dateDue,
            completed:ctrl.completed = false,
        };

        ctrl.taskList.push(task);
        ctrl.clearForm()
    };

}; // end TodoController
