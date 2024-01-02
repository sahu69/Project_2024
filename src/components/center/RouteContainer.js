import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import AboutUs from '../aboutus/AboutUs'
import Careers from '../Carrers/Careers'
import NotFound from '../Notfound/NotFound'

import ProductDetails from '../products/ProductDetails';
import ProductDetail from '../products/ProductDetail';
import PermanentJob from '../Carrers/PermanentJob'
import ContractJob from '../Carrers/ContractJob'
import ProtectedRoutes from '../../route/ProtectedRoutes'
// import Product2 from '../products/Product2';
const Product2 = React.lazy(() => import('../products/Product2'));


export default function RouteContainer() {
  return (
    <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/home' element={<Home/>}></Route>
        <Route exact path='/aboutus' element={<AboutUs/>}></Route>
        <Route exact path='/careers' element={<Careers/>}>
        <Route index  element={<PermanentJob/>}/>
        <Route exact path='permanent' element={<PermanentJob/>}/>
        <Route exact path='contract' element={<ContractJob/>}/>
        </Route>
        
        <Route exact path='/product' element={<ProtectedRoutes>
         <Suspense fallback={<h1>Loading.....</h1>}>
         <Product2/>
         </Suspense>
        </ProtectedRoutes>}></Route>
        
        <Route exact path='/productdetails/:id' element={<ProductDetails/>}></Route>
        <Route exact path="/productdetail" element={<ProductDetail />} />
        <Route exact path='*' element={<NotFound/>}></Route>
    </Routes>
  )
}
