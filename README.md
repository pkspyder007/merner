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

    - build 
         - * all the react generated build files for static serving through express server.
    -public
        - Also react generated folder you can edit the files here to reflect in build process.
    -server
        -controllers
            - index.js
            - Put all your controllers in this folder.
        -models
            - Put all your MongoDB models here.
        -routes
            - index.js
            - Put all your router files here.
        -utils
            - utils.js
        - app.js (main express server file)
    -src (All the React code goes in here)
        - componenets
    - .env
    - .json
    - README.md


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

#### If the

# Author
[Praveen Kumar](https://github.com/pkspyder007)
[Website](https://thejsguy.me)
