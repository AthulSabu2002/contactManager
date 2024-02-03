
# Contact Manager Website

Welcome to the Contact Manager website! This web application allows users to manage their contacts, providing features like creating, editing, and deleting contacts. Additionally, it includes user authentication, session management, and other functionalities.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Dependencies](#dependencies)
- [Usage](#usage)
- [Routes](#routes)
- [Contributing](#contributing)
- [License](#license)

## Features

- User Authentication with Passport.js
- Session Management using Express Session
- Contact Management (Create, Read, Update, Delete)
- Password Reset Functionality
- User Dashboard
- ...

## Getting Started

To get started with the Contact Manager website, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/contactManager.git
   cd contactManager
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables:

   Create a `.env` file in the root directory and add the necessary environment variables:

   ```env
   PORT=5000
   DATABASE_URL=mongodb://your-mongodb-url
   SESSION_SECRET=your-session-secret
   ```

4. Run the application:

   ```bash
   npm start
   ```

   The server will be running on `http://localhost:5000` (or the port specified in your `.env` file).

## Dependencies

- Express.js
- MongoDB (with Mongoose)
- Passport.js
- Express Session
- ...

Make sure to check the `package.json` file for a complete list of dependencies.

## Usage

1. **User Registration:**
   - Navigate to `/registerUserWithOTP` to register a new user with OTP verification.

2. **User Authentication:**
   - Login at `/` or `/users/login`.

3. **Contact Management:**
   - Create a new contact at `/createContact`.
   - View contacts at `/view-contact`.
   - Edit a contact at `/edit/:id`.
   - Delete a contact at `/deleteContact`.

4. **Password Reset:**
   - Forgot password at `/forgot`.
   - Reset password using the provided token at `/reset/:token`.

5. **User Dashboard:**
   - Access the user dashboard at `/dashboard`.

6. **Other Routes:**
   - Explore other routes based on your application's functionalities.

## Routes

- `/` - Home Page or Login Page
- `/users` - User Authentication Routes
- `/forgot` - Forgot Password
- `/reset/:token` - Password Reset
- `/logout` - Logout
- `/dashboard` - User Dashboard
- `/view-contact` - View Contacts
- `/createContact` - Create a Contact
- `/edit/:id` - Edit a Contact
- `/deleteContact` - Delete a Contact
- `/verifyOtp` - Verify OTP
- `/registerUserWithOTP` - Register User with OTP
