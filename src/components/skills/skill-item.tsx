import React from 'react';
import SkillModel from "../../models/skill.model";
import SkillNote from "./skill-note";
import SkillTech from "./skill-tech";
import {motion} from "framer-motion"

type SkillItemProps = {
    skill: SkillModel
}

const SkillItem: React.FC<SkillItemProps> = (props) => {
    const {skill} = props

    return (
        <div className={"relative skill-item flex flex-col gap-3 mt-3"}>
            <h2 className={`text-base sm:text-lg md:text-xl font-medium ${skill.theme === 'accent' ? 'text-accent' : 'text-primary-light'}`}>
                {skill.title}
            </h2>
            <SkillNote note={skill.note}/>
            <div className={"text-gray-400 text-xs sm:text-sm"}>
                {skill.experience}
            </div>
            <SkillTech tech={skill.tech}/>
        </div>
    );
};

export default SkillItem
