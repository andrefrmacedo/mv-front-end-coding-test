# Project Setup

**Dependencies:**

* Ruby on Rails
* yarn
* browser extension to enable Cross-origin resource sharing
* PostgreSQL

**API Setup - run the following commands inside the API folder:**

* `bundle`
* `rails db:setup`

**Client Setup - run the following commands inside the Client folder:**

* `yarn install`

**Starting the project**

* `rails s` inside the API folder
* `yarn start` inside the Client folder
* Open the browser in `localhost:8080` with the _Cross-origin resource sharing_ enabled

**For this project the Client makes API calls to the API server, which has dummy data from the exampleData folder**
