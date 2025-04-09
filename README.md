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
- 🔄 **Integration & Apps** (Sync Your Google Meet & Calendar)
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

---

## GUI

1. Login Page

   ![Screenshot 2025-04-09 232052](https://github.com/user-attachments/assets/1b8b5699-e7a1-4049-946a-8b061c2b7bfa)

2. Events Page

   ![Screenshot 2025-04-09 232144](https://github.com/user-attachments/assets/8031bb07-4c58-4ff5-b4c7-5f9ac7634f7e)

3. Integrations Page

   ![Screenshot 2025-04-09 232204](https://github.com/user-attachments/assets/9262f6f0-18da-47f5-b9d6-fcbd7bb42524)

4. Availability Page
    
    ![Screenshot 2025-04-09 232223](https://github.com/user-attachments/assets/86911d42-fa73-40a0-a582-b69c22c356f1)

5. Event Scheduling Page

   ![Screenshot 2025-04-09 232247](https://github.com/user-attachments/assets/044b5d95-6a73-48e2-b25c-f0e1ecb0d963)

6. Calendar Scheduling Page

   ![Screenshot 2025-04-09 232342](https://github.com/user-attachments/assets/17d9a290-2e37-4bbc-ba7e-48df6455ab2b)

7. Event Scheduled

   ![Screenshot 2025-04-09 233430](https://github.com/user-attachments/assets/98f95ba4-b0ef-421f-ba2d-ca3a1e9499f5)

   
