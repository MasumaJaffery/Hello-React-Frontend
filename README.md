<a name="readme-top"></a>

<div align="center">
  <h3><b>Hello React Frontend</b></h3>
</div>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents


- [📗 Table of Contents](#-table-of-contents)
- [📖 Hello Rails Front-end ](#Hello Rails Front-end)
  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Key Features ](#key-features-)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Install](#install)
    - [Usage](#usage)
    - [Run tests](#run-tests)
    - [Deployment](#deployment)
  - [👥 Authors ](#-authors-)
  - [🔭 Future Features ](#-future-features-)
  - [🤝 Contributing ](#-contributing-)
  - [⭐️ Show your support ](#️-show-your-support-)
  - [🙏 Acknowledgments ](#-acknowledgments-)
  - [❓ FAQ (OPTIONAL) ](#-faq-optional-)
  - [📝 License ](#-license-)

<!-- PROJECT DESCRIPTION -->

# 📖 React+Rails One Repo App <a name="about-project"></a>

**Hello Rails Front-end** is an exercise with 2 repos, but features a random generated greeting message.

Here is the link to the BACKEND in <a href="https://github.com/cancelei/hello-rails-back-end">Rails</a> 


## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://rubyonrails.org/">Ruby on Rails</a></li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li><a href="https://www.postgresql.org/">PostgreSQL</a></li>
  </ul>
</details>

<details>
<summary>Front-End</summary>
  <ul>
    <li><a href="https://react.dev/">React</a></li>
  </ul>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

- **Setup a Dual Repo APP, using RubyRails Front-end and a React Front-end.**
- **Rails 7.1.1 (lastest)+ Postgres**
- **Latest React using (create-react-app command)**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.
Note: We are assuming you have pre-installed ruby, WSL, ubuntu and rails!

### Prerequisites

In order to run this project you need:

first at all, install rails:

```sh
gem install rails -v 7.1.1
```

### Setup

Clone both repositories to your desired folder:

```sh
  cd your-folder
  git@github.com:MasumaJaffery/Hello-React-Frontend.git
```

### Install

Install this project with:

```sh
  cd hello-rails-frontend
  bundle install
```

Setting up the Data Base:

```sh
  "Set up Username and password information in the config/database.yml"
  rails db:create
  rails db:migrate
  rails db:seed
```

### Usage

To run the project, execute the following command:

```sh
  PORT=3001 npm start     quote:"(on port 3001, remember to use port 3000 for back-end)"
```

### Deployment

The deployment will be available one day !

<!--
Example:
You can deploy this project using:

```sh

```
 -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **Syeda Masuma Fatima**

- GitHub: [@MasumaJaffery](https://github.com/MasumaJaffery)
- Twitter: [@MasumaJaffery](https://twitter.com/MasumaJaffery)
- LinkedIn: [Masuma Jaffery](https://www.linkedin.com/in/masuma-jaffery-797a29256/)

  
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

> We this project can improve, we are planning to include the next features soon:

- [X] **User Interface, Controllers and Models**
- [X] **View Implementation**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/MasumaJaffery/hello-react-frontend/issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

> Would you like to help?

If you like this project feel free to leave an start, as well if you have a suggestion feel free to visit issues page.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to thank Microverse for creating this exercise-project.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FAQ (optional) -->

## ❓ FAQ (OPTIONAL) <a name="faq"></a>

> Learn more about FAQ below:

- **How do I fix Linters errors if I modify the project?**

  - for Eslint run

  ```sh
    npx eslint "**/*.{js,jsx}"
  ```

  - for Stylint run:

  ```sh
  npx stylelint "**/*.{css,scss}" --fix
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE.md) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>