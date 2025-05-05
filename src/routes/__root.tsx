import { createRootRoute, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <div className=' flex flex-col bg-[rgba(3,7,18,0.9)]'>
      <hr />
      <Outlet />
    </div>
  ),
})