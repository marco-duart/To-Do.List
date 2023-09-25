import { HomeStyle } from "../../ui/styles/Home";
import Header from "../../ui/components/Header";
import NewCard from "../../ui/components/ToDoListTable/NewCard";

const New = () => {
  return (
    <>
      <Header />
      <HomeStyle>
        <NewCard />
      </HomeStyle>
    </>
  );
};

export default New;
