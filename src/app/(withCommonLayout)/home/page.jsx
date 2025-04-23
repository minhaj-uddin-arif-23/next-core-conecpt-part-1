import React from 'react'
import styles from './home.module.css'
import Gallary from '@/app/gallary/page'
import Link from 'next/link'
export  default async function  HomePage() {
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
        <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel debitis harum minus architecto, magni iure inventore. Quae, nihil dolorem rem consequatur excepturi asperiores reprehenderit maiores quisquam commodi repudiandae adipisci officiis!</h1>
      </div>
      <h1 className={styles.bg_colour}>HomePage</h1>


      <Gallary />
    {/* data fetcing */}
    <div className="product-container">
  {result.slice(0,2)?.map((ans) => (
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
  <div>
    <Link href={'/product'} className='btn bg-blue-600 my-5  text-center mx-auto rounded-lg text-white'>See More</Link>
  </div>
</div>
    </div>
  )
}
