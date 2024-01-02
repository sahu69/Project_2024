import React from 'react';
import UserList from '../userlist/UserList';
import "./center.css";
import Product from '../products/Product';
import ToggleShow from '../toggle/ToggleShow';
import Password from '../passwordvisibility/Password';
import ProductsSearch from '../products/ProductsSearch';
import FormDemo1 from '../Form/FormDemo1';
import HttpDemo1 from '../http/HttpDemo1';
import HttpDemo2 from '../http/HttpDemo2';
import HttpDemo3 from '../http/HttpDemo3';
import HttpDemo4 from '../http/HttpDemo4';
import Crud from '../assignment/Crud';
import AxiosCrud from '../assignment/AxiosCrud';
import TodoDmo from '../Todocrud/TodoDmo';
import AxiosCrud2 from '../assignment/AxiosCrud2';
import RouteContainer from "./RouteContainer";


export default function Center() {
  return (
    <div className='cd'>
      {/* <UserList/> */}
      {/* <Product/> */}
      {/* <ToggleShow/> */}
      {/* <hr/> */}
      {/* <Password/> */}
      {/* <ProductsSearch/> */}
      {/* <FormDemo1/> */}
      {/* <HttpDemo2/> */}
      {/* <HttpDemo4/> */}
      {/* <Crud/> */}
      {/* <AxiosCrud/> */}
      {/* <Crud/> */}
      {/* <TodoDmo/> */}
     {/* <AxiosCrud2/> */}
     <RouteContainer/>
     
    
    </div>
  )
}
