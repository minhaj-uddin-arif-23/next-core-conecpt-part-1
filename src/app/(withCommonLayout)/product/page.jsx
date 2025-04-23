
export  default async function  Products() {
//   cache:"force-cache"
// production run time build use [ISR] --> Increamental Static Revalidations
    const data = await fetch(`http://localhost:5000/products`,{
        next:{
          revalidate:10
        }
    })
    const result = await data.json()
    // console.log(result)


  return (
    <div>
      <div className='text-xl mt-10 mb-10'>
        
      </div>
   

  
    {/* data fetcing */}
    <div className="product-container ">
  {result?.map((ans) => (
    <div key={ans.id} className="product-card">
      
      <div className="product-details">
        <h1 className="product-name">{ans.name}</h1>
        <p className="product-price">${ans.price}</p>
        <p className="product-description">{ans.description}</p>
        <p className="product-stock">
          {ans.inStock ? "In Stock" : "Out of Stock"}
        </p>
      <button className='btn btn-sm my-5  text-center mx-auto'>Buy Now</button>
      </div>
    </div>
  ))}
</div>
    </div>
  )
}
