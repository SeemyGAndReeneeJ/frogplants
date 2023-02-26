import { Handlers, PageProps } from "$fresh/server.ts";
import { getSeeds, Seed } from "../utils/get-seeds.ts";

export const handler: Handlers<Seed[]> = {
  async GET(_, ctx) {
    const seeds = await getSeeds();
    return ctx.render(seeds);
  },
};

export default function Seeds({ data: seeds }: PageProps<Seed[]>) {
  const tdClass = "px-6 py-4 text-sm text-gray-500";
  const createTableRow = (seed: Seed) => {
    const name = seed.Name;
    const startDate = seed["Start date"];
    const sow = seed.sow;
    const seedType = seed["seed type"];
    return (
      <tr key={name}>
        <td class={tdClass}>{name}</td>
        <td class={tdClass}>{startDate}</td>
        <td class={tdClass}>{sow}</td>
        <td class={tdClass}>{seedType}</td>
      </tr>
    );
  };
  const tableRows = seeds.map(createTableRow);
  const thClass = "px-6 py-2 text-xs text-gray-500";
  return (
    <div class="container flex justify-center mx-auto">
      <div class="flex flex-col">
        <div class="w-full">
          <div class="border-b border-gray-200 shadow">
            <table>
              <thead class="bg-green-100">
                <tr>
                  <th class={thClass}>Name</th>
                  <th class={thClass}>Start Date</th>
                  <th class={thClass}>Sow</th>
                  <th class={thClass}>Seed Type</th>
                </tr>
              </thead>
              <tbody class="bg-green-50">{tableRows}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
