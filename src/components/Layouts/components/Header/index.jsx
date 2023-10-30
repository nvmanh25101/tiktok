import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { IoMdCloseCircle } from 'react-icons/io';
import { BiLoaderAlt } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';

import styles from './Header.module.scss'
import images from '../../../../assets/image';
import { Wrapper as PopperWrapper } from '../../../Popper';
import AccountItem from '../../../AccountItem';

const cx = classNames.bind(styles); // dung - cho bien(post-item)
function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        }, 5000)
    })

    return (
        <header className={cx('wrapper')}>
            <img src={images.logo} alt="Tiktok" />
                
            <Tippy 
                interactive
                visible={searchResult.length > 0}
                render={attrs => (
                    <PopperWrapper>
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <h4 className={cx('search-title')}>
                                Account
                            </h4>
                            < AccountItem />
                            < AccountItem />
                            < AccountItem />
                            < AccountItem />
                        </div>
                    </PopperWrapper>

                )}
            >
                <div className={cx("search")}>
                    <input type="text" placeholder='Search' />
                    <button className={cx('search-clear')}>
                        <IoMdCloseCircle />
                    </button>
                    < BiLoaderAlt className={cx('search-loading')} />

                    <button className={cx('search-btn')}>
                        < BsSearch />
                    </button>
                </div>
            </Tippy>

            <div className={cx('action')}></div>
        </header>
    )
}

export default Header;