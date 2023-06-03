type  PortfolioModel = {
    image: string
    title: string
    description: string
    owner: string
    type: "web" | "mobile"
    links: Array<string>
}

export default PortfolioModel
