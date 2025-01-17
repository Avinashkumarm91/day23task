
import React,{useState} from 'react'

function Card({cart,setCart}) {
  let [toggle, settoggle]=useState(true)
    
return <>
<div className="col mb-5">
  <div className="card h-100">
    <div className="badge bg-dark text-white position-absolute" style={{top:"0.5rem", right:"0.5rem"}}>Sale</div>
                            <img className="card-img-top" src="data:image/jpeg;base64,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" alt="..." />
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">Fruits</h5>
                                   
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                                    <span className="text-muted text-decoration-line-through">$8.00</span>
                                    $5.00
                                </div>
                            </div>
    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
    <div className="text-center">
    {
       toggle?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
        setCart(cart+1)
        settoggle(false)
       }}>
        Add to Cart
      </button>:
      <button className="btn btn-outline-dark mt-auto" onClick={()=>{
       setCart(cart-1)
       settoggle(true)
      }}>
       Remove from Cart
      </button>
    }
    </div>
    </div>
 </div>
</div>
                   
  </>
}

export default Card
