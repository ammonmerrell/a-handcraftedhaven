import { generateYAxis } from '@/app/lib/utils';
// import { CalendarIcon } from '@heroicons/react/24/outline';
// import { lusitana } from '@/app/ui/fonts';
import { product } from '@/app/lib/definitions';
import { fetchProduct } from '@/app/lib/data';
import styles from '../page.module.css'


// This component is representational only.
// For data visualization UI, check out:
// https://www.tremor.so/
// https://www.chartjs.org/
// https://airbnb.io/visx/


export default async function ProductChart() { 
  const product = await fetchProduct(); 

  const chartHeight = 350;
  // NOTE: Uncomment this code in Chapter 7

  const { yAxisLabels, topLabel } = generateYAxis(product);

  if (!product || product.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  return (
    <div className="w-full md:col-span-4">
      {/* <h2 className={` mb-4 text-xl md:text-2xl`}>
        Recent Revenue
      </h2> */}
      {/* NOTE: Uncomment this code in Chapter 7 */}

      <div className="rounded-xl bg-gray-50 p-4">
        <div className="sm:grid-cols-13 mt-0 grid grid-cols-12 items-end gap-2 rounded-md bg-white p-4 md:gap-4">

          {product.map((month) => (
            <div key={month.name} className="flex flex-col items-center gap-2">
              <div
                className="w-full rounded-md bg-blue-300"
                
              ></div>
              <img src={month.image_url} alt={month.name} width={360}height={360}></img>
              <p className="{styles.title}">
               {month.name}</p>
                <span className={styles.artist}>{month.description}</span>
                <p className="{styles.price}">${month.price}</p>    
                <p>{month.tags}</p>          
            </div>
          ))}
        </div>
        <div className="flex items-center pb-2 pt-6">
          {/* <CalendarIcon className="h-5 w-5 text-gray-500" /> */}
          {/* <h3 className="ml-2 text-sm text-gray-500 ">Last 12 months</h3> */}
        </div>
      </div>
    </div>
  );
}