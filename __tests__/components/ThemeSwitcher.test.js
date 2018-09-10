import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { ThemeSwitcher } from "../../src/components/ThemeSwitcher";
import toJSON from "enzyme-to-json";

configure({ adapter: new Adapter() });

let wrapper;

describe("<ThemeSwitcher />", () => {
  it("should render ThemeSwitcher", () => {
    const props = {
      dispatch: jest.fn()
    };
    wrapper = shallow(<ThemeSwitcher {...props} />);
    expect(wrapper.find("select").length).toBe(1);
    expect(wrapper.find("label").length).toBe(1);
  });

  it("should match the snapshot", () => {
    const props = {
      dispatch: jest.fn()
    };
    const tree = shallow(<ThemeSwitcher {...props} />);
    expect(toJSON(tree)).toMatchSnapshot();
  });

  it("should update the state on select box change", () => {
    jest.spyOn(ThemeSwitcher.prototype, "handleThemeSwtich");
    const props = {
      dispatch: jest.fn(),
      update: jest.fn()
    };
    wrapper = mount(<ThemeSwitcher {...props} />);

    wrapper
      .find("select")
      .at(0)
      .props()
      .onChange({ target: { value: 20 } });
    expect(ThemeSwitcher.prototype.handleThemeSwtich.mock.calls.length).toBe(1);
  });
});
