import React from 'react';
import BGContainer from "../bg-container";
import {Skill1Svg, Skill2Svg, Skill3Svg, Skill4Svg, Skill5Svg} from "../../assets/svg";

const BGSkills = () => {
    return (
        <div className={"absolute inset-0 -z-10"}>
            <BGContainer>
                <div className={"w-full"}>
                    <Skill1Svg className={"absolute -top-10 left-5 min-w-[150px] w-1/6"}/>
                    <Skill2Svg className={"absolute top-32 right-5 w-1/6"}/>
                    <div className={"absolute top-1/4 left-0 w-full overflow-x-hidden"}>
                        <Skill3Svg className={"mx-auto w-4/5 max-w-[600px] transform rotate-12"}/>
                    </div>
                    <img
                        className={"absolute bottom-0 right-0 w-2/6"}
                        src={"skill3.png"}
                        alt={"roncoder portfolio"}/>
                    <Skill4Svg className={"absolute bottom-0 lg:-bottom-32 right-1/4 w-1/6"}/>
                    <Skill5Svg className={"absolute bottom-32 left-5 w-1/6"}/>
                </div>
            </BGContainer>
        </div>
    );
};

export default BGSkills
