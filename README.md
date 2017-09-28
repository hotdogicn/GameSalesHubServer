# GameSaleHub

Sep 27 2017 Update:
* Added dependencies: express, nodemon, ejs.
* Moved all files associated with the web application to Server/app folder.
* Added app.js as entry point.
* Added automated workflow using nodemon.
* Added routes folder to place Express.js router middleware, where we will handle the HTTP requests.
* Added views folder, where we will place our EJS templates and HTML files.
* Added dummy data under ./Server/app/data folder
* Added EJS webpage partials under ./Server/app/views folder

### Manual
* Make sure you have Node.js installed
* Run ``` npm install ``` to install all the dependencies before use
* Under ``` Server ``` folder, run  ``` npm run dev ``` to start the server with nodemon, which will automatically restart the server after any file is changed.

### TO DO
* Using EJS as template engine now. Just for testing functionality of the server. Front end will be replaced with Angular.js.