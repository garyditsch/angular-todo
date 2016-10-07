'use strict';

// Define Angular module and controller.
angular.module('app', ['firebase'])
    .controller('TodoController', TodoController);

function TodoController() {
    const ctrl = this;
    var url = "angular-todo-b0f08.firebaseio.com"
    // angularFire(url, ctrl, "tasks").then(function() {  

    ctrl.taskList = [];
    ctrl.showingForm = false;
    ctrl.showingSaveNewContactButton = true;
   
    // Define input values, and reset function.
    ctrl.taskForm = {
        task: '',
        date: '',
    };


    // Displays form so user can add task
    ctrl.showTaskForm = function() {
        ctrl.showingForm = true;
    }

    ctrl.showingSaveNewContactButton = function() {
        ctrl.addNewTask()
    }

    // Add a new task to taskList on new form input.
    ctrl.addNewTask = function() {
        // if (!ctrl.taskForm.task) {
        //     return false;
        // }
        // else {
            var task = {
                task:ctrl.taskForm.task,
                date:ctrl.taskForm.date,
            };

            ctrl.taskList.push(task);

            ctrl.showingForm = false;
        // }
    };

// }); // response to line 12 in tutorial, to make 'promises' resolve prior to functions

} // end TodoController