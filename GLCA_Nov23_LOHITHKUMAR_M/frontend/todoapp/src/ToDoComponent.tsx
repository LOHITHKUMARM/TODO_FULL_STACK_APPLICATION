import { FormEvent, useEffect, useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap"
import { createTodo, getTodoById, listTodos, updateTodo } from "./services/Todo";
import "./HeaderAndFooter/Header.css"
import { useHistory, useParams } from "react-router-dom";



interface RoutParam {
    id: string

}
const ToDoComponent = () => {
    const [title, setTitle] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [status, setStatus] = useState<string>("")
    const { id } = useParams<RoutParam>()

    function saveOrUpdate(e: FormEvent) {
        e.preventDefault()
        const todo = {
            title, description, status
        }
        if (id) {
            updateTodo(Number(id), todo).then((response) => {
                console.log(response.data);
                navigator.push("/")
            }).catch((error) => {
                console.log(error);
            })

        } else {
            createTodo(todo).then((response) => {
                console.log(response.data);
                navigator.push("/");
            }).catch((error) => console.log(error))
        }

    }
    function getTodos(id: Number) {
        getTodoById(Number(id)).then((response: any) => {
            setTitle(response.data.title)
            setDescription(response.data.description)
            setStatus(response.data.status)
        }).catch((error) => console.log(error))
    }
    useEffect(() => getTodos(Number(id)), [id]);
    const navigator = useHistory();
    function resetForm() {
        setTitle("");
        setDescription("");
        setStatus("")
    }
    return (< >

        <Container className="mt-5 " >
            <Card className={"shadow mx-auto bg"} style={{ maxWidth: "500px", padding: "20px", border: "2px solid grey" }}>
                <Card.Header as="h2" className="text-center">
                    {Number(id) ? "Update Todo" : "Create Todo"}
                </Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3" style={{ width: "70%" }}>
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)

                                }

                            />
                        </Form.Group>

                        <Form.Group className="mb-3" style={{ width: "70%" }}>
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" style={{ width: "70%" }}>
                            <Form.Label>Status</Form.Label>
                            <Form.Select
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                            >
                                <option>Select the status</option>
                                <option value="false">No</option>
                                <option value="true">Yes</option>
                            </Form.Select>
                        </Form.Group>

                        <Button type="submit" variant="success" onClick={saveOrUpdate} className="me-2">
                            Submit
                        </Button><Button onClick={() => navigator.push('/')} className="me-2">Home</Button>
                        <Button variant="danger" onClick={resetForm}>Reset</Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    </>
    )
}
export default ToDoComponent;