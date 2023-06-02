export function getGray(index: number, value: number) {
    const variants = [
        'rgba(255, 255, 255, 0.2)', // 0
        'rgba(255, 255, 255, 0.4)', // 1
        'rgba(255, 255, 255, 0.6)', // 2
        'rgba(255, 255, 255, 0.8)', // 3
        'rgba(255, 255, 255, 1)' // 4
    ]

    switch (index) {
        case 1:
            if (value >= 10)
                return variants[4]
            if (value < 10 && value >= 7.5)
                return variants[3]
            if (value < 7.5 && value >= 5)
                return variants[2]
            if (value < 5 && value >= 2.5)
                return variants[1]
            return variants[0]

        case 2:
            if (value >= 20)
                return variants[4]
            if (value < 20 && value >= 15)
                return variants[3]
            if (value < 15 && value >= 10)
                return variants[2]
            if (value < 10 && value >= 5)
                return variants[1]
            return variants[0]

        case 3:
            if (value >= 30)
                return variants[4]
            if (value < 30 && value >= 22.5)
                return variants[3]
            if (value < 22.5 && value >= 15)
                return variants[2]
            if (value < 15 && value >= 7.5)
                return variants[1]
            return variants[0]

        case 4:
            if (value >= 40)
                return variants[4]
            if (value < 40 && value >= 30)
                return variants[3]
            if (value < 30 && value >= 20)
                return variants[2]
            if (value < 20 && value >= 10)
                return variants[1]
            return variants[0]

        case 5:
            if (value >= 50)
                return variants[4]
            if (value < 50 && value >= 37.5)
                return variants[3]
            if (value < 37.5 && value >= 25)
                return variants[2]
            if (value < 25 && value >= 12.5)
                return variants[1]
            return variants[0]

        case 6:
            if (value >= 60)
                return variants[4]
            if (value < 60 && value >= 45)
                return variants[3]
            if (value < 45 && value >= 30)
                return variants[2]
            if (value < 30 && value >= 15)
                return variants[1]
            return variants[0]

        case 7:
            if (value >= 70)
                return variants[4]
            if (value < 70 && value >= 52.5)
                return variants[3]
            if (value < 52.5 && value >= 35)
                return variants[2]
            if (value < 35 && value >= 17.5)
                return variants[1]
            return variants[0]

        case 8:
            if (value >= 80)
                return variants[4]
            if (value < 80 && value >= 60)
                return variants[3]
            if (value < 60 && value >= 40)
                return variants[2]
            if (value < 40 && value >= 20)
                return variants[1]
            return variants[0]

        case 9:
            if (value >= 90)
                return variants[4]
            if (value < 90 && value >= 66)
                return variants[3]
            if (value < 66 && value >= 44)
                return variants[2]
            if (value < 44 && value >= 22)
                return variants[1]
            return variants[0]

        case 10:
            if (value >= 100)
                return variants[4]
            if (value < 100 && value >= 75)
                return variants[3]
            if (value < 75 && value >= 50)
                return variants[2]
            if (value < 50 && value >= 25)
                return variants[1]
            return variants[0]

        default:
            return variants[0]
    }
}