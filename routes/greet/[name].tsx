import { PageProps } from "$fresh/server.ts";

export default function GreetPage(props: PageProps) {
  const { name } = props.params;
  return (
    <main>
      <p>Welcome to Froggy's Fresh Frogplants, {name}!</p>
      <p>We hope that you enjoy your stay.</p>
    </main>
  );
}
