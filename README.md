# Resources

Want to make your own link directory out of all those bookmarks you've got in Firefox? I'll do my best to walk you through the process of grabbing this repo and getting your React-based directory up and running.

## Things you'll need
- Firefox
- A text editor
- Someplace to host a static html site
- A recent version of Node/npm installed

## Local setup

Start by downloading the repo and running `npm install` in the project folder.

Explore the `package.json` file. You'll see some scripts there. In particular, `npm run dev` will start the project locally and serve it at `http://localhost:1234` and `npm run build` will build the files you need to deploy to your host.

## Stuff you'll want to change

In the `App.tsx` file you'll find the hero text. Feel free to update this as needed. You'll also, of course, want to swap the link data for your own.

This site is build on the [Bulma CSS framework](http://bulma.io), so if you'd like to change the colors, etc, you can check the framework docs for more classes you can add to customize the look of the site.

## Process JSON

To set up the `bookmarkData.json` file with your own data, there's a few steps to the process:

- Download a backup of your bookmarks from Firefox
- Run them through a JSON prettifier
- Do a search on the file to find the bookmark folder you want to use as your data
- Copy that out and paste it into the `bookmarkData.json` file in the `src` folder
- Change the `typeCode` for all the top-level folders to `3`. This will enable them to become the navbar links.
- Rename `"children"` to `"links"` everywhere in that file
- Add to top of json file inside the first bracket
  ```"folder": "",
  "topic": {},```
- Convert all the unicode characters to their real characters

## Deploying

After configuring the data, test the site locally by running `npm run dev` in your terminal.

Once you're sure it's working as expected, run `npm run build`. Parcel will build the production version of your site into the `dist` folder.

Upload the contents of the `dist` folder to any static web hosting you like!

## TODO

- Implement routing for easy sharing of specific bookmark topics
- Finish updating typescript types
- Refine instructions
- Refine mobile menu interaction
- Increase test coverage
