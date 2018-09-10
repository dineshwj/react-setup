import React, { Component } from "react";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { ThemeProvider } from "styled-components";
import { rbs_black, rbs_sliver, natwest_black, natwest_silver } from "./themes";
/**
 * HOC component to render ThemeSwitcher and ThemeProvided
 */
export const ThemeConnect = BaseComponent =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedTheme: rbs_black,
        themes: { rbs_black, rbs_sliver, natwest_black, natwest_silver }
      };
    }

    /**
     * Gets called when the user changes the option in the dropdown.
     *
     * @param {String} theme The react theme key
     */

    hanldleThemeUpdate(theme) {
      this.setState({
        selectedTheme: this.state.themes[theme]
      });
    }

    /**
     * render method to output the component.
     */
    render() {
      const { selectedTheme } = this.state;
      return (
        <div>
          <ThemeSwitcher
            selectedTheme={selectedTheme}
            theme={selectedTheme}
            update={this.hanldleThemeUpdate.bind(this)}
          >
            <ThemeProvider theme={selectedTheme}>
              <BaseComponent {...this.props} theme={selectedTheme} />
            </ThemeProvider>
          </ThemeSwitcher>
        </div>
      );
    }
  };
