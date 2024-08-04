package com.gl.todo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gl.todo.dto.ToDoDto;
import com.gl.todo.service.ToDoService;

@CrossOrigin("*")
@RequestMapping("/api/todos")
@RestController
public class ToDoController {
  
	@Autowired
	ToDoService todoService;
	
	@PostMapping
	public ResponseEntity<ToDoDto> createToDo(@RequestBody ToDoDto todoDto ){
		ToDoDto todo=todoService.createTodo(todoDto);
		return new ResponseEntity<ToDoDto>(todo,HttpStatus.CREATED);
	}
	
	@GetMapping
	public ResponseEntity<List<ToDoDto>> getAllToDos(){
		List<ToDoDto> list=todoService.getAllTodos();
		return new ResponseEntity<List<ToDoDto>>(list,HttpStatus.OK);
	}
	
	@GetMapping("{id}")
	public ResponseEntity<ToDoDto> getToDosById(@PathVariable("id") int id){
		ToDoDto todo=todoService.getTodoById(id);
		return new ResponseEntity<ToDoDto>(todo,HttpStatus.OK);
	}
	
	@PutMapping("{id}")
	public ResponseEntity<ToDoDto> updateToDos(@PathVariable("id") int id, @RequestBody ToDoDto todoDto){
		ToDoDto todos=todoService.updateTodo(id, todoDto);
		return new ResponseEntity<ToDoDto>(todos,HttpStatus.OK);
	}
	
	@DeleteMapping("{id}")
	public ResponseEntity<String> deleteToDoById(@PathVariable("id")int id){
		todoService.deleteTodo(id);
		return new ResponseEntity<String>("ToDO Deleted!",HttpStatus.OK);
	}
	
	@PatchMapping("{id}/complete")
	public ResponseEntity<ToDoDto> completeToDo(@PathVariable("id")int id){
		ToDoDto todo=todoService.completeTodo(id);
		return new ResponseEntity<ToDoDto>(todo,HttpStatus.OK);
	}
	
	@PatchMapping("{id}/incomplete")
	public ResponseEntity<ToDoDto> incompleteToDo(@PathVariable("id")int id){
		ToDoDto todos=todoService.incompleteTodo(id);
		return new ResponseEntity<ToDoDto>(todos,HttpStatus.OK);
	}

}
