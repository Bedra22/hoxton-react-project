import { Link } from "react-router-dom"
import { NavigationBar } from "./NavigationBar"

export function Header() {
    return (
        <div className="header">
            <NavigationBar />

            <h1>
                <Link to='/home' >
                    Hey   Hey   to
                    <span>
                        Daily Life
                    </span>
                </Link>
            </h1>
        </div >
    )
}