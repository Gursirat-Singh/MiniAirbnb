# MiniAirbnb 🏡

**MiniAirbnb** is a full-stack web application inspired by Airbnb, allowing users to discover, list, and book unique accommodations. Built with modern web technologies, it offers a seamless experience for both hosts and travelers.

---

## 🚀 Features

* **User Authentication**: Secure registration and login functionalities.
* **Property Listings**: Users can browse, add, edit, and delete property listings.
* **Image Uploads**: Integration with Cloudinary for efficient image storage and retrieval.
* **Dynamic Routing**: Clean and intuitive URLs for different pages and functionalities.
* **Responsive Design**: Optimized for various devices to ensure a consistent user experience.

---

## 🛠️ Technologies Used

* **Frontend**:

  * HTML5
  * CSS3
  * JavaScript (ES6)
  * Bootstrap 5

* **Backend**:

  * Node.js
  * Express.js

* **Database**:

  * MongoDB
  * Mongoose ODM

* **Cloud Services**:

  * Cloudinary (for image hosting)

* **Templating Engine**:

  * EJS (Embedded JavaScript)

* **Others**:

  * Multer (for handling `multipart/form-data`)
  * dotenv (for environment variable management)

---

## 📁 Project Structure

```
MiniAirbnb/
├── controllers/       # Route handlers and business logic
├── models/            # Mongoose schemas and models
├── routes/            # Express route definitions
├── views/             # EJS templates for rendering pages
├── public/            # Static assets (CSS, JS, images)
├── utils/             # Utility functions
├── app.js             # Main application entry point
├── cloudConfig.js     # Cloudinary configuration
├── middleware.js      # Custom middleware functions
├── schema.js          # Joi validation schemas
├── package.json       # Project metadata and dependencies
└── .gitignore         # Files and directories to ignore in Git
```

---

## 🔧 Installation & Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Gursirat-Singh/MiniAirbnb.git
   cd MiniAirbnb
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   Create a `.env` file in the root directory and add the following:

   ```env
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

4. **Start the application**:

   ```bash
   node app.js
   ```

   The application will run on `http://localhost:3000` by default.

---

## 📸 Screenshots

*Include screenshots of the homepage, property listings, and booking pages here to showcase the application's UI.*

---

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 📬 Contact

For any inquiries or feedback, please reach out to [your.email@example.com](mailto:your.email@example.com).
