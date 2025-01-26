# React Food Order App

The **React Food Order App** is a web application designed to simplify the food ordering process. Users can browse available meals, add items to their cart, adjust quantities, and submit their orders with ease. Built with modern React practices, this app showcases state management, form validation, and a seamless user experience.

<img src="https://github.com/buraxta/react-food-order-app/blob/main/public/food-order-app.gif?raw=true" />

## Key Features
- **Meal Selection**: Fetches meals from a backend API and displays them for user selection.
- **Cart Management**: Add or remove meals from the cart with visual feedback using **Toastify** notifications.
- **Modal System**: Utilizes React modals for cart view and order form, enhancing usability.
- **Quantity Adjustment**: Adjust meal quantities in the cart, with automatic recalculation of the total amount.
- **React Hooks**: Uses hooks like `useState` and `useEffect` for state management and data fetching.
- **Form Validation**: Implements robust validation with **React Hook Form** and **Zod** for data integrity.
- **Error Handling**: Displays informative error messages for invalid inputs or issues.
- **Data Fetching**: Handles API requests using `fetch` or libraries like **Axios**.

## Technologies Used
- **Frontend**: React, React Hook Form, Zod, Toastify
- **Styling**: CSS Modules or Tailwind CSS (optional)
- **API Integration**: Fetch or Axios for backend communication

## How It Works
1. **Browse Meals**: Users view a list of available meals fetched from the backend.
2. **Add to Cart**: Meals can be added to the cart, with quantities adjusted as needed.
3. **Checkout**: Users proceed to a checkout form, where they enter their details and submit the order.
4. **Validation**: Form inputs are validated using React Hook Form and Zod.
5. **Order Submission**: Orders are sent to the backend for processing.
