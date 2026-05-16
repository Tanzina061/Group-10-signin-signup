# Todo API

## Overview

A RESTful API built with Node.js and Express.js for managing todos with complete CRUD functionality.

## Installation

```
npm install express
node server.js
```

---

## API Endpoints

### 1. Get All Todos

Retrieves all todos from the database without any filtering.

![Get All Todos](./todo-api/screenshots/getall todos.png)

---

### 2. Get Todos by Range

Retrieves todos within a specified ID range (e.g., /todos/1-3).

![Get Todos by Range](./todo-api/screenshots/selective todos.png)

---

### 3. Create Todo

Creates a new todo with title, description, and completion status.

![Create Todo](./todo-api/screenshots/create todo.png)

---

### 4. Update Todo

Updates an existing todo with new information by ID.

![Update Todo](./todo-api/screenshots/update todos.png)

---

### 5. Delete Todo

Deletes a single todo or range of todos by ID.

![Delete Todo](./todo-api/screenshots/delete todos.png)

---

## Status Codes

- 200 OK
- 201 Created
- 400 Bad Request
- 404 Not Found
- 500 Internal Server Error

## Project Structure

```
todo-api/
├── server.js
├── todos.json
├── package.json
├── README.md
└── screenshots/
```

## Author

[Your Name]

## Date

May 13, 2026
