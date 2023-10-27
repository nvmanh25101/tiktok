import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function HeaderOnly() {
    return ( 
        <div>
            <Header />
            <div className="container">
                <div className="content">
                    < Outlet />
                </div>
            </div>
        </div>
     );
}

export default HeaderOnly;