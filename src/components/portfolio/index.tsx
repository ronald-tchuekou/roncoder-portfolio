import React from 'react';
import Container from "../container";
import SectionHeader from "../section-header";
import BGPortfolio from "./bg-experience";

const Portfolio = () => {
    return (
        <section
            id={"portfolio"}
            className={"relative w-full py-10 md:py-20"}>
            <BGPortfolio/>
            <Container>
                <div className={"w-full"}>
                    <SectionHeader label={"Mon portfolio"}/>

                </div>
            </Container>
        </section>
    );
};

export default Portfolio
