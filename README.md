# Explore Heaven

Welcome to **Explore Heaven** – your gateway to the most mesmerizing travel experiences! Whether you're planning your next adventure or just exploring the beauty of Europe, Explore Heaven provides a wealth of information to make your journey unforgettable.

- View Live Site [Explore Heaven](https://explore-heaven.web.app/){:target="_blank"}

## Table of Contents

- [About](#about)
- [Features](#features)
- [Getting Started](#getting-started)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## About

**Explore Heaven** is a travel website dedicated to helping users discover and plan trips to stunning destinations across Europe. Our platform provides detailed information on destinations, things to do, and tips to make the most of each location. We strive to inspire travelers and offer a seamless experience to explore all that Europe has to offer.

## Features

- **Destination Categories**: Browse destinations by category, such as beaches, mountains, cities, and cultural sites.
- **Detailed Destination Pages**: In-depth information about each location, including best times to visit, local attractions, and travel tips.
- **User Authentication**: Sign up and log in to save your favorite destinations and get personalized recommendations.
- **Responsive Design**: Optimized for mobile, tablet, and desktop views.
- **Animations**: Smooth scrolling animations using AOS (Animate on Scroll) for an engaging user experience.

## Getting Started

### Prerequisites

To set up a local copy of the project, make sure you have the following installed:

- Node.js
- Firebase CLI

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ismaileub/travel-website-with-frontend-and-backend-.git
   cd ExploreHeaven-client-side

2.
    ```bash
    npm install

3.Firebase Setup:

    Make sure you have a Firebase project set up. Go to the Firebase Console and create a new project if you haven’t already.
    Once your project is set up, go to Project Settings and locate the Firebase SDK configuration. Copy the Firebase configuration and create a .env file in your project root directory.

4. Create a .env file:
   In your .env file, add your Firebase configuration details:
   plaintext
    
    REACT_APP_API_KEY=your_api_key
    REACT_APP_AUTH_DOMAIN=your_project_id.firebaseapp.com
    REACT_APP_PROJECT_ID=your_project_id
    REACT_APP_STORAGE_BUCKET=your_project_id.appspot.com
    REACT_APP_MESSAGING_SENDER_ID=your_sender_id
    REACT_APP_APP_ID=your_app_id    
 
 Make sure to replace each value with the actual configuration details from Firebase.

 5. Run the Development Server:

 

    npm start

    The app should now be running on http://localhost:3000.

    

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript, React, Tailwind CSS, AOS (Animate on Scroll)
- **Backend**: Node.js, Express.js, Firebase (Firestore for database, Authentication, Hosting)
