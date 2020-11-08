# News Search Engine

> News Search Engine from [News API](https://newsapi.org/)

## Table of contents

- [Technologies](#technologies)
- [Setup](#setup)
- [Scope of Functionalities](#scope-of-functionalities)

## Technologies

- React.js (with Redux)

## Setup

```sh
# Clone this repository
$ git clone https://github.com/danakim21/news-search-engine.git

# Go into the repository
$ cd news-search-engine

# Install dependencies
$ npm install

# Run the app and access it at localhost:3000
$ npm start
```

## Scope of Functionalities

**List of features ready**

- Search Features
  - Search through News API based on keywords
  - Implement pagination through buttons (Previous Page Button & Next Page Button)
  - When clicked on article, move to news article page
  - Provide preview of news title, content, thumbnail image, author, published date, and source
  - Sort article list by published date
- Main Features
  - Login through specific account (serverless)
  - Can add to favorites only when logged in
  - Can delete from favorites list
  - Can check favorite articles from favorite list

**To Do**

- Keep favorite list when website is reloaded
- Edit news content of favorite articles

**Features to fix / Improvements**

- Error when last page is reached (pagination)
- Better files and folder formatting & Better use of redux
  - Merge NewsList.js and Favorite.js to one component
- Login feature
- Designs
