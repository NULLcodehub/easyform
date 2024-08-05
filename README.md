# FormFlow

FormFlow is a web application built using the MERN stack (MongoDB, Express, React, Node.js) that allows users to create projects and generate APIs for collecting form input data. This data is sent directly to the user's email and can also be viewed on the FormFlow dashboard.

## Features

- **User Authentication**: Secure login and registration using JWT.
- **Project Management**: Create and manage multiple projects.
- **Form API Generation**: Generate API endpoints for each project to collect form data.
- **Email Notifications**: Receive form submissions directly in your email.
- **Dashboard**: View and manage form data submissions in the FormFlow dashboard.

## Live Demo

The project is live! You can access it [here]([http://your-live-demo-link.com](https://formflow-ten.vercel.app/)).

## Technologies Used

- **Frontend**: React
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Email Service**: NodeMailer
- **Authentication**: JWT (JSON Web Tokens)

## How It Works

1. **User Registration and Login**: Users can securely register and log in to their accounts using JWT authentication.
2. **Create a Project**: Users can create a new project after logging in.
3. **Generate API Endpoint**: Each project generates a unique API endpoint.
4. **Integrate the API**: Use the generated API endpoint to collect form data from any web page.
5. **Receive Email Notifications**: Form submissions are sent directly to the user's registered email.
6. **Dashboard**: Users can view and manage their form submissions on the FormFlow dashboard.

## Example Usage

1. Create a project on FormFlow.
2. Use the provided API endpoint to integrate with your website form.
3. data is sent to your email upon form submission and stored in FormFlow.
4. Manage and view form data submissions via the FormFlow dashboard.

## Security

FormFlow uses bcrypt for password hashing and JWT for secure authentication to ensure user data is protected.


