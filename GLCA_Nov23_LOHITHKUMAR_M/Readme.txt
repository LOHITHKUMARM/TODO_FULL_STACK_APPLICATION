# Todo Application

This is a Todo application with the frontend developed using React and the backend using Spring Boot. This document provides instructions on how to set up and run the application.

## Project Structure

The project is organized into two main directories:
1. `frontend` - Contains the React application.
2. `backend` - Contains the Spring Boot application.
3. `database` - Contains the `dataBase.sql` file for setting up the database.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js and npm (for the frontend)
- Java Development Kit (JDK) (for the backend)
- Maven (for the backend)
- MySQL or any other compatible database
- Visual Studio Code (recommended for frontend development)
- Eclipse IDE (recommended for backend development)

## Setting Up the Database

1. **Install MySQL** (if not already installed).
2. **Execute the SQL script in `dataBase.sql`**

## Setting Up the Backend

1. **Open Eclipse IDE.**

2. **Import the backend project:**
- Go to `File -> Import -> Existing Maven Projects`.
- Select the `backend/todo` directory and finish the import.

3. **Configure the database connection in `application.properties`:**
- Open `src/main/resources/application.properties`.
- Update the database connection properties with your MySQL credentials:
  ```
  spring.datasource.url=jdbc:mysql://localhost:3306/reactdatabase
  spring.datasource.username=[username]
  spring.datasource.password=[password]
  ```
4. **Run the Spring Boot application:**
- In the `Project Explorer` pane, navigate to `src/main/java > com.gl.todo`.
- Right-click on `TodoApplication.java`.
- Select `Run As -> Java Application`.

The backend application should now be running on `http://localhost:8080`.

## Setting Up the Frontend

1. **Navigate to the frontend directory:**

2. **Open the project in Visual Studio Code:**
- If you are already in the terminal within the `frontend` directory, type:
  ```
  code .
  ```
- Alternatively, you can open Visual Studio Code, go to `File -> Open Folder...`, and select the `frontend` directory.

3. **Install the required npm packages:**
- npm install / npm i in the terminal

4. **Run the React application:**
- npm start


The application should now be running on `http://localhost:5000`.

## Running the Application

1. Ensure that the backend server is running.
2. Ensure that the frontend application is running.
3. Open your browser and navigate to `http://localhost:5000`.

## Additional Notes

- Make sure that the backend server is running before starting the frontend application.

