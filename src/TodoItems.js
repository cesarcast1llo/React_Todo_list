import React, { Component } from "react";
import FlipMove from "react-flip-move";

class TodoItems extends Component {
//create and initialize object
    constructor(props) {
// super(props) inherits properties/methods from parent component class "react component"
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }

    createTasks(item) {
        return <li onClick={() => this.delete(item.key)}
                    key={item.key}>{item.text}</li>   
    }

    delete(key) {
        this.props.delete(key);
        // delete method to delete chosen item
    }

    render() {
        var todoEntries = this.props.entries;
        // .entries = this.state {items: []} from TodoList.js
        // <TodoList entries={this.state.items} />
        var listItems = todoEntries.map(this.createTasks);
        // iterates through items array and maps() into a <li> (list item)

        return (
            <ul className="theList">
            <FlipMove duration={300} easing="ease-out">
                {listItems}
            </FlipMove>
            </ul>
        );
    }
}
export default TodoItems;