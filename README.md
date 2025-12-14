# Virtual HR Assistant

This is a web application for a Virtual HR Assistant. The backend is built with Node.js and Express, the database is PostgreSQL, and the frontend is built with Angular.

## Features

*   **Policy Q&A:** Instantly answer employee questions about company policies.
*   **Leave Application Workflow:** Initiate and manage leave applications.
*   **Role-Based Access Control:** Simple role-based access control for admins and employees.

## Tech Stack

*   **Backend:** Node.js, Express
*   **Frontend:** Angular
*   **Database:** PostgreSQL
*   **ORM:** Sequelize

## Getting Started

### Prerequisites

*   Node.js and npm
*   Angular CLI
*   PostgreSQL

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/shrikarak/virtual-hr-assistant.git
    cd virtual-hr-assistant
    ```

2.  **Backend Setup:**
    ```bash
    cd backend
    npm install
    ```
    *   Create a `.env` file in the `backend` directory with the following content, replacing the values with your PostgreSQL credentials:
        ```
        DB_HOST=localhost
        DB_USER=postgres
        DB_PASSWORD=password
        DB_NAME=hr_assistant_db
        PORT=3000
        ```
    *   Create the database `hr_assistant_db` in PostgreSQL.
    *   Synchronize the database and create sample data:
        ```bash
        npm run seed
        ```
    *   Start the backend server:
        ```bash
        npm start
        ```

3.  **Frontend Setup:**
    ```bash
    cd ../frontend
    npm install
    ```
    *   Start the frontend development server:
        ```bash
        ng serve
        ```

4.  **Access the application:**
    Open your browser and navigate to `http://localhost:4200`.

## API

The API is protected by role-based access control. You need to include the `x-user-role` header in your requests with the value `admin` or `employee`.

### Endpoints

*   `GET /api/policies`: Get all policies.
*   `GET /api/policies?search=<term>`: Search for policies.
*   `POST /api/policies`: Create a new policy (admin only).
*   `PUT /api/policies/:id`: Update a policy (admin only).
*   `DELETE /api/policies/:id`: Delete a policy (admin only).
*   `GET /api/leave-requests`: Get all leave requests.
*   `POST /api/leave-requests`: Create a new leave request (admin and employee).

## Future Work

*   **Advanced AI Capabilities:** Integrate with a powerful NLP service like Dialogflow, Microsoft Bot Framework, or Rasa.
*   **More HR Features:** Implement more HR functionalities like onboarding, offboarding, and performance tracking.
*   **Advanced Authentication:** Implement a more robust authentication system like JWT or OAuth.
*   **Analytics Dashboard:** Create a dashboard for HR administrators to track key metrics.
