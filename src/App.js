import './App.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  donate,
  selectCount,
} from './counter/counter';

function App() {
    const count = useSelector(selectCount);
  const dispatch = useDispatch();


  return (
    <div className="App" style={{ 
        backgroundImage: `url("bg.jpg")` , 
        position: 'center',
  repeat: 'no-repeat',
  size: 'cover',
     }}>

          <div className="container-fluid px-1 py-5 mx-auto">
    <div className="row d-flex justify-content-center">
        <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
           <img src="logo.png" alt="logo" className="logo"></img> <h1>Bank Balance App</h1>
            <div className="card">
                <h2 className="text-center mb-4">Welcome User</h2>
                <form className="form-card">
               <img src="user.png" alt="user" className="user"></img>
               <div className="form-group col-12 flex-column "> </div>
               <div className="row">
                        <div className="form-group col-6 " id="balance"> <button disabled className="btn-block btn-light">YOUR BALANCE</button>  </div><div className="form-group col-sm-6"> <button disabled className="btn-block btn-light">{count}</button> </div>
                    </div>
                
                    <div className="row">
                        <div className="form-group col-6 "> <label className="form-control-label px-3">ADD 10,000</label>  </div><div className="form-group col-sm-6"> <button type="button" className="btn-block btn-success"   onClick={() => dispatch(increment())}>+ 10,000</button> </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-6"> <label className="form-control-label px-3">NEGATE 10,000</label>  </div><div className="form-group col-sm-6"> <button type="button" className="btn-block btn-secondary"  onClick={() => dispatch(decrement())}>- 10,000</button> </div>
                    </div>  
                    <div className="row">
                        <div className="form-group col-12">  <button type="button" className="btn-block btn-primary"  onClick={() => dispatch(donate())}>DONATE MY CASH TO CHARITY</button> </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
    </div>
  );
}

export default App;
