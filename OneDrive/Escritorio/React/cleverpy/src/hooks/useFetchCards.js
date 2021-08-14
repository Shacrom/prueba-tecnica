import { useEffect, useState } from "react"
import { getCards } from "../helpers/getCards";

export const useFetchCards = (userId) => {
    const [cards, setCards] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getCards(userId)
            .then(data => {
                setCards({
                    data: data,
                    loading: false
                });
            })
    }, [userId]);

    return cards;
}