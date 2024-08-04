package com.gl.todo.mapper;

import com.gl.todo.dto.ToDoDto;
import com.gl.todo.entity.ToDo;

public class ToDoMapper {
	
	public static ToDoDto mapToToDoDto(ToDo todo) {
		return new ToDoDto(todo.getId(),todo.getTitle(),todo.getDescription(),todo.isStatus());
	}

	public static ToDo mapToToDo(ToDoDto todoDto) {
		return new ToDo(todoDto.getId(),todoDto.getTitle(),todoDto.getDescription(),todoDto.isStatus());
	}
}
