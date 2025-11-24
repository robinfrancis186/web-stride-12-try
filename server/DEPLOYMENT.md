# 🚀 Cloud Deployment Guide

Deploy the STRIDE backend to the cloud in 20 minutes - **completely free, no local setup required!**

## 📋 Prerequisites

- GitHub account (you already have this)
- Email address for MongoDB Atlas
- Email address for Render

**No credit card required for either service!**

---

## Part 1: MongoDB Atlas Setup (Cloud Database)

### Step 1: Create MongoDB Atlas Account

1. Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Click **"Try Free"**
3. Sign up with Google or email
4. Choose **"Free"** tier (M0 Sandbox)

### Step 2: Create a Cluster

1. After login, click **"Build a Database"**
2. Choose **"M0 FREE"** tier
3. Select **AWS** as provider
4. Choose region closest to you (e.g., `us-east-1`)
5. Cluster Name: `stride-cluster` (or keep default)
6. Click **"Create"**

⏱️ Wait 1-3 minutes for cluster creation

### Step 3: Create Database User

1. Click **"Database Access"** in left sidebar
2. Click **"Add New Database User"**
3. Authentication Method: **Password**
4. Username: `strideadmin`
5. Password: Click **"Autogenerate Secure Password"** and **COPY IT**
   - Save this password somewhere safe!
6. Database User Privileges: **"Read and write to any database"**
7. Click **"Add User"**

### Step 4: Allow Network Access

1. Click **"Network Access"** in left sidebar
2. Click **"Add IP Address"**
3. Click **"Allow Access from Anywhere"**
   - This adds `0.0.0.0/0` (required for Render)
4. Click **"Confirm"**

### Step 5: Get Connection String

1. Click **"Database"** in left sidebar
2. Click **"Connect"** button on your cluster
3. Choose **"Connect your application"**
4. Driver: **Node.js**, Version: **5.5 or later**
5. Copy the connection string (looks like):
   ```
   mongodb+srv://strideadmin:<password>@stride-cluster.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
6. **Replace `<password>` with your actual password from Step 3**
7. Add database name before the `?`:
   ```
   mongodb+srv://strideadmin:YOUR_PASSWORD@stride-cluster.xxxxx.mongodb.net/stride-community?retryWrites=true&w=majority
   ```

✅ **Save this complete connection string - you'll need it for Render!**

---

## Part 2: Render Setup (Backend Hosting)

### Step 1: Create Render Account

1. Go to [render.com](https://render.com)
2. Click **"Get Started"**
3. Sign up with **GitHub** (easiest option)
4. Authorize Render to access your GitHub

### Step 2: Create Web Service

1. From Render Dashboard, click **"New +"**
2. Select **"Web Service"**
3. Connect your repository:
   - If not connected, click **"Connect account"** → GitHub
   - Find `web-stride-12-try` repository
   - Click **"Connect"**

### Step 3: Configure Service

Fill in these settings:

**Basic Settings:**
- **Name**: `stride-backend` (or any name you like)
- **Region**: Choose closest to you (e.g., `Oregon (US West)`)
- **Branch**: `main`
- **Root Directory**: Leave empty
- **Runtime**: `Node`

**Build & Deploy:**
- **Build Command**: 
  ```
  cd server && npm install
  ```
- **Start Command**: 
  ```
  cd server && npm start
  ```

**Instance Type:**
- Select **"Free"** (first option)

### Step 4: Add Environment Variables

Scroll down to **"Environment Variables"** section and add these:

Click **"Add Environment Variable"** for each:

1. **NODE_ENV**
   - Value: `production`

2. **PORT**
   - Value: `10000`

3. **MONGODB_URI**
   - Value: `YOUR_MONGODB_ATLAS_CONNECTION_STRING`
   - (Paste the complete string from Part 1, Step 5)

4. **JWT_SECRET**
   - Value: `stride-jwt-secret-production-2024-secure-key`
   - (Or generate a random string)

5. **JWT_EXPIRE**
   - Value: `30d`

6. **CLIENT_URL**
   - Value: `https://stridecommunity.online`

### Step 5: Deploy!

1. Click **"Create Web Service"** at the bottom
2. Render will start building and deploying
3. ⏱️ Wait 3-5 minutes for first deployment

**You'll see:**
- "Build started"
- "Installing dependencies"
- "Build successful"
- "Deploy live"

### Step 6: Get Your API URL

Once deployed, you'll see:
```
Your service is live at https://stride-backend-xxxx.onrender.com
```

✅ **This is your backend API URL!**

---

## Part 3: Testing Your Deployed Backend

### Test 1: Health Check

Open in browser or use curl:
```bash
https://stride-backend-xxxx.onrender.com/api/health
```

Should return:
```json
{
  "success": true,
  "message": "STRIDE API is running",
  "timestamp": "2024-11-24T..."
}
```

### Test 2: Get Products

```bash
https://stride-backend-xxxx.onrender.com/api/products
```

Should return empty array (database is empty initially):
```json
{
  "success": true,
  "count": 0,
  "data": []
}
```

### Test 3: Register a User

Use Postman, curl, or your frontend:

```bash
curl -X POST https://stride-backend-xxxx.onrender.com/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "password": "password123"
  }'
```

Should return:
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "...",
    "name": "Test User",
    "email": "test@example.com",
    "role": "member"
  }
}
```

---

## Part 4: Seed the Database (Optional)

To add initial products and admin user:

### Option 1: Using Render Shell

1. Go to your service in Render Dashboard
2. Click **"Shell"** tab
3. Run:
   ```bash
   cd server && npm run seed
   ```

### Option 2: Temporarily Run Locally

1. Update your local `.env`:
   ```env
   MONGODB_URI=your_atlas_connection_string
   ```
2. Run:
   ```bash
   cd server && npm run seed
   ```

This creates:
- ✅ Admin user (email: `admin@stride.com`, password: `admin123`)
- ✅ 3 sample products

---

## Part 5: Update Frontend to Use Cloud Backend

### Update API Base URL

In your frontend, update the API base URL:

**If using axios:**
```javascript
// src/services/api.js
const API = axios.create({
  baseURL: 'https://stride-backend-xxxx.onrender.com/api',
});
```

**Or update environment variable:**
```env
VITE_API_URL=https://stride-backend-xxxx.onrender.com/api
```

---

## 🎉 You're Done!

Your backend is now:
- ✅ **Live on the internet**
- ✅ **Accessible from anywhere**
- ✅ **No local setup required**
- ✅ **Free forever** (within limits)
- ✅ **Auto-deploys** when you push to GitHub

---

## 📊 Service Limits (Free Tier)

### MongoDB Atlas
- 512 MB storage
- Shared CPU
- ~100 connections
- Perfect for development/small apps

### Render
- 750 hours/month (enough for 24/7)
- Sleeps after 15 min of inactivity
- Wakes up on first request (~30 sec)
- 100 GB bandwidth/month

---

## 🔧 Troubleshooting

### Backend not responding?
- Check Render logs: Dashboard → Your Service → Logs
- Verify environment variables are set correctly
- Make sure MongoDB connection string is correct

### Database connection failed?
- Verify MongoDB Atlas IP whitelist includes `0.0.0.0/0`
- Check database user credentials
- Ensure connection string has database name

### Service sleeping?
- Free tier sleeps after 15 min inactivity
- First request takes ~30 seconds to wake up
- Upgrade to paid tier ($7/mo) for always-on

---

## 🔄 Auto-Deployment

Every time you push to GitHub:
1. Render detects the push
2. Automatically rebuilds
3. Deploys new version
4. Takes ~3-5 minutes

**No manual deployment needed!**

---

## 📝 Your Deployed URLs

**Backend API:**
```
https://stride-backend-xxxx.onrender.com/api
```

**Frontend:**
```
https://stridecommunity.online
```

**MongoDB Atlas:**
```
Dashboard: https://cloud.mongodb.com
```

---

## 🎯 Next Steps

1. ✅ Test all API endpoints
2. ✅ Update frontend to use cloud backend
3. ✅ Seed database with initial data
4. ✅ Test authentication flow
5. ✅ Monitor logs in Render dashboard

**Your backend is now production-ready!** 🚀
