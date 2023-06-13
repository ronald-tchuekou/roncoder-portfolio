import React from 'react';
import SkillModel from "../../models/skill.model";
import SkillItem from "./skill-item";

type SkillsGroupProps = {
    label: string
    skills: Array<SkillModel>
}

const SkillsGroup: React.FC<SkillsGroupProps> = (props) => {
    const {label, skills} = props

    return (
        <div className={"flex flex-col w-full gap-5 mt-12"}>
            <h3 className={"text-lg sm:text-xl font-normal text-gray-200"}>{label}</h3>
            <div className={"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"}>
                {skills.map((item, i) => (
                    <SkillItem key={`skill-${i}`} skill={item}/>
                ))}
            </div>
        </div>
    );
};

export default SkillsGroup
