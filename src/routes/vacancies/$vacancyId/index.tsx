import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const schema = z.object({
  indy: z.string().min(1).optional(),
});

export const Route = createFileRoute("/vacancies/$vacancyId/")({
  component: RouteComponent,
  validateSearch: (search) => {
    return schema.parse(search);
  },
  beforeLoad: async ({ search }) => {
    console.log("BEFORE LAOD");
    return {
      ...search,
    };
  },
});

function RouteComponent() {
  const { indy } = Route.useSearch();
  return <div>Search: {indy}</div>;
}
