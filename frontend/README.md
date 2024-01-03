# Social Media Monitoring App 📊📈

Welcome to the Social Media Monitoring App! This application allows users to monitor user and post data from a simulated social media platform. Users can view user profiles, post details, and get general insights through a user-friendly interface.

## Technologies Used 💻

- React
- TypeScript (Backend)
- Express.js (Backend)
- GraphQL (Frontend and Backend)
- Apollo Client (Frontend)
- Apollo Service (Backend)
- Axios (Backend for external API calls)
- Faker (Backend for generating mock data)

## How to Start 🏃‍♂️

To run this application locally, follow these steps:

1. Clone this repository.
2. Navigate to the `/frontend` directory: `cd frontend`.
3. Install the required dependencies: `npm install`.
4. Navigate to the `/backend` directory: `cd ../backend`.
5. Install the required dependencies for the backend: `npm install`.
6. Rename the `.sample.env` file to `.env` in the `/backend` directory so that you can have access to the environment variables.
7. Start the backend server: `npm run dev` (This will start the server at port 8080).
8. In another terminal, navigate back to the `/frontend` directory: `cd ../frontend`.
9. Start the frontend application: `npm start`.
10. Open your web browser and go to `http://localhost:3000` to view the app.

![Developer GIF](https://serverless.pub/img/the-power-of-serverless-graphql/09-graphql-request.gif)

## Views

| View         | Route                 | Description                             |
| ------------ | --------------------- | --------------------------------------- |
| Dashboard    | /home                 | Get general insights on users and posts |
| User Details | /user/detail/{userId} | View detailed information about a user  |
| Post Details | /post/detail/{postId} | View detailed information about a post  |

## Notes 📝

- The data for the main view ('/home') is generated using Faker on the backend and retrieved through GraphQL.
- The data for the details views ('/user/detail' and '/post/detail') is fetched from an external API (jsonPlaceholder) through the backend using Axios.
- The frontend uses Apollo Client to query the GraphQL API on the backend
- The global state is managed using React Context.
- If you wish to access the GraphQL API, go to `http://localhost:8080/graphql` and explore available queries in the Apollo Server UI.

## Improvements that could be made to the app 🚀

- Refactor the GraphQL resolvers on the backend to connect to a real social media API if available.
- Implement user authentication and authorization for protected routes.
- Add unit testing and improve code coverage.
- Enhance the user interface for a more visually appealing experience.

It has been an exciting development journey learning GraphQL! 💻

![Developer GIF](https://media.tenor.com/bD9vHNiR1rQAAAAM/boom-mind-blown.gif)
