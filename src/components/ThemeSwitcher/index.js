import React, { Component, Fragment } from "react";

/**
 * GenerThemeSwitcheral component to render the option to swtich themes.
 */

class ThemeSwitcher extends Component {
  /**
   * Gets called when the user changes the option in the dropdown.
   *
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   * @param {Object} allProps All props of this Button
   */

  handleThemeSwtich(e) {
    this.props.update(this.refs.themeSelector.value);
  }

  /**
   * render method to output the dropdown.
   */
  render() {
    return (
      <Fragment>
        <div
          style={{
            background: "#F3F3F3",
            paddingTop: 5,
            paddingBottom: 5,
            paddingLeft: 10,
            paddingRight: 10,
            display: "flex",
            justifyContent: "flex-end",
            borderBottom: "1px solid #999"
          }}
        >
          <label htmlFor="themes" style={{ marginRight: 20, fontSize: 12 }}>
            Select a theme to switch branding
          </label>
          <select
            id="themes"
            style={{
              background: "#fff",
              border: "1px solid #999",
              padding: "0 10px",
              borderRadius: "2px"
            }}
            ref="themeSelector"
            onChange={this.handleThemeSwtich.bind(this)}
            value={this.props.selectedTheme}
          >
            <option value="rbs_sliver">RBS Sliver</option>
            <option value="rbs_black">RBS Black</option>
            <option value="natwest_silver">Natwest Sliver</option>
            <option value="natwest_black">Natwest Black</option>
          </select>
        </div>
        {this.props.children}
      </Fragment>
    );
  }
}

export { ThemeSwitcher };
