import Cardgallery from "./cardgallery";
import Details from "./details";
import Gallery from "./gallery";
import Header from "./header";

let Indexpage = ({medicines,pageno}) => {
      let count =100;
      return (
            <>
            {/* <h1>{pageno}</h1> */}
            {/* <Header /> */}
            <Gallery/>
            <Details/>
            <Cardgallery medicines={medicines} count={count}/>
            </>
      );
}

export default Indexpage;