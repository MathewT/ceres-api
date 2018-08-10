const request = require('request');


console.log("notes started...");


var add = (a,b) => {
  return (a+b);
};

var foo = () => {
  console.log("foo");
};

var fetchAddress = (url, callback) => {
  console.log(`requesting ${url}`);
  request(url, (error, response, body) => {
    // console.log(response.statusCode);
    callback(error, response.statusCode);
  });
  console.log("doing some more work");
};

var asyncWork = (payload) => {
  return new Promise((resolve, reject) => {
    if (payload == "foo") {
      resolve("Success foo!");
    } else {
      reject("Fail, reject");
    }
  });
};

module.exports = {
  add,
  fetchAddress,
  foo,
  asyncWork
};
