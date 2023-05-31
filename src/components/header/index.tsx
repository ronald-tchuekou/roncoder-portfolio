import React, {FC, useCallback, useEffect, useRef, useState} from 'react';
import Container from "../container";
import ToggleMenu from "./toggle-menu";
import {motion, useCycle} from "framer-motion";
import {useDimensions} from "../../hooks/use-dimensions";

const hashtags = ["#presentation", "#skills", "#experiences", "#portfolio", "#contact"]

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

const Header: FC = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const {height} = useDimensions(containerRef);

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
        <header className={`w-full`}>
            <Container>
                <div className={"flex flex-row justify-between items-center py-5"}>
                    <a href={"/"}>
                        <img
                            className={"aspect-auto w-36"}
                            src={"/line-logo.png"}
                            alt={"Roncoder logo"}/>
                    </a>
                    <motion.nav
                        initial={false}
                        animate={isOpen ? "open" : "closed"}
                        custom={height}
                        ref={containerRef}
                        className={"flex-none flex flex-row gap-5 items-center relative"}>
                        <div className={"hidden lg:block nav-indicator"}></div>
                        <ul className={"hidden lg:flex flex-row gap-5 items-center"}>
                            <li className={`nav-item ${hashtag === '#presentation' ? 'active' : ''}`}>
                                <a href={"#presentation"}>Présentation</a>
                            </li>
                            <li className={`nav-item ${hashtag === '#skills' ? 'active' : ''}`}>
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
                        <button className={"hidden md:block rounded-full bg-primary-light text-white text-base font-medium px-5 py-3"}>
                            Télécharger mon CV
                        </button>
                        <ToggleMenu toggle={() => toggleOpen()}/>
                    </motion.nav>
                </div>
            </Container>
        </header>
    );
};

export default Header
