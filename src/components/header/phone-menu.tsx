import React from 'react';
import {motion, Variants} from "framer-motion";
import ButtonDownloadCv from "../button-download-cv";

const menuContent = [
    {label: "Présentation", tag: '#presentation'},
    {label: "Compétences", tag: '#skills'},
    {label: "Expériences", tag: '#experiences'},
    {label: "Portfolio", tag: '#portfolio'},
    {label: "Contact", tag: '#contact'},
]
const sidebar: Variants = {
    open() {
        const height = window.innerHeight
        return {
            display: 'block',
            clipPath: `circle(${height * 2 + 200}px at calc(100vw - 34px) 45px)`,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 20,
                restDelta: 2
            }
        }
    },
    closed: {
        clipPath: "circle(30px at calc(100vw - 34px) 45px)",
        opacity: 0,
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
        display: 'none'
    }
};
const NavVariants: Variants = {
    open: {
        transition: {staggerChildren: 0.07, delayChildren: 0.2}
    },
    closed: {
        transition: {staggerChildren: 0.05, staggerDirection: -1}
    }
};
const NavItemVariants: Variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: {stiffness: 1000, velocity: -100}
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: {stiffness: 1000}
        }
    }
};

type PhoneMenuProps = {
    hashtag: string
    setHashtag: (tag: string) => void
    toggle: () => void
}

const PhoneMenu = (props: PhoneMenuProps) => {
    const {hashtag, setHashtag, toggle} = props

    return (
        <motion.div
            className="phone-nav-content"
            variants={sidebar}>
            <motion.ul
                className={"w-full pt-4"}
                variants={NavVariants}>
                {menuContent.map(item => (
                    <motion.li
                        key={item.tag}
                        onClick={() => {
                            setHashtag(item.tag)
                            toggle()
                        }}
                        className={`phone-nav-item ${hashtag === item.tag ? 'active' : ''}`}
                        variants={NavItemVariants}
                        whileHover={{scale: 1.01}}
                        whileTap={{scale: 0.95}}>
                        <a href={item.tag}>
                            <span>{item.label}</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                            </svg>
                        </a>
                    </motion.li>
                ))}
            </motion.ul>
            <motion.div
                variants={NavItemVariants}
                className={"w-full p-5"}>
                <ButtonDownloadCv title={'Télécharger mon CV'}/>
            </motion.div>
        </motion.div>
    );
};

export default PhoneMenu
