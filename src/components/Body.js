import Browse from "./Browse";
import Login from "./Login";
import {createBrowserRouter, useNavigate} from "react-router-dom";
import {RouterProvider} from "react-router-dom";



const Body =()=>{

    const appRouter = createBrowserRouter([
        {
            path:"/",
            element: <Login/>,
        },
        {
            path:"/browse",
            element: <Browse/>,
        },
    ]);

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             const { uid, email, displayName ,photoURL } = user;
    //             dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
    //         } else {
    //             dispatch(removeUser());
    //         }
    //     });
    
        // Cleanup the subscription
    //     return () => unsubscribe();
    // }, []);

    
    
    return(
        <>
        <RouterProvider  router={appRouter}/>
        </>
    )
}

export default Body;