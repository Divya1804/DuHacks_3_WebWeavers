# NGO Donations Platform

This is a web application developed using React for the front end, Spring Boot for the backend, Tailwind CSS for styling, and the Stripe API for payments. The platform is designed to facilitate donations from donors to NGOs (Non-Governmental Organizations).

## Features

- **NGO Registration:** NGOs can register on the platform by providing necessary information such as name, location, contact details, and a brief description of their work.

- **Donor Registration:** Donors can register on the platform by providing basic information such as name, email, and password.

- **NGO Profile:** Each registered NGO has a profile page displaying their details and a list of donations received.

- **Donation Process:** Donors can browse registered NGOs and choose to donate to them. The donation process includes selecting an NGO, entering donation amount, and payment through a secure payment gateway.

- **Donation History:** Donors can view their donation history, including details of NGOs donated to and the donation amounts.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/Divya1804/DuHacks_3_WebWeavers.git
   ```

2. Navigate to the project directory:
   ```
   cd server
   ```

3. Install required dependencies for the server:
   ```
   Before running the server, ensure you have the necessary dependencies installed. You can do this by loading the pom.xml file and updating the application.properties file according to your SQL database configuration.
   ```

4. Navigate to the client directory and install client dependencies:
   ```
   cd client
   npm install
   ```

5. Return to the project directory and start the development server:
   ```
   cd ..
   npm run dev
   ```

6. Access the application in your web browser at `http://localhost:3000`.

## Technologies Used

- **Frontend:** React.js, HTML, Tailwind CSS
- **Backend:** Spring Boot
- **Database:** MySql
- **Other:** RESTful API, Stripe API for payment processing

## Future Improvements

- Implementing user authentication and authorization for NGOs and donors.
- Adding a search functionality to allow donors to easily find NGOs based on various criteria.
- Enhancing the donation process with more payment options and features.

## Contributors

- Rudra Patel
- Brij Patel
- Danish Patel
- Divya Patel
