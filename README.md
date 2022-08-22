<h1 align="center">
    API for authentication
</h1>


<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/Guribeiro/redux-auth-flow-api?color=8e44ad">
  <a href="https://www.linkedin.com/in/gustavohribeiro/" target="_blank" rel="noopener noreferrer">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-Gustavo%20Henrique-8e44ad">
  </a>
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/Guribeiro/redux-auth-flow-api?color=8e44ad">
  <a href="https://github.com/Guribeiro/softwrap-api/commits">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Guribeiro/redux-auth-flow-api?color=8e44ad">
  </a>
  <a href="https://github.com/Guribeiro/softwrap-api/stargazers">
    <img alt="GitHub last commit" src="https://img.shields.io/github/stars/Guribeiro/redux-auth-flow-api?color=8e44ad">
  </a>
  <a href="https://github.com/Guribeiro/softwrap-api/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/Guribeiro/redux-auth-flow-api?color=8e44ad">
  </a>
  <img alt="GitHub" src="https://img.shields.io/github/license/Guribeiro/redux-auth-flow-api?color=8e44ad">
</p>

<p align="center">
  <a href="#%EF%B8%8F-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

## ⚡ About the project

this api provides everything you need to manage your customers and the administrator's authentication flow

the administrator can manage his clients in any way he prefers

Administrator can see all their customers, manage them, also see more information sale orders and products

## 🚀 Technologies

Technologies that I used to develop this api

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Tsyringe](https://github.com/microsoft/tsyringe)
- [TypeORM](https://typeorm.io/#/)
- [JWT-token](https://jwt.io/)
- [BCrypt](https://github.com/kelektiv/node.bcrypt.js)
- [uuid v4](https://github.com/thenativeweb/uuidv4/)
- [Sqlite](https://sqlite.org/index.html)

## 💻 Getting started

Import the `redux-auth-flow-api.insomnia.json` on Insomnia App.

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)

**Clone the project and access the folder**

```bash
$ git clone git@github.com:Guribeiro/redux-auth-flow-api.git && cd redux-auth-flow-api
```

**Follow the steps below**

### Install the dependencies
```bash
yarn
```

### Once the modules are installed, run the migrations

```bash
yarn typeorm migrations:run
```

### run the api

```bash
yarn dev
```

### Well done, project is started!

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with 💜 &nbsp;by Gustavo Henrique 👋 &nbsp;[See my linkedin](https://www.linkedin.com/in/gustavohribeiro/)
