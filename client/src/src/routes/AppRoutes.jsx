import React from 'react'
import {BrowserRouter,Route, Routes , Link} from 'react-router-dom';
import MilkProducts                         from '../pages/MilkProducts';
import PaneerAndTofuProducts                from '../pages/PaneerAndTofuProducts';
import CurdProducts                         from '../pages/CurdProducts';
import BreadProducts                        from '../pages/BreadProducts';
import VermicelliProducts                   from '../pages/VermicelliProducts';
import PeanutButter                         from '../pages/PeanutButter';
import milk                                 from '../assets/milk.jpg';
import paneer                               from '../assets/paneer3.jfif';
import curd                                 from '../assets/curd.jfif';
import vermicelli                           from '../assets/vermicelli.jfif';
import bread                                from '../assets/bread.jfif';
import peanut                               from '../assets/peanut.jfif';
import poha                                 from '../assets/poha.jfif';
import bar                                  from '../assets/bars.jfif';
import egg                                  from '../assets/egg2.jfif';
import oats                                 from '../assets/oats.jfif';
import "../components/AppRoute.css";

function AppRoutes() {
  return (
    <>
     <BrowserRouter>
      <div className="app-layout">
      <nav>
        <Link to="/"              style={{ textDecoration: 'none', color : "black" }}><img src={milk}/>         <p>Milk Products</p>    </Link>    
        <Link to="/PaneerAndTofu" style={{ textDecoration: 'none', color : "black" }}><img src={paneer}/>       <p>Paneer And Tofu</p>  </Link>    
        <Link to="/PeanutButter"  style={{ textDecoration: 'none', color : "black" }}><img src={peanut}/>       <p>Peanut Butter</p>    </Link>    
        <Link to="/Curd"          style={{ textDecoration: 'none', color : "black" }}><img src={curd}/>         <p>Curd</p>             </Link>    
        <Link to="/Bread"         style={{ textDecoration: 'none', color : "black" }}><img src={bread}/>        <p>Bread</p>            </Link>    
        <Link to="/Vermicelli"    style={{ textDecoration: 'none', color : "black" }}><img src={vermicelli}/>   <p>Vermicelli</p>       </Link>    
        <Link to="/bar"           style={{ textDecoration: 'none', color : "black" }}><img src={bar}/>          <p>Bars</p>             </Link>    
        <Link to="/poha"          style={{ textDecoration: 'none', color : "black" }}><img src={poha}/>         <p>Poha</p>             </Link>      
        <Link to="/oats"          style={{ textDecoration: 'none', color : "black" }}><img src={oats}/>         <p>Poha</p>             </Link>
        <Link to="/egg"           style={{ textDecoration: 'none', color : "black" }}><img src={egg}/>          <p>Eggs</p>             </Link>    
        </nav> 
        <main className="route-content">
        <Routes>
        <Route path='/'              element= {<MilkProducts/>}>          </Route>
        <Route path='/PaneerAndTofu' element= {<PaneerAndTofuProducts/>}> </Route>
        <Route path='/PeanutButter'  element= {<PeanutButter/>}>          </Route>
        <Route path='/Curd'          element= {<CurdProducts/>}>          </Route>
        <Route path='/Bread'         element= {<BreadProducts/>}>         </Route>
        <Route path='/Vermicelli'    element= {<VermicelliProducts/>}>    </Route>
        <Route path='/bar'           element= {<></>}>                    </Route>
        <Route path='/poha'          element= {<></>}>                    </Route>
        <Route path='/egg'           element= {<></>}>                    </Route>
        </Routes>
      </main>
     </div>
     </BrowserRouter>
    </>
  )
}

export default AppRoutes