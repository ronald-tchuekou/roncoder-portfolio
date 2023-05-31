// @flow
import * as React from 'react';
import {CloudDownloadSvg} from "../assets/svg";
import {motion} from "framer-motion";

type ButtonDownloadCvProps = {
    title: string
};

const ButtonDownloadCv = (props: ButtonDownloadCvProps) => {
    const {title} = props

    return (
        <motion.button
            whileHover={{scale: 1.02}}
            whileTap={{scale: 0.95}}
            className={"nav-btn bg-btn"}>
            <span className={"block"}>{title}</span>
            <CloudDownloadSvg className={"w-5"}/>
        </motion.button>
    );
};

export default ButtonDownloadCv
