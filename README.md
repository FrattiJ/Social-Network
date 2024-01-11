# Social Media Application

This is a social media application with an API that uses a NoSQL database (MongoDB) to handle large amounts of unstructured data. The application allows users to create, update, and delete users, thoughts, and reactions.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Models](#models)
- [API Routes](#api-routes)
- [Controllers](#controllers)
- [Walkthrough] (#walkthrough)
- [Questions](#questions)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/
2. **Install Dependencies:**

    ```bash
    npm i
3. **Set up your MongoDB database:**
    - Create a .env file in the root directory and add your MongoDB connection string:

    ```env
    MONGODB_URI=mongodb://your-mongodb-url
4. **Start the server:**

    ```bash
    npm start
## Usage

- Make API requests using tools like Insomnia or Postman.
- Explore and test the various API routes for users, thoughts, and reactions.

## Models

### User

- **username:** String (Unique, Required, Trimmed)
- **email:** String (Required, Unique, Valid Email)
- **thoughts:** Array of ObjectId values referencing the Thought model
- **friends:** Array of ObjectId values referencing the User model (self-reference)

### Thought

- **thoughtText:** String (Required, 1-280 characters)
- **createdAt:** Date (Default: Current timestamp)
- **username:** String (Required)
- **reactions:** Array of nested documents using the Reaction schema

### Reaction (Schema)

- **reactionId:** ObjectId (Default: New ObjectId)
- **reactionBody:** String (Required, 280 characters maximum)
- **username:** String (Required)
- **createdAt:** Date (Default: Current timestamp)

### Virtual Fields

- **friendCount (User model):** Retrieves the length of the user's friends array field on query.
- **reactionCount (Thought model):** Retrieves the length of the thought's reactions array field on query.

## API Routes

### /api/users:

- **GET:** Get all users.
- **GET /:userId:** Get a single user by ID.
- **POST:** Create a new user.
- **PUT /:userId:** Update a user by ID.
- **DELETE /:userId:** Delete a user by ID.
- **POST /:userId/friends/:friendId** Add a new friend to a user's friend list
- **DELETE /:userId/friends/:friendId** Delete a friend from a user's friend list

### /api/thoughts:

- **GET:** Get all thoughts.
- **GET /:thoughtId:** Get a single thought by ID.
- **POST:** Create a new thought.
- **PUT /:thoughtId:** Update a thought

## Controllers

### User Controller (user-controller.js):
- **getAllUsers:** Get all users.
- **getUserById:** Get a single user by ID.
- **createUser:** Create a new user.
- **updateUser:** Update a user by ID.
- **deleteUser:** Delete a user by ID.

### Thought Controller (thought-controller.js):
- **getAllThoughts:** Get all thoughts.
- **getThoughtById:** Get a single thought by ID.
- **createThought:** Create a new thought.
- **updateThought:** Update a thought by ID.
- **deleteThought:** Delete a thought by ID.
- **createReaction:** Create a reaction for a thought.
- **deleteReaction:** Delete a reaction from a thought.

## Walkthrough
https://youtu.be/dEBDMOJtwWc

## Questions
If you have any questions about this projects, please contact me directly at JacobRFratti@gmail.com. You can view more of my projects at https://github.com/FrattiJ.