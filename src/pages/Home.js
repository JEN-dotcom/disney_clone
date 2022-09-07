import { useEffect } from 'react';
import db from '../firebase';
import Movies from '../components/Movies';
import Viewers from '../components/Viewers';
import ImgSlider from '../components/ImgSlider';
import styled from 'styled-components';
import { useDispatch } from "react-redux";
import { collection, getDocs } from "firebase/firestore";
import { setMovies } from '../features/movie/movieSlice';


const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const querySnapshot = async () => {
      const snapshot = await getDocs(collection(db, "movies"));

      let tempMovies = snapshot.docs.map(doc => {
        return { id: doc.id, ...doc.data() }
      });
      
      dispatch(setMovies(tempMovies));
    }
    querySnapshot();
  }, []);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies />
    </Container>
  );
};

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;
  
  &:before {
    background: url("images/home-background.png") center center / cover
    no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`

export default Home;