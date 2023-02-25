import { Handlers, PageProps } from "$fresh/server.ts";
import { getSeeds, Seed } from "../utils/get-seeds.ts";

export const handler: Handlers<Seed[]> = {
  async GET(_, ctx) {
    const seeds = await getSeeds();
    return ctx.render(seeds);
  },
};

export default function Seeds({ data: seeds }: PageProps<Seed[]>) {
  const createTableRow = (seed: Seed) => {
    const name = seed.Name;
    const startDate = seed["Start date"];
    const sow = seed.sow;
    const seedType = seed["seed type"];
    return (
      <tr key={name}>
        <td>{name}</td>
        <td>{startDate}</td>
        <td>{sow}</td>
        <td>{seedType}</td>
      </tr>
    );
  };
  const tableRows = seeds.map(createTableRow);
  return (
    <div>
      <h1>Seeds</h1>
      <table>
        <tr>
          <th>Name</th>
          <th>Start Date</th>
          <th>Sow</th>
          <th>Seed Type</th>
        </tr>
        {tableRows}
      </table>
    </div>
  );
}
