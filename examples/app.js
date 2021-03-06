// require Server class
var server = require('./../index');
var example = require('./app/controller/example_ctrl');
var test = require('./app/controller/test_ctrl');

// create app instance and chain all stuff together,
// as you can see, express-scaffold injects models and ctrlers into
// app instance, it is a convenience way to organize all resource and modules
// which almost every route needs.
server({
    name: 'My very first App',
    database: {
        name: 'example',
        tables: ["test"]
    },
    views: "./examples/app/views"
})
    .resource(test)
    .route('', example)
    .run();