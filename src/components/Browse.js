import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SeconderyConatiner from "./SeconderyConatiner";

const Browse =()=>{
    useNowPlayingMovies();
    return(
        <>
        <Header/>
        <MainContainer/>
        <SeconderyConatiner/>
        <div>Browse</div>
        </>
    )
}
export default Browse;