import { fetchItem, fetchProduct } from "../lib/data";

export default async function Table({
  query
//   currentPage,
}: {
  query: string;
//   currentPage: number;
}) {
  const item = await fetchItem(query);
  <div className="md:hidden">
            {item?.map((invoice) => (
              <div
                key={invoice.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              ></div>))},
              </div>
}