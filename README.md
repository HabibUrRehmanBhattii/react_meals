# React Meals

This is a React Native app for ordering meals. It will cover the following topics:

# About ℹ️
`React Meals` is a React Native app for ordering meals. While creating this project I learned about the following topics:
`Event Listeners`, `Redux`, `React Navigation`,`Styled Components`, `Css Module`, `React Hooks (`useEffect`, `useReducer`, `useEffect`, `useContext`)`, `Forwarding Ref` and `Custom Hooks`.
A user can select food and add in the cart and can be able to reedit the card. After creating the project, it was deployed to `GitHub Pages`.

## Technologies Used 💻

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="50" height="50"/> </a> &emsp; <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="50" height="50"/> </a> &emsp; <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="50" height="50"/> </a> &emsp; <a href="https://www.w3schools.com/js/js_es6.asp" target="_blank" rel="noreferrer"> <img src="https://camo.githubusercontent.com/792f7fce1ff8bfac6d0524a21b69161cdc6080a3c4e39979f21d5f8489d6fdd3/68747470733a2f2f692e626c6f67732e65732f3534356366382f6573362d6c6f676f2f6f726967696e616c2e706e67" alt="ES6" width="50" height="50"/> </a> &emsp; <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="reactJS" width="50" height="50"/> </a> &emsp; <a href="https://www.figma.com/" target="_blank" rel="noreferrer"> <img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Figma-1-logo.png" alt="figma" width="70" height="50"/> </a>

## Includes the following features/components ⚙️

    - ReactJS
    - create-react-app
    - Event Listeners in React
    - React State
    - Conditional Rendering in React
    - React Hooks(useEffect)
    - github-pages

<br>

## Getting Started

To get started, clone the repo and install the dependencies:

```bash
git clone
cd react-meals
npm install
```

Then, start the app:

```bash
npm start
```

## Screenshots

![Screenshot 1](./assets/screenshots/screenshot-1.png)
![Screenshot 2](./assets/screenshots/screenshot-2.png)


## Steps I followed to complete this project 🪜

### 1. Initialize Project 🎍

-   [x] Initialize the project using `npx create-react-app react_meals` which will create a
    complete **React App** pre-configured and pre-installed with all the dependencies.
-   [x] Import **`Work Sans`** font from google fonts and apply it to the **`App`** component.

### 2. Organize Project 🗄️

-   [x] Create a `components` folder for **custom components** inside the `src` directory.
-   [x] Four components are created inside the `components` folder:
    -   `Header` - for the header of the app.
    -   `Meals` - for the meals section.
    -   `Cart` - for the cart section.
    -   `MealItem` - for the meal item.
-   [x] Create a `assets` folder for **images** inside the `src` directory.
-   [ ] Create a `screens` folder for **screens** inside the `src` directory.

### 3. Clean Directory🧹

-   [x] Delete **unnecessary** files.
-   [x] Delete a `tests` flies not needed for this project.
-   [x] Delete **unnecessary** code.


### 4. App Component 🧩

-   [x] Create an **`App`** component and basic JSX elements for it.
-   [x] Add appropriate `className`s to elements in the **`App`** component.
-   [x] Import **`App`** component inside `index.js`.

-   [x] Add **styles** to `body` inside `index.css`.

### 5. Header Component 🧩

-   [x] Create a **`Header`** component and basic JSX elements for it.
-   [x] Add Css Module to **`Header`** component.
-   [x] Add appropriate `className`s to elements in the **`Header`** component.
-   [x] Import **`Header`** component inside `App.js`.
-   [x] Add **styles** to **`Header`** component.
-   [x] Create a **`HeaderCartButton`** component and basic JSX elements for it.
-   [x] Add Css Module to **`HeaderCartButton`** component.
-   [x] Create a **`NavBar`** component and basic JSX elements for it.
-   [x] Add Css Module to **`NavBar`** component.

## 6. HeaderCartButton Component 🧩

-   [x] Create a **`HeaderCartButton`** component and basic JSX elements for it.
-   [x] Add and write Css Module to **`HeaderCartButton`** component.


## 7. CartIcon Component 🧩

-   [x] Create a **`CartIcon`** component inside the Cart folder and basic JSX elements for it.
-   [x] Add svg image to **`CartIcon`** component.
-   [X] Import **`CartIcon`** component inside `HeaderCartButton.js`.

## 8. Meals Component 🧩

-   [x] Create a **`Meals`** component and CSS Module for it.
-   [x] Inside the **`Meals`** component, create a **`MealsSummary`** component and CSS Module for it.
-   [x] Inside the **`Meals`** component, create a **`AvailableMeals`** component and CSS Module for it.
-   [x] Inside the **`AvailableMeals`** component populate with dummy data and map through it.
-   [x] Inside the **`MealsSummary`** component populate wit dummy data and map through it.
-   [x] Import **`MealsSummary`**  and **`AvailableMeals`** components inside `Meals.js`.
-   [x] Import **`Meals`** component inside `App.js`.

## 9. Adding Individual Meal Items & displaying them 🧩








