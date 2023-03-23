# Frontend

## UI/UX

The UI is currently being designed in Figma. The link to it is below:

https://www.figma.com/file/MiQaLq0pGMibscLvJuKcbt/Untitled?node-id=0%3A1&t=zEjuITm3gNXssVTo-1

## Set Up

First of all ensure you have Node and Npm. To double check this, just run the commands `node -v` and `npm -v`. If not present, ensure you install them before moving onto the next steps.

The frontend development environment was configured with Vite and the frontend itself is React with TypeScript. Cd into the Frontend folder and then run the following commands:

``` shell
npm install
npm run dev
```

Once the npm packages are installed, `npm run dev` should be sufficient to run the application.

The frontend is also integrated with Storybook which is designed to allow us to separately visualize and observe each component that we build.

To run storybook run the command `npm run storybook`. This will open a separate storybook port.
