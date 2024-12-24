import Main from "../components/Main/Main";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

const LoadingPage = () => {
  return (
    <Main page="loading">
      <LoadingSpinner size="fullpage" />
    </Main>
  );
};

export default LoadingPage;
