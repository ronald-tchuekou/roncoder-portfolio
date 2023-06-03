import React from 'react';
import BGContainer from "../bg-container";
import {BannerIllustrationSvg} from "../../assets/svg";

const BGBanner = () => {
    return (
        <div className={"absolute top-0 left-0 right-0 -z-10"}>
            <BGContainer>
                <div className={"bg-flue aspect-square w-4/5 top-0 left-0"}/>
                <div className={"w-full flex flex-col md:flex-row justify-end"}>
                    <BannerIllustrationSvg className={"w-full md:w-1/2"}/>
                </div>
            </BGContainer>
        </div>
    );
};

export default BGBanner