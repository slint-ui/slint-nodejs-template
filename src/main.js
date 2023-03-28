require("slint-ui");
let ui = require("../ui/appwindow.slint");
let window = new ui.AppWindow();

window.request_increase_value.setHandler(() =>
    window.counter = window.counter + 1
);

window.run();