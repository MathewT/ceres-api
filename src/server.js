'use strict';
const path = require('path');
const fs = require('fs');
const http = require('http');
const os = require('os');
const _ = require('lodash');
const express = require('express');
const nconf = require('nconf');
const morgan = require('morgan');
const winston = require('winston');
const bodyParser = require('body-parser');
const pkg = require('../package.json');

/*
http://www.kammerl.de/ascii/AsciiSignature.php
r2_d2 font
*/
const logo = `

 ######  ######## #######  ########  ######           ######  #######  ######
##    ## #      # #     ## #      # ##    ##         ##    ## #     ## #    #
#  ##  # #  ##### #  ##  # #  ##### #  ##  # ####### #  ##  # #  ##  # ##  ##
#  ##### #    #   #     ## #    #   ##  #### #     # #      # #     ##  #  # 
#  ##### #  ###   #    ##  #  ###   ####  ## ####### #  ##  # #  ####   #  # 
#  ##  # #  ##### #  #  ## #  ##### #  ##  #         #  ##  # #  #     ##  ##
##    ## #      # #  ##  # #      # ##    ##         #  ##  # #  #     #    #
 ######  ######## ######## ########  ######          ######## ####     ######

`;

console.log(logo);


//Environment variables
nconf.argv()
   .env();

//Logger
const logger = setupLogger(nconf);

// App
const app = express();
app.logger = logger;

//Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());


// TODO: move the version api to it's own module
app.get('/api/version', (req, res) => {
  res.status(200).send(pkg.version);
});

const PORT = nconf.get('PORT') || 8585;
const HOST = nconf.get('HOST') || '0.0.0.0';

app.listen(PORT, HOST, () => {
  logger.info(`ceres-api listening on port ${PORT}...`);
});





function setupLogger(nconf) {

  const w = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
    //
    // - Write to all logs with level `info` and below to `combined.log` 
    // - Write all logs error (and below) to `error.log`.
    //
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' }),
      new winston.transports.Console()
    ]
  });
  return w;
};

// notes.asyncWork("foo")
//   .then((res) => {
//     console.log("Success!!", res);
//   }, (errorMsg) => {
//     console.log("Error: ", errorMsg);
//   });