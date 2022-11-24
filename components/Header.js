import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import List from '../Data/List';
import Cat from '../page/Cat';
import Home from '../page/Home';
import Single from '../page/Single';
import List2 from '../Data/List2';
import Text from 'react-text-typing';

export default function Header() {
  return (
    <>
    
    <section className='block1'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6'>
                <div className='two'>
                    <p>१९ कात्तिक, २०७९Saturday, November 5, 2022, 9:54 AM</p>
                </div>
                </div>
                <div className='col-lg-6'>
                <div className='three text-end '>
                <i class="bi bi-facebook"></i> <i class="bi bi-twitter ps-2"></i> <i class="bi bi-youtube ps-2"></i> <i class="bi bi-instagram ps-2"></i>
                </div>
                </div>
            </div>
            
        </div>
    </section>
    <section className='block2 py-4'>
        <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <img src='https://api.chakrapath.com/Content/AdImages/20225039026_prabhubagawan20214630487_1000x100-auto-loan(1).gif' alt='' className='w-100'/>
              </div>
            </div>
        </div>
    </section>

    <nav className="navbar navbar-expand-lg bg-white">
  <div className="container">
    <Link className="navbar-brand" to="/">
        <img src='https://www.chakrapath.com/assets/img/chakrapath/chakrapath-logo.png' alt='' className='w-100'/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-bold">
        <li className="nav-items">
          <Link className="nav-link active" aria-current="page" to="/">आवरण</Link>
        </li>
        
        {List.slice(0,3).map((s)=>(
        <li className="nav-item">
          <Link className="nav-link ps-4" to={`/cat/${s.id}`}>{s.catName}</Link>
        </li>
        ))}
       
        
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-controls me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-danger me-5" type="submit">English</button>
      </form>
    </div>
  </div>
</nav>

<div className='lined'></div>
<nav className="navbar navbar-expand-lg bg-white">
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        {List.slice(3,17).map((d)=>(
        <li className="nav-item ps-2 ">
          <Link className="nav-link" to={`/cat/${d.id}`}>{d.catName}</Link>
        </li>
        ))}
      
      </ul>
     
    </div>
  </div>
</nav>
<div className='lined'></div>

<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cat/:cid" element={<Cat />} />
        <Route path="/details/:id" element={<Single />} />
        
       
      </Routes>
    </>
  )
}
