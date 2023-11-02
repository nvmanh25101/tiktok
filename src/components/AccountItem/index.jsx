import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss"
import Image from '../Image'
import { BsCheckCircleFill } from "react-icons/bs";
const cx = classNames.bind(styles);

function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <Image className={cx('avatar')}
                src="https://i.pinimg.com/564x/62/90/ab/6290abeb2231d37b7c508eff6f620e91.jpg"
                alt="avatar" />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>name</span>
                    <span>< BsCheckCircleFill className={cx('check')} /></span>
                </p>
                <span className={cx('username')}>name</span>
            </div>
        </div>
     );
}

export default AccountItem;