<!-- PROJECT LOGO -->
<div align="center">
  <img src="images/TU-Berlin-Logo.svg" alt="Logo">
  <h1 align="center"> Fullstack web-based 5G metrics dashboard </h1>
  <h3>Project Advanced Web Technologies (SoSe24) </h3>
</div>


<!-- TABLE OF CONTENTS -->
<!-- <details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details> -->

<br/>

<img src="images/dashboard.png"/>

<br/>

<!-- ABOUT THE PROJECT -->
## 💡 About The Project

This project implements a web-based dashboard application designed to display both stored and live metric data from a 5G mobile network, including information from base stations (gNBs) and user devices (UEs). The system is capable of capturing and storing 5G metrics in a database, enabling users to retrieve, view, and compare data across various test sessions.

### Key Features

- **Live and Stored Data Display:** View real-time metrics as well as historical data from 5G network components.
- **Data Capture and Storage:** Efficiently capture and store 5G metrics in a database for future analysis.
- **Comparison and Analysis:** Retrieve and compare data from multiple test sessions to analyze network performance.
- **WebSocket Integration:** Reverse engineering and capturing of WebSocket messages from an existing [OAIBOX](https://oaibox.com/) dashboard to provide the necessary 5G data.

<br/>

<div align="center">
  <h3>🎥 <a href="https://drive.google.com/drive/folders/1WxvNU8Wwfcp0o9jDBbSbkER7GcXYajBT?usp=drive_link">View the demo videos of our dashboard!</a></h3>
</div>

<br/>



## 🛠️ Built With

* ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
* ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
* ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
* ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
* ![Chart.js](https://img.shields.io/badge/chart.js-F5788D.svg?style=for-the-badge&logo=chart.js&logoColor=white)


<!-- GETTING STARTED -->
## 🚀 Getting Started 

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/github_username/repo_name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```
5. Change git remote url to avoid accidental pushes to base project
   ```sh
   git remote set-url origin github_username/repo_name
   git remote -v # confirm the changes
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_



<!-- ROADMAP -->
## Roadmap

- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3
    - [ ] Nested Feature

See the [open issues](https://github.com/github_username/repo_name/issues) for a full list of proposed features (and known issues).



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.



<!-- CONTACT -->
## Contact

Your Name - [@twitter_handle](https://twitter.com/twitter_handle) - email@email_client.com

Project Link: [https://github.com/github_username/repo_name](https://github.com/github_username/repo_name)



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* []()
* []()
* []()

