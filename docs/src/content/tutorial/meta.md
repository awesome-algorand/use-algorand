---
type: tutorial
mainCommand: ['npm run dev', 'Starting http server']
prepareCommands:
  - ['npm install', 'Installing dependencies']
  - ['rm -rf node_modules/@awesome-algorand', 'Cleaning up packages']
  - ['mv .inject/@awesome-algorand node_modules/@awesome-algorand', 'Injecting workspace packages']
editPageLink: https://github.com/stackblitz/tutorialkit/blob/main/packages/template/src/content/tutorial/${path}
---
