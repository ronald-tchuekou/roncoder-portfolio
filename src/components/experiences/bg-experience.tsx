import React from 'react';
import BGContainer from "../bg-container";
import {ExperienceSvg} from "../../assets/svg";

const BgExperience = () => {
    return (
        <div className={"absolute inset-0 -z-10"}>
            <div className={"bg-flue aspect-square w-4/5 lg:w-1/2 top-1/2 -left-10"}/>
            <BGContainer>
                <div className={"w-full h-full relative"}>
                    <div className={"absolute right-0 left-0 top-10 lg:top-20"}>
                        <ExperienceSvg className="w-full md:w-2/3 lg:w-1/2 float-right"/>
                    </div>
                </div>
            </BGContainer>
        </div>
    );
};

export default BgExperience
