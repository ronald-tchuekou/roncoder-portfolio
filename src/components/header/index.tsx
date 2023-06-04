import React, {FC, useCallback, useEffect, useState} from 'react';
import Container from "../container";
import {motion, useCycle} from "framer-motion";
import PhoneMenu from "./phone-menu";
import ToggleMenu from "./toggle-menu";
import ButtonDownloadCv from "../button-download-cv";

const hashtags = ["#presentation", "#skills", "#experiences", "#portfolio", "#contact"]

const Header: FC = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);

    const [hashtag, setHashtag] = useState<string>("")
    const moveIndicator = useCallback(
        (elt: HTMLElement) => {
            const indicator = document.querySelector('.nav-indicator')
            if (indicator) {
                const indic = indicator as HTMLElement
                indic.style.left = `${elt.offsetLeft}px`
                indic.style.width = `${elt.clientWidth}px`
            }
        },
        []
    )

    const callbackListener: EventListenerOrEventListenerObject = useCallback(
        (e: Event) => {
            const elt = e.target as HTMLElement
            setHashtag(elt.getAttribute("href") || "")
            moveIndicator(elt)
        },
        [moveIndicator, setHashtag]
    )

    const removeClickListeners = useCallback(
        () => {
            const navItems = document.querySelectorAll(".nav-item")
            navItems.forEach(item => {
                item.removeEventListener('click', callbackListener)
            })
        },
        [callbackListener]
    )

    const setClickListeners = useCallback(
        (initialIndex: number) => {
            // Remove old click events
            removeClickListeners()

            const navItems = document.querySelectorAll(".nav-item")
            navItems.forEach((item, i) => {
                if (i === initialIndex)
                    moveIndicator(item as HTMLElement)
                item.addEventListener('click', callbackListener)
            })
        },
        [callbackListener, moveIndicator, removeClickListeners]
    )

    useEffect(
        () => {
            const hash = window.location.hash
            setHashtag(hash ? hash : "#presentation")
            const initialIndex = hashtags.indexOf(hash)
            setClickListeners(initialIndex === -1 ? 0 : initialIndex)
            return removeClickListeners
        },
        [removeClickListeners, setClickListeners]
    )

    return (
        <>
            <motion.header
                initial={false}
                animate={isOpen ? "open" : "closed"}
                className={`fixed top-0 left-0 right-0 w-screen z-10 bg-primary-dark/40 backdrop-blur`}>
                <Container>
                    <div className={"flex flex-row justify-between items-center py-3 md:py-5"}>
                        <a href={"/"}>
                            <img
                                className={"aspect-auto w-24 md:w-36"}
                                src={"/line-logo.png"}
                                alt={"Roncoder logo"}/>
                        </a>
                        <nav className={"flex-none flex flex-row gap-5 items-center relative"}>
                            <div className={"hidden lg:block nav-indicator"}></div>
                            <ul className={"hidden md:flex flex-row gap-5 items-center"}>
                                <li className={`md:hidden lg:block nav-item ${hashtag === '#presentation' ? 'active' : ''}`}>
                                    <a href={"#presentation"}>Présentation</a>
                                </li>
                                <li className={`md:hidden lg:block nav-item ${hashtag === '#skills' ? 'active' : ''}`}>
                                    <a href={"#skills"}>Compétences</a>
                                </li>
                                <li className={`nav-item ${hashtag === '#experiences' ? 'active' : ''}`}>
                                    <a href={"#experiences"}>Expériences</a>
                                </li>
                                <li className={`nav-item ${hashtag === '#portfolio' ? 'active' : ''}`}>
                                    <a href={"#portfolio"}>Portfolio</a>
                                </li>
                                <li className={`nav-item ${hashtag === '#contact' ? 'active' : ''}`}>
                                    <a href={"#contact"}>Contact</a>
                                </li>
                            </ul>
                            <div className={"hidden md:block"}>
                                <ButtonDownloadCv title={'Mon CV'}/>
                            </div>
                            <ToggleMenu toggle={toggleOpen}/>
                        </nav>
                    </div>
                </Container>
                <PhoneMenu
                    setHashtag={setHashtag}
                    hashtag={hashtag}
                    toggle={toggleOpen}/>
            </motion.header>
            <div className={"h-[80px] md:h-[100px] w-full"}/>
        </>
    );
};

export default Header
