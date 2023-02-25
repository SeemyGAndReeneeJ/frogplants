const URL = "https://api.airtable.com/v0/appq90yoZBiHLHokL/seeds";

export type Seed = {
  ["Name"]: string;
  ["Start date"]: string;
  sow: "direct" | "start";
  ["seed type"]: "vegetable" | "flower";
};

export async function getSeeds(): Promise<Seed[]> {
  const seeds = await fetch(URL, {
    headers: {
      Authorization: `Bearer ${Deno.env.get("AIRTABLE_API_KEY")}`,
    },
  }).then((res) => res.json());
  return seeds.records.map((record) => record.fields);
}
