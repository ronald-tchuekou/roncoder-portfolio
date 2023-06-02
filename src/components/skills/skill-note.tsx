import React from 'react';
import {getGray} from "../../utils";

const CONTENT = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

type SkillNoteProps = {
    note: number
};

const SkillNote = (props: SkillNoteProps) => {
    const {note} = props

    const value = (note / 10) * 100

    return (
        <div className={"flex flex-row justify-between gap-1 sm:gap-3 w-full max-w-[250px]"}>
            {CONTENT.map(item => (
                <Indicator
                    key={item}
                    index={item}
                    value={value}/>
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

    const style = {
        background: getGray(index, value)
    }

    return <div
        style={style}
        className={"w-full aspect-square rounded-full max-w-[15px]"}/>
}

export default SkillNote
