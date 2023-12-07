# Level Two Assignment Two :

## Description : This project is a Node.js and Express.js application with TypeScript and MongoDB. The main features include the ability to create, read, update, and delete (CRUD) users. Users also have options for updating and deleting their profiles. Additionally, the application supports order creation by users.

## Prerequisites

Mainly, we will need Node.js on our computer. In this case, I used TypeScript. Before using this application, we will need to convert our TypeScript code into JavaScript. I achieved this by using a script in the package.json file.

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
