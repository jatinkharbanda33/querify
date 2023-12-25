# Querify 

Querify is a React application designed to handle SQL queries efficiently and effectively.

## Table of Contents

1. [Overview](#overview)
2. [Tech Stack](#tech-stack)
3. [Speed Index](#speed-index)
4. [Optimizations](#optimizations)

## Overview

Querify provides two main divisions: the query area and the query result section. It features a selection of predefined SQL queries that you can choose from for ease of use. 

The application allows you to reset queries as needed, a functionality powered by the useState hook from React. The result of each query is also managed using the useState hook. 

For convenience, we've added a 'Paste Query' button that accesses your clipboard and sets the query to what you have copied. 

In addition, Querify supports a dark theme mode and provides a toggle button for easy switching between light and dark modes.

## Tech Stack

Querify is built using React and styled with Tailwind CSS. 

### Key Packages

- react papaparse (CSV parser)

## Speed Index

The Speed Index of Querify is 0.8s as measured using Google Lighthouse.

![Querify Image](https://github.com/jatinkharbanda33/querify/assets/76038276/678252f9-79c2-433c-8cb9-4b93339ced52)

## Optimizations

1. Tailwind CSS was used to speed up the development process.
2. The 'memo' function was used to prevent the re-rendering of the query result when only the text was changing, reducing the Speed Index by 0.2s.
