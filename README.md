# WarsawJS #62 — My experience with Node.js in Docker

This project template shows how to use Docker containers to encapsulate all development dependencies for a
Node.js app.

Out of the box, you'll be able to use this template to develop a [Next.js/React app][next.js] and deploy it on [ZEIT Now][zeit now].

## To start developing

1. Install [Docker CE][download docker].

1. Copy `.env.example` file and rename it to `.env`. Open the `.env` file in
   your editor and provide values for all environment variables listed in the file.

1. Open a terminal window, navigate to the project folder and type:

   ```
   ./up
   ```

   You will be dropped into the shell inside the Docker container.

1. To start Next.js and other development tools, e.g., ESLint, type in the container shell prompt:

   ```
   yarn run watch
   ```

1. In case you need additional container shells (running tests for example),
   type `./attach` in another terminal window or tab on your host machine.

1. When you're ready to deploy, type:

   ```
   yarn run deploy
   ```

## Stopping containers

1. To stop the project containers, open a terminal window on your host machine,
   navigate to the project folder and type:

   ```
   ./down
   ```

## Notes

This project uses Yarn package manager by default.  Please use [Yarn CLI
commands][yarn cli] *within the container* to manage dependencies.

Amend the `./web/docker-environment.sh` script if you would like to use npm or other
package manager.


To improve performance in Docker for Mac and in Windows WSL, the `node_modules`
folder in this project is symlinked to a folder inside a Docker volume. The
`node_modules` folder contents are available within the container only.

[download docker]: https://www.docker.com/community-edition#/download
[next.js]: https://nextjs.org/
[yarn cli]: https://yarnpkg.com/en/docs/cli/
[zeit now]: https://zeit.co/docs
