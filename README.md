# Lorien Legacies Website
A multi-paged website for my favorite book series, "The Lorien Legacies" by Pittacus Lore – made using HTML, CSS, Bootstrap 4, JavaScript, and Node.js

## Table of contents
* [Introduction](#introduction)
* [Technologies](#built-with)
* [Setup](#setup)
* [Features](#features)

## Introduction 
"The Lorien Legacies" by Pittacus Lore is one of my favorite book series. The dedicated fan website for the series recently went down, and I wanted to create my own fan website which consolidates trivia from the series and fun features like a series based quiz in the likes of a "Harry Potter" house sorting quiz. I used this opportunity to pick up new skills in web development like learning JQuery and responsive design using Bootstrap 4 and CSS media queries. Altogether, this project is a 4-page celebration of an amazing book series.

## Built With
* HTML5
* CSS
* Bootsrap 4
* JavaScript
* JQuery 3.5.1
* Node.js
* Express.js

## Setup
* Download ZIP of repository 
* [Install](https://nodejs.org/en/download/) Node.js and npm on your device
* Use command line to navigate into local copy of LL Website folder
* Install Express: `npm install express --save`
* Install Morgan: `npm install morgan --save`
* Run the program: `node app.js`
* Go to localhost:8888 on preferred browser. Enjoy!

## Features
### Homepage
The homepage is a landing page for the website. There is a video showing the signature warning at the beginning of each book in the series in the background of the header, plus there are image links to the 3 other pages in the website.

![Home Demo](Lorien_Legacies_Website/Demos/home.gif)

### Character List page
The character page has 4 different buttons representing the groups that all the characters in the series fall under. Clicking on one of these buttons opens up a list of characters and their descriptions for that group. Some character descriptions mention other characters that are within the page. Clicking on these mentioned names will scroll the user to the correct character and flash their description, opening and closing sections if nessecary.

![Character Demo](Lorien_Legacies_Website/Demos/characters.gif)

### Books in Series page
The books page shows covers of each book in the series. Clicking on a picture will open a popup which displays information and quotes for that specific book. The popup has a gradient animation background for styling. 

![Books Demo](Lorien_Legacies_Website/Demos/books.gif)

### Legacy Quiz page
The quiz page makes use of CSS display styling to create an immersive experience. For example, the background of the page will change based on which legacy the user is assigned from the quiz. JS functions are used to keep track of the user's answers and which questions, options, and images are displayed, making the quiz offline accesible and easy to take without endless scrolling through questions!

![Quiz Demo](Lorien_Legacies_Website/Demos/quiz.gif)

### Responsive Design
This webiste was remade with Boostrap 4 and utilizes CSS media queries for a responsive experience. It it mobile friendly, and responds to resizing and rotation.

![Responsive Demo](Lorien_Legacies_Website/LL website/Demos/responsive.gif)

## Author
Kamsi Oramasionwu

## Acknowledgements
"The Lorien Legacies" is a book series by Pittacus Lore and published by HarperCollins. I do not own the right to any of the characters mentioned or any of the images of book covers. Additionally, I don't own any of the pictures included throughout the website. I downloaded them from various free wallpaper websites, and slightly altered a few for styling purposes.
