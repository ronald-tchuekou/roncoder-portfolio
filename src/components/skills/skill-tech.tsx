import React, {ReactElement} from 'react';

type SkillTechProps = {
    tech: Array<ReactElement>
};

const SkillTech = (props: SkillTechProps) => {
    const {tech} = props

    return (
        <div className={"absolute -top-4 sm:-top-7 right-3 sm:right-6 flex flex-row justify-end gap-1 sm:gap-3 w-full"}>
            {tech.map((item, i) => (
                <TechItem item={item} key={`tech-${i}`}/>
            ))}
        </div>
    );
};

type TechItemProps = {
    item: ReactElement
}

const TechItem = (props: TechItemProps) => {
    const {item} = props

    return (
        <div className={"rounded-lg sm:rounded-xl bg-primary flex p-[6px] h-[35px] sm:h-[50px] h-[35px] sm:w-[50px] items-end justify-end"}>
            {item}
        </div>
    )
}

export default SkillTech
