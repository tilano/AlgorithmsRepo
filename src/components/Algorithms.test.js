import React from "react";
import ReactDOM from "react-dom";

import Adapter from "enzyme-adapter-react-16";
import { shallow, mount, configure } from "enzyme";

import renderer from 'react-test-renderer'

import Algorithms from "./Algorithms";
configure({ adapter: new Adapter() });

describe("basic input component", () => {
  it("should renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Algorithms />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should change state if email is entered', () => {
    const instanceOf = renderer.create(<Algorithms />).getInstance()
    instanceOf.onChangeTextMask('1******3698')
    expect(instanceOf.state.mask).toEqual('1******3698')
  })

  it('should change state if email is entered', () => {
    const instanceOf = renderer.create(<Algorithms />).getInstance()
    instanceOf.setCardinalNumber('1')
    expect(instanceOf.state.cardinalNumber).toEqual('1st')
  })

  it('should change state if email is entered', () => {
    const instanceOf = renderer.create(<Algorithms />).getInstance()
    instanceOf.setPolishNotation('3 4 +')
    expect(instanceOf.state.polishNotation).toEqual('7')
  })

});