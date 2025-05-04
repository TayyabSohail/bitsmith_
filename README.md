[task3.pdf](https://github.com/user-attachments/files/20026309/task3.pdf)

RecipeStudio – Architecture Overview
====================================

RecipeStudio is a full-stack recipe sharing platform allowing users to post, like, and comment on recipes with real-time notifications and a trending feed.

Tech Stack
----------
Frontend: Next js + Tailwind CSS  
Backend: Node.js + Express.js  
Database: PostgreSQL  
Storage: DigitalOcean Spaces and Cloudinary for images  
Auth: JWT + OAuth  
Notifications: Socket.IO and OneSignal for real-time notifications

Data Flow
---------
- React frontend interacts with Express backend via REST API and WebSockets.
- Backend handles authentication, logic, and database operations.
- Images are stored in Cloudinary; image URLs are saved in the database.
- WebSocket server (Socket.IO) pushes real-time notifications for likes and comments.

Deployment (DigitalOcean)
-------------------------
- Frontend: Hosted on DigitalOcean App Platform or Droplet
- Backend: Deployed on Droplet 
- Database: DigitalOcean Managed PostgreSQL

Scalability Tips
----------------
- Use database indexes on fields like user_id, recipe_id, created_at
- Implement pagination and infinite scroll for feed loading
- Horizontally scale backend using multiple droplets and a load balancer
- Optimize SQL queries and use connection pooling

Performance Tips
----------------
- Load recipes and images lazily to improve initial load time
- Minimize API response sizes to reduce bandwidth usage
- Use efficient SQL joins and avoid N+1 query problems
- Apply rate limiting to prevent abuse on like/comment actions
