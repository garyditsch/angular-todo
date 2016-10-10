'use strict';

// Define Angular module and controller.

angular.module('app', [])
    .controller('TodoController', TodoController)

        
function TodoController() {
    const ctrl = this;
        
    ctrl.taskList = [];
    ctrl.showingForm = true;
    ctrl.showingSaveNewTaskButton = true;
    ctrl.completeFilterStatus = false;
   
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
    ctrl.completeTask = function(task) {
        var index = ctrl.taskList.indexOf(task)
        ctrl.taskList[index].completed = true;
    };

    // this function allow user to uncomplete task
    ctrl.uncompleteTask = function(task) {
        var index = ctrl.taskList.indexOf(task)
        ctrl.taskList[index].completed = false;
    };

    // this function allows user to delete task
    ctrl.deleteTask = function(index) { 
        ctrl.taskList.splice(index, 1);     
    }


    // this function populate form with task data so user can edit
    ctrl.editTask = function(index) {
        ctrl.taskModel = {
            task: ctrl.taskList[index].task,
        }
    };

    // this function will return the array of all or filtered by complete status
    ctrl.getFilteredByComplete = function() {
        if (ctrl.completeFilterStatus === false) {
            return ctrl.taskList;
        } else {
            ctrl.taskList2 = [];
            for (var i=0; i < ctrl.taskList.length; i++) {
                if (ctrl.taskList[i].completed === false) {
                    ctrl.taskList2.push(ctrl.taskList[i]);
                }
            }

            return ctrl.taskList2;
        } 
    }

    // toggle for turning completeFiterStatus to true
    ctrl.completeFilterStatusButton = function() {
        ctrl.completeFilterStatus = true;
    }

    ctrl.allFilterStatusButton = function() {
        ctrl.completeFilterStatus = false;
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
