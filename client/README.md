1. Clone the repo
2. Run `npm install` in a root so that a server packages are installed
3. Enter to a client directory repeating the procedure of `npm install`
4. Install Redis [Linux](https://redis.io/download) or [Windows](https://github.com/microsoftarchive/redis/releases)
5. Install [Postgres] by default (https://www.postgresql.org/download/)
6. Connect to Postgres through any DBMS like [Valentina] (https://dbmstools.com/tools/valentina-studio)
7. Execute SQL commands in the database.sql file in the DBMS or psql
8. Execute `npm run dev` in the root to run server with client concurrently.
9. Configure environment variables in .env file, add [Clarifai] API (https://www.clarifai.com/)

The list of variables to configure:

SERVER SIDE: 

DB_HOST
DB_USER
DB_PASS
DB_PORT
BE_SERVER_HOST
BE_SERVER_PORT
REDIS_HOST
CLARIFAI_API

CLIENT SIDE:

REACT_APP_BE_SERVER_HOST
REACT_APP_BE_SERVER_PORT