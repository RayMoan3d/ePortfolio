import { TypeAnimation } from "react-type-animation";

export const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home-container">
          <div className="home-intro">
            <h1>Hi, I am Raymond John</h1>
            <p  className="home-typeanimation">
              <TypeAnimation
      sequence={[
        'I am a Programmer',
        2000,
        'I am a Gamer',
        2000,
        'I am a Prodigy',
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
