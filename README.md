# 🚴‍♂️ Bike Shop Application

A full-stack Bike Shop web application with role-based authentication, dynamic product management, secure payments, and a responsive user interface.

---

---

## 🔥 Live Demo

- banckend server : https://bike-store-b4-a4.vercel.app/
- client server : https://bike-store-b4-a4-frontend.vercel.app/

---

## 🚀 Project Overview & Objective

This project aims to create a feature-rich e-commerce platform for buying and managing bikes. The application includes both **public** and **private routes**, **role-based dashboards**, and **SurjoPay payment integration**. It ensures a seamless shopping experience with authentication, filters, search, and detailed product views.

---

## 🔑 Main Functionalities (45 Marks)

### ✅ 1. User Registration & Authentication (Role-Based)

- **Secure Registration & Login**

  - Users can register using name, email, and password.
  - Default role: `customer`. (Admins must be assigned manually.)
  - Passwords are securely hashed before storing in the database.

- **JWT Authentication**

  - JWT token is generated on login and stored in **localStorage**.
  - Token is used for secure route access.

- **Logout**
  - Removes the token from localStorage and redirects to login.

---

### ✅ 2. Public Routes

- **Home Page**

  - Includes Navbar, Banner, Featured Products (max 6), extra section (e.g., testimonials), and a footer.

- **All Products Page**

  - **Search & Filter** by brand, category, price range, and availability.
  - Dynamically updated product list with product cards.
  - “View Details” button redirects to the product details page.

- **Product Details Page**

  - Displays detailed product information with a "Buy Now" button.

- **About Page**
  - Informative content about the shop and its mission.

---

### ✅ 3. Private Routes

- **Checkout Page**

  - Users can place orders with validated stock.
  - Includes order form with product details, user info, price, and payment method.
  - Integrates **SurjoPay** for secure transactions.

- **Dashboard (Role-Based Access)**
  - **Admin Dashboard**
    - Manage Users (deactivate), Products (CRUD), and Orders (CRUD).
  - **User Dashboard**
    - View order history, manage profile, and update password (with current password verification).

---

## 🎨 UI/UX Design (15 Marks)

- **Responsive Design**

  - Mobile-first layout with optimized typography and alignment.

- **Error Handling**

  - User-friendly messages for login failures, duplicate registration, out-of-stock products, etc.

- **Loading States**

  - Show spinners or loaders during API calls (login, fetching data, etc.).

- **Toasts/Notifications**
  - Feedback for key actions like login success, order placement, and errors.

---

## 🌟 Recommended Functionalities (Bonus)

### 🚚 Track Order Section

**User Side**

- Track status of each order: Pending → Processing → Shipped → Delivered.
- Dedicated “Track My Order” page in the user dashboard with:
  - Order ID, Product Info, Delivery ETA, and Status Progress Bar.

**Admin Side**

- Ability to update order status via dropdown.
- Option to provide an estimated delivery date.

---

## 🧩 Backend Requirements

- **Database**: MongoDB

### 🔐 Authentication

- Secure registration, login, JWT generation, logout.
- Hash passwords and manage user sessions securely.

### 📦 Product Management

- CRUD functionality for bike products.

### 📑 Order Management

- CRUD for orders with validation (stock check).
- Supports order tracking and dynamic status updates.

### 💳 Payment Integration

- SurjoPay integration for checkout process.

### ⚙️ Error Handling & Optimization

- Consistent API error responses.
- Efficient pagination and filtering for performance on large datasets.

---

## 🔁 Additional Features

- Backend supports:
  - **Pagination** for product and order listing.
  - **Authentication Middleware** for protected routes.
- Clean and optimized code with proper folder structure (controllers, routes, services, interfaces, etc.).

---

## 📂 Tech Stack

- **Frontend**: React, Tailwind CSS, React Router, Axios, React Query, AOS
- **Backend**: Node.js, Express.js, MongoDB, Mongoose, JWT, bcrypt
- **Payment**: SurjoPay Integration
- **Deployment**: Vercel (frontend), Render/Heroku (backend), MongoDB Atlas (database)

---

## 📌 Setup Instructions

1. **Clone the Repo**  
   `git clone https://github.com/Rebakum/Bike-store-B4-A4-frontend.git`

2. **Install Dependencies**
   `npm install`
3. **Environment Variables**  
   Add `.env` <br>
   <pre>VITE_REACT_APP_SERVER_URI=https://bike-store-b4-a4.vercel.app/api</pre>

4. **Run the Application**

- Frontend: `npm run dev`

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
