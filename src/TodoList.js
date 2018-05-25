import React, {Component} from 'react';
import TodoItems from "./TodoItems";
import FlipMove from "react-flip-move";


// TodoList class functions
class TodoList extends Component {
//create and initialize object
    constructor(props) {
        // super(props) inherits properties/methods from parent component class "react component"
        super(props);
        // whatever you add into list
        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        // when adding or deleting items, (bind) makes new list with updates
    }
    //
    addItem(e) {
        if (this._inputElement.value !== "" && this._inputElement.value !== " ") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
                //if it isnt a space, it will input newItem key and value from input 
            };
        
        this.setState((prevState) => {
            // previous arrary^
            return {
                items: prevState.items.concat(newItem)
                // new li array from old li array with newItem added
            };
        });
        }
        this._inputElement.value = "";
        // deletes text that you input. starts over
        e.preventDefault();
        // stops page from refreshing every time you add item
    }

    deleteItem(key) {
        let filteredItems = this.state.items.filter(function (item) {
          return (item.key !== key);
        //^^criteria that has to be met in order for filter() to put new array
        });
        this.setState({
          items: filteredItems
        // this is new filtered array without the deleted key
        });
      }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                    {/* when click submit, calls addItem function */}
                        <input ref={(a) => this._inputElement = a}
                                placeholder="enter task">
                                {/* this._inputElement = what you enter */}
                        </input>
                        <button type="submit">add!</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items}
                            delete={this.deleteItem} />
                {/* calling from TodoItems.js file */}
            </div>
        );
    }
}
export default TodoList;