import {ReactElement} from "react";

type  SkillModel = {
    theme?: "accent" | "primary";
    title: string
    experience: string
    note: number
    tech: Array<ReactElement>
}

export default SkillModel
