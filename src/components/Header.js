import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { LOGO } from "../utils/constants";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful
                // navigate("/");
            })
            .catch((error) => {
                // An error happened
                navigate("/error");
            });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName ,photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
                navigate("/browse")
            } else {
                dispatch(removeUser());
                navigate("/")
            }
        });
    
        // Cleanup the subscription
        return () => unsubscribe();
    }, []);

    return (
        <div className="absolute pt-5 pl-32 top-0 left-0 w-full z-[1000] flex justify-between">
            <img
                className="h-10"
                src= {LOGO}
                alt="Logo"
            />
            { user && (<div className="flex">
                {user && user.photoURL ? (
                    <img
                        className="w-12 h-12"
                        src={user.photoURL}
                        alt="User Profile"
                    />
                ) : (
                    <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center text-white font-bold">
                        ?
                    </div>
                )}
                <button
                    onClick={handleSignOut}
                    className="text-1.5xl bg-red-600 m-2 p-1 rounded-lg font-bold"
                >
                    Sign out
                </button>
            </div>)}
            
        </div>
    );
};

export default Header;
