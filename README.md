# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



# Weather Forecast and Cities Table Application

## Project Description

This project is a React-based web application that displays a table of cities with infinite scrolling and allows users to view detailed weather information for each city. The application includes:

- A table of cities with infinite scroll, search, filter, and sorting features.
- A weather page for each city that shows current and forecasted weather data.
- Responsive design and dynamic backgrounds based on weather conditions.
- Error handling and state management.

## Features

### Cities Table

- **Infinite Scroll:** Load more cities as the user scrolls down.
- **Search:** Search for cities by name or country as you type.
- **Autocomplete:** Suggest possible locations based on user input.
- **Filter and Sorting:** Filter and sort table columns.
- **Link to Weather Page:** Click on a city name to view detailed weather information.
- **Right-Click to Open in New Tab:** Open the weather page in a new tab by right-clicking on a city name.

### Weather Page

- **Current Weather:** Display temperature, weather description, humidity, wind speed, and atmospheric pressure.
- **Forecast:** Show temperature highs and lows, weather descriptions, and precipitation chances.
- **Dynamic Backgrounds:** Change backgrounds based on current weather conditions.
- **Optional Features:** Map location, unit switching, save favorite locations, etc.

### Responsive Design

- Ensure the application works well on different screen sizes using media queries and responsive design techniques.

### Error Handling

- Gracefully handle errors from failed API requests or invalid search queries.
- Display error messages when necessary.

## Technologies Used

- **React:** Frontend library for building the user interface.
- **TypeScript (Optional):** For type safety and improved development experience.
- **Bootstrap:** For styling the table and responsive design.
- **OpenWeatherMap API:** To fetch current and forecasted weather data.
- **Public Open Data API:** To fetch the list of cities.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/RavinderNyalakanti/weather-forecast-app.git
