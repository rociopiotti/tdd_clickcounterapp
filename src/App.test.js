import App from "./App";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

// const setup = () => shallow(<App />);

test("renders without error", () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find(".data-test-component-app");
  expect(appComponent.length).toBe(1);
});

test("renders button", () => {
  const wrapper = shallow(<App />);
  const button = wrapper.find(".data-test-increment-counter");
  expect(button.length).toBe(1);
});

test("renders counter display", () => {
  const wrapper = shallow(<App />);
  const conterDisplay = wrapper.find(".data-test-conunter-display");
  expect(conterDisplay.length).toBe(1);
});

test("counter starts at 0", () => {});

test("clicking on button increments counter display", () => {});
