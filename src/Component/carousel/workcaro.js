
import './workcaro.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
function Workcaro() {
  return (
    <div className="Workcaro">
        <div className='works'>
        <Carousel responsive={responsive}>
         <div className='cwork1'>
            <div className='sample1'>
                

            </div>
            <div className='scon'>
            <h3>Web-Design</h3><br></br>
            <h2>GoldmanSuchs Web</h2>
            </div>
         </div>
         <div className='cwork2'>
         <div className='sample2'>

           </div>
           <div className='scon'>
           <h3>Web-Design</h3><br></br>
           <h2>GoldmanSuchs Web</h2>
           </div>
         </div>
         <div className='cwork3'>
         <div className='sample3'>

             </div> 
             <div className='scon'>
             <h3>Web-Design</h3><br></br>
             <h2>Header Desing 2</h2>
             </div>
         </div>
         <div className='cwork4'>
            <div className='sample4'>

           </div>
           <div className='scon'>
           <h3>App Design</h3><br></br>
           <h2>No Application</h2>
           </div>
         </div>
         </Carousel>
        </div>
    </div>
  );
}

export default Workcaro;
