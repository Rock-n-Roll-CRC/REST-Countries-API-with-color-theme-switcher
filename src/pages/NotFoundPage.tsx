import Main from "../components/Main/Main";
import Message404 from "../components/Message404/Message404";

const NotFoundPage = () => {
  return (
    <Main page="not-found">
      <Message404 />
    </Main>
  );
};

export default NotFoundPage;
