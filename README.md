# 🧳 Introduction

A starter repo for [Nuxt](https://nuxt.com/docs/getting-started/introduction), the free and open-source framework with an intuitive and extendable way to create type-safe, performant, and production-grade web projects with Vue.js.

# 🛠 Installation

## Current versions

- **NVM:** _0.39.3_
- **Node:** _20.1.0_
- **NPM:** _9.6.4_

## Clone the repository

```bash
git clone git@github.com:ryanaltvater/nuxt-starter.git
```

## Install Node Version Manager ([NVM](https://github.com/nvm-sh/nvm#about))

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh
```

- `nvm` allows the installation and use of different versions of Node, via the command line.

## Install [Node](https://nodejs.org/en/about)

First, navigate to the repo's root directory.

```bash
cd path/to/repo
```

Then, install Node.

```bash
nvm install
```

- Uses the version of Node that's specified in the `.nvmrc` file.

## Install [dependencies](https://docs.npmjs.com/about-packages-and-modules)

```bash
npm ci
```

- [`ci`](https://blog.npmjs.org/post/171556855892/introducing-npm-ci-for-faster-more-reliable) stands for clean install, and is used to install exact versions of all dependencies from a `package-lock.json` file.
- `npm i` (or `npm install`) is used to install all dependencies from a `package.json` file.

# 👟 Run commands

## Start a local server

```bash
npm run start
```

## Preview Tailwind configuration

```bash
npm run tailwind
```

## Build for production

```bash
npm run build
```

## Preview production build

```bash
npm run build:preview
```

## Build static files for production

```bash
npm run build:static
```

# 🔗 Additional links

1. [Run `nvm use` automatically every time there's a `.nvmrc` file in the directory](https://stackoverflow.com/questions/23556330/run-nvm-use-automatically-every-time-theres-a-nvmrc-file-on-the-directory)
