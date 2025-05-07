import { createRootRoute, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <div className=' border-0 flex flex-col bg-[#030712e6]'>
      <Outlet />
    </div>
  ),
})