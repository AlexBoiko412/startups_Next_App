# Startups Next App

## Overview

Startups Next App is a full-stack web application built with Next.js 15, designed to showcase a directory of startup profiles. This project demonstrates my ability to create an enterprise-ready, SEO-optimized, and performance-driven application with real-time data fetching and user authentication. It was developed as the capstone project for a comprehensive Next.js course, highlighting my skills in modern web development.

## Tech Stack

- **Next.js 15**: Official React framework for routing, rendering, and full-stack capabilities.
- **React 19**: Component-based UI development.
- **Sanity**: API-based platform for structured content management.
- **TypeScript**: Static typing for enhanced code reliability.
- **TailwindCSS**: Utility-first CSS for rapid, responsive styling.
- **NextAuth**: Secure authentication with GitHub integration.
- **Sentry**: Performance monitoring and error tracking.

## Key Features

- **Dynamic Startup Listings**: Fetches and displays startup data in real-time using Sanity’s Content API.
- **Authentication**: Secure GitHub login for user access via NextAuth.
- **Search Functionality**: Real-time search with URL query parameters for seamless filtering.
- **SEO Optimization**: Leverages Next.js metadata for improved search engine visibility.
- **Performance**: Implements Server-Side Rendering (SSR), Static Site Generation (SSG), and caching strategies.
- **Responsive Design**: Clean, minimalistic UI built with TailwindCSS.
- **Full-Stack Capabilities**: Server Actions and Route Handlers for backend logic.

## Project Highlights

- Built with Next.js 15’s latest features, including App Router, Server Components, and Partial Pre-rendering.
- Integrated Sanity for content management, ensuring scalable and dynamic data handling.
- Optimized for performance using caching, parallel data fetching, and Sentry for bug tracking.
- Deployable as a serverless application, showcasing modern architecture principles.

## Setup Instructions

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/AlexBoiko412/startups_Next_App.git
   cd startups_Next_App
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**  
   Create a `.env.local` file with the following:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=your_dataset
   NEXT_PUBLIC_SANITY_API_VERSION=vX
   SANITY_TOKEN=your_sanity_token
   AUTH_SECRET=your_auth_secret
   AUTH_GITHUB_ID=your_github_id
   AUTH_GITHUB_SECRET=your_github_secret
   ```

4. **Run Locally**
   ```bash
   npm run dev
   ```
   Visit [http://localhost:3000](http://localhost:3000) to explore the app.


This project showcases my ability to:
- Build scalable, full-stack applications with Next.js and TypeScript.
- Implement modern web development practices like SSR, SSG, and ISR.
- Integrate third-party APIs and authentication systems effectively.
- Deliver a polished, user-friendly experience optimized for performance and SEO.

## Contact

For inquiries reach out via [LinkedIn](https://www.linkedin.com/in/oleksandr-boiko01/) or email me at bojkosasa78@gmail.com.
