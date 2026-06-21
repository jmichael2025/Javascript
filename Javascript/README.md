# Javascript
Javascript assignment

JobNest - Responsive Job Listing Website
Project Overview

JobNest is a responsive job listing website developed using HTML, CSS, JavaScript, and JSON. The project allows users to browse available jobs, view detailed job descriptions, and navigate to a registration page to apply for positions.

The website simulates a real-world online job portal by separating job data from the webpage structure using a JSON file and dynamically loading the content using JavaScript Fetch API.

Features
Responsive design for desktop, tablet, and mobile devices
Dynamic job listings loaded from a JSON file
Job cards displaying:
Job title
Company name
Location
Salary
Short job summary
Individual job details page with:
Full job description
Company information
Salary details
Register Now option
Registration form for job applications
JavaScript form validation and user interaction
Navigation between pages
Technologies Used
HTML5
CSS3
JavaScript (ES6)
JSON
Fetch API

Code files includes:

├── index.html          Home page
├── jobs.html           Displays all available jobs
├── jobs.js             Loads jobs from JSON and creates job cards
├── jobs.json           Stores all job information
├── about.html          Description about the website
├── survey.html         Survey for feedback
├── jobDetails.html     Displays selected job details
├── jobDetails.js       Retrieves job information based on job ID
│
├── register.html       Job application registration form
├── register.js         Handles form validation and interactions
│
├── style.css           Main stylesheet for responsive design
└── README.md           Project documentation

How to Run the Project
Download or clone the project files.
Open the project folder in Visual Studio Code.
Install the Live Server extension.
Right-click index.html 
Select Open with Live Server.

The project must be run using a local web server because the JavaScript Fetch API cannot access JSON files directly using the file:// protocol due to browser security restrictions (CORS policy).
