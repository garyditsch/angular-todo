'use strict';

// Define Angular module and controller.

angular.module('app', [])
    .controller('TodoController', TodoController)

function TodoController() {
    const ctrl = this;
        

    ctrl.taskList = [];
    // ctrl.taskComplete = false;
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


    ctrl.completeTask = function(index) {
        ctrl.taskList[index].completed = true;
    };

    ctrl.uncompleteTask = function(index) {
        ctrl.taskList[index].completed = false;
    };

    // ctrl.showingSaveNewContactButton = function() {
    //     ctrl.addNewTask()
    // };

    // Add a new task to taskList on new form input.
    ctrl.addNewTask = function() {
        // if (!ctrl.taskForm.task) {
        //     return false;
        // }
        // else {
            var task = {
                task:ctrl.taskModel.task,
                dateAdded:ctrl.taskModel.dateAdded,
                dateDue:ctrl.taskModel.dateDue,
                completed:ctrl.completed = false,
            };

            ctrl.taskList.push(task);
            ctrl.clearForm()

        // }
    };

}; // end TodoController
