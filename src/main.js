import { AppWindow } from "../ui/app-window.slint";

let window = new AppWindow();

window.request_increase_value = function () {
    window.counter = window.counter + 1;
};

await window.run();
