# @qemer

This is a test project named `@qemer`, designed for running multiple apps (server and web) using `pnpm` in a monorepo structure. The project utilizes parallel running of development and start commands for a streamlined workflow.

## Table of Contents
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Folder Structure](#folder-structure)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To set up and run this project, follow these steps:

1. **Install pnpm**: If you don’t have `pnpm` installed globally, you can install it by running:
    ```bash
    npm install -g pnpm
    ```
    Alternatively, the script `ensure` will install pnpm automatically if it's not already installed.

2. **Install Dependencies**: 
    ```bash
    pnpm install
    ```

3. **Install Dependencies**: 
    To install all dependencies across all workspaces (server and web):
    ```bash
    pnpm run install-all
    ```


4. **Running in Development Mode**: 
    To start both the server and web apps in parallel:
    ```bash
    pnpm run dev
    ```

5. **Building the Project**:
    To build the server and web apps:
    ```bash
    pnpm run build
    ```

6. **Starting the Project**: 
    To start both the server and web apps in parallel:
    ```bash
    pnpm run start
    ```

## Scripts

Here is a list of the available scripts and what they do:

- `dev`: Runs the development servers in parallel for both the `server` and `web` apps.
- `build`: Builds the `server` and `web` apps individually using `pnpm run --filter`.
- `start`: Starts the production build of both `server` and `web` apps in parallel.
- `ensure`: Installs `pnpm` if it is not already installed and runs `pnpm install`.

## Folder Structure



Frontend Project - React + Vite
frontend project built using React and Vite. It includes a component-based structure with organized folders for components, hooks, pages, types, and more.

Project Structure

```
src/
├── components/        # Reusable components used throughout the app
├── config/            # Configuration files (e.g., API endpoints)
├── contexts/          # React Context API setup for state management
├── hooks/             # Custom React hooks
├── lib/               # Utility functions and libraries
├── pages/             # Page components (e.g., Home, About)
├── types/             # TypeScript type definitions
├── App.tsx            # Main App component
├── index.css          # Global styles
├── main.tsx           # Entry point for rendering the app
├── Router.tsx         # React Router setup for page navigation
├── vite-env.d.ts      # Vite environment variable types
```

Environment Variables
Create a .env file at the root of the project to manage environment variables. These should be prefixed with VITE_ to be accessible in the frontend code.

VITE_API_BASE_URL=https://api.example.com

This project is configured with TypeScript, so type definitions are located in the types/ folder.
React Router is used for routing, and the routes are defined in Router.tsx.


Backend Project - Express.js
Backend project built using Express.js. It includes a modular structure with organized folders for controllers, services, models, middlewares, and more, aimed at creating a scalable and maintainable codebase.

Project Structure
```
src/
├── api/                # API routes definitions
├── config/             # Configuration files (e.g., environment settings)
├── controller/         # Route controllers for handling requests and responses
├── error/              # Custom error handling classes and utilities
├── interface/          # TypeScript interfaces for request/response and models
├── loader/             # Modules to initialize and configure services (e.g., DB)
├── middleware/         # Custom middleware for validation, authentication, etc.
├── model/              # Database models and schemas
├── seed/               # Database seeding scripts
├── service/            # Business logic and service functions
├── utils/              # Utility functions
├── validation/         # Request validation schemas
```

API Routes are defined in the api/ folder.
Controllers are organized in the controller/ folder, handling request and response logic.
Middleware for validation, authentication, and other custom functions are in the middleware/ folder.
Database Models are defined in the model/ folder for easy integration with MongoDB or other databases.
Error Handling utilities are placed in the error/ folder to manage custom errors.
Validations for request parameters are defined in the validation/ folder to keep code clean and manageable.
