import React from 'react';
import BGSkills from "./bg-skills";
import Container from "../container";
import SectionHeader from "../section-header";
import SkillsGroup from "./skills-group";
import SkillModel from "../../models/skill.model";

const Skills = () => {
    const groups: Array<{
        title: string,
        skills: Array<SkillModel>
    }> = [
        {
            title: "Langages",
            skills: [
                {title: "TypeScript", experience: "3 ans d'expérience", tech: [], note: 1},
                {title: "TypeScript", experience: "3 ans d'expérience", tech: [], note: 2},
                {title: "TypeScript", experience: "3 ans d'expérience", tech: [], note: 3},
            ]
        },
        {
            title: "Frameworks",
            skills: [
                {title: "TypeScript", experience: "3 ans d'expérience", tech: [], note: 4},
                {title: "TypeScript", experience: "3 ans d'expérience", tech: [], note: 5},
                {title: "TypeScript", experience: "3 ans d'expérience", tech: [], note: 6},
            ]
        },
        {
            title: "Design",
            skills: [
                {title: "TypeScript", experience: "3 ans d'expérience", tech: [], note: 7},
                {title: "TypeScript", experience: "3 ans d'expérience", tech: [], note: 8},
                {title: "TypeScript", experience: "3 ans d'expérience", tech: [], note: 9},
            ]
        },
        {
            title: "Autres",
            skills: [
                {title: "TypeScript", experience: "3 ans d'expérience", tech: [], note: 1},
                {title: "TypeScript", experience: "3 ans d'expérience", tech: [], note: 4},
                {title: "TypeScript", experience: "3 ans d'expérience", tech: [], note: 7},
            ]
        },
    ]

    return (
        <section className={"relative w-full py-10 md:py-20"}>
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
