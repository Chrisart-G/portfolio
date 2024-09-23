
import './myinfo.css';



function Myinfo() {
  return (
    <div className="myinfo">
      <h1>ABOUT ME</h1>
      <h2>WHO AM I</h2>
      <p>
      Hello there! I'm Chris Art, a web developer and app designer with a passion for creating
beautiful and functional digital experiences. With [Number] years of experience in the industry, I've
had the pleasure of working on a variety of projects for clients ranging from small startups to large corporations.<br></br>
<br></br>

My approach to design is all about finding the perfect balance between aesthetics and usability.
I believe that a great design should not only look good, but also enhance the user's experience
and make their interaction with the product as seamless as possible.
      </p>
      <div className='skills'>
        <h2>My Skill</h2>
        <div className='tools'>
          <div className='usetool1'></div>
          <div className='usetool2'></div>
          <div className='usetool3'></div>
          <div className='usetool4'></div>
        </div>

      </div>
      
    </div>
  );
}

export default Myinfo;
