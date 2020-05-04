import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import Like from "../like";

let container;

beforeEach( ()=>{
    container = document.createElement("div")
    document.body.appendChild(container);
    act(() => {
        ReactDOM.render(
          <Like labelActive="Active" labelInactive="Inactive" />,
          container
        );
      });
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });


describe("Texting like component", ()=>{
    it("Default to likes 0", ()=>{
        const label = container.querySelector("p");
        expect(label.textContent).toBe("Likes: 0");
    });

    it("likes incremeted in 1", ()=>{
        const label = container.querySelector("p");
        const button = document.getElementById("increment");
        act(()=>{
            button.dispatchEvent(new MouseEvent("click", {bubbles:true}));
        });
        expect(label.textContent).toBe("Likes: 1")
    })

    it("likes decremented", ()=>{
        const label = container.querySelector("p");
        const decrement = document.getElementById("decrement");
        const increment = document.getElementById("increment");
        act(()=>{
            increment.dispatchEvent(new MouseEvent("click", {bubbles:true}));
        });
        act(()=>{
            decrement.dispatchEvent(new MouseEvent("click", {bubbles:true}));
        });
        expect(label.textContent).toBe("Likes: 0")
    })

});