# PokeMe

1. install packages and dependencies
```
npm install
```
2. start development server
```
npm run dev
```
3. Point your browser to HTML addresses
http://localhost:8080/react.html

PokeMe Introduction

An interactive web application designed for Pokémon enthusiasts. The app provides a fun and engaging personality test for finding users the matching Pokemons. Also, the website offers detailed information about each Pokémon. Users can take the test, get their Pokémon match, and explore a database of Pokémon details.

So far we have done:

Developed the front-end interface using React, allowing basic navigation.
Integrated the PokeAPI to fetch and display a list of Pokémon and their images on the home page.
Created responsive CSS designs for a user-friendly experience across different devices.
Implemented routing within the app for navigation between different views (Home, Test, History, etc.).

What We Still Plan to Do:

Set up the OpenAI API to analyze test results and suggest a matching Pokémon.
Finalize the logic that connects the personality test answers to the OpenAI API to get accurate Pokémon matches.
Add user authentication to enable saving test results and viewing history.
Implement sharing feature.
Improve UI design if there's time. 

Our Project File Structure:

/src
The main source directory for the application's code.

/src/assets/images
Contains all static image files used within the application.

/src/reactjs
Holds the JavaScript files related to the React components and logic.

historyPresenter.jsx: Manages the presentation logic for the user's history of interactions or test results.
homePresenter.jsx: Manages the presentation logic for the home view, including API interactions for displaying Pokémon.
loginPresenter.jsx, registerPresenter.jsx: Handle the presentation logic for user login and registration.
testPresenter.jsx, testResultPresenter.jsx: Handle the presentation logic for conducting tests and displaying results.
index.jsx: The entry point for React components.

/src/views/components
React components used across different views.

backbutton.jsx: A reusable back button component.
banner.jsx: Component for displaying the top banner across various views.
historyItem.jsx: Item component used in the user's history.
inputform.jsx: Form input component.
pokeItem.jsx: Displays an individual Pokémon item.
testItem.jsx: Component used for a single test question.
topbar.jsx: The top bar navigation component.

/src/views
Contains the main view components that represent entire pages or large parts of pages.

historyView.jsx: The view component for displaying the user's history.
homeView.jsx: The home page view component.
loginView.jsx, registerView.jsx: View components for user login and registration forms.
testResultsView.jsx: Displays the results of the personality test.
testView.jsx: The view for conducting the personality test.

/src
The main JavaScript models and services for the application.

firebaseModel.js: Handles interactions with Firebase for authentication and database services.
PokeMeModel.js: The model for the application.
pokemonService.js: Service for making API requests to the PokeAPI.
remoteSource.js: Possibly handles API interactions with remote data sources.
resolvePromise.js: Utility for resolving promises, potentially used to handle asynchronous operations.
utilities.js: General utility functions used across the application.
style.css: The main stylesheet for the application, containing global styles and CSS variables.