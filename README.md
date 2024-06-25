# ProfilePulse-University-Student-Profile-Management

This project is a comprehensive web application that utilizes Firebase for authentication and database services. It is mainly created for professors to enter a student's info. It includes several key functionalities such as user authentication (signup, login, and password reset), a home page, and user-specific features like creating new entries and changing passwords. Below is an overview of the main components and functionalities of the project.

## Components Overview

### `NavBar.js`

The `NavBar` component dynamically displays navigation links based on the user's authentication state. If a user is logged in (determined by the presence of a username in `localStorage`), links to "Home", "Create", and "Change Password" are displayed. If the user is not logged in, links to "Login", "Signup", and "Forgot Password" are shown.

### `SignUp.js`

The `SignUp` component allows new users to register for an account. It includes form fields for the user's email, password, and password confirmation. The component checks if the passwords match and if all fields are filled out before attempting to create a new user account with Firebase's `createUserWithEmailAndPassword` method. If the email is already in use, it alerts the user accordingly.

### `Login.js`

The `Login` component provides a form for users to log into their accounts using their email and password. It uses Firebase's `signInWithEmailAndPassword` method. If the login attempt fails (due to incorrect credentials or other errors), it displays an appropriate message. Successful login redirects the user to the home page and stores the username in 

### `ForgotPassword.js`

The `ForgotPassword` component offers a way for users to reset their password if they've forgotten it. Users enter their registered email, and a password reset link is sent to them using Firebase's `sendPasswordResetEmail` method. Upon successful request, it alerts the user and redirects them to the login page[1].

### `Home.js`

The `Home` component serves as the landing page for authenticated users. It displays a list of entries (retrieved from Firebase's Realtime Database) and includes functionality to log out the user. The logout process clears the `localStorage` and uses Firebase's `signOut` 

Create.js
The Create component is used for creating new content or entries within the application. It typically includes a form for users to input data about a student's rno, name and marks, which is then saved to Firebase's Realtime Database.

ChangePassword.js
The ChangePassword component allows users to change their password. It would include fields for the new password and confirmation, and use Firebase's updatePassword method to update the user's password.

## Firebase Configuration (`fb.js`)

The project uses Firebase for backend services, including authentication and database operations. The `fb.js` file contains the Firebase project configuration and initialization code. This setup is crucial for enabling the Firebase SDK's features throughout the application.

## `App.js`

The `App` component is the main entry point of the application. It sets up routing for the different pages/components (e.g., home, login, signup, forgot password) and includes the `NavBar` component to provide consistent navigation across the application.

This project demonstrates the integration of Firebase services with a React application to create a secure and functional web application along with validations.

## Key Functionalities

- **User Authentication**: Users can sign up, log in, and reset their passwords.
- **Session Management**: The application tracks the user's login state and provides appropriate access to features.
- **Dynamic Navigation**: The navigation bar adjusts based on the user's authentication state.
- **Database Interaction**: Authenticated users can view entries from the database on the home page.

# Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm installed on your machine. 

### Installing

1. Clone the repository

git clone https://github.com/YashGothi/To-Do-App

2. Install dependencies
```sh
cd <authenticateapp>
npm install
```
3. Start the development server
```sh
npm start
```
## Built With

* [React](https://reactjs.org/) - The web framework used
* [Firebase](https://firebase.google.com/) - Backend services
* [npm](https://www.npmjs.com/) - Dependency Management

Contact
Your Name - yashgothi14@gmail.com

Project Deployment Link: https://authenticateapp-778fc.web.app/login

Project Link: https://github.com/YashGothi/Authentication-via-Email
Contributing
Contributions to this project are welcome. Please feel free to fork the repository, make changes, and submit pull requests.
