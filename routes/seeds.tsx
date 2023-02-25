import { getSeeds} from "../utils/get-seeds.ts";

export const handler: Handler<Seed[] | null> = {
  async GET(_, ctx) {
    const seeds = await getSeeds();
    return ctx.render(seeds);
  }
};

export default function Seeds({ data: seeds }) {
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
        {seeds.map(seed => {
          let name = seed.Name;
          let startDate = seed["Start date"];
          let sow = seed.sow;
          let seedType = seed["seed type"];
          return (
            <tr key={name}>
              <td>{name}</td>
              <td>{startDate}</td>
              <td>{sow}</td>
              <td>{seedType}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
