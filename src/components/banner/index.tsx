import React from 'react';
import {BannerIllustrationSvg} from "../../assets/svg";
import Container from "../container";
import ButtonDownloadCv from "../button-download-cv";
import Space from "../space";
import BGBanner from "./bg-banner ";

const Banner = () => {
    return (
        <section id={"presentation"} className={"relative w-full"}>
            <BGBanner/>
            <Container>
                <div className={"w-full flex flex-col-reverse md:flex-row md:items-end"}>
                    <div className={"w-full md:w-2/3 py-5 md:py-10"}>
                        <h1 className={"title text-white"}>
                            Salut !<br/>
                            Moi c’est <span className={"text-accent"}>Ronald Tchuekou</span>
                        </h1>
                        <Space/>
                        <p className={"text-gray-200 text"}>
                            Développeur d’applications
                            web et mobile, UI/UX Designer, Administrateur
                            système (linux)
                        </p>
                        <Space height={20}/>
                        <p className={"text-gray-200 text"}>
                            Passionné du web design et tout son
                            écosystème, mon slogan est: <span className={"text-primary-light"}>`Le bon travail, valorise
                                la personnalité et construit un avenir meilleur.`</span>
                        </p>
                        <Space/>
                        <ButtonDownloadCv title={"Télécharger mon CV"}/>
                    </div>
                    <div className={"w-full md:w-1/2 invisible"}>
                        <BannerIllustrationSvg className={"w-full"}/>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Banner
