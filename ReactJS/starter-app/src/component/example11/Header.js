import { Outlet, Link } from 'react-router-dom';
import './stylesheet.css';

let Header = () => {
    return (
        <>
            <ul class="navigation">
                <Link to="/"><li>Homepage</li></Link>
                <Link to="/page1"><li>Page1</li></Link>
                <Link to="/page2"><li>Page2</li></Link>
                <Link to="/page3"><li>Page3</li></Link>
                <Link to="/page4"><li>Page4</li></Link>
                <Link to="/page5"><li>Page5</li></Link>
            </ul>


            <Outlet />
        </>
    )
}

export default Header;