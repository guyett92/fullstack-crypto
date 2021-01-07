# Full-Stack Cryptocurrency 

This is a full-stack application with multiple peers in production that showcases a cryptocurrency built from scratch using Javascript. It is not overly styled, but performs its function effectively. The backend does the following:
* Implements a mining feature to use computing power to mine transactions.
* Logs all transactions to a viewable pool until they are mined.
* Increases or decreases the difficulty of mining based on how long it takes users to mine.
* Connects multiple production environments together to share transactional data across a network using PubNub.
* Maintains balances for users within wallets.

To check it out log on to one of the peers here:
* Root: https://whispering-forest-73109.herokuapp.com/blocks
* Peer: https://cryptic-stream-61133.herokuapp.com/

## Get started
The app is configured to work with PubNub on Heroku. To run locally you can use one of the following options:

### Windows

* The development environment is not configured for Windows. To configure it the following changes must be made:
* `dev-client` script needs to be `"dev-client": "npm run clean && parcel client/src/index.html --out-dir client/dist",`
* `dev` script needs to be `"dev": "cross-env ENV='development' nodemon index.js",`
* This will work if you run each command in a separate terminal instance (one for the server and one for the frontend)

### Linux & Mac

* The current configuration will work for Linux and Mac users. The commands with single ampersands do not work with Windows but if they are changed the scripts should be the following:
* `dev-client` script needs to be `npm run clean && parcel client/src/index.html --out-dir client/dist`
* `dev` script needs to be `npm run dev-client && cross-env ENV='development' nodemon index.js`

## Technologies Used

* Node
* PubNub
* Postman
* Jest
* Express
* Parcel
* Babel
* Bootstrap
* Other Node modules: crypto, hex-to-binary, nodemon, body-parser, cross-env, request, elliptic, uuid, react-router, history

## Future Plans

* Styling
* Wallet information
* Purchasing options (fake currency)
* Price trends and analysis