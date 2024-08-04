package com.gl.todo.service;

import java.util.List;

import com.gl.todo.dto.ToDoDto;

public interface ToDoService {
	ToDoDto createTodo(ToDoDto todoDto);

	ToDoDto getTodoById(int id);

	List<ToDoDto> getAllTodos();

	ToDoDto updateTodo(int id, ToDoDto todoDto);

	void deleteTodo(int id);

	ToDoDto completeTodo(int id);

	ToDoDto incompleteTodo(int id);

}
