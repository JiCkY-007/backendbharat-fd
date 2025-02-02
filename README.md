# Multilingual FAQ API

A backend API for managing FAQs with multilingual support using Node.js, Express, MongoDB, Redis, and a free translation API (LibreTranslate).

## Features
- **CRUD Operations** for FAQs
- **Multilingual Support** (Automatic translation on creation)
- **Redis Caching** for faster responses
- **WYSIWYG Support** (Rich text answers)
- **Dockerized Deployment**
- **Unit Testing** with Mocha & Chai

## Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Caching:** Redis
- **Translation:** LibreTranslate API
- **Testing:** Mocha, Chai, Supertest

---

## Installation & Setup

### 1️⃣ Clone Repository
```sh
git clone https://github.com/your-username/multilingual-faq-api.git
cd multilingual-faq-api
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Create `.env` File
```sh
MONGO_URI=mongodb://localhost:27017/faqDB
REDIS_URI=redis://localhost:6379
PORT=5000
TRANSLATE_API=https://libretranslate.com/translate
```

### 4️⃣ Start Redis Server (If not running)
```sh
redis-server
```

### 5️⃣ Run the Server
```sh
npm run dev   # Starts server with nodemon
```

---

## API Endpoints

### ➤ **Create FAQ**
`POST /api/faqs`
#### **Request Body:**
```json
{
  "question": "What is Node.js?",
  "answer": "Node.js is a JavaScript runtime."
}
```
#### **Response:**
```json
{
  "_id": "123abc",
  "question": "What is Node.js?",
  "answer": "Node.js is a JavaScript runtime.",
  "translations": {
    "hi": "नोड.जेएस क्या है?",
    "bn": "নোড.জেএস কি?",
    "es": "¿Qué es Node.js?"
  }
}
```

---

### ➤ **Get FAQs (With Translation Support)**
`GET /api/faqs?lang=hi`
#### **Response:**
```json
[
  {
    "question": "नोड.जेएस क्या है?",
    "answer": "Node.js is a JavaScript runtime."
  }
]
```

---

### ➤ **Get All FAQs**
`GET /api/faqs`
#### **Response:**
```json
[
  {
    "_id": "123abc",
    "question": "What is Node.js?",
    "answer": "Node.js is a JavaScript runtime.",
    "translations": { "hi": "नोड.जेएस क्या है?" }
  }
]
```

---

### ➤ **Delete FAQ**
`DELETE /api/faqs/:id`
#### **Response:**
```json
{ "message": "FAQ deleted successfully" }
```

---

## Running Tests
```sh
npm test
```

---

## Deployment with Docker
### 1️⃣ Build the Docker Image
```sh
docker build -t multilingual-faq-api .
```

### 2️⃣ Run the Container
```sh
docker run -p 5000:5000 multilingual-faq-api
```

---

## Contribution Guidelines
1. Fork the repository
2. Create a new branch (`feat-new-feature`)
3. Commit your changes (`git commit -m 'feat: Add new feature'`)
4. Push to GitHub and open a pull request

---

## License
This project is open-source under the MIT License.

