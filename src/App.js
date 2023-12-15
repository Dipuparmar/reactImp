// // App.js
// import React, { useState, useEffect } from "react";
import HandleApi from "./HandleApi";
import Multiplestate from "./Multiplestate";
import ParentComponent from "./ParentComponent";
import MyComponent from "./MyComponent";
import { MyContextProvider } from "./MyContextProvider";
import MaterialUI from "./MaterialUI";
import Disclosure from "./Disclosure"
import BackgroundImage from "./BackgroundImage";
const App = () => {
  return (
    <BackgroundImage />
    // <Disclosure />
    // <MaterialUI />
    // <ParentComponent />
    // <h1 className="text-9xl  font-bold underline">Hello world!</h1>
    // <MyContextProvider>
    //   <div>
    //     <h1>My App</h1>
    //     <MyComponent />
    //   </div>
    // </MyContextProvider>
  );
};

export default App;

// App.js -------------------------------------------- Routing one page  to another
// import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import HomePage from './HomePage';
// import AnotherPage from './Routerpage';

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/another">Another Page</Link>
//             </li>
//           </ul>
//         </nav>

//         <Route path="/" exact component={HomePage} />
//         <Route path="/another" component={Routerpage} />
//       </div>
//     </Router>
//   );
// };

// export default App;  
