# Documentation system for Certify The Web
Documentation Site for the Certify SSL Manager.

Contributions are welcome and all content can be found in the `docs` folder. Please submit a PR.

This uses markdown syntax document files and the [Docusaurus](https://docusaurus.io) build system.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
