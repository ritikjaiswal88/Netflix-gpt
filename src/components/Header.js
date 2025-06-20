import { useState, useEffect } from "react";
import { auth } from "../utils/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configeSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
    const [showSignOut, setShowSignOut] = useState(false); // ✅ moved here

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful
            })
            .catch((error) => {
                navigate("/error");
            });
    };

    const handleGptSearchClick = () => {
        dispatch(toggleGptSearchView());
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid, email, displayName, photoURL }));
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });

        return () => unsubscribe();
    }, [dispatch, navigate]);

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value));
    };

    const toggleSignOut = () => {
        setShowSignOut((prev) => !prev);
    };

    return (
        <div className="absolute pt-3 pl-2 md:pl-32 top-0 left-0 w-full z-[1000] flex justify-between">
            <div className="p-2 m-2">
                <img className="h-7 md:h-10 lg:h-10" src={LOGO} alt="Logo" />
            </div>

            <div className="flex gap-2 mr-2 items-center">
                {user && showGptSearch && (
                    <select className="bg-gray-900 text-white" onChange={handleLanguageChange}>
                        {SUPPORTED_LANGUAGES.map((lang) => (
                            <option key={lang.identifire} value={lang.identifire}>
                                {lang.name}
                            </option>
                        ))}
                    </select>
                )}

                {user && (
                    <>
                        <button
                            onClick={handleGptSearchClick}
                            className="text-1.5xl bg-black bg-opacity-35 border-2 border-rose-600 rounded-lg font-bold p-2 text-rose-600"
                        >
                            {showGptSearch ? "Homepage" : "Gpt-search"}
                        </button>

                        <div className="relative inline-block">
                            {user.photoURL ? (
                                <img
                                    className="w-12 h-12 rounded-lg cursor-pointer"
                                    src={user.photoURL}
                                    alt="User Profile"
                                    onClick={toggleSignOut}
                                />
                            ) : (
                                <div
                                    className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center text-white font-bold cursor-pointer"
                                    onClick={toggleSignOut}
                                >
                                    ?
                                </div>
                            )}

                            {showSignOut && (
                                <div className="absolute m-2 bg-black bg-opacity-35 border-2 border-rose-600 h-11 w-24 flex items-center justify-center top-16 right-[-1px] rounded-lg">
                                    <button
                                        onClick={handleSignOut}
                                        className="text-1.5xl bg-red-600 p-1 mt-1 mb-1 rounded-lg font-bold"
                                    >
                                        Sign out
                                    </button>
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Header;
