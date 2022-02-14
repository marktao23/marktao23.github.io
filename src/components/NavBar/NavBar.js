import cssfile from './NavBar.module.css';

const NavBar = () => {
    return (
        <div className={cssfile.NavBar}>
            <nav>
                <ul>
                    <li>
                        <a href = "/">Home</a>
                    </li>
                    <li>
                        <a href = "/#About Me">About Me</a>
                    </li>
                    <li>
                        <a href = "/#Resume">Resume</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;