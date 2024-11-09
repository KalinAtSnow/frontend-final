import { useEffect, useState } from "react"
import { apiService } from "./Data/CardService"
import { Card } from "./Data/Interfaces"

export function ViewAllCards() {
    const [cardData, setCardData] = useState<Card[]>()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await apiService.Get()
                setCardData(data) 
            } catch (error) {
                console.error("Error fetching card data:", error)
            }
        }

        fetchData() 
    }, []) 

    if (cardData == undefined) {
        return <p>Loading...</p>
    }

    return <p>the card's name is {cardData[0]?.cardname}</p>
}
