import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { host } from "storybook-host";
import { ThemeProvider } from "styled-components";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import { H1, H2, H3, H4, H5, H6 } from "../index";

const margin = { marginRight: 6, marginBottom: 6 };

export default storiesOf("Heading", module)
  .addDecorator(withKnobs)
  .addDecorator(
    host({
      title: "Heading tags typography",
      align: "center"
    })
  )

  .add("H1", () => <H1> {text("Label", "Hello Storybook")}</H1>)
  .add("H2", () => <H2>Heading 2</H2>)
  .add("H3", () => <H3>Heading 3</H3>)
  .add("H4", () => <H4>Heading 4</H4>)
  .add("H5", () => <H5>Heading 5</H5>)
  .add("H6", () => <H6>Heading 6</H6>);
