import SideNav from "@/app/ui/dashboard/sidenav";

/**
 * That's it. You may not see a difference in your application in development, 
 * but you should notice a performance improvement in production. 
 * Next.js will prerender the static parts of your route and defer the dynamic parts until the user requests them.
 * The great thing about Partial Prerendering is that you don't need to change your code to use it. 
 * As long as you're using Suspense to wrap the dynamic parts of your route, 
 * Next.js will know which parts of your route are static and which are dynamic.
 */
export const experimental_ppr = true;

// One benefit of using layouts in Next.js is that on navigation, only the page components update while the layout won't re-render.
// This is called partial rendering which preserves client-side React state in the layout when transitioning between pages.
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
