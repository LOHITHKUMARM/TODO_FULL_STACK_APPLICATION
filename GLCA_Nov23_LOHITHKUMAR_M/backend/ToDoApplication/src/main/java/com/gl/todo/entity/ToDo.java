package com.gl.todo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="ToDos")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class ToDo {
  
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int id;
	
	@Column(nullable=false)
	String title;
	@Column(nullable=false)

	String description;
	@Column(nullable=false)
	boolean status;
}
