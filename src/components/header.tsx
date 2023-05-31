import React, {FC, useCallback, useEffect} from 'react';
import Container from "./container";
import {useAnimate} from "framer-motion";

const hashtags = ["#prestation", "#skills", "#experiences", "#portfolio", "#contact"]

function check(hash: string) {
    return window.location.hash === hash
}

export const Header: FC = () => {

    const [scope, animate] = useAnimate()

    const moveIndicator = useCallback(
        (elt: HTMLElement) => {
            const indicator = document.querySelector('.nav-indicator')
            if (indicator) {
                const indic = indicator as HTMLElement
                animate(indic, {
                    left: elt.offsetLeft,
                    width: elt.clientWidth
                }, {
                    duration: 0.1,
                    type: "spring",
                    stiffness: 500
                })
            }
        },
        [animate]
    )

    const callbackListener: EventListenerOrEventListenerObject = useCallback(
        (e: Event) => {
            const elt = e.target as HTMLElement
            moveIndicator(elt)
        },
        [moveIndicator]
    )

    const setClickListeners = useCallback(
        (initialIndex: number) => {
            const navItems = document.querySelectorAll(".nav-item")
            navItems.forEach((item, i) => {
                if (i === initialIndex)
                    moveIndicator(item as HTMLElement)
                item.addEventListener('click', callbackListener)
            })
        },
        [callbackListener, moveIndicator]
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

    useEffect(
        () => {
            const hash = window.location.hash
            const initialIndex = hashtags.indexOf(hash)
            setClickListeners(initialIndex === -1 ? 0 : initialIndex)
            return removeClickListeners
        },
        []
    )

    return (
        <header ref={scope} className={`w-full`}>
            <Container>
                <div className={"flex flex-row justify-between items-center py-5"}>
                    <a href={"/"}>
                        <img
                            className={"aspect-auto w-36"}
                            src={"/line-logo.png"}
                            alt={"Roncoder logo"}/>
                    </a>
                    <nav className={"flex-none flex flex-row gap-5 items-center relative"}>
                        <div className={"nav-indicator"}></div>
                        <ul className={"flex flex-row gap-5 items-center"}>
                            <li className={`nav-item ${check('#prestation') ? 'active' : ''}}`}>
                                <a href={"#prestation"}>Présentation</a>
                            </li>
                            <li className={`nav-item ${check('#skills') ? 'active' : ''}`}>
                                <a href={"#skills"}>Compétences</a>
                            </li>
                            <li className={`nav-item ${check('#experiences') ? 'active' : ''}`}>
                                <a href={"#experiences"}>Expériences</a>
                            </li>
                            <li className={`nav-item ${check('#portfolio') ? 'active' : ''}`}>
                                <a href={"#portfolio"}>Portfolio</a>
                            </li>
                            <li className={`nav-item ${check('#contact') ? 'active' : ''}`}>
                                <a href={"#contact"}>Contact</a>
                            </li>
                        </ul>
                        <button className={"rounded-full bg-primary-light text-white text-base font-medium px-5 py-3"}>
                            Télécharger mon CV
                        </button>
                    </nav>
                </div>
            </Container>
        </header>
    );
};

export default Header
