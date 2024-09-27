//import logo from './logo.svg';
//import './App.css';
// import MobileDetect from "mobile-detect";
// const md = new MobileDetect(window.navigator.userAgent);
// console.log(md.mobile());
// //import { tbsGridConfigs } from "./tbs.grid.configs.js";
// import { tbsGridConfigs } from "tbsgrid/dist/tbsgrid-configs.js";
// console.dir(tbsGridConfigs)
// import { TbsGrid } from "tbsgrid";

import TbsGrid from "./tbsgrid";

//const grid1 = new TbsGrid('grid1');
function App() {
  return (
    <div className="App">
      <br/>
        {<TbsGrid></TbsGrid>}
    </div>
  );
}

export default App;
