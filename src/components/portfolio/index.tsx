import React from 'react';
import Container from "../container";
import SectionHeader from "../section-header";
import BGPortfolio from "./bg-portfolio";
import Space from "../space";
import PortfolioModel from "../../models/portfolio.model";
import PortfolioItem from "./portfolio-item";

const Portfolio = () => {
    const portfolio: Array<PortfolioModel> = [
        {
            image: "/apps/bigoodee-mobile-illustration.png",
            title: "Bigoodee (Version mobile)",
            description: "Bigoodee est une plateforme de réservation de coiffeuses en ligne. C’est une application qui permet aux coiffeuses afro de vendre leurs prestations et permet aux clients de faire des réservation de prestations et être coiffer soit à domicile, soit dans un point de rendez-vous.",
            owner: "AGYL TECH",
            type: "mobile",
            links: [
                "https://apps.apple.com/cm/app/bigoodee/id1660025836?l=fr",
                "https://play.google.com/store/apps/details?id=com.agyl.bigoodee"
            ]
        },
        {
            image: "/apps/les_vadrouilleurs-mobile-illustration.png",
            title: "Les vadrouilleurs (Version mobile)",
            description: "Les vadrouilleurs est une application mobile qui permet de faire des parcours de jeux de piste et de randonné. C’est une application qui intègre une carte personnalisé permettant de suivre ça position et de découvrir les balises d’un parcours.",
            owner: "AGYL TECH",
            type: "mobile",
            links: [
                "https://apps.apple.com/cm/app/les-vadrouilleurs/id1634201497?l=fr",
                "https://play.google.com/store/search?q=les%20vadrouilleurs&c=apps"
            ]
        },
        {
            image: "/apps/bigoodee-web-illustration.png",
            title: "App Bigoodee",
            description: "Bigoodee est une plateforme de réservation de coiffeuses en ligne. C’est une application qui permet aux coiffeuses afro de vendre leurs prestations et permet aux clients de faire des réservation de prestations et être coiffer soit à domicile, soit dans un point de rendez-vous.",
            owner: "AGYL TECH",
            type: "web",
            links: ["https://app.bigoodee.com"]
        },
        {
            image: "/apps/dolishop-web-illustration.png",
            title: "Dolishop",
            description: "Dolishop est une plateforme de création et de gestion de boutiques en ligne. Elle permet à un particulier de créer une boutique directement accessible en ligne et de gérer celle-ci grâce à un tableau de board adapté. Elle intègre un module WhatsApp qui permet aux clients de faire un chat directement avec le vendeur.",
            owner: "AGYL TECH",
            type: "web",
            links: ["https://dolishop.app"]
        },
        {
            image: "/apps/phomag-mobile-illustration.png",
            title: "PhoMag",
            description: "Bigoodee est une plateforme de réservation de coiffeuses en ligne. C’est une application qui permet aux coiffeuses afro de vendre leurs prestations et permet aux clients de faire des réservation de prestations et être coiffer soit à domicile, soit dans un point de rendez-vous.",
            owner: "Projet pour un particulier",
            type: "web",
            links: []
        },
        {
            image: "/apps/no_name1-web-illustration.jpg",
            title: "No name (Pour client interne)",
            description: "Dolishop est une plateforme de création et de gestion de boutiques en ligne. Elle permet à un particulier de créer une boutique directement accessible en ligne et de gérer celle-ci grâce à un tableau de board adapté. Elle intègre un module WhatsApp qui permet aux clients de faire un chat directement avec le vendeur.",
            owner: "Projet pour un particulier",
            type: "web",
            links: []
        },
    ]

    return (
        <section
            id={"portfolio"}
            className={"relative w-full py-10 md:py-20"}>
            <BGPortfolio/>
            <Container>
                <div className={"w-full"}>
                    <SectionHeader label={"Mon portfolio"}/>
                    <Space/>
                    <div className={"grid grid-cols-1 md:grid-cols-2 gap-10"}>
                        {portfolio.map((item, i) => (
                            <PortfolioItem
                                key={`portfolio-${i}`}
                                portfolio={item}/>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Portfolio
