import App from "./App";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

// set up for enzyme adapter ( not official for react version 17)
Enzyme.configure({ adapter: new Adapter() });

/**
 * Factory function to create a ShalloWrapper for the App component.
 * @function setup
 * @returns {ShalloWrapper}
 */
const setup = () => shallow(<App />);

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test c1scoL0ve!
 *
 */

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`);

test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

test("renders counter display", () => {
  const wrapper = setup();
  const conterDisplay = findByTestAttr(wrapper, "conunter-display");
  expect(conterDisplay.length).toBe(1);
});

test("counter starts at 0", () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("0");
});

describe("Increment", () => {
  test("renders increment button", () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, "increment-counter");
    expect(button.length).toBe(1);
  });
  test("clicking on button increments counter display", () => {
    const wrapper = setup();

    // find the button
    const button = findByTestAttr(wrapper, "increment-counter");

    // click the button
    button.simulate("click");

    // find the display, and test that the number has been incremented
    const count = findByTestAttr(wrapper, "count").text();
    expect(count).toBe("1");
  });
});

describe("Decrement", () => {
  test("renders decrement button", () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, "decrement-counter");
    expect(button.length).toBe(1);
  });
  test("clicking on button decrements counter display", () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, "decrement-counter");
    button.simulate("click");

    const count = findByTestAttr(wrapper, "count").text();
    expect(count).toBe("0");
  });

  describe("Error when counter is below 0", () => {
    test("error does not show when not needed", () => {
      const wrapper = setup();
      const displayError = findByTestAttr(wrapper, "error-display");
      const errorHasHiddenClass = displayError.hasClass("hidden");
      expect(errorHasHiddenClass).toBe(true);
    });
  });

  describe("Counter is 0 and decrement is clicked", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = setup();
      const button = findByTestAttr(wrapper, "decrement-counter");
      button.simulate("click");
    });
    test("show errors", () => {
      const displayError = findByTestAttr(wrapper, "error-display");
      const errorHasHiddenClass = displayError.hasClass("hidden");
      expect(errorHasHiddenClass).toBe(false);
    });
    test("counter still displays 0", () => {
      const count = findByTestAttr(wrapper, "count").text();
      expect(count).toBe("0");
    });
    test("clicking increment clears the error", () => {
      // find and click the increment button
      const incButton = findByTestAttr(wrapper, "increment-counter");
      incButton.simulate("click");

      // check the class of the error message
      const errorDiv = findByTestAttr(wrapper, "error-display");
      const errorHasHiddenClass = errorDiv.hasClass("hidden");
      expect(errorHasHiddenClass).toBe(true);
    });
  });
});
