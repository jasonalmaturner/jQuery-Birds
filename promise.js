function promise() {
  return {
    neatBird: 'western meadowlark',
    then: function(cb) {
      var random = Math.random() * 10000;
      setTimeout(function() {
        cb(random);
      }, random);
    },
  };
};

// var newObj = promise();
// newObj.then();

promise().then(function(data) {
  console.log(data);
});

function takeACallback(cb) {
  cb('invoked');
};

takeACallback(function(data) {
  console.log(data);
});
