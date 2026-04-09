import { fetchItem, fetchProduct } from "../lib/data";
import { ProductItem } from "./revinue-chart";

export default async function Table({
  query
//   currentPage,
}: {
  query: string;
//   currentPage: number;
}) {
  console.log("query is "+query)
  const item = await fetchItem(query);
  const thing =item[0]
  console.log("thig is "+thing.name)
  return(
    // below is page ripped from product chart
    
    <div className="w-full md:col-span-4">
      {/* <h2 className={` mb-4 text-xl md:text-2xl`}>
        Recent Revenue
      </h2> */}
      {/* NOTE: Uncomment this code in Chapter 7 */}

      <div className="rounded-xl bg-gray-50 p-4">
        <div className="sm:grid-cols-13 mt-0 grid grid-cols-12 items-end gap-2 rounded-md bg-white p-4 md:gap-4">

          
            <div key={thing.name} className="flex flex-col items-center gap-2">
              <div
                className="w-full rounded-md bg-blue-300"
                
              ></div>
              <img src={thing.image_url} alt={thing.name} width={360}height={360}></img>
              <p className="{styles.title}">
               {thing.name}</p>
                <span >{thing.description}</span>
                <p className="{styles.price}">${thing.price}</p>    
                <p>{thing.tags}</p>   
                {/* <Link href={`view/${thing.id}`}
                // onNavigate={(e) => {fetchItem(`${month.id}`)}}
                >{thing.name}</Link>    */}
                
            </div>
            </div>
            </div>
            </div>
            )
}