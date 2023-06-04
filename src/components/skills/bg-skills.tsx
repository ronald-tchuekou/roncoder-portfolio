import React from 'react';
import BGContainer from "../bg-container";
import {Skill1Svg, Skill2Svg, Skill3Svg, Skill4Svg, Skill5Svg} from "../../assets/svg";

const BGSkills = () => {
    return (
        <div className={"absolute inset-0 -z-10"}>
            <BGContainer>
                <div className={"w-full h-full relative"}>
                    <div className={"bg-flue aspect-square w-3/5 top-3/4 md:top-1/2 right-0"}/>
                    <div className={"absolute -top-10 left-5"}>
                        <Skill1Svg className={" min-w-[150px] w-1/6"}/>
                    </div>
                    <div className={"absolute top-32 right-5 left-0 flex justify-end"}>
                        <Skill2Svg className={"w-1/6"}/>
                    </div>
                    <div className={"absolute inset-0 top-96 flex justify-center items-center"}>
                        <Skill3Svg className={"mx-auto w-[200px] sm:w-[350px] md:w-[500px] transform rotate-12"}/>
                    </div>
                    <div className={"absolute left-0 right-0 bottom-0 flex justify-end"}>
                        <img
                            className={"w-2/6"}
                            src={"skill3.png"}
                            alt={"roncoder portfolio"}/>
                    </div>
                    <Skill4Svg className={"absolute -bottom-5 lg:-bottom-32 right-1/4 w-1/6"}/>
                    <Skill5Svg className={"absolute bottom-32 left-5 w-1/6"}/>
                </div>
            </BGContainer>
        </div>
    );
};

export default BGSkills
