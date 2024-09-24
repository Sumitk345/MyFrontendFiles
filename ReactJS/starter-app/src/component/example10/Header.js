import { Outlet } from 'react-router-dom';
import './stylesheet.css';

let Header = () => {
    return (
        <>
            <ul class="navigation">
                <a href="/"><li>Homepage</li></a>
                <a href="/page1"><li>Page1</li></a>
                <a href="/page2"><li>Page2</li></a>
                <a href="/page3"><li>Page3</li></a>
                <a href="/page4"><li>Page4</li></a>
                <a href="/page5"><li>Page5</li></a>
            </ul>


            <Outlet />
        </>
    )
}

export default Header;