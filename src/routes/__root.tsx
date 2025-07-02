import { createRootRoute, Outlet } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: () => (
    <div className="flex flex-col border-0 bg-[#030712e6]">
      <Outlet />
    </div>
  ),
});
