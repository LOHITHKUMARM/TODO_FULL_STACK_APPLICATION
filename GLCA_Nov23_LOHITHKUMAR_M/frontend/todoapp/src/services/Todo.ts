import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/todos';

export const listTodos = () => axios.get(REST_API_BASE_URL);

export const createTodo = (todo: any) => axios.post(REST_API_BASE_URL, todo);

export const getTodoById = (id: number) => axios.get(REST_API_BASE_URL + '/' + id);

export const updateTodo = (id: number, todo: any) => axios.put(REST_API_BASE_URL + '/' + id, todo);

export const deleteTodo = (id: number) => axios.delete(REST_API_BASE_URL + '/' + id);

export const completeTodo = (id: number) => axios.patch(REST_API_BASE_URL + '/' + id + "/complete");
export const inCompleteTodo = (id: number) => axios.patch(REST_API_BASE_URL + '/' + id + "/incomplete");