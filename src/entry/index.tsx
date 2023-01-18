import { render } from "react-dom";

import App from "../App";

const H5P = (window as any).H5P || {};

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
        content: "[]",
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
    $container.append(`<div id="${this.id}"></div>`);

    render(
      <App json={this.options.content} />,
      document.getElementById(this.id)
    );
  };

  return C;
})(H5P.jQuery);
