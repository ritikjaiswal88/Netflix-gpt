import { useEffect } from "react";
import Browse from "./Browse";
import Login from "./Login";
import {createBrowserRouter} from "react-router-dom";
import {RouterProvider} from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import {addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";

const Body =()=>{
    const dispatch = useDispatch();

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

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName ,photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
            } else {
                dispatch(removeUser());
            }
        });
    
        // Cleanup the subscription
        return () => unsubscribe();
    }, []);
    

    return(
        <>
        <RouterProvider  router={appRouter}/>
        </>
    )
}

export default Body;