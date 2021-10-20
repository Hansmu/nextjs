<h1>Next.js</h1>

Next.js renders our pages with initial data that helps us avoid an initial
loader. This allows for better SEO as well. It fetches data on the server
and renders finished pages. After that you're still going to enter the usual
flow of a React app.

File-based routing. You define pages and routes with files and folders instead
of code. You have less code, thus less work, and it's highly understandable.
It uses the `/pages` folder. It takes the file name as the path, except for
`index.js` which is considered the main path. Dynamic properties of a path are
defined with `[propertyName]`. It can be either a file name or a folder name.
If you want to create a catch all component, then you can use `[...fileName].js`.
You then get access to the properties in the URL as a string array. The catch all
component is less specific than a specific URL, so if you have potential conflicts,
then the specific URL will be resolved to first.
When navigating to a new URL, you can use the `Link` component. One 
optimization that it provides is querying the data when you hover over it. 
The `Link` and `push` methods that  can be used for navigation can be used in 
two ways. You either provide the full string with the params and all or you 
provide it an object with  
`{ pathname: string, query: {[paramName: string]: string} }`. To configure your
404 page, then add a `404.js` file to your `/pages` folder.
![diagram](notes-images/next-js-file-based-routing.PNG)

Fullstack capabilities. Easily add backend code to your Next/React apps. Storing
data, getting data, authentication etc. can be added to your React projects.

Files inside of `/public` is made automatically available to visitors.

Next.js supports CSS modules. You get that functionality when you use 
`[name].module.css`. Have to import the CSS files as objects then, as
the classes will have aliases generated for them.