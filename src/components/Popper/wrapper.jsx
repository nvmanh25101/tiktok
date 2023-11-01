import classNames from "classnames/bind";
import styles from './Popper.module.scss';
import PropTypes from 'prop-types'; // ES6

const cx = classNames.bind(styles);

function Wrapper({ children, className }) {
    return ( 
        <div className={cx('wrapper', className)}>
            { children }
        </div> 
    );
}

Wrapper.propTypes = {
    children: PropTypes.element.isRequired,
    className: PropTypes.string
}

export default Wrapper;