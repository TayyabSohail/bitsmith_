### TASK # 3

[task3.pdf](https://github.com/user-attachments/files/20026292/task3.pdf)


RecipeStudio is a full-stack recipe sharing platform allowing users to post, like, and comment on recipes with real-time notifications and a trending feed.

 Tech Stack
Frontend: React.js + Tailwind CSS

Backend: Node.js + Express.js

Database: PostgreSQL

Storage: DigitalOcean Spaces and cloudinary for images 
Auth: JWT + Oauth

Notifications: SocketIO for notifications

Data Flow
React frontend interacts with Express backend via REST API and WebSockets.

Backend handles authentication, logic, and DB operations.

Images are stored cloudinary; image URLs saved in the database.

WebSocket server pushes real-time notifications (likes, comments).

☁️ Deployment (DigitalOcean)
Frontend: Hosted on DO App Platform or Droplet

Backend: Deployed on Droplet with PM2 and NGINX

Database: DigitalOcean Managed PostgreSQL


Scalability Tips
Use database indexes on fields like user_id, recipe_id, created_at

Implement pagination and infinite scroll on feeds

Horizontally scale backend with multiple droplets and a load balancer


Optimize SQL queries and use connection pooling

 Performance Tips
Load recipes and images lazily to speed up page loads

Minimize API response sizes

Use efficient SQL joins and avoid N+1 query issues

Apply rate limiting to prevent abuse (likes/comments)


