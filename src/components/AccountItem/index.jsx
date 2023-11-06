/* eslint-disable react/prop-types */
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./AccountItem.module.scss"
import Image from '../Image'
import { BsCheckCircleFill } from "react-icons/bs";
const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return ( 
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')}
                src={data.avatar}
                alt={data.full_name} />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <span>< BsCheckCircleFill className={cx('check')} /></span>}
                </p>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
     );
}

export default AccountItem;