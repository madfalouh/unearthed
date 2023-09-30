# Unearthed Project



Welcome to the Virtual Community Space project! This project is aimed at creating a virtual community space where users can explore events by location. Whether you're interested in music events, dungeon crawling expeditions, support groups, protests, geocaching spots, or dromedary herders association meetups, this web app will help you find interesting activities in your chosen locations.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
- [Database Setup](#database-setup)
- [Connecting to the Database](#connecting-to-the-database)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)

## Features

### Required Features
- The web app uses React to display data from the API.
- The web app is connected to a PostgreSQL database with an appropriately structured events table.
- The web app displays the title of the app.
- A visual interface allows the user to select a product they would like to view.
- Clicking on a location shows a list of all items from the events table that correspond to that product.
- Each location detail page should have its own unique URL.

### Stretch Features
- An additional search box so the user can sort and filter by product name.

## Getting Started

To get started with the  project, follow these steps:

### Database Setup

1. Create a new project on Railway (https://railway.app/).
2. Choose "Provision PostgreSQL" to create an empty PostgreSQL database.
3. In the project settings, you can change the database name if needed.

### Connecting to the Database

1. In the `server` directory, create a folder called `config`.
2. Inside the `config` folder, create a file called `database.js`.
3. Add the following code to `database.js`:

```javascript
import pg from 'pg';

const config = {
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE,
};

export const pool = new pg.Pool(config);
```

4. In the `server` directory, create a new file called `.env` and add the following variables:

```env
PGUSER=""
PGPASSWORD=""
PGHOST=""
PGPORT=
PGDATABASE=""
```

5. In Railway, click on the database you created. Copy and paste the values from the Connect tab into your `.env` file.

### Backend Setup

1. In the `server` directory, create a folder called `controllers`.
2. In the `controllers` folder, create files for your events and locations tables.
3. Import the `pool` from your `database.js` file into these files.
4. Add functions to get events from the events table and locations from the locations table. Export these functions.

### Frontend Setup

1. In the `client` directory, create a folder called `services` inside the `src` folder.
2. In the `services` folder, create files for your API calls, such as `EventsAPI.jsx` and `LocationsAPI.jsx`.
3. Define functions to get events and locations by calling the API in these files. Export these functions.
3. Start the client by running `npm start` in the `client` directory.
4. Access the web app in your browser at `http://localhost:5173`.
