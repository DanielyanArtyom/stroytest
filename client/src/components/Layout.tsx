import React,{FC} from 'react'

interface MyProps {
    children:React.ReactNode
}

const Layout:FC<MyProps> = ({children}) => {
  return (
   <section className="tw-max-w-xl tw-w-full tw-mx-auto tw-p-10"> 
    {children}
   </section>
  )
}

export default Layout