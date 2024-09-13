import { Outlet } from 'react-router-dom'
import { SiteHeader } from './site-header'

export function AppLayout() {
  return (
    <>
      <SiteHeader />
      <div className="flex flex-grow flex-col">
        <div className="container mx-auto flex flex-grow flex-col px-4 py-4 md:px-0">
          <Outlet />
        </div>
      </div>
      {/* <div className='container px-4 md:px-8'>
        <Footer />
      </div> */}
    </>
  )
}