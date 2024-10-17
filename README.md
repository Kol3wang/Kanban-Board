## Krazy Kanban Board

Krazy Kanban Board is a full-stack application that allows users to manage tasks using a Kanban board. The application features secure authentication with JSON Web Tokens (JWT), with a React front end and an Express/Node.js back end. The server uses TypeScript and connects to a PostgreSQL database.

## Table of Contents

	•	Features
	•	Technologies Used
	•	Installation
	•	Development Setup
	•	Usage
	•	Scripts
	•	Contributing
	•	License

## Features

	•	User authentication with JWT
	•	Task management on a Kanban board
	•	Responsive UI built with React and Vite
	•	TypeScript for type-safe server code
	•	API integration for CRUD operations
	•	Hot-reloading in development

## Technologies Used

	•	Frontend: React, Vite
	•	Backend: Node.js, Express, TypeScript
	•	Database: PostgreSQL
	•	Authentication: JSON Web Tokens (JWT)
	•	Dev Tools: Nodemon, Concurrently, Wait-on, TS-Node

## Installation

	1.	Clone the repository:

        bash
        git clone git@github.com:Kol3wang/kanban-board.git

    2.	Install dependencies:

        bash
        npm install

    3.	Set up environment variables:
	•	Create a .env file in the root and the server folder with the following keys:

        # In server/ .env
        DB_NAME='kanban_db'
        DB_USER='postgres'
        DB_PASSWORD='wangchuk'
        JWT_SECRET_KEY='secret'

    4.	Set up the PostgreSQL database:

	•	Make sure PostgreSQL is running and accessible.
	•	Create a new database that matches DB_NAME in your .env.

## Development Setup

To start the development environment with hot-reloading for both client and server:

    bash
    npm run dev

This will start both the client and server. The client should be accessible at http://localhost:3000 and the server at http://localhost:3001.

## Usage

	1.	Open the app in your browser and go to the login page.
	2.	Register or log in with an existing account.
	3.	Use the Kanban board to manage tasks by adding, updating, or deleting tasks in different columns.

## Scripts

	•	npm start: Builds the client and starts the server.
	•	npm run dev: Runs both client and server in development mode with hot-reloading.
	•	npm run build: Builds the client for production.
	•	npm run server: Starts the server only.
	•	npm run server:dev: Starts the server in development mode with hot-reloading.
	•	npm run client:build: Builds the client application.
	•	npm run client:dev: Starts the client in development mode.
    Contributing

## Contributions are welcome! Please follow these steps:

	1.	Fork the repository.
	2.	Create a new branch (git checkout -b feature/your-feature).
	3.	Commit your changes (git commit -m 'Add some feature').
	4.	Push to the branch (git push origin feature/your-feature).
	5.	Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

You can adjust any specific sections, URLs, or environment variable details to match your actual setup and usage requirements. This README provides a solid overview of your project’s structure, setup, and functionality for new users or contributors.