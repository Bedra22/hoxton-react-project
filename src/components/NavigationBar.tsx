import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

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
                        <li className="link-active">
                            <NavLink to='/hair' className='link-active-nav'>HAIR</NavLink></li>
                        <li className="link-active">
                            <NavLink to='/makeup' className='link-active-nav'>MAKEUP</NavLink></li>
                        <li className="link-active">
                            <NavLink to='/travel' className='link-active-nav'>TRAVEL</NavLink></li>
                        <li className="link-active">
                            <NavLink to='/fashion' className='link-active-nav'>FASHION</NavLink></li>
                    </ul>
                </div >
            </div>
        </div>
    )
}
