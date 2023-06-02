import React from 'react';
import SkillModel from "../../models/skill.model";
import SkillNote from "./skill-note";

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
            <SkillNote note={skill.note}/>
            <div className={"text-gray-400 text-sm"}>
                {skill.experience}
            </div>
        </div>
    );
};

export default SkillItem
