const container = React.createElement(
  "div",
  { className: "container", key: 1 },
  [
    React.createElement("section", { key: 1 }, [
      React.createElement("p", { key: 1 }, "This is Writen Inside P"),
      React.createElement("button", { key: 2 }, "ClickMe "),
      React.createElement("p", { key: 3 }, "This is Writen Inside P "),
      React.createElement("b", { key: 4 }, "This is Writen Inside P "),
      React.createElement("button", { key: 5 }, "Hello "),
    ]),
  ]
);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(container);
