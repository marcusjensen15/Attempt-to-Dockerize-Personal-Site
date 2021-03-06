# _Marcus Jensen Personal Site_

#### _A cool space to showcase my projects, my resumé, and my blog, 3/11/2020_

#### By _**Marcus Jensen**_

## Description

_I wanted to create an online space where I could showcase my professional skills, deployed projects, and blog about my experiences in computer programming. I've created a good looking Web app which I think accomplishes this objective._



## Timetable (2/28/2020)
-8am - initial site plan
- 11:30 - 2pm lunch with potential employer
  -> Technology utilized: React front end with Ruby/Rails API back end.
  -> Necessary Routes:
    - "/" -> Home
    - "/resume" -> Resumé
    - "/about" -> About
    - "/blog" -> Blog
    - "/admin" -> (some sort of admin side where I can add blog posts)
    - "/codingblog/:id" -> need to figure out how to do dynamic routes

    ## Timetable (3/6/2020)
      - 945am: meeting with director of talent for software company.
      - 11am: picking out color design palates.
      - 12pm: meeting with contact for potential job.

## Application Component Structure (3/11/2020)
                      App.js
             /        /       \              \
    Home.jsx      Resume.jsx CodingBlog.jsx Admin.jsx
                               |                   |          \                \
                            Post.jsx          NewPostForm.jsx, EditPostForm.jsx  PostAdmin.jsx



## Explanation of each component:

App.js - Holds all of the core functions of the app. State also lives in this level. State values and core functions are passed down through props. All of the routing for the entire app lives within this component.

CodingBlog.jsx - This is the 'show' for all of the blogs from my API. The entire list of posts is being passed down as a state value through props (postList). If you are looking at the live deployment, you may need to refresh a couple of times. The API is being hosted on a free Heroku plan which goes to sleep after 30 min of inactivity. (takes a few seconds to wake up).

EditPostForm.jsx - Only accessible through the Admin.jsx view. When the admin enters this view, the post details that are being edited are saved as state variables. The original post is deleted, the edited post is now submitted into the database as a new post.

Header.jsx - Appears on every view of the app. Basic navigation bar.

Home.jsx - Holds the primary image along with the tag lines. Simple splash page.

NewPostForm.jsx - Allows the admin user to add a new post. Function passed down from App.js which pushes new post content into the API.

Post.jsx - User view where they can see the post content. This is accessed by clicking on an individual post within CodingBlog.jsx, or by navigating to the specific post via unique URL.

PostAdmin.jsx - Admin view only. Allows the admin to delete the post, or edit the post.

Resume.jsx - Holds all of my Professional experience along with links to my deployed projects.


## Live Deployment

The application is [Deployed Live Here] (https://obscure-sierra-62304.herokuapp.com/#/).

The API Powering the blog portion of this app is [Deployed Live Here] (https://quiet-bayou-85740.herokuapp.com/articles).


## Project Setup

1. Clone this repo down from Github.

2. Run either yarn install or npm install.

3. You can run this application on your local server by running 'npm run start' or 'yarn start' within the project directory. Additionally, you can just click on the link above to see the live deployment.

## Known Bugs

_This application has one minor bug. The API powering the blogging portion of the application is hosted on a free Heroku Service which "goes to sleep" after 30 minutes of inactivity. Upon navigating to the Code Blog, you may need to refresh a couple times before the server 'wakes up'. No bugs other than this._


## Support and contact details

_If you have any issues getting up and running, and/or find any additional bugs, don't hesitate to contact me directly at: marcusjensen1515@gmail.com_

## Technologies Used

_HTML, CSS, JavaScript, React, Ruby, Rails, Postgres, Heroku (deployment and hosting)._


### License

*Licensed under the MIT License*

Copyright (c) 2020 **_Marcus Jensen_**


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
