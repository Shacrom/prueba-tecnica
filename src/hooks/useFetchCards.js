import { useEffect, useState } from "react"
import { getCards } from "../helpers/getCards";

export const useFetchCards = (userId) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getCards(userId)
      .then(data => {
        setCards(data);
      })
  }, [userId]);

  return cards;
}