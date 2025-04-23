
export default async  function  SingleProduct({params,searchParams}) {
  const product_Id = await params.productId
  console.log(product_Id)
  return (
    <div>
      <h1>SingleProduct {product_Id}</h1>
    </div>
  )
}
