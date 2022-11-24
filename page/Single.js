import React from 'react'
import { Link, useParams } from 'react-router-dom'

import Product from '../Data/Product'


export default function Single() {
    let{id,cid}=useParams()
    var bom=Product.find((a)=>a.id==id)
    var con=Product.filter((a)=>a.cat==1)
  return (
    <>
      <section className='block6 py-5'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-9'>
  <div className=" ">
  <div className="card-body">
    <h5 className="card-title fw-bolder fs-1 py-3 kio">{bom.title}</h5>
   
  </div>
  
</div>
<div className='bol'>
<img src={bom.img} className="card-img-bottom shadow-lg p-3 mb-5 bg-body rounded" alt="..." />

</div>
<div className='dol shadow-lg p-3 mb-5 bg-body rounded fw-bold fs-4 p-4'>
    <p>{bom.para}</p>
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
       
       <section className='block7 py-5'>
        
        <div className='container'>
        <h5 className='mb-3'>प्रतिक्रिया</h5>
            <div className='row'>
                <div className='col-lg-10'>
                  
   <form className='sd  shadow-lg p-3 mb-5 bg-body rounded'>
   <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">नाम *</label>
    <input type="text" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">इमेल *</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
   
  </div>
  
 <div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">टिप्पणी *</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
</div>

  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-danger df">पठाउनुहाेस्</button>
</form>

<p className='fw-bold '>टिप्पणीहरू (०)</p>
<div className='fog'>
    <img src='https://api.chakrapath.com/Content/AdImages/20222028596_hybrid-bachat_800x150px(1).gif' alt='' className='w-100 mb-2'/>
    <img src='https://api.chakrapath.com/Content/AdImages/20215933430_machapuchre.gif' alt='' className='w-100 mb-2'/>
    <img src='https://api.chakrapath.com/Content/AdImages/20213157162_1120x120.gif' alt='' className='w-100'/>
</div>


                </div>
            </div>
        </div>
       </section>

       <section className='block8 py-5'>
        <div className='container'>
        <div className='lines'></div>
        <h2 className='phone'>यो पनि पढ्नुहोस्</h2>
        <div className='row'>
            {con.slice(0,3).map((f)=>(
        <div className='col-lg-4'>
                 

                 <div className="shadow-lg p-3 mb-5 bg-body rounded mb-5" style={{width: '18rem'}}>
                  <img src={f.img} className="card-img-top " alt="..." />
                  <div className="card-body">
                    <h5 className="card-title fw-bold fs-6 text-start">{f.title}</h5>
                     <hr/>
                    <Link to={`/details/${f.id}`} className="btn btn-danger ppp">विस्तृतमा पढ्नुस्</Link>
                  </div>
                </div>
                
                                </div>
                                ))}
        </div>
        </div>
       </section>




    </>
  )
}
