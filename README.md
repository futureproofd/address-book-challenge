# Address Book Challenge

This project was created to simulate a real user address book with an accompanying user detail view. While the user data is pulled via the [Random User API](https://randomuser.me/documentation), it does not actually reflect real user data.

## Approach

I bootstrapped this project with [Create React App](https://github.com/facebook/create-react-app), using a TypeScript configuration. The project is written using functional components and hooks where necessary.

The application entry point is comprised of a Router which wraps a GeneralLayout component. Inside of the general layout compnent, container styles, additional component routes, and data fetching are initialized.

### Features

- Scoped styles using styled-components
  - Global style (CSS reset) included
- Re-usable Table component
- Custom Fetching Hook for API
- Search bar component to filter and select users
  - leveraging the downshift library to display results
- State management via Context API
  - scoped for list/details view
  - adaptable for a larger scale
- Routing via react-router

## Installation via available scripts:

In the project directory, you can run:

`npm start`

Ths runs the app locally in development mode. You can open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

`npm test`

Launches the test runner in the interactive watch mode. All tests are written using Jest and react-testing-library.

`npm run build`

Builds the app for production to the `build` folder.

It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.
