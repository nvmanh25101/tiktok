import { useState } from "react";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "../../Popper";
import MenuItem from "./MenuItem";
import Header from "./Header";
import styles from "./Menu.module.scss";
import PropTypes from 'prop-types'; 

const cx = classNames.bind(styles);

function Menu({ children, items=[], onChange=() => {} }) {

    const [history, setHistory] = useState([{
        data: items,
    }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children; //convert boolean

            return <MenuItem key={index} data={item} onClick={() => {
                if(isParent) {
                    setHistory(prev => [...prev, item.children])
                } else {
                    onChange(item)
                }
            }} />
        } )
    }

    return ( 
        <Tippy
            interactive
            visible
            delay={[0, 700]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx("menu-list")} tabIndex="-1" {...attrs} >
                    <PopperWrapper className={cx('menu-popper')}>
                        { history.length > 1 && <Header title={"Language"} onBack={
                            () => setHistory(prev => prev.slice(0, prev.length - 1))
                        }/>}
                        { renderItems() }
                    </PopperWrapper>
                </div>
            )}
        >
            { children }
        </Tippy>
     );
}

Menu.propTypes = {
    children: PropTypes.node,
    items: PropTypes.array,
    onChange: PropTypes.func,
}

export default Menu;