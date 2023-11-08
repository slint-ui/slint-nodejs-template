
import * as slint from "slint-ui";

let ui = slint.loadFile("ui/appwindow.slint");
let window = new ui.AppWindow();

window.request_increase_value = function () {
    window.counter = window.counter + 1;
};

window.run();