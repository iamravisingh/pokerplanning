# Pokerplanning

Poker planning is essentially designed to help engineering team to define well define parameters and brain storm on estimation of the task/issue.

## What's inside?

The project is structured as a [mono-repo](https://nx.dev/), which is managed via nx.
All code is written in [TypeScript](https://www.typescriptlang.org/), to guarantee type safety and easy error discovery and safe ways of refactoring, even when the project grows.

The main web framework used is [React](https://reactjs.org/), we use [Material Design](https://mui.com/material-ui/) where possible. For animation calculation we use [Framer Motion](https://www.framer.com/motion/).

## Setup

### Prerequisites

These prerequisites need to be fulfilled before starting development with and for the MapCreator Reboot project:

### Node.js & tools

Every sub-project contains a list of npm dependency packages (ie. defined in the `package.json` of each subfolder in `./packages`).
And also the corresponding development server (ie. for the "app-mobile") runs via webpack on node.js.

Therefor it is required to install a up-to-date version of Node.js (and NPM) on the local machine to be able to run and build the project.

- Node.js >= `18.12.0`

  _Hint: To avoid conflicts with other projects, that might require a different node version, you might want to consider using a tool like [nvm](https://github.com/creationix/nvm)._

- PNPM

## Installation / Development

_Note: All npm / lerna commands need to be executed in the root folder of the project._

1. Check that all the general prerequisites listed above are given

2. Load/install all required node modules

   ```bash
   npm run bootstrap
   ```

   _Note: All modules are install in `/node_modules`._

   _All sub-projects (ie. all managed projects of the monorepo located in `/apps/**`) are added as symlinks in `/node_modules`_

3. Setup the development environment
     
   To start server     

    ```bash
    nx run server:serve
    ```
   To start client app

    ```bash
    nx run client:serve
    ```

4. Build and run an application - e.g. client

   There are following options to build and run the app:

   - Run the HMR (Hot Module Reloading) version af the app and launch the app in the web browser

     ```bash
     nx run client:serve
     ```

## Contributing

For contributions to the project, please check and consider the [IMC Code Review checklist](https://confluence.in.here.com/display/Indoor/Code+Review+Guidelines) and [MapCreator Coding guide lines](./coding-guidelines.md)

## Guides

### Install a new dependency in a package

If a new dependency is required in one of the packages, best practice is to install it by following these steps:

1. Navigate to the package folder, e.g. `cd apps/client`.

2. Run `pnpm add <dependency>`.

   This adds the depencency to the dedicated `package.json` file.

3. Navigate back to the root `cd ..`

4. Run the update command: `npm run update`, which takes care of providing the dependency in the top-level `./node_modules` folder.

### Help! I have a merge conflict with the `pnpm-lock.yaml` file...what now?

Possible situations, where a merge conflict with the `pnpm-lock.yaml` file can occur, are..

1. when pulling the latest changes, while you have added a new dependency yourself
2. when merging or rebasing another branch into your current branch (e.g. merging the MASTER into a feature branch)

In case that happens, it's suggested to follow these steps:

1. Resolve the conflict by accepting the entire `pnpm-lock.yaml` file from the other branch (the one you are merging from) and omit your local version
2. Run `npm run update`

   This does two things:

   - It installs all new dependencies, that you do not yet have.
   - It puts the yarn definitions of the packages you wanted to add again into the `pnpm-lock.yaml` file.

   After that, you have conflict free version of the `pnpm-lock.yaml` file.

3. Finish the merge/rebase and commit your changes as usual.

## General commands

Build 

## Start the app

To start the development server run `nx serve client`. Open your browser and navigate to http://localhost:4200/. Happy coding!
