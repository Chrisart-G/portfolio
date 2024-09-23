
import './content.css';
import Workcaro from '../carousel/workcaro';
import Loadmore from '../Button/loadmore';

function Content() {
  return (
    <div className="content">
      <header className="content">
        <h1>My Sample Works</h1>
        <Workcaro/>
        <Loadmore/>

        


      </header>
    </div>
  );
}

export default Content;
