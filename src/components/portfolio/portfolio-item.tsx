import React from 'react';
import PortfolioModel from "../../models/portfolio.model";

type PortfolioItemProps = {
    portfolio: PortfolioModel
}

const PortfolioItem: React.FC<PortfolioItemProps> = (props) => {
    const {portfolio} = props

    return (
        <div className={"relative skill-item flex flex-col gap-3 mt-3 z-0"}>
            <div className={"w-full overflow-hidden rounded-lg"}>
                <img
                    src={portfolio.image}
                    className={"aspect-auto w-full"}
                    alt={portfolio.title}/>
            </div>
            <h2 className={`text-lg md:text-xl font-normal ${
                portfolio.type === 'web' ? 'text-accent' : 'text-primary-light'
            }`}>
                {portfolio.title}
            </h2>
            <p className={"text-sm md:text-base text-gray-300"}>
                {portfolio.description}
            </p>
            <div className={`w-full flex flex-row ${
                (portfolio.type === "web" && portfolio.links[0]) ? "justify-between" : "justify-center"
            } items-center`}>
                <div className={"uppercase text-gray-500 text-center"}>
                    {portfolio.owner}
                </div>
                {(portfolio.type === "web" && portfolio.links[0]) ? (
                    <a
                        href={portfolio.links[0]}
                        className={"text-primary-flight text-sm p-2 hover:underline"}>
                        Voire le site
                    </a>
                ) : null}
            </div>
            {portfolio.type === "mobile" ? (
                <div className={"w-full flex flex-row justify-between"}>
                    <a href={portfolio.links[0]}>
                        <img
                            src={"/appstore.png"}
                            className={"aspect-auto h-8 md:h-10"}
                            alt={"AppStore"}/>
                    </a>
                    <a href={portfolio.links[1]}>
                        <img
                            src={"/playstore.png"}
                            className={"aspect-auto h-8 md:h-10"}
                            alt={"PlayStore"}/>
                    </a>
                </div>
            ) : null}
        </div>
    );
};

export default PortfolioItem
