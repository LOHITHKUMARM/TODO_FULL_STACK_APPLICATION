package com.gl.todo.serviceImpl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gl.todo.dto.ToDoDto;
import com.gl.todo.entity.ToDo;
import com.gl.todo.exception.ResourceNotFoundException;
import com.gl.todo.mapper.ToDoMapper;
import com.gl.todo.repository.ToDoRepository;
import com.gl.todo.service.ToDoService;

@Service
public class ToDoServiceImpl implements ToDoService {
    
	@Autowired
	ToDoRepository toDoRepository;
	
	@Override
	public ToDoDto createTodo(ToDoDto todoDto) {
		ToDo todo=ToDoMapper.mapToToDo(todoDto);
		ToDo savedDto=toDoRepository.save(todo);
		return ToDoMapper.mapToToDoDto(savedDto);
	}

	@Override
	public ToDoDto getTodoById(int id) {
		ToDo todo=toDoRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Not Found with id "+id));
		return ToDoMapper.mapToToDoDto(todo);
	}

	@Override
	public List<ToDoDto> getAllTodos() {
		List<ToDo> listOfToDo=toDoRepository.findAll();
		return listOfToDo.stream().map((todo)->ToDoMapper.mapToToDoDto(todo)).collect(Collectors.toList());
	}

	@Override
	public ToDoDto updateTodo(int id, ToDoDto todoDto) {
		ToDo todo=toDoRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Not Found with id "+id));
		todo.setTitle(todoDto.getTitle());
		todo.setDescription(todoDto.getDescription());
		todo.setStatus(todoDto.isStatus());
		ToDo savedtoDo=toDoRepository.save(todo);
		return ToDoMapper.mapToToDoDto(savedtoDo);
	}

	@Override
	public void deleteTodo(int id) {
		ToDo todo=toDoRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Not Found with id "+id));;
        toDoRepository.deleteById(id);
	}

	@Override
	public ToDoDto completeTodo(int id) {
		ToDo todo=toDoRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Not Found with id "+id));;
        todo.setStatus(true);
		ToDo savedToDo=toDoRepository.save(todo);
		return ToDoMapper.mapToToDoDto(savedToDo);
	}

	@Override
	public ToDoDto incompleteTodo(int id) {
		ToDo todo=toDoRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Not Found with id "+id));;
        todo.setStatus(false);
		ToDo savedToDo=toDoRepository.save(todo);
		return ToDoMapper.mapToToDoDto(savedToDo);
	}

}
