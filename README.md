# Level Two Assignment Two :

## Description : This project is a Node Js. Express Js application with Typescript and MongoDb.This project is basically a small Create, Read, Update and Delete (CRUD) project. Main feature of this project is creating user with updating and deleting options and also user can make orders.These are the main features of this small project.

## Prerequisites

Mainly we will need Node Js. in our computer.In this case i used TypeScript so before using this application we will need to convert our Ts into Js. I did this by using some script in package.json file.

## Installation

1. Clone the repository: `git clone https://github.com/Shahriar090/L2-Assignment-2.git`
2. Navigate to the project folder: `cd L2-Assignment-2`
3. Install dependencies: `npm install`

Dependencies:

"scripts": {
"build": "tsc",
"lint": "eslint src --ignore-path .eslintignore --ext .ts",
"lint:fix": " npx eslint src --fix",
"start:dev": "ts-node-dev --respawn --transpile-only src/server.ts",
"start:prod": "node ./dist/server.js",
"test": "echo \"Error: no test specified\" && exit 1"
}

## Running the Application

1. Start the MongoDB server by npm.
2. Run the application: `npm run start:dev`

## Usage

- Open your browser and go to `http://localhost:5000` to access the application.
