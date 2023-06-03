import React from 'react';
import BGContainer from "../bg-container";
import {ExperienceSvg} from "../../assets/svg";

const BgExperience = () => {
    return (
        <div className={"absolute inset-0 -z-10"}>
            <BGContainer>
                <ExperienceSvg className="absolute right-0 top-1/5 md:top-1/4 w-full md:w-2/3"/>
                <div className={"w-full"}>
                    <div className={"bg-flue aspect-square w-4/5 top-1/2 left-0"}/>
                </div>
            </BGContainer>
        </div>
    );
};

export default BgExperience
