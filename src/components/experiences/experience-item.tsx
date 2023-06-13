import React from 'react';
import ExperienceModel from "../../models/experience.model";

type ExperienceItemProps = {
    experience: ExperienceModel
}

const ExperienceItem: React.FC<ExperienceItemProps> = (props) => {
    const {experience} = props

    return (
        <div className={"relative skill-item flex flex-col gap-3 mt-3"}>
            <div className={"w-full flex flex-col -gap-3 pt-2 px-2"}>
                <h2 className={`text-base sm:text-lg md:text-xl font-normal text-accent`}>
                    {experience.poste}
                </h2>
                <h3 className={"uppercase text-primary-light text-base sm:text-lg"}>
                    {experience.company}
                </h3>
                <h4 className={"text-gray-500 text-xs sm:text-sm"}>
                    {experience.date}
                </h4>
            </div>
            <div className={"text-sm sm:text-base font-semibold text-gray-200 px-2"}>Tâches :</div>
            <ul className={"list-disc text-gray-400 font-light pl-8 pb-2 px-2"}>
                {experience.task.map((item, i) => (
                    <li key={`task-${i}`} className={"pt-2 text-xs sm:text-sm"}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default ExperienceItem
