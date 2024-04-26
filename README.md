
# React Food Order App

The React Food Order App is a web application designed to facilitate food ordering. It follows a simple flow where users can browse available meals, add items to their cart, adjust quantities in a modal, proceed to a checkout form, and finally submit their order along with their information.  

<img src="https://github.com/buraxta/react-food-order-app/blob/main/public/food-order-app.gif?raw=true" />

## Key Features:

**Meal Selection:** Fetches meals from a backend API (replace with your actual implementation) and renders them for user selection.
**Cart Management:** Users can add and remove meals from their cart, with visual feedback provided using Toastify notifications.
**Modal System:** Leverages React modals to manage the cart view and order form, enhancing user experience.
**Quantity Adjustment:** Users can increase or decrease the number of meals in their cart, triggering recalculations of the total amount.
**React Hooks:** Employs various React hooks (e.g., useState, useEffect) for state management, data fetching, and other functionalities.
**React Hook Form and Zod:** Implements robust form validation using React Hook Form for user input handling and Zod for ensuring data integrity.
**Error Handling:** Provides informative error messages to guide users in case of invalid inputs or other issues.
**Fetching:** Handles data fetching from the backend API using techniques like fetch or a library like Axios.
