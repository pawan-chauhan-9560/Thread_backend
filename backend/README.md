# Thread_backend  

## GraphQL Backend with Apollo Server, Docker, and Prisma  

This project is a GraphQL backend built with Apollo Server. It uses Prisma as the ORM to interact with a PostgreSQL database, which is managed in a Docker container.  

## Features  

- **GraphQL**: API powered by Apollo Server.  
- **Prisma**: ORM for database management and querying.  
- **PostgreSQL**: Database managed using Docker.  
- **Dockerized Setup**: Easy deployment and database setup using Docker Compose.  

## Requirements  

- [Node.js](https://nodejs.org/) (v20.12.2 recommended)  
- [Docker](https://www.docker.com/)  
- [Prisma CLI](https://www.prisma.io/docs/getting-started/quickstart)  

## Setup Instructions  

1. **Setup the Backend**  
   Follow the steps below to set up and start the backend:  

   - **Clone the Repository**  
     Clone the repository from GitHub and navigate to the project directory:  
     ```bash
     git clone https://github.com/pawan-chauhan-9560/Thread_backend.git
     cd Thread_backend
     ```  

   - **Install Dependencies**  
     Install all the required Node.js dependencies:  
     ```bash
     npm install
     ```  

   - **Setup Database with Docker**  
     Ensure Docker is installed and running on your system, then start the PostgreSQL database:  
     ```bash
     docker-compose up -d
     ```  

   - **Apply Prisma Migrations**  
     Initialize the database schema using Prisma migrations:  
     ```bash
     npx prisma migrate dev --name init
     ```  

   - **Generate Prisma Client**  
     Generate the Prisma Client to interact with the database:  
     ```bash
     npx prisma generate
     ```  

   - **Start the Server**  
     Start the backend server:  
     ```bash
     npm start
     ```  

   - **Access the GraphQL Playground**  
     Open your browser and visit the following URL to interact with the GraphQL API:  
     ```
     http://localhost:8000
     ```  

   - **Explore the Database with Prisma Studio**  
     Optionally, use Prisma Studio to manage the database:  
     ```bash
     npx prisma studio
     ```  

## Project Structure  
.
├── build                 # Compiled JavaScript files (from TypeScript)
├── node_modules          # Installed Node.js modules
├── prisma
│   ├── schema.prisma     # Prisma schema file
│   └── migrations        # Database migration files
├── src
│   ├── lib               # Utility or helper functions (if any)
│   └── index.ts          # Entry point of the server
├── .env                  # Environment variables
├── .gitignore            # Git ignore rules
├── docker-compose.yml    # Docker configuration
├── package.json          # Node.js dependencies
├── package-lock.json     # Lockfile for npm dependencies
├── README.md             # Project documentation
└── tsconfig.json         # TypeScript configuration




## Creator  

This backend was developed by **Pawan Chauhan**.  
Feel free to reach out for queries or collaboration!  