import React, {FC} from 'react';
import {motion} from "framer-motion";

type ToggleMenuProps = {
    toggle: () => void
};

const ToggleMenu = (props: ToggleMenuProps) => {
    const {toggle} = props

    return (
        <button
            onClick={toggle}
            className={"text-gray-300 lg:hidden"}>
            <svg className={"h-6 w-6"} viewBox="0 0 23 23">
                <Path
                    variants={{
                        closed: {d: "M 2 2.5 L 20 2.5"},
                        open: {d: "M 3 16.5 L 17 2.5"}
                    }}
                    stroke={"currentColor"}
                />
                <Path
                    d="M 2 9.423 L 20 9.423"
                    variants={{
                        closed: {opacity: 1},
                        open: {opacity: 0}
                    }}
                    transition={{duration: 0.1}}
                    stroke={"currentColor"}
                />
                <Path
                    variants={{
                        closed: {d: "M 2 16.346 L 20 16.346"},
                        open: {d: "M 3 2.5 L 17 16.346"}
                    }}
                    stroke={"currentColor"}
                />
            </svg>
        </button>
    );
};

const Path: FC<any> = (props) => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="hsl(0, 0%, 18%)"
        strokeLinecap="round"
        {...props}
    />
);

export default ToggleMenu
