# Node.js Simple API

This is a simple API built with Node.js. It uses no framework and is built from scratch. It is a simple API that allows users to create, read, update and delete tasks.

## Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Install the dependencies by running the following command:
   
   ```bash
   npm install
   ```
4. Run the following command to start the server:
   
   ```bash
   npm start 
   ```

# Routes and Business Rules

## Task Structure

Each task should have the following properties:

- **id** - Unique identifier for each task.
- **title** - Title of the task.
- **description** - Detailed description of the task.
- **completed_at** - Date when the task was completed. The initial value should be null.
- **created_at** - Date when the task was created.
- **updated_at** - Should always be changed to the date when the task was updated.

## Routes

### POST /tasks

- Create a task in the database, sending the `title` and `description` fields through the request body.
- Automatically fill in the `id`, `created_at`, `updated_at`, and `completed_at` fields as per the properties guidelines.

### GET /tasks

- List all tasks saved in the database.
- Allow filtering of tasks by `title` and `description`.

### PUT /tasks/:id

- Update a task by `id`.
- Accept only `title` and/or `description` in the request body.
- Validate if the `id` belongs to a task saved in the database before updating.

### DELETE /tasks/:id

- Remove a task by `id`.
- Validate if the `id` belongs to a task saved in the database before removal.

### PATCH /tasks/:id/complete

- Mark the task as complete or return it to its "normal" state.
- Validate if the `id` belongs to a task saved in the database before changing its state.


