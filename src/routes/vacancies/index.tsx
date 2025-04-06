import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/vacancies/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/vacancies/"!</div>;
}
