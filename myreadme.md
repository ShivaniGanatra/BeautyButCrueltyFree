My project is a Makeup app that gives you vegan and cruelty free makeup
The app on the main page sorts out makeup by face foundation, lips etc, on the brands page there is a search bar where users can search for products and their brands. I have also made two pop ups, one displaying a marketing pop up and one displaying a key pop up(This is because my crueltyfree cards are purple and vegan are green). I have made a favourites page which half works. If the pages are hearted they are displayed in the favourites page. However I cannot seem to stop the heartFill from changing between renders. I have tried using usecallback,useEffect,useMemo, creating my own custom hook, putting my state variable elsewhere and the issue is still persistent.

in card back have scroll menu for descriptions that are too long
find way to filter in searchbar
someproducts are vegan && cruelty free maybe sepearte them
if someone clicks vegan they only get vegan stuff
vegan and cruelt free stuff has a differnt colour
default images for lipsticks
implement carousel somehow
map over shades and make circle for a shade if theres time

//Below is just my sources 
//https://stackoverflow.com/questions/72410312/svg-outline-and-fill

// interface exampleObject {
//     name: string;
// }

// const smallObjectsArrayExample: exampleObject[] = [
//     { name: "lip gloss" },
//     { name: "lip crayon" },
//     { name: "lipstick" },
//     { name: "nail varnish" },
// ];

// console.log(smallObjectsArrayExample)
// console.log(filteredProduct(smallObjectsArrayExample,"lip gloss"))
// console.log(filteredProduct(smallObjectsArrayExample,"lip"))
// console.log(filteredProduct(smallObjectsArrayExample,"nail varnish"))

    // https://stackoverflow.com/questions/65582975/make-a-search-filter-with-react-and-typescript

        //console.log(cleanedCrueltyFreeData);

    //filter data here use this video how to pass info from child to parent component
    //https://www.youtube.com/watch?v=vOMdzCw2bMA

    // make function that loops through two state variables and updates them to create two new objects that only have specific properties that i wanna use
    //store new new obejct in state

    //https://www.google.com/search?q=how+to+pass+down+a+function+as+a+prop+react+ts&sca_esv=074f8b059443cf28&sca_upv=1&rlz=1C5MACD_enGB1034GB1034&ei=EqncZu3KIoDzi-gPxZikqQc&ved=0ahUKEwjtm96WyLGIAxWA-QIHHUUMKXUQ4dUDCA8&uact=5&oq=how+to+pass+down+a+function+as+a+prop+react+ts&gs_lp=Egxnd3Mtd2l6LXNlcnAiLmhvdyB0byBwYXNzIGRvd24gYSBmdW5jdGlvbiBhcyBhIHByb3AgcmVhY3QgdHMyCBAhGKABGMMEMggQIRigARjDBEj9KlC7GVi4J3ADeAGQAQCYAbwCoAHCDKoBBzIuNC4yLjG4AQPIAQD4AQGYAgmgAuMHwgIKEAAYsAMY1gQYR8ICChAhGKABGMMEGAqYAwCIBgGQBgiSBwU0LjQuMaAH9y8&sclient=gws-wiz-serp#fpstate=ive&vld=cid:d93df898,vid:yM64D3nZmfQ,st:303


  //https://stackoverflow.com/questions/26069238/call-multiple-functions-onclick-reactjs
  //i want to get multiple type of products so i will make a function that houses several functions


    //some of the images arent working so i want to have randomdefault images
    //this is the resource that showed me what to do if an image isnt working
    // https://www.youtube.com/watch?v=4nYsbm8N4EQ&t=934s
    // if get time use name if name is foundation get random foundtion image lipstick image etc



//find a way to have state in prior one and chnage state here using function
// https://soufiane-oucherrou.medium.com/how-pass-function-as-props-to-child-in-react-and-typescript-2fafafa6a945
//the varaint which is the title cruelty free and vegan will also need to be used to choose the array to use

    // In the component above - MakeupFront, check if the product actually has shades, if not do not render a shadeSection
    // Shade component is a little box with the shade color passed to it to change depending on the hex code

    //Inline styling on whatever HTML element we are using to display the shade for this section.
    // To render all the shades we will have to map through the array of object and render a Single Shade  component for each shade

        // created a card flip component using this resource and importing a package see resource
    //  https://blog.openreplay.com/creating-animated-flip-cards-in-react/


    https://dev.to/hiboabd/how-to-change-the-root-folder-of-your-github-repo-4ccb

    // https://stackoverflow.com/questions/72410312/svg-outline-and-fill

    # React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
