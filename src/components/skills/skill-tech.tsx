import React, {ReactElement} from 'react';

type SkillTechProps = {
    tech: Array<ReactElement>
};

const SkillTech = (props: SkillTechProps) => {
    const {tech} = props

    return (
        <div className={"absolute -top-7 right-6 flex flex-row justify-end gap-1 sm:gap-3 w-full"}>
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
        <div className={"rounded-xl bg-primary flex p-[6px] h-[50px] w-[50px] items-end justify-end"}>
            {item}
        </div>
    )
}

export default SkillTech
