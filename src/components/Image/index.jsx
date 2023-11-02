import classNames from "classnames";
import { useState } from "react";
import { forwardRef } from "react";
import styles from "./Image.module.scss";
import images from "../../assets/images";
import PropTypes from 'prop-types';

function Image({ src, className, fallBack: customFallBack = images.noImage, ...props }, ref) {
    const [fallBack, setFallBack] = useState('')

    const handleError = () => {
        setFallBack(customFallBack)
    }

    return (
        <img className={classNames(styles.wrapper, className)} src={fallBack || src} {...props} ref={ref} onError={handleError}/>
     );
}

Image.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string,
    fallBack: PropTypes.string,
}

export default forwardRef(Image);