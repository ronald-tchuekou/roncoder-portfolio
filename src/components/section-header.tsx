import React from 'react';

type SectionHeaderProps = {
    label: string
};

const SectionHeader = (props: SectionHeaderProps) => {
    const {label} = props

    return (
        <div className={"flex flex-row w-full"}>
            <div className={"flex-none space-y-3"}>
                <div className={"float-right h-3 rounded-full bg-primary-light w-[100px]"}></div>
                <h2 className={"title text-gray-200"}>{label}</h2>
                <div className={"float-left h-3 rounded-full bg-primary-light w-[100px]"}></div>
            </div>
            <div className={"w-full"}/>
        </div>
    );
};

export default SectionHeader
