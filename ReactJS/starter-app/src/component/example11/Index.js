import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComponent from "./Home";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";

let Example11Home = () => {
    return (
        <>
            
            <BrowserRouter>
                <Routes>
                    <Route path="" element={<Header />}>
                        <Route path="" element={<HomeComponent />} />
                        <Route path="page1" element={<Page1 />} />
                        <Route path="page2" element={<Page2 />} />
                        <Route path="page3" element={<Page3 />} />
                        <Route path="page4" element={<Page4 />} />
                        <Route path="page5" element={<Page5 />} />
                    </Route>

                    <Route path="*" element={<h1>404 - Not found</h1>} />
                </Routes>
            
            </BrowserRouter>
        </>
    )
}

export default Example11Home;


/* note : to route react js component,install following javascript library 
   npm install react-router-dom
*/