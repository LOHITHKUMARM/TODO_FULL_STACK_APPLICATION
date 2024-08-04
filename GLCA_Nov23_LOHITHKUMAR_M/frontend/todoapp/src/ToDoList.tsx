import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { completeTodo, deleteTodo, inCompleteTodo, listTodos } from "./services/Todo";
import { Link, useHistory } from "react-router-dom";
import "./HeaderAndFooter/Header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

type Todo = {
    id: number,
    title: string,
    description: string,
    status: string
}

const ToDoList = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const navigator = useHistory();

    useEffect(() => {
        getAllTodos();
    }, []);

    function getAllTodos() {
        listTodos().then((response: any) => {
            console.log(response.data);
            setTodos(response.data);
        }).catch((error) => console.log(error));
    }

    function update(id: number) {
        navigator.push(`/edit-todo/${id}`);
    }

    function remove(id: number) {
        deleteTodo(id).then((response) => {
            console.log(response.data);
            getAllTodos();
        }).catch((error) => console.log(error));
    }

    function completeTask(id: number) {
        completeTodo(id).then((response) => {
            console.log(response.data);
            getAllTodos();
        }).catch((error) => {
            console.log(error);
        });
    }

    function inCompleteTask(id: number) {
        inCompleteTodo(id).then((response) => {
            console.log(response.data);
            getAllTodos();
        }).catch((error) => {
            console.log(error);
        });
    }

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredTodos = todos.filter(todo =>
        todo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        todo.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="todolist-bg">
            <header className="fixed-top">
                <h4>Todo Management Application</h4>
            </header>
            <Link to="/add-todos" className="btn btn-primary btn-lg" style={{ marginTop: "100px", marginLeft: "22px" }}>
                Add Task
            </Link>
            <Container >
                <h1 style={{ textAlign: "center", marginBottom: "30px", color: "black" }}>List Of Todos</h1>
                <Form.Control
                    type="text"
                    placeholder="Search todos..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="search"
                    style={{ marginLeft: "149px", marginBottom: "10px", width: "25%", padding: "10px" }}
                />
                <table  >
                    <thead >
                        <tr >
                            <th>Sl.No</th>
                            <th>Todo Title</th>
                            <th>Todo Description</th>
                            <th>Todo Completed</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredTodos.map((todo, index) => (
                            <tr key={todo.id} >
                                <td>{index + 1}</td>
                                <td>{todo.title}</td>
                                <td>{todo.description}</td>
                                <td>{todo.status ? "Yes" : "No"}</td>
                                <td>
                                    <Button variant="info" onClick={() => update(todo.id)}>Update</Button>&nbsp;&nbsp;
                                    <Button variant="danger" onClick={() => remove(todo.id)}>Delete</Button>&nbsp;&nbsp;
                                    <Button variant="success" onClick={() => completeTask(todo.id)}>Complete</Button>&nbsp;&nbsp;
                                    <Button variant="secondary" onClick={() => inCompleteTask(todo.id)}>In Complete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Container>
            <footer>
                &copy;Todo.co.in&#174;
            </footer>
        </div>
    );
}

export default ToDoList;