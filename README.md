# MERNER!

### Installation
1. Clone the repo
2. run the following command in root folder to install all dependencies.
```sh
$ yarn install or npm install
```
3. Create an .env file in the root folder and add the .env.sample file content to it
4. Change the environment variables value according to your needs.

### File Structure

>-repo
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-build
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    - * all the react generated build files for static serving through express server.
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-public
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Also react generated folder you can edit the files here to reflect in build process.
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-server
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -controllers
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- index.js
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Put all your controllers in this folder.
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -models
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Put all your MongoDB models here.
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -routes
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- index.js
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Put all your router files here.
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -utils
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- utils.js
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - app.js (main express server file)
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-src (All the React code goes in here)
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- componenets
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.env
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;package.json
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; README.md


## Features
  - Fully setup MERN App
  - Highly customisable
  - proxy setup for development 
    - No more need to manually add `http://localhost:5000/api/endpoint`
    - just use `/api/endpoint` and your request will be proxied to the backend.
  - Easy to deploy to various hosts like heroku,etc.
  - No more two different package.json to maintain
  
  
### Deploy to Heroku
1. Create a new app in Heroku.
2. Add the environment variables.
3. Set NODE_ENV=production
4. Deploy your project using github by connecting your repo.
5. All other thing will be setup automatically.

# Contribution
Open an issue if you found a bug or problem
Create PRs for new features

##### If the repo helped you leave a star.

# Author
[Praveen Kumar](https://github.com/pkspyder007)
[Website](https://thejsguy.me)
