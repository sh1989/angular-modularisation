# Angular Modularisation Prototype
Testing how you can break apart Angular modules on a "feature" level, but have common re-usable components.

## Prerequisites
The application expects you to have:

1. An installation of [Node.js](http://nodejs.org/)

## Setup
1. Install dependencies: `npm install`

## Running the App
Execute `grunt` from the terminal to:
* Run JSHint on your client and server JavaScript files
* Concatenate your client JavaScript into a single file
* Minify your JavaScript, accounting for AngularJS' known minification issues and workarounds.
* Starts the ExpressJS server
* Watches for file changes. On a file change, the above process will be re-executed and the server re-started.

You can view the application by visiting [http://localhost:3000](http://localhost:3000

## Directory Structure

    /
    |- app/                 Client-side resources, such as LESS and AngularJS code
        |- common/
            |- core/        Contains reusable services and components
        |- featureOne/      An application feature ("vertical slice")
            |- core/        Core layer for the feature, defining its API
        |- featureTwo/      Another application feature
            |- core/        As above
        |- app.js           Application bootstrap
    |- server/              Server-side resources
    |- views/               JADE templates, served to the client by ExpressJS
        |- templates/       Partial templates, i.e. for AngularJS directives
        |- index.jade
        |- layout.jade
    |- .gitignore
    |- Gruntfile.js
    |- app.js               The ExpressJS server configuration file
    |- package.json
    |- README.md

Note that the build procedure will create another directory, `public/`. This is created from the contents of `app/`, with transformations (such as minification and concatenation) applied. `layout.jade` references JavaScript within the `public/` directory. As the directory is a build artefact, `public/` is specified in `.gitignore`, thus ommitting its contents from being committed to source control.