import '../styles/BodyArea.css';

const Projects = () => {
  return (
    <>
      <div className='projects jetbrains-mono'>
        <div className='projects--title'>
          <h1>#Projects</h1>
          <p>Our projects</p>
        </div>
        <div className='projects--content'>
          <div className='projects--left'>
            <h1>FMD</h1>
            <p>
              Project “FaroMayDay” is an
              autonomous armoured vehicle for transporting wounded people.
              It is modern solution for military.
              The project depicts a 2.5m x 1m x 1m autonomous land-based tracked vehicle designed to evacuate soldiers from the battlefield in a quick and unobtrusive manner.
              The wounded will be loaded aboard the vehicle using a mechanism
              that works on the principle of a production belt used in
              factories or airports. With its help,
              the wounded will also be seated on the on-board bed.
              The vehicle will have a built-in GPS,
              with the help of which it will determine its current location,
              and computer vision algorithms will be used to detect obstacles.
              By combining these technologies, the robot will be able to
              maneuver smoothly and navigate through difficult terrain.
              The robot's base speed will be about 70 kph,
              and its weight will be 1,500 kg.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
