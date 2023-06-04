import React from 'react';
import Container from "./container";
import Space from "./space";
import {GithubSvg, LinkedInSvg, MailSvg, TwitterSvg, WhatsappSvg} from "../assets/svg";

const Footer = () => {
    return (
        <footer>
            <Container>
                <div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"}>
                    <div>
                        <img
                            src={"/col-logo.png"}
                            alt={"roncoder logo"}
                            className={"aspect-auto w-24 m-auto"}/>
                        <Space height={25}/>
                        <p className={"text-foot"}>
                            `Le bon travail, valorise la personnalité et construit un avenir meilleur.`
                        </p>
                    </div>

                    <div>
                        <h3 className={"text-lg sm:text-xl font-medium text-white"}>
                            Mes contacts
                        </h3>
                        <Space height={25}/>
                        <ul>
                            <li className={"flex flex-row gap-3 items-center"}>
                                <WhatsappSvg className={"w-8"}/>
                                <a href="https://wa.me/+237658172868" className={"link"}>
                                    (+237) 658 172 868
                                </a>
                            </li>
                            <li className={"flex flex-row gap-3 items-center mt-3"}>
                                <MailSvg className={"w-8"}/>
                                <a href="mailto:ronaldtchuekou@gmail.com" className={"link"}>
                                    ronaldtchuekou@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className={"text-lg sm:text-xl font-medium text-white"}>
                            Mes réseaux
                        </h3>
                        <Space height={25}/>
                        <ul className={"flex flex-row gap-3 items-center"}>
                            <li>
                                <a href="https://www.linkedin.com/in/ronald-tchuekou-02129b191/">
                                    <LinkedInSvg className={"w-8"}/>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/ronald-tchuekou">
                                    <GithubSvg className={"w-8"}/>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/TchuekouRonald">
                                    <TwitterSvg className={"w-8"}/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
            <Space/>
            <small className={"block text-gray-500 text-center w-full"}>
                &copy;Copyright 2023, by #roncoder
            </small>
            <Space/>
        </footer>
    );
};

export default Footer
