import React from "react";

import { storiesOf, addDecorator } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { checkA11y } from "@storybook/addon-a11y";
import { Button, Welcome } from "@storybook/react/demo";
import { withInfo } from "@storybook/addon-info";

// Styled Components

import { H1, H2, H3, H4, H5, H6 } from "../src/styled-components/Heading";

// storiesOf("Welcome", module).add("to Storybook", () => (
//   <Welcome showApp={linkTo("Button")} />
// ));

storiesOf("Typography", module)
  .addDecorator(checkA11y)
  .add("H1", () => <H1>Heading 1</H1>)
  .add("H2", () => <H2>Heading 2</H2>)
  .add("H3", () => <H3>Heading 3</H3>)
  .add("H4", () => <H4>Heading 4</H4>)
  .add("H5", () => <H5>Heading 5</H5>)
  .add("H6", () => <H6>Heading 6</H6>);

// storiesOf("Button", module).add(
//   "Button Component",
//   () => <Button>Button</Button>,
//   {
//     info: {
//       text: `
//             description or documentation about my component, supports markdown

//             ~~~js
//             <Button>Click Here</Button>
//             ~~~
//           `
//     }
//   }
// );
