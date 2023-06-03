import * as React from 'react';
import {motion} from "framer-motion";

type ButtonProps = {
    title: string
};

const Button = (props: ButtonProps) => {
    const {title} = props

    return (
        <motion.button
            whileHover={{scale: 1.02}}
            whileTap={{scale: 0.95}}
            className={"btn bg-btn"}>
            {title}
        </motion.button>
    );
};

export default Button
