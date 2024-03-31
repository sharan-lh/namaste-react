// const heading = React.createElement("h1",{id:"heading"},"Hello world from React!");
//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);

const parent = React.createElement("div",{id:"parent"},
                React.createElement("div",{id:"child"},
                [React.createElement("h1",{},"H1 Tag!"),React.createElement("h2",{},"H2 Tag!")]));
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent);
root.render(parent);