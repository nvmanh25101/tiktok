import Button from '../../Button';
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    return ( 
        <Button className={cx('menu-item')} leftIcon={data.icon} text to={data.to} onClick={onClick}>
            { data.title }
        </Button>
     );
}

MenuItem.propTypes = {
    data: PropTypes.object,
    onClick: PropTypes.func
}

export default MenuItem;