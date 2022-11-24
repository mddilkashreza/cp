import React from 'react'
import { Link, useParams } from 'react-router-dom'

import Product from '../Data/Product'


export default function Cat() {
    let{cid}=useParams()
    var bomb=Product.filter((a)=>a.cat==cid)
  return (
    <>
    <section className='block3 py-5'>
        <div className='container'>
            <div className='line'></div>
            {bomb.slice(0,1).map((s)=>(
            <h2 className=' phone'>{s.sin}</h2>
            ))}
            <div className='row'>
               
           <div className='col-lg-9'>
            <div className='row'>
            {bomb.slice(0,8).map((w)=>(
                <div className='col-lg-4'>
                 

 <div className="shadow-lg p-3 mb-5 bg-body rounded mb-5" style={{width: '16rem'}}>
  <img src={w.img} className="card-img-top you" alt="..." />
  <div className="card-body">
    <h5 className="card-title fw-bold fs-6 text-start py-2">{w.title}</h5>
     <hr/>
    <Link to={`/details/${w.id}`} className="btn btn-danger ppp">विस्तृतमा पढ्नुस्</Link>
  </div>
</div>

                </div>
                 ))}
            </div>
           
 

           </div>
          

           <div className='col-lg-3 ps-2 '>
  <div className=" mb-3" style={{width: '18rem'}}>
  <img src="https://api.chakrapath.com/Content/AdImages/20212126435_madanbhandari.gif" className="card-img-top" alt="..." />
  
</div>
<div className=" mb-3" style={{width: '18rem'}}>
  <img src="https://api.chakrapath.com/Content/AdImages/20210108532_290x145-pixels-mega-tik-banking.gif" className="card-img-top" alt="..." />
  
</div>
<div className="" style={{width: '18rem'}}>
  <img src="https://api.chakrapath.com/Content/AdImages/20223904065_advert-yeti.gif" className="card-img-top" alt="..." />
  
</div>

           </div>
              
              
            </div>
        </div>
    </section>
    </>
  )
}
