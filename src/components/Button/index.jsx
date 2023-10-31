import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import PropTypes from 'prop-types'; 

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary,
    rounded = false,
    outline = false,
    size = false,
    disabled = false,
    children,
    onClick,
    ...passProps
}) {
    let Comp = "button";
    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = "Link";
    }

    if (href) {
        props.href = href;
        Comp = "a";
    }

    if(disabled) {
        Object.keys(props).forEach(key => {
            if(key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        })
    }

    let classes = cx("wrapper", {
        rounded,
        primary,
        outline,
        [size]: size,
        disabled,
    });

    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    rounded: PropTypes.bool,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    size: PropTypes.string,
    disabled: PropTypes.bool,
    children: PropTypes.node,
    onClick: PropTypes.func,
}
export default Button;
