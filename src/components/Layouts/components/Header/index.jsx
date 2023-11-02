import classNames from "classnames/bind";
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css';

import { BiUser } from "react-icons/bi";
import { BsThreeDotsVertical, BsQuestionCircle, BsKeyboard, BsCoin } from "react-icons/bs";
import { LuSettings } from "react-icons/lu";
import { GrLanguage } from "react-icons/gr";
import { FiLogOut } from "react-icons/fi";
import { DownloadIcon, InboxIcon, MessageIcon, UploadIcon } from "../../../Icons";

import styles from "./Header.module.scss";
import images from "../../../../assets/images";

import Button from "../../../Button";
import Menu from "../../../Popper/Menu";
import Image from "../../../Image";
import Search from "../Search";

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
    const isLogin = true;


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

            <Search />

            <div className={cx("action")}>
                <Button leftIcon={<UploadIcon/>}>Upload</Button>
                {
                    isLogin ? (
                    <>
                        <button className={cx('action-btn')}><DownloadIcon /></button>
                        <Tippy delay={[0, 100]} content='Messages' placement="bottom">
                            <button className={cx('action-btn')}><MessageIcon /></button>
                        </Tippy>
                        <Tippy delay={[0, 100]} content='Inbox' placement="bottom">
                            <button className={cx('action-btn')}>
                                <InboxIcon />
                                <span className={cx('badge')}>12</span>
                            </button>
                        </Tippy>
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
                            <Image 
                                className={cx('user-avatar')} 
                                src="https://i.pinimg.com/236x/bb/60/36/bb6036b855ef82f16332c749f6a4efec.jpg" 
                                alt="NVM"
                                fallBack={'https://i.pinimg.com/236x/9a/59/9a/9a599ac7f601dba8197036276cf0b6a6.jpg'}
                            />
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
