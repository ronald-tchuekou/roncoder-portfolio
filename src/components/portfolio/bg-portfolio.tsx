import React from 'react';
import BGContainer from "../bg-container";
import {Portfolio4Svg} from "../../assets/svg";

const BGPortfolio = () => {
    return (
        <div className={"absolute inset-0 -z-10"}>
            <BGContainer>
                <div className={"w-full h-full relative"}>
                    <div className={"bg-flue aspect-square w-4/5 top-1/2 left-0"}/>
                    <div className={"absolute -top-32 md:-top-10 left-0 md:-left-10"}>
                        <Portfolio4Svg className={"w-24 sm:w-36 md:w-52"}/>
                    </div>
                    <div className={"absolute -bottom-40 right-0 w-full md:w-1/2 opacity-30"}>
                        <img
                            className={"aspect-auto w-full"}
                            alt={"roncoder"}
                            src={"/experience/experience-1.png"}/>
                    </div>
                    <div className={"absolute top-0 right-0 w-1/2 md:w-1/4"}>
                        <img
                            className={"aspect-auto w-full"}
                            alt={"roncoder"}
                            src={"/experience/experience-3.png"}/>
                    </div>
                    <div className={"absolute left-0 right-0 top-1/4 flex justify-center items-center"}>
                        <img
                            className={"aspect-auto w-4/5 md:w-1/2"}
                            alt={"roncoder"}
                            src={"/experience/experience-2.png"}/>
                    </div>
                    <div className={"absolute bottom-1/4 left-0 right-0 flex justify-end"}>
                        <Portfolio4Svg className={"w-36 md:w-52"}/>
                    </div>
                </div>
            </BGContainer>
        </div>
    );
};

export default BGPortfolio
