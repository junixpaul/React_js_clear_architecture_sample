import React from "react"
import { connect, useDispatch } from "react-redux"
import { refreshList } from "../../redux/Todo/Todo.actions"
import { TodoProps, Todo } from "../../redux/Todo/Todo.types"
import "antd/dist/antd.css"
import { List, Divider, Input, Button } from "antd"

interface RootState {
    todo: any
}
const TodoList = ({ todo }: TodoProps) => {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(refreshList)
    }
    console.log(refreshList)
    return (
        <div>
            <Divider orientation="center">TODO LIST</Divider>
            <Input placeholder="Todo" />
            <Button style={{ float: "right" }} onClick={handleClick} type="primary">
                Add Todo
            </Button>
            <Divider orientation="left">Todo</Divider>
            <List
                bordered
                dataSource={todo}
                renderItem={(todo) => (
                    <List.Item>
                        {todo.id}. {todo.todo}
                    </List.Item>
                )}
            />
        </div>
    )
}

const mapStateToProps = (state: RootState) => {
    return {
        todo: state.todo.todo,
    }
}
export default connect(mapStateToProps)(TodoList)
