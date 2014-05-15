// require Server class
var Server = require('../index');
var example = require('./app/controller/example_ctrl.js');

// create app instance and chain all stuff together,
// as you can see, express-scaffold injects models and ctrlers into
// app instance, it is a convenience way to organize all resource and modules
// which almost every route needs.
new Server({
    name: 'My very first App',
    database: {
        name: 'example',
        tables: ["test"]
    },
    views: "./examples/app/views",
    env: "production"
})
    .routes(function (app) {
        app.get('', function * (next) {
            yield new example().start(this);
        });
    })
    .run();