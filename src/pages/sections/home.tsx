import { TypeAnimation } from "react-type-animation";

export const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home-container">
          <div className="home-intro">
            <h1>Hi, I'm Raymond John</h1>
            <p  className="home-typeanimation">
              <TypeAnimation
      sequence={[
        'Programmer',
        2000,
        'Gamer',
        2000,
        'Prodigy',
        2000,
        () => {
          console.log('Sequence completed'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em', display: 'inline-block' }}
    />
              </p>
              <div className="home-introduction">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi voluptatibus laborum maxime, quam optio sapiente dolorem illum placeat illo eius itaque eveniet beatae nihil adipisci sed tempora ipsa ipsam ab?
              </div>
            <div className="home-btn-box">
              <button className="section-button-resume">RESUME</button>
            </div>
          </div>
          <img className="model-image" src="/images/model-imgs.png" alt="Example" />
        </div>
      </div>
    </>
  );
}

export default Home;
