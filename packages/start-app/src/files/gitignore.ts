export default function gitIgnoreTemplate() {
  return `# dependencies 
    node_modules
    ./src/node_modules

    # testing
    coverage

    # production
    build
    dist
    build-server

    # misc
    .DS_Store
    *.pem

    # debug
    npm-debug.log*
    yarn-debug.log*
    yarn-error.log*

    # local env files
    .env*.local
    .env

    # vscode
    .vscode

    # vite
    vite.config.js.timestamp*
    vite.config.ts.timestamp*
    `;
}
