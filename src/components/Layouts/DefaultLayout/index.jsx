import classNames from "classnames/bind";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "./Sidebar";
import styles from './DefaultLayout.module.scss'

const cx = classNames.bind(styles);

function DefaultLayout() {
    return ( 
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx("container")}>
                <Sidebar />
                <div className={cx("content")}>
                    < Outlet />
                </div>
            </div>
        </div>
     );
}

export default DefaultLayout;