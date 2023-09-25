import { useEffect, useContext } from "react";
import { GetCards } from "../../data/services/card";
import { CardContext } from "../../data/contexts/CardContext";
import { HomeStyle } from "../../ui/styles/Home";
import Column from "../../ui/components/ToDoListTable/Column";
import Header from "../../ui/components/Header";

const Home = () => {
  const context = useContext(CardContext);
  if (!context) {
    //tratar em caso de null
    return null;
  }
  const { setCards } = context;

  useEffect(() => {
    const fetchData = async () => {
      const newData = await GetCards();
      if (newData) {
        setCards(newData);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Header />
      <HomeStyle>
        <Column column="TODO" />
        <Column column="DONE" />
      </HomeStyle>
    </>
  );
};

export default Home;
