# React Component Library with Storybook

This project is a collection of reusable UI components built using React, TypeScript, Styled Components, and Storybook. You can run, test, and explore the components in an isolated environment.

## Project Overview
- Built with React and TypeScript
- Styled using Styled Components
- Interactive UI showcase with Storybook
- Fully responsive components
- Runs inside a Docker container

---

## Getting Started

### 1. Clone the Repository
```sh
git clone (https://github.com/jkaur207/kaur_jaspreet_coding_assignment_12.git )
cd kaur_jaspreet_ui_garden
```

### 2. Install Dependencies
Ensure that Node.js is installed (version 16 or later recommended). Then run:
```sh
npm install
```

### 3. Start Storybook
To view components in an interactive UI:
```sh
npm run storybook
```
Storybook will open on `http://localhost:6006/`

### 4. Run the Component Library
To start the main React app:
```sh
npm start
```

### 5. Run Tests
Each component has at least two tests. Run them with:
```sh
npm test
```

---

## Running with Docker
This project is containerized for easy deployment.

### 1. Build the Docker Image
```sh
docker build -t kaur_jaspreet_coding_assignment_12 .
```

### 2. Run the Container
```sh
docker run -p 8083:80 kaur_jaspreet_coding_assignment_12
```

### 3. Open the App
Go to `http://localhost:8083/` in your browser.

---

