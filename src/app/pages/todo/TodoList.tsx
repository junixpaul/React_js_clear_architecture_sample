import React from "react"
import { connect, useDispatch } from "react-redux"
import { refreshList } from "../../redux/Todo/Todo.actions"
import { TodoProps, Todo } from "../../redux/Todo/Todo.types"
import "antd/dist/antd.css"
import { List, Divider } from "antd"

interface RootState {
    todo: any
}
const TodoList = ({ todo }: TodoProps) => {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(refreshList)
    }
    return (
        <div>
            <button onClick={handleClick}>Refresh</button>
            <Divider orientation="center">TODO LIST</Divider>
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
    console.log("todo")
    console.log(state.todo)
    return {
        todo: state.todo.todo,
    }
}

export default connect(mapStateToProps)(TodoList)
