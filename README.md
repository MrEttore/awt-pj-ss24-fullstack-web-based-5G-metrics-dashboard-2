<!-- PROJECT LOGO -->
<div align="center">
  <img src="images/TU-Berlin-Logo.svg" alt="Logo">
  <h1 align="center"> Fullstack web-based 5G metrics dashboard </h1>
  <h3>Project Advanced Web Technologies (SoSe24) </h3>
</div>

<br/>

<img src="images/dashboard.png"/>

<br/>

<!-- ABOUT THE PROJECT -->
## 💡 About The Project

This project implements a web-based dashboard application designed to display both stored and live metric data from a 5G mobile network, including information from base stations (gNBs) and user devices (UEs). The system is capable of capturing and storing 5G metrics in a database, enabling users to retrieve, view, and compare data across various test sessions.

### Key Features

- **Live and Stored Data Display:** View real-time metrics as well as historical data from 5G network components.
- **Data Capture and Storage:** Efficiently capture and store 5G metrics in a database for future analysis.
- **Comparison and Analysis:** Retrieve and compare data from multiple test sessions to analyze 5G network performance.
- **WebSocket Integration:** Reverse engineering and capturing of WebSocket messages from an existing [OAIBOX](https://oaibox.com/) dashboard to provide the necessary 5G data.

<br/>

<div align="center">
  <h3>🎥 <a href="https://drive.google.com/drive/folders/1WxvNU8Wwfcp0o9jDBbSbkER7GcXYajBT?usp=drive_link" style="color: #6a0dad; text-decoration: none;">View the demo videos of our dashboard!</a></h3>
</div>

<br/>



## 🛠️ Built With

* ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
* ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
* ![Chart.js](https://img.shields.io/badge/chart.js-F5788D.svg?style=for-the-badge&logo=chart.js&logoColor=white)
* ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
* ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
* ![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)
* ![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)
* ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

## 🏛️ System Architecture

The architecture of our 5G metric dashboard web application is a modular, containerized system built for flexibility, scalability, and ease of maintenance. The system is composed of five key components:

- **Frontend:** The frontend serves as the user interface, enabling users to interact with and visualize 5G data in real-time. It provides a responsive and intuitive experience, ensuring that the complex metrics are presented in a user-friendly manner.
- **Backend:** The backend acts as the central hub for data processing. It manages the flow of information between the frontend and the database, handling requests and ensuring that data is processed accurately and efficiently.
- **Database:** The database stores both historical and live telemetry data, serving as the persistent data repository. It ensures that all 5G metric data is securely stored and can be retrieved quickly for analysis and display.
- **NGINX:** To enhance security and simplify the handling of Cross-Origin Resource Sharing (CORS) issues, the application traffic is managed by an NGINX container. NGINX serves as a reverse proxy, forwarding requests to the appropriate service.
- **Scraper:** The scraper component is responsible for collecting 5G telemetry data from external [OAIBOX](https://oaibox.com/) instances. It feeds this data into the database, ensuring that the system has up-to-date information for processing and display.

<br/>

<div align="center">
  <img src="images/sys-architecture.png"/>
</div>

<br/>

## 🚀 Getting Started 

To keep the deployment as simple as possible Docker compose is used to offer an easy and fast deployment.

### Prerequisites

First, Docker and Docker Compose should be installed on the machine. Moreover, general knowledge of Docker is required.

### Start The Application
1. Execute the following command to start the project
   ```sh
   docker compose up -d --build
   ```
    + `-d` means detached mode, so the terminal is not blocked by the running containers
    + `--build` means that the images are newly built before the containers are started

### Shut Down The Application
1. Execute the following command to stop the project
   ```sh
   docker compose down
   ```
    + This command stops and removes all containers
<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## 🔧 Usage

...



<!-- DOCUMENTATION -->
## 📃 Documentation & APIs

...


<!-- LICENSE -->
## 🧾 License

Distributed under the MIT License. See `LICENSE.txt` for more information.



<!-- CONTACT -->
## 📬 Contact

Ettore Marangon - [LinkedIn](www.linkedin.com/in/ettore-marangon-7ba517215) | ettore.carlo.marangon@campus.tu-berlin.de

Daniel Hermann - 

Moritz Schelten - 



## 🫡 Acknowledgments

* []()
* []()
* []()

