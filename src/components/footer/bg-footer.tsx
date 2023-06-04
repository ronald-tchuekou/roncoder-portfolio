import React from 'react';
import BGContainer from "../bg-container";

const BGFooter = () => {
    return (
        <div className={"absolute inset-0 -z-10"}>
            <BGContainer>
                <div className={"w-full h-full relative"}>
                    <img
                        className={"aspect-auto w-[200px] md:w-[300px] absolute -left-10 -top-10 md:-top-32"}
                        src={"footer-1.png"}
                        alt={"roncoder portfolio"}/>
                    <img
                        className={"aspect-auto w-[200px] md:w-[300px] absolute right-0 -bottom-10"}
                        src={"footer-2.png"}
                        alt={"roncoder portfolio"}/>
                </div>
            </BGContainer>
        </div>
    );
};

export default BGFooter
