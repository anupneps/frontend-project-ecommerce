# Front-end E-commerce Project

![React](https://img.shields.io/badge/React-v.18-blue)
![Redux toolkit](https://img.shields.io/badge/Redux-v.1.9-purple)
![TypeScript](https://img.shields.io/badge/TypeScript-v.4.9-green)

## Demo


## Introduction 
This is a frontend project where an e-commerce web application has been developed using react, redux-toolkit, typescript. For this project, the following API endpoint has been used :
[https://fakeapi.platzi.com/](https://fakeapi.platzi.com/) 

## Features Implemented 
1. Public Pages : Homepage, Categories, Cart, Login/SignUp
2. Private Pages : Profile and Admin
    - Profile page only visible by the loged in user 
    - Admin tab appears once admin has log in 
3. Search products from input bar and filter products by price and ascending order with buttons in categories page
4. Search products from different categories in categories page
5. Able to signup and login to the webpage until you refresh the page
6. All the cart functionality can be performed (add, remove, increase/decrease quantity)
7. Once you click on product image, it will redirect to single product page and and it has addToCart button for everyone and  Edit and Delete buttons for admins. 
8. Theme change has been implemented (MUI example)
9. Unit test has been done for cart. product and authentication (inprogress)

## Things to do
1. Need to do UI for create/modify/delete products, unit test done except for delete and upload images.
2. Need to Implement validation in forms and error handeling 
3. Need to implement local storage for cart and user session
4. I want to do pagination to display all the products
5. May be more styling if time allows 

## Instruction to start the project

In the project directory, you can run:

### `npm install`

Install all the dependencies

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
