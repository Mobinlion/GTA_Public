# GreenThumb Project

This is a project for React that uses Next.js.

- Authentication via Email, Facebook, Twitter and Google+
- Uses Express combined with Passport JS for authentication and route handling
- Account management - Update details, link/unlink accounts, delete account
- Session support with secure HTTP Only cookies and CSRF Tokens
- SASS/SCSS wth Bootstrap 4 and Reactstrap with Bootstrap components for React
- Comes with Ionicons icon font and shows how to bundle other CSS and font files

You can see a live demo at **https://greenthumbfarm.now.sh**

## About

Next.js is a framework that makes it easy to create 'universal' React apps - React apps that do both client and server side rendering.

With Next.js, React pages are automatically rendered on both client and server side, without the hassle of setting up dependancies like webpack or babel and with automatic routing and without the constraints of projects like Create React App.

This is a project that provides Next.js with Express, SASS/SCSS, Bootstrap, Reactstrap (Boostrap 4 for React), the Ionicons icon set, data from remote REST APIs and incorporate an authentication system that supports both oAuth and Email using Passport (a popular authentication framework for Node.js).

## Running locally in development mode

To get started, just clone the repository and run `npm install && npm run dev`:

    git clone https://github.com/mobinlion/greenthumbfarm.git
    npm install
    npm run dev

Note: If you are running on Windows run install --noptional flag (i.e. `npm install --no-optional`) which will skip installing fsevents.

## Building and deploying in production

If you wanted to run this site in production, you should install modules then build the site with `npm run build` and run it with `npm start`:

    npm install
    npm run build
    npm start

You should run `npm run build` again any time you make changes to the site.

Note: If you are already running a webserver on port 80 (e.g. Macs usually have the Apache webserver running on port 80) you can still start the example in production mode by passing a different port as an Environment Variable when starting (e.g. `PORT=3000 npm start`).

## Configuring

If you configure a .env file (just copy `.env.example` over to '.env' and fill in the options) you can configure a range of options.

See the AUTHENTICATION.md for how to set up oAuth if you want to do that. It suggested you start with Twitter as it's the easiest to get working.

## Deploying to the cloud with now.sh

To deploy to production on [Zeit's now.sh cloud platform](https://zeit.co) you will need to install the `Now` desktop app on your computer. If you don't want to install the `Now` desktop app, you can use the following command to install it (either approach is fine):

    sudo npm i -g --unsafe-perm now

Once installed, open `now.json` and set a `name` and `alias` for your site.

To deploy, just run `now` in the working directory:

    npm install -g now
    now

If you configure a .env file `now` will include it when deploying if you use the -E option to deploy:

    now -E

If you want to have your local `.env` file have variables for local development and have a different sent of variables you use in production, you can create additional .env files and tell `now` to use a specific file when deploying:

    now -E production.env

### After deploying

Once you have deployed, `now` will return a URL where the site when it has been deployed to, you can use this to preview everything works correctly in the browser.

If you have set an alias for the site, you can then make the site live on the alias you have defined using `now alias`:

    now alias

By default, this will point any aliases you have set in `now.json` to your site.

You can configure `now` to use aliases with custom domains using the `now domain` and `now dns` commands.

---

## Further reading

### Database hosting

If you need an instance of MongoDB in the cloud https://www.mongodb.com/ have free and inexpensive options.

### Secrets for Environment Variables

Once you are comfortable using `.env` files for configuration and running and deploying your app, take a look at `now secrets` to set options in the cloud so you don't have to set them each time you deploy.

### GitHub integration

You can integrate `now` with a GitHub account to trigger automated deployments anytime you push to GitHub. This works great if you have secrets set up!

### Alternate hosting options

You can host your Next.js site with any hosting provider. Although it works great on Now, it also works great with other providers like Heroku, Amazon Web Service, Google Cloud Platform, Microsoft Azure, DigitalOcean and others.
