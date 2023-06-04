import React from 'react';
import BGContainer from "../bg-container";
import {Contact4Svg} from "../../assets/svg";

const BGContact = () => {
    return (
        <div className={"absolute inset-0 -z-10"}>
            <BGContainer>
                <div className={"w-full h-full relative"}>
                    <div className={"bg-flue aspect-square w-3/5 bottom-0 left-0"}/>
                    <Contact4Svg className={"absolute top-10 right-0 w-2/3 md:w-1/2"}/>
                </div>
            </BGContainer>
        </div>
    );
};

export default BGContact
