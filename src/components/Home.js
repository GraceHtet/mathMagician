import homeStyle from './styles/home.module.css';

const Home = () => (
  <>
    <h2>Welcome to our page</h2>
    <div className={homeStyle.info}>
      <p>
        A calculation is a deliberate mathematical process that transforms one
        or more inputs into one or more outputs or results. The term is used in
        a variety of senses, from the very definite arithmetical calculation of
        using an algorithm.
      </p>
      <p>
        Math magic tricks can liven up any math class and create a sense of
        wonder and curiosity about math. Not only that, math magic creates a new
        context for algebraic reasoning as students go beyond What is the
        answer? to explore What is the trick?
      </p>
    </div>
  </>
);

export default Home;
