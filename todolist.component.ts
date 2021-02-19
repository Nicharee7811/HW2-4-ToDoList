import { Component} from '@angular/core';

@Component({
    selector: 'app-todolist',
    templateUrl: './todolist.component.html',
})
export class ToDoListComponent {
    todos = [
        {name: 'Coffee'},
        {name: 'Breakfast'}
    ];
    newtodo = "";
    
    constructor() {
    }

    add = function() {
        const t = {name: this.newtodo};
        this.todos.push(t);
        this.newtodo = "";
    }

    del = function(i) {
        this.todos.splice(i, 1);
    }
}