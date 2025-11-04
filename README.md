# ☕ Café Finder App

A location-based café and restaurant finder built using the **MEAN Stack**, integrating the **Google Places API** and **Geolocation Services** to help users discover nearby cafés with detailed information, ratings, and directions.

---

## 🚀 Features

- **Nearby Café Search:** Fetches cafés within a given radius using the **Google Places API**.
- **Text Search:** Allows users to search for cafés and restaurants by name or keyword.
- **Photo Display:** Fetches café photos dynamically using the Google Places Photos API.
- **Geolocation Integration:** Uses the user’s current location to show nearby cafés.
- **RESTful APIs:** Efficient backend communication and modular API design with **Express**.
- **Responsive Frontend:** Built with **Angular** for a clean, intuitive, and user-friendly experience.

---

## 🧰 Tech Stack

**Frontend:** Angular
**Backend:** Node.js, Express.js
**Database:** MongoDB
**API Integration:** Google Places API
**Environment Management:** dotenv
**CORS Handling:** cors

---

## ⚙️ Installation & Setup

### 1. Clone the Repository
```bash
git clone [https://github.com/Gokulanandr/cafe-finder-app.git](https://github.com/Gokulanandr/cafe-finder-app.git)
cd cafe-finder-app
````

### 2\. Install Dependencies

**Backend:**

```bash
cd backend
npm install
```

**Frontend:**

```bash
cd ../frontend
npm install
```

### 3\. Set Up Environment Variables

Create a `.env` file inside the **backend** directory and add:

```
PORT=4000
GOOGLE_MAPS_API_KEY=your_google_api_key
```

-----

## ▶️ Running the Application

Open two terminals to run both the **backend** and **frontend**.

**Backend:**

```bash
cd backend
npm start
```

**Frontend (Angular):**

```bash
cd frontend
ng serve
```

The app will be running at:

```
Frontend → http://localhost:4200
Backend  → http://localhost:4000
```

-----

## 🧩 API Endpoints

### 🔹 Nearby Cafés

**GET** `/api/cafes/nearby?lat={latitude}&lng={longitude}&radius={radius}`
Returns a list of cafés near the given coordinates.

### 🔹 Search Cafés

**GET** `/api/cafes/search?q={query}&lat={latitude}&lng={longitude}`
Performs a text search for cafés or restaurants.

### 🔹 Café Photo

**GET** `/api/photo?name={photo_reference}&maxwidth=600`
Fetches a photo of the café using its `photo_reference` value.

-----

## 📍 How It Works

1.  The app detects the user’s location via browser geolocation.
2.  It sends the coordinates to the backend API.
3.  The backend fetches data from the **Google Places API** (Nearby or Text Search).
4.  Café details like name, address, rating, and photo are returned and displayed on the UI.

-----

## 💡 Future Enhancements

  * Add café details page with reviews and opening hours
  * Implement Google Maps navigation integration
  * Add filtering (e.g., rating, distance)
  * Include user authentication for favorites and history

-----

## 🧑‍💻 Author

Gokulanand R |
gokul26.anand@gmail.com | 
[LinkedIn](https://www.linkedin.com/in/gokulanandr) |
[GitHub](https://github.com/Gokulanandr/weather-app.git) |

-----

⭐ *If you found this project helpful, consider giving it a star on GitHub\!*

```
```