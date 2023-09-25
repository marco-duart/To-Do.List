interface IData {
    "id": number
    "title": string
    "description": string
    "category": string
    "priority": string
    "column": string
}

interface ICardContextData {
    cards: IData[];
    setCards: React.Dispatch<React.SetStateAction<IData[]>>;
}

interface ICardContextProviderProps {
    children: ReactNode;
}

type Props = {
    data: IData[]
}