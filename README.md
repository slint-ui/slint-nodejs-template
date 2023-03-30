# Slint Node.js Template

A template for a Node.js application that's using Slint for the user interface and Node.js for the build system.

## About

This template helps you get started developing a Node.js application with Slint as toolkit
for the user interface. It demonstrates the integration between the `.slint` UI markup and
JavaScript code, how to trigger react to callbacks, get and set properties and use basic widgets.

## Prerequisites

In order to use this template and build a Node.js application, you need to install a few tools:

  * **[Node.js](https://nodejs.org/download/release/v16.19.1/)** (v16. Newer versions currently not supported: [#961](https://github.com/slint-ui/slint/issues/961))
  * **[npm](https://www.npmjs.com/)**
  * **[Rust compiler](https://www.rust-lang.org/tools/install)** (1.66 or newer)

## Usage

1. Clone or download this repository
    ```
    git clone https://github.com/slint-ui/slint-nodejs-template my-project
    cd my-project
    ```
2. Install dependencies with npm
   ```
   npm install
   ```
3. Run the application binary
    ```
    npm start
    ```

We recommend using an IDE for development, along with our [LSP-based IDE integration for `.slint` files](https://github.com/slint-ui/slint/blob/master/tools/lsp/README.md). You can also load this project directly in [Visual Studio Code](https://code.visualstudio.com) and install our [Slint extension](https://marketplace.visualstudio.com/items?itemName=Slint.slint).

## Next Steps

We hope that this template helps you get started and you enjoy exploring making user interfaces with Slint. To learn more
about the Slint APIs and the `.slint` markup language check out our [online documentation](https://slint-ui.com/docs/node/).
