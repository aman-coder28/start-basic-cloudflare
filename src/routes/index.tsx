import { createFileRoute } from "@tanstack/solid-router";
import { getData } from "~/lib/query";

export const Route = createFileRoute("/")({
  loader: () => getData(),
  component: Home,
});

function Home() {
  const data = Route.useLoaderData();

  return (
    <div class="p-2">
      <h3>Welcome Home!!!</h3>
      <p>{data()?.message}</p>
      <p>{data().myVar}</p>
    </div>
  );
}
