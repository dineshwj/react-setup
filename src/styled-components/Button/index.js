import styled from "styled-components";

export const Button = styled.button`
  font-size: 1em;
  margin-right: 1em;
  padding: 0.5em 1em;
  border-radius: 3px;
  background: ${props => props.theme.primary_color};
  color: ${props => props.theme.color_light};
  border: 2px solid ${props => props.theme.primary_color};
  &:hover {
    background: ${props => props.theme.primary_active_color};
  }
`;

// We're passing a default theme for Buttons that aren't wrapped in the ThemeProvider
Button.defaultProps = {
  theme: {
    main: "palevioletred",
    primary_color: "red",
    color_light: "#FFF"
  }
};
