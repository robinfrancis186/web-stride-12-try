# STRIDE Community Backend API

Backend API for the STRIDE Community platform built with Node.js, Express, and MongoDB.

## Features

- **Authentication & Authorization**: JWT-based auth with role-based access control
- **User Management**: User profiles, roles (member, campus_admin, central_admin)
- **Products**: CRUD operations for assistive technology products
- **Events**: Event management with registration system
- **News**: News articles and updates
- **Projects**: Community project collaboration
- **Orders**: E-commerce functionality with order tracking
- **Newsletter**: Email subscription management

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Security**: Helmet, CORS, Rate Limiting
- **Validation**: express-validator

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)

### Installation

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` and configure your MongoDB URI and JWT secret.

### Running the Server

**Development mode:**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will run on `http://localhost:5000`

### Seeding the Database

To populate the database with initial data:
```bash
npm run seed
```

This creates:
- Sample products
- Admin user (email: admin@stride.com, password: admin123)

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/profile` - Update profile

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (admin)
- `PUT /api/products/:id` - Update product (admin)
- `DELETE /api/products/:id` - Delete product (admin)

### Events
- `GET /api/events` - Get all events
- `GET /api/events/:id` - Get single event
- `POST /api/events/:id/register` - Register for event
- `POST /api/events` - Create event (admin)
- `PUT /api/events/:id` - Update event (admin)

### News
- `GET /api/news` - Get all news
- `GET /api/news/:id` - Get single article
- `POST /api/news` - Create article (admin)
- `PUT /api/news/:id` - Update article (admin)

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create project
- `PUT /api/projects/:id` - Update project
- `POST /api/projects/:id/join` - Join project

### Orders
- `GET /api/orders` - Get user's orders
- `GET /api/orders/:id` - Get order details
- `POST /api/orders` - Create order
- `PUT /api/orders/:id/status` - Update order status (admin)

### Newsletter
- `POST /api/newsletter/subscribe` - Subscribe
- `POST /api/newsletter/unsubscribe` - Unsubscribe
- `PUT /api/newsletter/preferences` - Update preferences

## Authentication

Protected routes require a JWT token in the Authorization header:

```
Authorization: Bearer <token>
```

## Error Handling

All errors follow this format:
```json
{
  "success": false,
  "error": "Error message"
}
```

## Security Features

- Helmet for security headers
- CORS protection
- Rate limiting (100 requests per 10 minutes)
- Password hashing with bcrypt
- JWT token expiration
- Input validation

## Database Models

- **User**: User accounts and profiles
- **Product**: Assistive technology products
- **Event**: Events and workshops
- **News**: News articles
- **Project**: Community projects
- **Order**: Product orders
- **Subscriber**: Newsletter subscribers

## License

MIT
