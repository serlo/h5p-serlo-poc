import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return <h1>Hello, World!</h1>;
};

const H5P = (window as any).H5P || {};

console.log("hallo, ich wurde geladen", H5P);

H5P.SerloPoC = (function ($) {
  /**
   * Constructor function.
   */
  function C(options, id) {
    this.$ = $(this);
    // Extend defaults with provided options
    this.options = $.extend(
      true,
      {},
      {
        greeting: "Hello world!",
        image: null,
      },
      options
    );
    // Keep provided id.
    this.id = id;
  }

  /**
   * Attach function called by H5P framework to insert H5P content into
   * page
   *
   * @param {jQuery} $container
   */
  C.prototype.attach = function ($container) {
    var self = this;
    // Set class on container to identify it as a greeting card
    // container.  Allows for styling later.
    $container.addClass("h5p-greetingcard");
    // Add greeting text.
    $container.append('<div id="serlo-poc-root"></div>');

    ReactDOM.render(<App />, document.getElementById("serlo-poc-root"));
  };

  return C;
})(H5P.jQuery);
