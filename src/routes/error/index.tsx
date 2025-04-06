import Error from "@/components/error";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/error/")({
  component: RouteComponent,
  errorComponent: Error,
});

function RouteComponent() {
  //throw new Error("test");
  return <div>Hello "/error/"!</div>;
}
