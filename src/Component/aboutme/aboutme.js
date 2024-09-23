
import './aboutme.css';
import Brpic from '../Banner/Brpic';
import Myinfo from './myinfo';


function Aboutme() {
  return (
    <div className="aboutme">
      <div className='photome'>
      <Brpic/>
      </div>
      <div className='minfo'>
        <Myinfo/>
      </div>
    
    </div>
  );
}

export default Aboutme;
