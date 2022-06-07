import { Paper } from "@material-ui/core";
import React from "react";
import Todo from "./Todo";

const List = ({ list, removeTodoListProp, editTodoListProp }) => {
    const renderedList = list.map(
        (item) => (
            <Todo
                title={item.title}
                completed={item.completed}
                removeTodoItemProp={(e) => removeTodoListProp(item._id)}
                editTodoItemProp={(updatedItem) => editTodoListProp(item._id, updatedItem)}
                key={item.title}
            />
        )
    );
    return (
        <Paper style={{ padding: 0, backgroundColor: "#eadff5" }}>
            <div className="ui grid center aligned">
                {renderedList}
            </div>
        </Paper>
    );
};

export default List;