// import Browse from "./Browse";
// import Login from "./Login";
// import {createBrowserRouter, useNavigate} from "react-router-dom";
// import {RouterProvider} from "react-router-dom";



// const Body =()=>{

//     const appRouter = createBrowserRouter([
//         {
//             path:"/",
//             element: <Login/>,
//         },
//         {
//             path:"/browse",
//             element: <Browse/>,
//         },
//     ]);

    
//     return(
//         <>
//         <RouterProvider  router={appRouter}/>
//         </>
//     )
// }

// export default Body;

import Browse from "./Browse";
import Login from "./Login";
import { createHashRouter, RouterProvider } from "react-router-dom";

const Body = () => {
  const appRouter = createHashRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default Body;
