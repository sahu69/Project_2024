import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Careers() {
  return (
   <>
<h1 className='text-center'>This is career component</h1>
<hr></hr>
<button><Link to='permanent'>permanent jobs</Link>
</button>

<button><Link to='contract'>contract jobs</Link>
</button>
<Outlet/>
   </>
  )
}
