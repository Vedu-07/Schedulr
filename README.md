# Schedulr - "Simplify Your Scheduling, Maximize Your Time!"

## 📌 Project Overview

Schedulr is an all-in-one scheduling and calendar management platform designed to streamline your meeting and event booking process. Inspired by the simplicity of tools like Calendly, Schedulr allows users to effortlessly manage meetings, set availability, and integrate with major calendar services such as Google Calendar, Zoom, and more. Whether you're scheduling personal appointments, business meetings, or team collaborations, Schedulr offers a powerful and intuitive solution for managing your time.

With Schedulr, you'll never worry about double-bookings or missed appointments. Set your availability, share a unique booking link, and let clients or team members book at their convenience. Integrating seamlessly with your favorite apps, Schedulr keeps everything in sync, making meeting management easier than ever.

---

## 🌟 Key Features

- 🔑 **Easy Sign-Up & Login** (Using JWT Authentication)
- 📅 **Create Events** (Public or Private)
- 🔗 **Share Your Unique Booking Link** (Clients Book Instantly!)
- ⏳ **Set Your Availability & Time Slots** (No Double-Booking!)
- 🌍 **Auto-Detect Time Zones**
- 📆 **Custom-Built Calendar** – No Plugins!
- 🔄 **Integration & Apps** (Sync Your Google Meet & Calendar Scratch)
- ✅ **Track Upcoming, Past & Canceled Meetings**
- 🕰️ **Switch Between 12h & 24h Formats**
- 💻 **Built with**: Node.js, TypeORM, PostgreSQL, React.js
- 🎨 **Tailwind CSS v4 & Shadcn-ui**

---

## 🚀 Tools & Technologies

This project leverages the latest tools and frameworks for modern development:

- **Node.js**: Scalable backend architecture
- **React.js**: Dynamic frontend framework
- **TypeOrm & Supabase (PostgreSQL)**: Flexible and scalable database solutions
- **Google Calendar API**: Seamless Google Calendar integration
- **TypeScript**: For a type-safe codebase
- **TailwindCSS & Shadcn UI**: Beautiful, responsive design
- **Vite.js**: Lightning-fast frontend development

---

## 🔄 Getting Started

1. **Clone the Repository**

    ```bash
    git clone "https://github.com/Vedu-07/Schedulr.git"


2. **Set Up Environment Variables**  
   Create a `.env` file in the root of your project and configure these variables:

   ```dotenv
   PORT=8000  
   NODE_ENV=development  

   DATABASE_URL="postgresql://postgres.<>:<>@aws-0-eu-central-1.pooler.supabase.com:6543/postgres"

   JWT_SECRET= 
   JWT_EXPIRES_IN=

   GOOGLE_CLIENT_ID=  
   GOOGLE_CLIENT_SECRET=  
   GOOGLE_REDIRECT_URI="http://localhost:8000/api/integration/google/callback"

   FRONTEND_ORIGIN=http://localhost:5173  
   FRONTEND_INTEGRATION_URL="http://localhost:5173/app/integrations"

3. **Run the Application**  
   Install dependencies and start the development server:

   ```bash
   npm install
   npm run dev


4. **Access the backend at `http://localhost:8000.`**