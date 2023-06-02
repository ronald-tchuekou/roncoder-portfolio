import React from 'react';
import SkillModel from "../../models/skill.model";

type SkillItemProps = {
    skill: SkillModel
}

const SkillItem: React.FC<SkillItemProps> = (props) => {
    const {skill} = props

    return (
        <div className={"relative skill-item flex flex-col gap-3"}>
            <h2 className={"text-xl font-bold text-accent"}>
                {skill.title}
            </h2>
            <div className={"h-3 w-full bg-gray-300 rounded-full"}></div>
            <div className={"text-gray-400 text-sm"}>
                {skill.experience}
            </div>
        </div>
    );
};

export default SkillItem
