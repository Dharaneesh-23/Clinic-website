# Clinic-website

## Frontend
## Getting Started

To clone and run this project, you'll need to have Node.js and npm (or yarn) installed on your machine. Once you have those installed, you can clone this repository and run the following commands:

```bash
git clone https://github.com/Dharaneesh-23/Clinic-website.git
cd clinic-website
npm install
npm start
```
This will install the project's dependencies and start the development server. The website should then be accessible at http://localhost:3000/ in your web browser.

## Project Structure

```
frontend/
│
├── node_modules/
│
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── logo.png
├── src/
│   ├── components/
│   │   ├── AboutPage.js
│   │   ├── BookingPage.js
│   │   ├── ContactPage.js
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   ├── HomePage.js
│   │   ├── NavBar.js
│   │   ├── ServicePage.js
│   │   └── TopScrollButton.js
│   ├── app.css
│   ├── app.js
│   ├── index.css
│   └── index.js
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── tailwind.config.js
```


## Dependencies
 - react
 - react-router-dom
 - material UI
 - fontawesome
 - react bootstrap
 - react-headroom

## Frontend
 - ![Home page](https://github.com/Dharaneesh-23/Clinic-website/blob/main/images/home%20page.png)
 - ![Appointment page](https://github.com/Dharaneesh-23/Clinic-website/blob/main/images/Booking%20page.png)
 - ![Service page](https://github.com/Dharaneesh-23/Clinic-website/blob/main/images/services%20page.png)

## Backend
## Overview
 Aramm Backend is a Django-based API project designed to manage patients, administrators, and packages. The project includes endpoints for creating, listing, and deleting patients and administrators, as well as creating, listing, deleting, and updating packages. This utilizes PostgreSQL for the Database.

## Project Structure
```
aramm_backend/
│
├── api/
│   ├── __pycache__/
│   ├── migrations/
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── serializers.py
│   ├── tests.py
│   ├── urls.py
│   └── views.py
│
├── aramm_backend/
│   ├── __pycache__/
│   ├── __init__.py
│   ├── asgi.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
│
├── media/
│
├── manage.py
└── requirements.txt
```
## Setup and Installation
- Clone the repository:
  ```
  git clone https://github.com/yourusername/aramm_backend.git
  cd aramm_backend
- Create and activate a virtual environment:
  ```
  python3 -m venv env
  source env/bin/activate

- Install the required dependencies:
  ```
  pip install -r requirements.txt

- Run database migrations:
  ```
  python manage.py migrate



The backend for this project is currently under development using Django and PostgreSQL.
