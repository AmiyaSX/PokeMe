# PokeMe
Welcome to PokeMe!


Try it here:
https://pokeme-dh2642.web.app/

## About PokeMe

An interactive web application designed for Pokémon enthusiasts. The app provides a fun and engaging personality test for finding users the matching Pokemons. Also, the website offers detailed information about each Pokémon. Users can take the test, get their Pokémon match, and explore a database of Pokémon details.

## What We Have Done

- Built up basic front-end interface, alowing routing within the app for navigation between different views (Home, Test, History, etc.).
- Implemented basic interactions between user and the interface.
- Created partial responsive CSS designs for a user-friendly experience across different devices.
- Integrated the PokeAPI to fetch and display a list of Pokémon and their images on view items.
- Implemented sharing feature(share to Facebook).
- Finished Login&Register logic.
- Collected user feedbacks with current application.

## What We Plan to Do

- Set up the OpenAI API to analyze test results and suggest a matching Pokémon.
- Finalize the logic that connects the personality test answers to the OpenAI API to get accurate Pokémon matches.
- Add user authentication to enable saving test results and viewing history.
- Do some further improvement based on collected user feedback.
- Improve UI design, add effect and animation. 

## Project Structure

```
.
├── public      // Serve static files
│   └── favicon.ico         // Website icon
├── src         // The main source directory for the application's code
│   ├── assets
│   │   └── images                    // Images used in the application
│   ├── model
│   │   ├── PokemeModel.js            // The model for the application
│   │   ├── firebaseModel.js          // Handles interactions with Firebase for authentication and database services
│   │   ├── openai
│   │   │   └── GetPersonalityMatch.js          // Handles personality matching using OpenAI
│   │   ├── pokemonService.js         // Service for making API requests to the PokeAPI
│   │   ├── questions.js              // Personality test 20 question
│   │   └── resolvePromise.js         // Utility for resolving promises, potentially used to handle asynchronous operations
│   ├── presenter
│   │   ├── ReactRoot.jsx             // Root component for React
│   │   ├── historyPresenter.jsx      // Manage the presentation logic for the user's history of interactions or test results
│   │   ├── homePresenter.jsx         // Manage the presentation logic for the home view, including API interactions for displaying Pokémon
│   │   ├── index.jsx                 // The entry point for React components
│   │   ├── loginPresenter.jsx        // Manage the presentation logic for user login
│   │   ├── registerPresenter.jsx     // Manage the presentation logic for user registration
│   │   ├── testPresenter.jsx         // Manage the presentation logic for conducting tests
│   │   └── testResultPresenter.jsx   // Manage the presentation logic for displaying results
│   ├── style.css           // The main stylesheet for the application, containing global styles and CSS variables
│   ├── utilities.js        // General utility functions used across the application
│   └── views               // Contains the main view components that represent entire pages or large parts of pages
│       ├── components                // Custom components used across different views
│       │   ├── banner.jsx                      // Component for the banner
│       │   ├── historyItem.jsx                 // Component for displaying history items
│       │   ├── inputform.jsx                   // Component for input forms
│       │   ├── pokeItem.jsx                    // Component for displaying Pokemon items
│       │   ├── testItem.jsx                    // Component for displaying test items
│       │   └── topbar.jsx                      // Component for the top bar
│       ├── historyView.jsx           // The history page view displays user's test history
│       ├── homeView.jsx              // The home page view displays pokeItems and contains entrance to the test
│       ├── loginView.jsx             // View components for user login
│       ├── promiseNoData.jsx         // View display according to status
│       ├── registerView.jsx          // View components for user registration
│       ├── testResultsView.jsx       // Displays the results of the personality test
│       └── testView.jsx              // The view for conducting the personality test
│── vite.config.js  // Configuration file for Vite
├── package.json    // File containing project metadata and dependencies
```
