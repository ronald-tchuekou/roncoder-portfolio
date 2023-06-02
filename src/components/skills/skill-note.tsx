import React from 'react';

const CONTENT = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

type SkillNoteProps = {
    note: number
};

const SkillNote = (props: SkillNoteProps) => {
    const {note} = props

    return (
        <div className={"flex flex-row justify-between gap-1 sm:gap-3 w-full max-w-[250px]"}>
            {CONTENT.map(item => (
                <Indicator
                    key={item}
                    index={item}
                    value={note}/>
            ))}
        </div>
    );
};

type IndicatorProps = {
    value: number
    index: number
}

const Indicator = (props: IndicatorProps) => {
    const {value, index} = props

    const opacity = (index > (value * 2))
        ? (value / (index * 5))
        : (index > value)
            ? (value / (index * 3))
            : (value / index)

    const style = {
        background: `rgba(255, 255, 255, ${opacity === 0 ? 0.1 : opacity})`
    }

    return <div
        style={style}
        className={"w-full aspect-square rounded-full max-w-[15px]"}/>
}

export default SkillNote
