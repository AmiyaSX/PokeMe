# PokeMe
Welcome to PokeMe!

## About PokeMe

An interactive web application designed for Pokémon enthusiasts. The app provides a fun and engaging personality test for finding users the matching Pokemons. Also, the website offers detailed information about each Pokémon. Users can take the test, get their Pokémon match, and explore a database of Pokémon details.

## What we have done

- Build up basic front-end interface, alowing routing within the app for navigation between different views (Home, Test, History, etc.).
- Created partial responsive CSS designs for a user-friendly experience across different devices.
- Integrated the PokeAPI to fetch and display a list of Pokémon and their images on view items.

## What We Plan to Do

- Set up the OpenAI API to analyze test results and suggest a matching Pokémon.
- Finalize the logic that connects the personality test answers to the OpenAI API to get accurate Pokémon matches.
- Add user authentication to enable saving test results and viewing history.
- Implement sharing feature.
- Do user evaluation with current application to further improve user experience.
- Improve UI design, add effect and animation. 

## Project Structure
src      // The main source directory for the application's code  

├── assets  

│   └── images     // Contains all static image files used within the application  

├── reactjs        // Holds the JavaScript files related to the React components and logic  

│   ├── ReactRoot.jsx  

│   ├── historyPresenter.jsx  // Manages the presentation logic for the user's history of interactions or test results  

│   ├── homePresenter.jsx     // Manages the presentation logic for the home view, including API interactions for displaying Pokémon  

│   ├── index.jsx             // The entry point for React components  

│   ├── loginPresenter.jsx    // Handle the presentation logic for user login  

│   ├── registerPresenter.jsx // Handle the presentation logic for user registration  

│   ├── testPresenter.jsx     // Handle the presentation logic for conducting tests  

│   └── testResultPresenter.jsx // Handle the presentation logic for displaying results  

└── views         // Contains the main view components that represent entire pages or large parts of pages  

│   ├── components            // React components used across different views  

│   ├── historyView.jsx       // The view component for displaying the user's history  

│   ├── homeView.jsx          // The home page view component  

│   ├── loginView.jsx         // View components for user login  

│   ├── promiseNoData.jsx     // View display according to status  

│   ├── registerView.jsx      // View components for user registration  

│   ├── testResultsView.jsx   // Displays the results of the personality test  

│   └── testView.jsx          // The view for conducting the personality test  

├── firebaseModel.js          // Handles interactions with Firebase for authentication and database services  

├── pokemonService.js         // Service for making API requests to the PokeAPI  

├── PokemeModel.js            // The model for the application  

├── resolvePromise.js         // Utility for resolving promises, potentially used to handle asynchronous operations  

├── style.css                 // The main stylesheet for the application, containing global styles and CSS variables  

├── utilities.js              // General utility functions used across the application  
