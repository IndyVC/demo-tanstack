import {
  createFileRoute,
  Link,
  Outlet,
  redirect,
  useRouter,
} from "@tanstack/react-router";

export const Route = createFileRoute("/_unauthenticated")({
  component: AuthLayout,
  beforeLoad: async () => {
    const isAuthenticated = false;
    console.log("isAuthenticated", isAuthenticated);
    if (!isAuthenticated) {
      throw redirect({
        to: "/login",
      });
    }
  },
});

function AuthLayout() {
  const router = useRouter();
  const navigate = Route.useNavigate();

  return (
    <div className="p-2 h-full">
      <h1>Authenticated Route</h1>
      <p>This route's content is only visible to authenticated users.</p>
      <ul className="py-2 flex gap-2">
        <li>
          <Link
            to="/dashboard"
            className="hover:underline data-[status='active']:font-semibold"
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/invoices"
            className="hover:underline data-[status='active']:font-semibold"
          >
            Invoices
          </Link>
        </li>
        <li></li>
      </ul>
      <hr />
      <Outlet />
    </div>
  );
}
