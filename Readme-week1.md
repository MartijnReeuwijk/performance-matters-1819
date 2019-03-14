![Demo pic](https://github.com/MartijnReeuwijk/web-app-from-scratch-18-19/blob/master/readmeAssets/hero.png)

# Performance matters

De week1 Readme van Performance-matters.
Het gaat hier vooral om het verbeteren van de performance van de Web-app-from-scratch App.

![Maps API](https://github.com/MartijnReeuwijk/web-app-from-scratch-18-19/blob/master/week2/public/img/demo.png)
[Demo](https://martijnreeuwijk.github.io/web-app-from-scratch-18-19/week2/) - Live demo

# Tabel of content

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running](#running)
- [Linting](#linting)
- [Build With](#build-with)
- [Data formating](#data-formating)
  - [Data output example](#data-output-example)
    - [Standard use object](#standard-use-object)
- [Javascript templating](#javascript-templating)
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

- `git@github.com:MartijnReeuwijk/web-app-from-scratch-18-19.git`
- `cd web-app-from-scratch-18-19`
- `npm install`

## Running

Local hosting is not needed.

## Linting

For linting i used CleanCss and Prettier
To run the Prettier use the code below

- `npm run clean`

## Build With

- [Routie](http://projects.jga.me/routie/) - routie for routing in the app
- [Prettier](https://prettier.io/docs/en/options.html) - Prettier.io - Linter

## Data formating

The data from the API is very clear and easy to use underneath this is an example of the API's output.
It doesnt need any changing for the data i'am going to use.

### Data output example

##### Standard use object

This is an example on how the data looks.
Not all the data is present in all the different cases.

```
boro: "BROOKLYN"
incident_key: "138817042"
jurisdiction_code: "0"
latitude: "40.651465108"
longitude: "-73.954236416"
occur_date: "2014-09-21T00:00:00.000"
occur_time: "23:15:00"
precinct: "67"
statistical_murder_flag: false
vic_age_group: "25-44"
vic_race: "BLACK"
vic_sex: "M"
x_coord_cd: "996949"
y_coord_cd: "176623"
```

## Javascript templating

This is the first time i used Javascript templating, and its really easy and usefull.
Here is a example of my code, this will generate all the items/lists.
You can very easly

```
<div class="incident ${item.statistical_murder_flag ? "death" : "alive"}">
<p>Casenumber:${item.incident_key}</p>
<p>Location:${item.boro}</p>
<p>Death:${item.statistical_murder_flag ? "Yes" : "No"}</p>
<p>Victim age: ${item.vic_age_group}</p>
<p>Precinct:${item.precinct}</p>
${
  item.statistical_murder_flag
    ? '<img src="./public/img/rip.png" alt="">'
    : ""
}
</div>
```

## Routie

Routie checkes for the numbers/text after the # sign and turns this into a parameter then i call the dataFilter() functions to return the selected object.
Then i will render the page with the filterd data

```
routie(":incident", incident => {
  console.log(incident);
  dataFilter(incident, data);
});
```

## Diagrams

I used an actor diagram to order and compartmentalize the functions and flow of the app. It's useful to keep order in the code and it structure, By making you think ahead.

### Actor Diagram

![Actor-Diagram](https://github.com/MartijnReeuwijk/web-app-from-scratch-18-19/blob/master/week2/public/img/actor.png)

### Interaction Diagram

![Interaction-Diagram](https://github.com/MartijnReeuwijk/web-app-from-scratch-18-19/blob/master/week2/public/img/interactionChart1.png)
![Interaction-Diagram](https://github.com/MartijnReeuwijk/web-app-from-scratch-18-19/blob/master/week2/public/img/interactionChart2.png)
![Interaction-Diagram](https://github.com/MartijnReeuwijk/web-app-from-scratch-18-19/blob/master/week2/public/img/interactionChart3.png)

## Authors

- **Martijn Reeuwijk** - [MartijnReeuwijk](https://github.com/MartijnReeuwijk)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments and Thanks

NYC's crime department
