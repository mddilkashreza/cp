import React from 'react'
import { Link } from 'react-router-dom'
import Product from '../Data/Product'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


export default function Home() {
    var soul=Product.filter((i)=>i.cat==1)
    var sop=Product.filter((j)=>j.id==50)
    var der=Product.filter((f)=>f.cat==4)
    var fog=Product.filter((j)=>j.cat==5)
    var got=Product.filter((d)=>d.cat==6)
    var hot=Product.filter((e)=>e.cat==2)
    var top=Product.filter((e)=>e.cat==8)
    var you=Product.filter((e)=>e.cat==9)
   
  return (
    <>

  <section className='block8 py-3'>
    <div className='container'>
        <img src='https://api.chakrapath.com/Content/AdImages/20222028596_hybrid-bachat_800x150px(1).gif' alt='' className='w-100'/>
    </div>
  </section>

<section className='block9 py-4'>
    <div className='container'>
        <div className='row'>
            {soul.slice(0,5).map((e)=>(
            <div className='col-lg-12'>
            <div className='of'></div>
 <div className="shadow-lg p-3 mb-5 bg-body rounded mb-3">
   
 <h5 className="card-title fw-bolder fs-1 text-center"><Link className='text-decoration-none fr' to={`/details/${e.id}`}>{e.title}</Link></h5>
 <Link className='text-decoration-none' to={`/details/${e.id}`}><img src={e.img} className="card-img-top py-2" alt="..." /></Link>
  <div className="card-body">
    
    <p className="card-text text-center py-3"><Link className='text-decoration-none jk' to={`/details/${e.id}`}>{e.vit}</Link></p>
    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>

            </div>
            ))}
        </div>
    </div>
</section>

<section className='block10 py-3'>
    <div className='container'>
        <div className='row'>
            {sop.map((q)=>(
            <div className='col-lg-12'>
        
   <div className="shadow-lg p-3 mb-5 bg-body rounded mb-3">
   <div className='of'></div>
            <h2 className=' phone'>कविता</h2>
   <h5 className="card-title fw-bolder fs-1  text-center fr mb-5"><Link className='text-decoration-none fr' to={`/details/${q.id}`}>{q.title}</Link></h5>
   <Link className='text-decoration-none' to={`/details/${q.id}`}><img src={q.img} className="card-img-top lk" alt="..." /></Link>
  <div className="card-body">
    
  <p className="card-text text-center py-3"><Link className='text-decoration-none jk' to={`/details/${q.id}`}>{q.vit}</Link></p>
    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>

            </div>
            ))}
        </div>
    </div>
</section>


 <section className='block11 py-5'>
    <div className='container'>
        <div className='row'>
            <div className='col-lg-6'>
            <div className='ogh'></div>
            <h2 className=' phones fs-4'>‘सुदूरपश्चिमको विकासको ग्यारेण्टी एमालेले लिन्छ’</h2>
            {der.slice(0,1).map((d)=>(
  <div className="shadow-lg p-3 mb-5 bg-body rounded mb-3 py-3">
 <Link to={`/details/${d.id}`}> <img src={d.img} className="card-img-top" alt="..." /></Link>
  <div className="card-body">
    
    <p className="card-text text-start py-2 "><Link className='text-decoration-none jk' to={`/details/${d.id}`}>{d.min}</Link></p>
    
  </div>
</div>
))}

            </div>
            <div className='col-lg-6'>
            <div className='og'></div>
            <h2 className=' phone mx-4'>भर्खरै</h2>
            {der.slice(1,5).map((g)=>(
   <div className=" shadow-lg p-3 mb-2 bg-body rounded ms-4 " style={{maxWidth: 540}}>
  <div className="row">
    <div className="col-md-4">
    <Link to={`/details/${g.id}`}> <img src={g.img} className="img-fluid" alt="..." /></Link>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title text-start ps-4 fw-bold fs-6"><Link className='text-decoration-none jk' to={`/details/${g.id}`}>{g.title}</Link></h5>
      </div>
    </div>
  </div>
</div>
))}

            </div>
        </div>
    </div>
 </section>

 <section className='block12 py-5'>
    <div className='container'>
        <div className='op'></div>
        <h2 className=' phone'>ट्रेन्डिङ</h2>
        <div className='row'>
            
                
            <Swiper
      
     
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
        {fog.slice(0,7).map((g)=>(
      <SwiperSlide>
        <div className='col-lg-4'>
   <div className="shadow-lg p-3 mb-5 bg-body rounded" style={{width: '22rem'}}>
   <Link  to={`/details/${g.id}`}> <img src={g.img} className="card-img-top w-100 you" alt="..." /></Link>
  <div className="card-body">
    <p className="card-text text-start fw-bold py-3 gin"><Link className='text-decoration-none jk' to={`/details/${g.id}`}>{g.title}</Link></p>
    <p className=' gin'><Link className='text-decoration-none jk' to={`/details/${g.id}`}>{g.min}</Link></p>
  </div>
</div>


        </div>
      </SwiperSlide>
      ))}
     
      
    </Swiper>
            
        </div>
    </div>
 </section>


 <section className='block11 py-5'>
    <div className='container'>
    <div className='op'></div>
        <h2 className=' phone'>मुख्य समाचार</h2>
        <div className='row'>
            <div className='col-lg-6'>
           
            {got.slice(4,5).map((d)=>(
  <div className="shadow-lg p-3 mb-5 bg-body rounded mb-3 py-3">
 <Link to={`/details/${d.id}`}> <img src={d.img} className="card-img-top" alt="..." /></Link>
  <div className="card-body">
    
    <p className="card-text text-start py-2 fw-bolder"><Link className='text-decoration-none jk' to={`/details/${d.id}`}>{d.title}</Link></p>
    <p className='text-start ps-1 '><Link className='text-decoration-none jk' to={`/details/${d.id}`}>{d.min}</Link> </p>
  </div>
</div>
))}

            </div>
            <div className='col-lg-6'>
            
            {got.slice(1,4).map((g)=>(
   <div className=" shadow-lg p-3 mb-2 bg-body rounded ms-4 " style={{maxWidth: 540}}>
  <div className="row">
    <div className="col-md-4">
    <Link to={`/details/${g.id}`}> <img src={g.img} className="img-fluid  py-4" alt="..." /></Link>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title text-start ps-4 fw-bold fs-6 mb-2"><Link className='text-decoration-none jk' to={`/details/${g.id}`}>{g.title}</Link></h5>
        <p className='text-start ps-4 '><Link className='text-decoration-none jk' to={`/details/${g.id}`}>{g.min}</Link> </p>
        <p className='text-start mx-5 '> <Link className='text-decoration-none jk' to={`/details/${g.id}`}> Saibaihernus</Link></p>
      </div>
    </div>
  </div>
</div>
))}

            </div>
        </div>
    </div>
 </section>

 <section className='block11 py-5'>
    <div className='container'>
        <div className='row'>
            <div className='col-lg-8'>
            <div className='opp'></div>
            <h2 className=' phones fs-4'>बिचार</h2>
            {der.slice(0,1).map((d)=>(
  <div className="shadow-lg p-3 mb-5 bg-body rounded mb-3 py-3">
 <Link to={`/details/${d.id}`}> <img src={d.img} className="card-img-top" alt="..." /></Link>
  <div className="card-body">
  <p className="card-text text-start py-2 fw-bolder"><Link className='text-decoration-none jk' to={`/details/${d.id}`}>{d.title}</Link></p>
    <p className="card-text text-start py-2 "><Link className='text-decoration-none jk' to={`/details/${d.id}`}>{d.min}</Link></p>
    
  </div>

</div>
))}
     

            </div>
            <div className='col-lg-4'>
           
       <img src='https://api.chakrapath.com/Content/AdImages/20212126435_madanbhandari.gif' alt='' className='w-100 mb-4'/>
       <img src='https://api.chakrapath.com/Content/AdImages/20223904065_advert-yeti.gif' alt='' className='w-100 '/>

            </div>
        </div>
    </div>
 </section>
   <section className='block13'>
    <div className='container'>
        <div className='row'>
            {fog.slice(6,8).map((j)=>(
            <div className='col-lg-4'>
  <div className="shadow-lg p-3 mb-5 bg-body rounded" style={{width: '18rem'}}>
   <Link to={`/details/${j.id}`}><img src={j.img} className="card-img-top" alt="..." /></Link> 
  <div className="card-body">
    <h5 className='body-title fw-bold text-start py-1'><Link className='text-decoration-none jk' to={`/details/${j.id}`}>{j.title}</Link></h5>
    <p className="card-text fw-bold"><Link className='text-decoration-none jk' to={`/details/${j.id}`}>{j.min}</Link> </p>
  </div>
</div>

            </div>
            ))}
        </div>
    </div>
   </section>

   <section className='block11 py-5'>
    <div className='container'>
    <div className='op'></div>
        <h2 className=' phone'>अर्थ</h2>
        <div className='row'>
          {hot.slice(0,3).map((y)=>(
            <div className='col-lg-4'>
   <div className="shadow-lg p-3 mb-5 bg-body rounded mb-3">
   <Link to={`/details/${y.id}`}><img src={y.img} className="card-img-top py-2" alt="..." /></Link>
  <div className="card-body">
    <h5 className="card-title fw-bold py-2"><Link className='text-decoration-none jk' to={`/details/${y.id}`}>{y.title}</Link></h5>
    <p className="card-text "><Link className='text-decoration-none jk' to={`/details/${y.id}`}>{y.min}</Link></p>
    
  </div>
</div>

            </div>
           ))}
        </div>
    </div>
 </section>

 <section className='block11 py-5'>
    <div className='container'>
    <div className='op'></div>
        <h2 className=' phone'>समाज</h2>
        <div className='row'>
            <div className='col-lg-6'>
           
            {got.slice(4,5).map((d)=>(
  <div className="shadow-lg p-3 mb-5 bg-body rounded mb-3 py-3">
 <Link to={`/details/${d.id}`}> <img src={d.img} className="card-img-top" alt="..." /></Link>
  <div className="card-body">
    
    <p className="card-text text-start py-2 fw-bolder"><Link className='text-decoration-none jk' to={`/details/${d.id}`}>{d.title}</Link></p>
    <p className='text-start ps-1 '><Link className='text-decoration-none jk' to={`/details/${d.id}`}>{d.min}</Link> </p>
  </div>
</div>
))}

            </div>
            <div className='col-lg-6'>
            
            {got.slice(1,4).map((g)=>(
   <div className=" shadow-lg p-3 mb-2 bg-body rounded ms-4 " style={{maxWidth: 540}}>
  <div className="row">
    <div className="col-md-4">
    <Link to={`/details/${g.id}`}> <img src={g.img} className="img-fluid  py-4" alt="..." /></Link>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title text-start ps-4 fw-bold fs-6 mb-2"><Link className='text-decoration-none jk' to={`/details/${g.id}`}>{g.title}</Link></h5>
        <p className='text-start ps-4 '><Link className='text-decoration-none jk' to={`/details/${g.id}`}>{g.min}</Link> </p>
        <p className='text-start mx-5 '> <Link className='text-decoration-none jk' to={`/details/${g.id}`}> Saibaihernus</Link></p>
      </div>
    </div>
  </div>
</div>
))}

            </div>
        </div>
    </div>
 </section>

 <section className='block12 py-5'>
    <div className='container'>
        <div className='op'></div>
        <h2 className=' phone'>खेल</h2>
        <div className='row'>
            
                
            <Swiper
      
     
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
        {fog.slice(0,7).map((g)=>(
      <SwiperSlide>
        <div className='col-lg-4'>
   <div className="shadow-lg p-3 mb-5 bg-body rounded" style={{width: '22rem'}}>
   <Link  to={`/details/${g.id}`}> <img src={g.img} className="card-img-top w-100 you" alt="..." /></Link>
  <div className="card-body">
    <p className="card-text text-start fw-bold py-3 gin"><Link className='text-decoration-none jk' to={`/details/${g.id}`}>{g.title}</Link></p>
    <p className='gin'><Link className='text-decoration-none jk' to={`/details/${g.id}`}>{g.min}</Link></p>
  </div>
</div>


        </div>
      </SwiperSlide>
      ))}
     
      
    </Swiper>
            
        </div>
    </div>
 </section>

 <section className='block11 py-5'>
    <div className='container'>
        <div className='row'>
            <div className='col-lg-8'>
            <div className='opp'></div>
            <h2 className=' phones fs-4'>अपराध</h2>
            {der.slice(0,1).map((d)=>(
  <div className="shadow-lg p-3 mb-5 bg-body rounded mb-3 py-3">
 <Link to={`/details/${d.id}`}> <img src={d.img} className="card-img-top" alt="..." /></Link>
  <div className="card-body">
  <p className="card-text text-start py-2 fw-bolder"><Link className='text-decoration-none jk' to={`/details/${d.id}`}>{d.title}</Link></p>
    <p className="card-text text-start py-2 "><Link className='text-decoration-none jk' to={`/details/${d.id}`}>{d.min}</Link></p>
    
  </div>

</div>
))}
     

            </div>
            <div className='col-lg-4'>
           
       <img src='https://api.chakrapath.com/Content/AdImages/20212126435_madanbhandari.gif' alt='' className='w-100 mb-4'/>
       <img src='https://api.chakrapath.com/Content/AdImages/20223904065_advert-yeti.gif' alt='' className='w-100 '/>

            </div>
        </div>
    </div>
 </section>
   <section className='block13'>
    <div className='container'>
        <div className='row'>
            {fog.slice(6,8).map((j)=>(
            <div className='col-lg-4'>
  <div className="shadow-lg p-3 mb-5 bg-body rounded" style={{width: '18rem'}}>
   <Link to={`/details/${j.id}`}><img src={j.img} className="card-img-top" alt="..." /></Link> 
  <div className="card-body">
    <h5 className='body-title fw-bold text-start py-1'><Link className='text-decoration-none jk' to={`/details/${j.id}`}>{j.title}</Link></h5>
    <p className="card-text fw-bold"><Link className='text-decoration-none jk' to={`/details/${j.id}`}>{j.min}</Link> </p>
  </div>
</div>

            </div>
            ))}
        </div>
    </div>
   </section>

   <section className='block12 py-5'>
    <div className='container'>
        <div className='op'></div>
        <h2 className=' phone'>सम्पादकीय</h2>
        <div className='row'>
            
                
            <Swiper
      
     
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
        {fog.slice(0,7).map((g)=>(
      <SwiperSlide>
        <div className='col-lg-4'>
   <div className="shadow-lg p-3 mb-5 bg-body rounded" style={{width: '22rem'}}>
   <Link  to={`/details/${g.id}`}> <img src={g.img} className="card-img-top w-100 you" alt="..." /></Link>
  <div className="card-body">
    <p className="card-text text-start fw-bold py-3 gin"><Link className='text-decoration-none jk' to={`/details/${g.id}`}>{g.title}</Link></p>
    <p className='gin'><Link className='text-decoration-none jk' to={`/details/${g.id}`}>{g.min}</Link></p>
  </div>
</div>


        </div>
      </SwiperSlide>
      ))}
     
      
    </Swiper>
            
        </div>
    </div>
 </section>

 <section className='block11 py-5'>
    <div className='container'>
    <div className='op'></div>
        <h2 className=' phone'>राजनीति</h2>
        <div className='row'>
            <div className='col-lg-6'>
           
            {got.slice(0,1).map((d)=>(
  <div className="shadow-lg p-3 mb-5 bg-body rounded mb-3 py-3">
 <Link to={`/details/${d.id}`}> <img src={d.img} className="card-img-top" alt="..." /></Link>
  <div className="card-body">
    
    <p className="card-text text-start py-2 fw-bolder"><Link className='text-decoration-none jk' to={`/details/${d.id}`}>{d.title}</Link></p>
    <p className='text-start ps-1 '><Link className='text-decoration-none jk' to={`/details/${d.id}`}>{d.min}</Link> </p>
  </div>
</div>
))}

            </div>
            <div className='col-lg-6'>
            
            {got.slice(2,6).map((g)=>(
   <div className=" shadow-lg p-3 mb-2 bg-body rounded ms-4 " style={{maxWidth: 540}}>
  <div className="row">
    <div className="col-md-4">
    <Link to={`/details/${g.id}`}> <img src={g.img} className="img-fluid  py-4" alt="..." /></Link>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title text-start ps-4 fw-bold fs-6 mb-2"><Link className='text-decoration-none jk' to={`/details/${g.id}`}>{g.title}</Link></h5>
        <p className='text-start ps-4 '><Link className='text-decoration-none jk' to={`/details/${g.id}`}>{g.min}</Link> </p>
        <p className='text-start mx-5 '> <Link className='text-decoration-none jk' to={`/details/${g.id}`}> Saibaihernus</Link></p>
      </div>
    </div>
  </div>
</div>
))}

            </div>
        </div>
    </div>
 </section>

 <section className='block11 py-5'>
    <div className='container'>
    <div className='op'></div>
        <h2 className=' phone'>अन्तरवार्ता</h2>
        <div className='row'>
          {hot.slice(3,6).map((y)=>(
            <div className='col-lg-4'>
   <div className="shadow-lg p-3 mb-5 bg-body rounded mb-3">
   <Link to={`/details/${y.id}`}><img src={y.img} className="card-img-top py-2" alt="..." /></Link>
  <div className="card-body">
    <h5 className="card-title fw-bold py-2"><Link className='text-decoration-none jk' to={`/details/${y.id}`}>{y.title}</Link></h5>
    <p className="card-text "><Link className='text-decoration-none jk' to={`/details/${y.id}`}>{y.min}</Link></p>
    
  </div>
</div>

            </div>
           ))}
        </div>
    </div>
 </section>

      
 <section className='block11 py-5'>
    <div className='container'>
    <div className='op'></div>
        <h2 className=' phone'>प्रशासन</h2>
        <div className='row'>
          {fog.slice(0,3).map((y)=>(
            <div className='col-lg-4'>
   <div className="shadow-lg p-3 mb-5 bg-body rounded mb-3">
   <Link to={`/details/${y.id}`}><img src={y.img} className="card-img-top py-2 you" alt="..." /></Link>
  <div className="card-body">
    <h5 className="card-title fw-bold py-1 gi"><Link className='text-decoration-none jk' to={`/details/${y.id}`}>{y.title}</Link></h5>
    <p className=" gi py-4"><Link className='text-decoration-none jk' to={`/details/${y.id}`}>{y.min}</Link></p>
    
  </div>
</div>

            </div>
           ))}
        </div>
    </div>
 </section>
  <section className='block14 py-4'>
    <div className='container'>
        <img src='https://api.chakrapath.com/Content/AdImages/20215933430_machapuchre.gif' alt='' className='w-100'/>
    </div>
  </section>
  <section className='block11 py-5'>
    <div className='container'>
    <div className='op'></div>
        <h2 className=' phone'>भिडियो</h2>
        <div className='row shadow-lg p-3 mb-5 bg-body rounded'>
            {soul.slice(0,1).map((t)=>(
         <div className='col-lg-6'>
  
          <Link to={`/details/${t.id}`}> <img src={t.img} alt='' className='w-100'/></Link>
         </div>
         
         ))}
           {soul.slice(0,1).map((t)=>(
         <div className='col-lg-6'>
  
           <h5 className='fw-bold py-1'>  <Link className='text-decoration-none jk' to={`/details/${t.id}`}> {t.title}</Link></h5>
         </div>
         
         ))}
        </div>
    </div>
 </section>
     <section className='block20'>
      <div className='container'>
        <div className='row'>
            {top.slice(0,4).map((o)=>(
          <div className='col-lg-3'>
    <div className="shadow-lg p-3 mb-5 bg-body rounded mx-2" style={{width: '15rem'}}>
 <Link to={`/details/${o.id}`}> <img src={o.img} className="card-img-top py-1  you" alt="..." /></Link>
  <div className="card-body">
    <p className="card-title fw-bold gin"><Link className='text-decoration-none jk'  to={`/details/${o.id}`}>{o.title}</Link></p>
  </div>
</div>

          </div>
          ))}
        </div>
      </div>
     </section>


     <section className='block11 py-5'>
    <div className='container'>
    <div className='op'></div>
        <h2 className=' phone'>गाउँ / नगर</h2>
        <div className='row'>
          {hot.slice(3,6).map((y)=>(
            <div className='col-lg-4'>
   <div className="shadow-lg p-3 mb-5 bg-body rounded mb-3">
   <Link to={`/details/${y.id}`}><img src={y.img} className="card-img-top py-2" alt="..." /></Link>
  <div className="card-body">
    <h5 className="card-title fw-bold py-2"><Link className='text-decoration-none jk' to={`/details/${y.id}`}>{y.title}</Link></h5>
    <p className="card-text "><Link className='text-decoration-none jk' to={`/details/${y.id}`}>{y.min}</Link></p>
    
  </div>
</div>

            </div>
           ))}
        </div>
    </div>
 </section>

 <section className='block11 py-5'>
    <div className='container'>
    <div className='op'></div>
        <h2 className=' phone'>सूचना प्रविधि</h2>
        <div className='row'>
          {hot.slice(0,3).map((y)=>(
            <div className='col-lg-4'>
   <div className="shadow-lg p-3 mb-5 bg-body rounded mb-3">
   <Link to={`/details/${y.id}`}><img src={y.img} className="card-img-top py-2" alt="..." /></Link>
  <div className="card-body">
    <h5 className="card-title fw-bold py-2"><Link className='text-decoration-none jk' to={`/details/${y.id}`}>{y.title}</Link></h5>
    <p className="card-text "><Link className='text-decoration-none jk' to={`/details/${y.id}`}>{y.min}</Link></p>
    
  </div>
</div>

            </div>
           ))}
        </div>
    </div>
 </section>


 <section className='block11 py-5'>
    <div className='container'>
    <div className='op'></div>
        <h2 className=' phone'>स्वास्थ्य, शिक्षा</h2>
        <div className='row'>
          {hot.slice(3,6).map((y)=>(
            <div className='col-lg-4'>
   <div className="shadow-lg p-3 mb-5 bg-body rounded mb-3">
   <Link to={`/details/${y.id}`}><img src={y.img} className="card-img-top py-2" alt="..." /></Link>
  <div className="card-body">
    <h5 className="card-title fw-bold py-2"><Link className='text-decoration-none jk' to={`/details/${y.id}`}>{y.title}</Link></h5>
    <p className="card-text "><Link className='text-decoration-none jk' to={`/details/${y.id}`}>{y.min}</Link></p>
    
  </div>
</div>

            </div>
           ))}
        </div>
    </div>
 </section>


 <section className='block12 py-5'>
    <div className='container'>
        <div className='op'></div>
        <h2 className=' phone'>ग्यालरी</h2>

   <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={3} aria-label="Slide 4" />
  </div>
  <div className="carousel-inner">
     {you.slice(0,4).map((z)=>(
    <div className="carousel-item active">
     <Link to={`/details/${z.id}`}> <img src={z.img} className="d-block w-100" alt="..." /></Link>
      <div className="carousel-caption d-none d-md-block">
        <h5 className='bg-success fw-bold fs-2'><Link className='text-decoration-none jk' to={`/details/${z.id}`}>{z.title}</Link></h5>
        
      </div>
    </div>
    ))}
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

        
    </div>
 </section>
    </>
  )
}
