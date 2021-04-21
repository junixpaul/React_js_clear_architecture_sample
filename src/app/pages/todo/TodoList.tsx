import React, { useEffect, useState } from "react"
import { connect, useDispatch } from "react-redux"
import { refreshList, AddTodo, RemoveTodo, EditTodo, MarkCompleteTodo } from "../../redux/Todo/Todo.actions"
import { TodoProps, Todo } from "../../redux/Todo/Todo.types"
import "antd/dist/antd.css"
import { List, Divider, Input, Button, Card, Modal } from "antd"

interface RootState {
    todo: any
}
const TodoList = ({ todo, AddTodo, RemoveTodo, EditTodo, MarkCompleteTodo }: TodoProps) => {
    const dispatch = useDispatch()
    const [input, setInput] = useState("")
    const [modalInput, setModalInput] = useState({ todo: "", id: "" })
    const [tid] = useState(0)
    const [isModalVisible, setIsModalVisible] = useState(false)
    const handleCancel = () => {
        setIsModalVisible(false)
    }
    const addTodoClickEvent = () => {
        AddTodo({ id: todo.length + 1, todo: input })
        setInput("")
    }
    const removeTodo = (todo: any) => {
        RemoveTodo({ id: todo.id, todo: todo.todo, complete: todo.complete })
    }
    const updateTodoClick = () => {
        EditTodo(modalInput)
    }
    const markCompleteClick = (todo: any) => {
        MarkCompleteTodo({ id: todo.id, todo: todo.todo, complete: todo.complete })
    }
    const showModal = (todo: any) => {
        setModalInput({ todo: todo.todo, id: todo.id })
        setIsModalVisible(true)
    }
    useEffect(() => {
        dispatch(refreshList)
    }, [dispatch])
    return (
        <div style={DivStyle}>
            <Card title="TODO LIST" bordered={true} style={CardStyle}>
                <Input
                    placeholder="Todo"
                    style={InputStyle}
                    name="todoInput"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <Button onClick={addTodoClickEvent} type="primary">
                    Add Todo
                </Button>
                <Divider orientation="left">Todo</Divider>
                <List
                    bordered
                    dataSource={todo}
                    renderItem={(todo) => (
                        <List.Item
                            actions={[
                                <a onClick={() => showModal(todo)} key="list-loadmore-edit">
                                    Edit
                                </a>,
                                <a onClick={() => removeTodo(todo)} key={todo.id}>
                                    Delete
                                </a>,
                                <Button
                                    onClick={() => markCompleteClick(todo)}
                                    key={todo.id}
                                    style={{ backgroundColor: todo.complete == false ? "" : "green" }}
                                >
                                    Mark as Complete
                                </Button>,
                            ]}
                        >
                            {todo.todo}
                        </List.Item>
                    )}
                />
            </Card>
            <Modal
                title="Update Todo"
                visible={isModalVisible}
                onOk={() => updateTodoClick()}
                onCancel={handleCancel}
                okText="Update"
            >
                <Input
                    placeholder="Todo"
                    style={InputStyle}
                    name="todoInput"
                    value={modalInput.todo}
                    onChange={(e) => setModalInput({ todo: e.target.value, id: modalInput.id })}
                />
            </Modal>
        </div>
    )
}

const DivStyle = {
    display: "flex",
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
}

const CardStyle = {
    width: "45%",
}

const InputStyle = {
    width: "87%",
}

const MarkStyle = {
    backgroundColor: "87%",
}

const mapStateToProps = (state: RootState) => {
    return {
        todo: state.todo.todo,
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        AddTodo: (todo: any) => dispatch(AddTodo(todo)),
        RemoveTodo: (todo: any) => dispatch(RemoveTodo(todo)),
        EditTodo: (todo: any) => dispatch(EditTodo(todo)),
        MarkCompleteTodo: (todo: any) => dispatch(MarkCompleteTodo(todo)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
