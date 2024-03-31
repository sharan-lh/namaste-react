// const heading = React.createElement("h1",{id:"heading"},"Hello world from React!");
//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);

import React from 'react';
import ReactDOM from 'react-dom/client';

//const parent = React.createElement("div",{id:"parent"},
 //               React.createElement("div",{id:"child"},
 //               [React.createElement("h1",{},"H1 Tag!"),React.createElement("h2",{},"H2 Tag!")]));

//const jsxHeading = ( <h1 className='heading'>Namaste React Using Jsx</h1>);
//const root = ReactDOM.createRoot(document.getElementById("root"));
//console.log(jsxHeading);
//root.render(jsxHeading);

const HeadingComponent = () => {
    return <h1 className='heading'>Namaste React Using Jsx</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(HeadingComponent);
root.render(HeadingComponent);