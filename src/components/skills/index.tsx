import React from 'react';
import BGSkills from "./bg-skills";
import Container from "../container";
import SectionHeader from "../section-header";
import SkillsGroup from "./skills-group";
import SkillModel from "../../models/skill.model";
import {
    AdobeSvg,
    AngularSvg,
    CSSSvg,
    DevOpsSvg,
    ExpressSvg,
    FigmaSvg,
    FirebaseSvg,
    GitSvg,
    HTMLSvg,
    JavaScriptSvg,
    MongoDBSvg,
    PhpSvg,
    ReactSvg,
    ReduxSvg,
    TailwindCssSvg,
    TypeScriptSvg
} from "../../assets/svg";

const Skills = () => {
    const groups: Array<{
        title: string,
        skills: Array<SkillModel>
    }> = [
        {
            title: "Langages",
            skills: [
                {
                    theme: "accent",
                    title: "TypeScript",
                    experience: "4 ans d'expérience",
                    tech: [
                        <TypeScriptSvg className={"h-3 sm:h-6"}/>
                    ],
                    note: 6
                },
                {
                    theme: "accent",
                    title: "JavaScript",
                    experience: "5 ans d'expérience",
                    tech: [
                        <JavaScriptSvg className={"h-3 sm:h-6"}/>
                    ],
                    note: 6
                },
                {
                    theme: "accent",
                    title: "HTML/CSS",
                    experience: "5 ans d'expérience",
                    tech: [
                        <HTMLSvg className={"h-4 sm:h-7"}/>,
                        <CSSSvg className={"h-4 sm:h-7"}/>,
                    ],
                    note: 7
                },
                {
                    theme: "accent",
                    title: "PHP",
                    experience: "2 ans d'expérience",
                    tech: [
                        <PhpSvg className={"h-2 sm:h-4"}/>
                    ],
                    note: 3
                }
            ]
        },
        {
            title: "Frameworks",
            skills: [
                {
                    title: "React",
                    experience: "4 ans d'expérience",
                    tech: [
                        <ReactSvg className={"h-4 sm:h-7"}/>
                    ],
                    note: 7
                },
                {
                    title: "React Native",
                    experience: "2 ans d'expérience",
                    tech: [
                        <ReactSvg className={"h-4 sm:h-7"}/>
                    ],
                    note: 5
                },
                {
                    title: "Angular",
                    experience: "2 ans d'expérience",
                    tech: [
                        <AngularSvg className={"h-4 sm:h-7"}/>
                    ],
                    note: 6
                },
                {
                    title: "Express js",
                    experience: "2 ans d'expérience",
                    tech: [
                        <ExpressSvg className={"h-2 sm:h-4"}/>
                    ],
                    note: 5
                }
            ]
        },
        {
            title: "Design",
            skills: [
                {
                    theme: "accent",
                    title: "Figma",
                    experience: "3 ans d'expérience",
                    tech: [
                        <FigmaSvg className={"h-4 sm:h-7"}/>
                    ],
                    note: 7
                },
                {
                    theme: "accent",
                    title: "Adobe XD",
                    experience: "2 ans d'expérience",
                    tech: [
                        <AdobeSvg className={"h-3 sm:h-5"}/>
                    ],
                    note: 3
                }
            ]
        },
        {
            title: "Autres",
            skills: [
                {
                    title: "Firebase",
                    experience: "3 ans d'expérience",
                    tech: [
                        <FirebaseSvg className={"h-4 sm:h-7"}/>
                    ],
                    note: 5
                },
                {
                    title: "Mongo DB",
                    experience: "2 ans d'expérience",
                    tech: [
                        <MongoDBSvg className={"h-4 sm:h-7"}/>
                    ],
                    note: 3
                },
                {
                    title: "Git",
                    experience: "4 ans d'expérience",
                    tech: [
                        <GitSvg className={"h-4 sm:h-7"}/>
                    ],
                    note: 6
                },
                {
                    theme: "accent",
                    title: "DevOps",
                    experience: "1 ans d'expérience",
                    tech: [
                        <DevOpsSvg className={"h-4 sm:h-7"}/>
                    ],
                    note: 2
                },
                {
                    theme: "accent",
                    title: "TailwindCSS",
                    experience: "3 ans d'expérience",
                    tech: [
                        <TailwindCssSvg className={"h-3 sm:h-5"}/>
                    ],
                    note: 6
                },
                {
                    title: "Redux",
                    experience: "2 ans d'expérience",
                    tech: [
                        <ReduxSvg className={"h-4 sm:h-7"}/>
                    ],
                    note: 5
                }
            ]
        },
    ]

    return (
        <section
            id={"skills"}
            className={"relative w-full py-10 md:py-20"}>
            <BGSkills/>
            <Container>
                <div className={"w-full"}>
                    <SectionHeader label={"Mes compétences"}/>
                    {groups.map((item, i) => (
                        <SkillsGroup
                            key={`group${i}`}
                            label={item.title}
                            skills={item.skills}/>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Skills
