
import './Blcontent.css';
import Seeres from '../Button/seeres';
import Hireme from '../Button/Hireme';

function Blcontent() {
  return (
    <div className="Blcontent">
        <h1>Hello, I'm</h1><br></br>
        <h2>Chris Art Getida</h2><br></br>
        <h3>Full Stack Developer</h3><br></br>
        <div className='iconsni'>
          <div className='pic1'></div>
          <div className='pic2'></div>
          <div className='pic3'></div>
          <div className='pic4'></div>
          <div className='pic5'></div>
          <div className='pic6'></div>
        </div>
        

        <Hireme/>
        <Seeres/>


    </div>
  );
}

export default Blcontent;
