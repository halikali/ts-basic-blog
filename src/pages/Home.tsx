import Card from "components/Card";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "store/actions/postActions";

const Home = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getPosts());
  }, []);


  return (
    <div className="container">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Home;
