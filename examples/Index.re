
switch (ReactDOM.querySelector("#app")) {
| Some(app) => ReactDOM.render(<Main />, app)
| None => Js.log("Coudn't find #app element to mount the React app.")
};
