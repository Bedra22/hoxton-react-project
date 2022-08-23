import { useState } from "react";
import { Link } from "react-router-dom";

export function NavigationBar() {
    const [sideBar, setSideBar] = useState(false)

    const showSideBar = () => { setSideBar(!sideBar) }
    return (
        <div>
            <div className="navigation-bar" onClick={showSideBar}>
                <div className="side-bar">
                    <img src="https://cdn-icons.flaticon.com/png/128/4204/premium/4204600.png?token=exp=1661165918~hmac=854c6f5842009d12bb16d6fed4acfdf9" alt="menubar" />
                </div>
                <div className={sideBar ? 'navbar shows' : 'navbar'}>
                    <ul onClick={showSideBar}>
                        <h1>X</h1>
                        <Link to='/hair'  >
                            <li>HAIR</li>
                        </Link>
                        <Link to='/beauty'  >
                            <li>BEAUTY</li>
                        </Link>
                        <Link to='/travel'  >
                            <li>TRAVEL</li>
                        </Link>
                        <Link to='/fashion'  >
                            <li>FASHION</li>
                        </Link>

                    </ul>
                </div >
            </div>
        </div>
    )
}