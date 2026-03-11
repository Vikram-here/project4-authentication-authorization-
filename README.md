Just completed a new backend based project! based on MERN stack

built

 
This project is a secure web application focused on implementing robust Authentication and Authorization mechanisms to protect user data and control access to resources.

The system uses bcrypt encryption for authentication and JWT (JSON Web Token) for authorization to ensure high-level security and scalability.


🚀 Key Features:

1 User Authentication with Bcrypt

 - Passwords are securely hashed using bcrypt before storing in the database.
 - 
 -During login, entered passwords are compared with hashed passwords using bcrypt verification.

 -Prevents plain-text password storage and protects against data breaches.
 
2 Authorization using JWT Token

 -After successful login, a JWT token is generated and sent to the client.
 
 -The token contains user information and is digitally signed.
 
 -Protected routes are accessible only with a valid JWT token.
 
 -Token verification middleware ensures secure access control.
 

🛠️ Technologies Used:

Backend: (Node.js / Express.js )

Database: (MongoDB )

Authentication: Bcrypt (Password Hashing)

Authorization: JWT (JSON Web Token)

