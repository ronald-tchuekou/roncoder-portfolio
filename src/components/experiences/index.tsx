import React from 'react';
import Container from "../container";
import SectionHeader from "../section-header";
import BgExperience from "./bg-experience";
import Space from "../space";
import ExperienceModel from "../../models/experience.model";
import ExperienceItem from "./experience-item";

const Experiences = () => {
    const experiences: Array<ExperienceModel> = [
        {
            poste: "Développeur Full Stack, Administrateur système, UI/UX Designer",
            company: "À AGYL TECH",
            date: "Novembre 2021 - Présent",
            task: [
                "Création des maquettes d’applications et prototype pour les projets internes et pour des clients ",
                "Conception et implémentation d’applications web et mobile en interne et pour des clients",
                "Intégration et maintenance de projet et d’API REST",
                "Administration des systèmes (servers) de déploiement d’applications",
                "Gestion des déploiement des applications mobiles sur les stores (AppStore, PlayStore)",
            ]
        },
        {
            poste: "Développeur Front End, UI/UX Designer",
            company: "À DC CORP",
            date: "Juin 2020 - 2022",
            task: [
                "Création des maquettes d’applications et prototype pour les projets internes et pour des clients ",
                "Conception et implémentation d’applications web et mobile en interne et pour des clients",
                "Intégration et maintenance de projet et d’API REST",
                "Administration des systèmes (servers) de déploiement d’applications",
                "Gestion des déploiement des applications mobiles sur les stores (AppStore, PlayStore)",
            ]
        },
    ]

    return (
        <section
            id={"experiences"}
            className={"relative w-full py-10 md:py-20"}>
            <BgExperience/>
            <Container>
                <div className={"w-full"}>
                    <SectionHeader label={"Mes expériences"}/>
                    <Space/>
                    <div className={"grid grid-cols-1 md:grid-cols-2 gap-10"}>
                        {experiences.map((item, i) => (
                            <ExperienceItem
                                key={`experience-${i}`}
                                experience={item}/>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Experiences
