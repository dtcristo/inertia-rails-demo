import { InertiaApp } from "@inertiajs/inertia-react";
import React from "react";
import { render } from "react-dom";

const app = document.getElementById("app");

if (app) {
  render(
    <InertiaApp
      initialPage={JSON.parse(app.dataset.page)}
      resolveComponent={name => require(`./pages/${name}`).default}
    />,
    app
  );
}