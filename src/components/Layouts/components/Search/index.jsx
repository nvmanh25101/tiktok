import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import HeadlessTippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";

import { IoMdCloseCircle } from "react-icons/io";
// eslint-disable-next-line no-unused-vars
import { BiLoaderAlt } from "react-icons/bi";
import { SearchIcon } from "../../../Icons";
import { Wrapper as PopperWrapper } from "../../../Popper";
import AccountItem from "../../../AccountItem";
import { useRef } from "react";

const cx = classNames.bind(styles); // dung - cho bien(post-item)

function Search() {
    const [searchValue, setSearchValue] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const clearRef = useRef();

    useEffect(() => {
        if(!searchValue) return setSearchResult([]);

        setLoading(true);

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then(res => res.json())
            .then(res => {
                setSearchResult(res.data)
                setLoading(false)
            })
            .catch(() => setLoading(false))
    }, [searchValue]);

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <PopperWrapper>
                    <div
                        className={cx("search-result")}
                        tabIndex="-1"
                        {...attrs}
                    >
                        <h4 className={cx("search-title")}>Account</h4>
                        {searchResult.map((item) => <AccountItem key={item.id} data={item} /> )}
                    </div>
                </PopperWrapper>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx("search")}>
                <input
                    ref={clearRef}
                    type="text"
                    value={searchValue}
                    placeholder="Search"
                    onChange={(e) => {
                        let value = e.target.value.trimStart();
                        setSearchValue(value);
                    }}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue && !loading && (
                    <button
                        className={cx("search-clear")}
                        onClick={() => {
                            setSearchValue("");
                            clearRef.current.focus();
                        }}
                    >
                        <IoMdCloseCircle />
                    </button>
                )}

                { loading && <BiLoaderAlt className={cx("search-loading")} />}

                <button className={cx("search-btn")}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
