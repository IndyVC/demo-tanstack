import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_unauthenticated/profile")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_unauthenticated/profile"!</div>;
}
