# Blog CRUD Backend (Module 13 Assignment)

Node.js + Express.js + MongoDB + Mongoose

## Setup

```bash
npm install
npm run dev     # বা: npm start
```

`.env` ফাইলে `PORT` ও `MONGO_URI` দিন (MongoDB Atlas বা লোকাল)।

## Folder structure

```
blog-crud/
├── controllers/blogController.js
├── models/Blog.js
├── routes/blogRoutes.js
├── server.js
├── .env
└── package.json
```

## API Routes

| Method | Endpoint     | কাজ                    |
|--------|--------------|------------------------|
| POST   | /blogs       | নতুন Blog তৈরি         |
| GET    | /blogs       | সব Blog দেখানো         |
| GET    | /blogs/:id   | নির্দিষ্ট Blog দেখানো  |
| DELETE | /blogs/:id   | Blog ডিলিট             |

## Postman টেস্ট

**POST** `http://localhost:5000/blogs` — Body → raw → JSON:

```json
{
  "title": "My First Blog",
  "description": "This is my first blog post",
  "author": "Shakil"
}
```

**GET** `http://localhost:5000/blogs`

**GET** `http://localhost:5000/blogs/<blog_id>`

**DELETE** `http://localhost:5000/blogs/<blog_id>`
