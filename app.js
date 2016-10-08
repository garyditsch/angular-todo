'use strict';

// Define Angular module and controller.

angular.module('app', [])
    .controller('TodoController', TodoController)

function TodoController() {
    const ctrl = this;
        

    ctrl.taskList = [];
    // ctrl.taskComplete = false;
    ctrl.showingForm = true;
    ctrl.showingSaveNewContactButton = true;
   
    // Define input values, and reset function.
    ctrl.taskForm = {
        task: '',
        dateAdded: '',
        dateDue:'',
        completed:'',
    };


    // Displays form so user can add task
    ctrl.showTaskForm = function() {
        ctrl.showingForm = true;
    }

    ctrl.clearForm = function() {
        ctrl.taskForm = {
            task: '',
            dateAdded: '',
            dateDue:'',
        }
    }


    ctrl.completeTask = function() {
        ctrl.taskComplete = true;
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
                task:ctrl.taskForm.task,
                dateAdded:ctrl.taskForm.dateAdded,
                dateDue:ctrl.taskForm.dateDue,
                completed:ctrl.taskComplete=false,
            };

            ctrl.taskList.push(task);
            ctrl.clearForm()

        // }
    };

}; // end TodoController
