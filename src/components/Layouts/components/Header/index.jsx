import classNames from 'classnames/bind';
import { IoMdCloseCircle } from 'react-icons/io';
import { BiLoaderAlt } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';

import styles from './Header.module.scss'
import images from '../../../../assets/image';

const cx = classNames.bind(styles); // dung - cho bien(post-item)
function Header() {
    return (
        <header className={cx('wrapper')}>
            <img src={images.logo} alt="Tiktok" />
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
            <div className={cx('action')}></div>
        </header>
    )
}

export default Header;