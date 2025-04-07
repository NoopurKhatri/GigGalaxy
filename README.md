GigGalaxy - Freelance Marketplace

GigGalaxy is an online marketplace that connects freelancers with clients who need their services. This platform allows users to find, hire, and communicate with freelance professionals from various fields. With real-time communication, secure authentication, and seamless payment options, GigGalaxy is designed to make the process of hiring and working with freelancers easy and efficient.

Features
User Profiles: Users can create and manage profiles, showcasing their skills and past work (for freelancers) or posting jobs they want to hire for (for clients).

Freelancer Categories: Jobs are organized into separate fields to allow users to efficiently browse and filter the services they need.

Real-Time Chat: Seamless communication between freelancers and clients to discuss project details and updates in real-time.

Secure Authentication: Profile creation and login are secured with JWT-based authentication.

Payment Integration: Payments are securely processed using Stripe, ensuring smooth transactions between freelancers and clients.

Backend API: Robust APIs built with Node.js and Express.js to support frontend functionality and manage user data and transactions.

Tech Stack

Frontend:
React.js (for a dynamic, responsive user interface)
Sass (for enhanced styling)
JWT (for secure authentication and session management)

Backend:
Node.js (for the backend logic)
Express.js (for building APIs and managing server routes)
Stripe (for secure payment processing)

Database:
MongoDB (for storing user profiles, job listings, messages, etc.)
Prisma (for ORM and efficient database querying)

Communication:
WebSockets (for real-time messaging between freelancers and clients)

API Testing:
Postman (for API testing)

Installation

Clone the repository:
    git clone https://github.com/NoopurKhatri/GigGalaxy.git
    cd GigGalaxy
    
Install dependencies for both frontend and backend:

For the frontend:
    cd client
    npm install
For the backend:
    cd server
    npm install
    
Set up environment variables for backend configuration (e.g., MongoDB URI, Stripe keys, JWT secret).

Run the application:

Start the frontend:
    npm start
Start the backend:
    npm run dev
    
Open your browser and visit http://localhost:3000 to interact with the platform.

Usage
Profile Creation: Create an account to post job listings or offer freelance services.

Browse Jobs: Navigate through different freelance job categories to find opportunities or hire professionals.

Chat with Freelancers: Use the real-time chat feature to discuss project details and negotiate terms.

Payment Processing: Securely pay freelancers for completed work using Stripe's payment gateway.

Authentication: Log in or sign up to start using the platform and manage your account.

Contributing
Fork the repository

Create a new branch (git checkout -b feature-name)

Commit your changes (git commit -m 'Add feature-name')

Push to the branch (git push origin feature-name)

Open a pull request to merge your changes
