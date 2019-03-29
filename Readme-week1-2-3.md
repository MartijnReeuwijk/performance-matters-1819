![Demo pic](https://github.com/MartijnReeuwijk/performance-matters-1819/blob/master/readmeAssets/hero.png)

[Demo link](https://nycgunincidents.herokuapp.com/)

# Performance matters

De week1 Readme van Performance-matters.
Het gaat hier vooral om het verbeteren van de performance van de Web-app-from-scratch App.
Hier onder is de "standaard" versie zonder optimalisatie.

![First test](https://github.com/MartijnReeuwijk/performance-matters-1819/blob/master/readmeAssets/1.png)

# Tabel of content

- [Performance matters](#performance-matters)
- [Tabel of content](#tabel-of-content)
  - [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running](#running)
  - [Linting](#linting)
  - [Build With](#build-with)
- [Server side rendering](#server-side-rendering) - [Hier de audits](#hier-de-audits)
- [EJS templating](#ejs-templating)
  - [Authors](#authors)
  - [License](#license)
  - [Acknowledgments and Thanks](#acknowledgments-and-thanks)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Prerequisites

You will need the following things properly installed on your computer.

- [Git](https://git-scm.com/)
- [Google Chrome](https://google.com/chrome/)

## Installation

- `git@github.com:MartijnReeuwijk/performance-matters-1819.git`
- `cd performance-matters-1819`
- `npm install`

## Running

`node inex.js`
localhost 3000.

## Linting

For linting i used CleanCss and Prettier
To run the Prettier use the code below

- `npm run clean`

## Build With

- [Prettier](https://prettier.io/docs/en/options.html) - Prettier.io - Linter
- [Node.js](https://nodejs.org/en/) - nodejs
- [Express](https://expressjs.com/) - Express

# Server side rendering

We hebben een client side app omgebouwed to een serverside app.
Het het idee er achter om te optimaliseren voor de langsamen 3G en de oude telefoons/computers.
Hier is de site om geschreven naar een serverside app samen met compression van G-zip.

#### Hier de audits

![Second test](https://github.com/MartijnReeuwijk/performance-matters-1819/blob/master/readmeAssets/2.png)

Audits met minifyHTML en compression.
![third test](https://github.com/MartijnReeuwijk/performance-matters-1819/blob/master/readmeAssets/3.png)

# EJS templating

Zelf heb ik nog nooit eerder EJS gebruikt voor templating.
Hier onder zie je hoe je de template moet opbouwen, zelf heb ik de meeste logica in de index.js gehouden.

```
<div id="list">
  <% data.forEach(function(item){ %>
  <div class="incident shadowHover borderRadius <%= item.statistical_murder_flag ? " death" : "alive" %> ">
    <a href=" <%= item.incident_key %> ">
      <p>Casenumber:
        <%= item.incident_key %>
      </p>
      <p>Location:
        <%= item.boro %>
      </p>
      <p>Victim age:
        <%= item.vic_age_group %>
      </p>
      <p>Precinct:
        <%= item.precinct %>
      </p>
      <%if (item.statistical_murder_flag == true) { %>
      <img class="spinlol" src="/img/rip.png" alt="Overleden">
      <% } %>
    </a>
  </div>
  <% }) %>
</div>
```
### Week 2 audits
In deze week ben ik bezig geweest met Cookies en pre-load.
De cookies zijn gelukt en dat scheelt heel veel tijd.
![zonder-browercach](https://github.com/MartijnReeuwijk/performance-matters-1819/blob/master/readmeAssets/zonder.png)
![met-browercach](https://github.com/MartijnReeuwijk/performance-matters-1819/blob/master/readmeAssets/met.png)


### Week 3 ServiceWorker & New index-page
Deze week ben in bezig geweest met het maken van een Nieuwe index-page/Home page, een manifest.
Op de homepage heb ik express mega images gebruikt, zodat er meer is om te optimaliseren.
![Banner](https://github.com/MartijnReeuwijk/performance-matters-1819/blob/master/readmeAssets/banner.png)

Met het gebruik van een serviceWorker is er nu offline support. Dit is vooral handig voor mijn site omdat het is gebaseert op data die niet meer zou veranderen.
![met-browercach](https://github.com/MartijnReeuwijk/performance-matters-1819/blob/master/readmeAssets/cache.png)

Door het manifest.json bestand wat ik heb gebruikt werkt bij mij de site ook als "App" die je kan installen.
![Install](https://github.com/MartijnReeuwijk/performance-matters-1819/blob/master/readmeAssets/install.png)


## Authors

- **Martijn Reeuwijk** - [MartijnReeuwijk](https://github.com/MartijnReeuwijk)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments and Thanks

NYC's crime department
