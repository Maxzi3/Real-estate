# Real Estate Platform

A responsive real estate web application that showcases property listings with featured properties, including a 30% discount on selected items. The application is built using React and fetches data from a backend API.

https://real-estate-ashen-mu.vercel.app/

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Deployment](#deployment)
- [Known Issues](#known-issues)


## Introduction

This project is a real estate listing platform where users can browse various property listings. It features a front page with highlighted properties showing a 30% discount, property details view, and a feature to navigate to a full list of properties. The application uses React for the frontend and communicates with a backend API to fetch property data.

## Features

- Display of featured properties with a 30% discount.
- Responsive design compatible with both desktop and mobile devices.
- Property details page with information about price, type, location, and amenities.
- CORS support to ensure smooth API communication in production environments.
- A loading spinner to indicate data fetching.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Router**: For handling client-side routing.
- **Vercel**: Hosting platform for deploying the frontend application.
- **Node.js** and **Express**: Used for proxy server setup (if applicable).
- **CORS Middleware**: For handling Cross-Origin Resource Sharing.

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

Make sure you have Node.js and npm installed. You can download them from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/real-estate-platform.git
    ```

2. Navigate into the project directory:

    ```bash
    cd real-estate-platform
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

### Usage

1. To start the development server, run:

    ```bash
    npm start
    ```

2. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

3. To build the project for production, use:

    ```bash
    npm run build
    ```

## API Reference

This application fetches property data from an external API. The base URL of the API is:

https://ebuy-api.onrender.com/


### Known Issues
CORS Errors: In production, CORS errors may occur due to restrictions on the API server. Make sure the backend API is configured to allow requests from your Vercel deployment URL.