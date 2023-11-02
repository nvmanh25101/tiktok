import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react";
import HeadlessTippy from "@tippyjs/react/headless";
import 'tippy.js/dist/tippy.css';

import { IoMdCloseCircle } from "react-icons/io";
import { BiLoaderAlt, BiMessageAltMinus, BiUser } from "react-icons/bi";
import { BsSearch, BsThreeDotsVertical, BsQuestionCircle, BsKeyboard, BsPlusLg, BsLaptop, BsCoin } from "react-icons/bs";
import { LuSend, LuSettings } from "react-icons/lu";
import { GrLanguage } from "react-icons/gr";
import { FiLogOut } from "react-icons/fi";

import styles from "./Header.module.scss";
import images from "../../../../assets/image";
import { Wrapper as PopperWrapper } from "../../../Popper";
import AccountItem from "../../../AccountItem";
import Button from "../../../Button";
import Menu from "../../../Popper/Menu";

const cx = classNames.bind(styles); // dung - cho bien(post-item)

const MENU_ITEMS = [
    {
        icon: < GrLanguage />,
        title: "English",
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ]
        }
    },
    {
        icon: <BsQuestionCircle />,
        title: "Feedback and help",
        to: "/feedback"
    },
    {
        icon: <BsKeyboard />,
        title: "Keyboard shortcuts"
    },
]

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const isLogin = true;

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 5000);
    });

    const handleMenuChange = (item) => {
        switch (item.type) {
            case "language":
                console.log(item);
                break;
        }
    }

    const userMenu = [
        {
            icon: <BiUser />,
            title: "View profile",
            to: "/@nvm"
        },
        {
            icon: <BsCoin />,
            title: "Get coins",
            to: "/coins"
        },
        {
            icon: <LuSettings />,
            title: "Settings",
            to: "/settings"
        },
        ...MENU_ITEMS,
        {
            icon: <FiLogOut />,
            title: "Log out",
            separate: true,
        },
    ]

    return (
        <header className={cx("wrapper")}>
            <img src={images.logo} alt="Tiktok" />

            <HeadlessTippy
                interactive
                visible={searchResult.length > 0}
                render={(attrs) => (
                    <PopperWrapper>
                        <div
                            className={cx("search-result")}
                            tabIndex="-1"
                            {...attrs}
                        >
                            <h4 className={cx("search-title")}>Account</h4>
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                        </div>
                    </PopperWrapper>
                )}
            >
                <div className={cx("search")}>
                    <input type="text" placeholder="Search" />
                    <button className={cx("search-clear")}>
                        <IoMdCloseCircle />
                    </button>
                    <BiLoaderAlt className={cx("search-loading")} />

                    <button className={cx("search-btn")}>
                        <BsSearch />
                    </button>
                </div>
            </HeadlessTippy>

            <div className={cx("action")}>
                <Button leftIcon={<BsPlusLg/>}>Upload</Button>
                {
                    isLogin ? (
                    <>
                        <button className={cx('action-btn')}><BsLaptop /></button>
                        <Tippy delay={[0, 100]} content='Messages' placement="bottom">
                            <button className={cx('action-btn')}><LuSend /></button>
                        </Tippy>

                        <button className={cx('action-btn')}><BiMessageAltMinus /></button>
                    </>
                    ) : (
                        <>
                            <Button primary>Log in</Button>
                        </>
                    )
                }
                <Menu items={isLogin ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                    {
                        isLogin ? (
                            <img className={cx('user-avatar')} src="https://i.pinimg.com/236x/9a/59/9a/9a599ac7f601dba8197036276cf0b6a6.jpg" alt="NVM"/>
                        ) : (
                            <button className={cx("more-btn")}>
                                <BsThreeDotsVertical />
                            </button>
                        )
                    }
                </Menu>
            </div>
        </header>
    );
}

export default Header;
