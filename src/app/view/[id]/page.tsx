import { Card } from '@/app/ui/cards'
// import ProductChart from '@/app/ui/revinue-chart';
import LatestInvoices from '@/app/ui/latest-invoices';
import {  } from '@/app/page';
import { fetchProduct } from '@/app/lib/data';
import { quintessential } from '@/app/ui/fonts';
import { fetchLatestInvoices } from '@/app/lib/data';
import {ProductItem} from '@/app/ui/revinue-chart';
 
export default async function Page() {
    const product = await fetchProduct();
    //   const latestInvoices = await fetchLatestInvoices();
  return (
    <main>
      {/* <h1 className={`${quintessential} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1> */}
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <ProductItem />
        {/* <LatestInvoices latestInvoices={latestInvoices} /> */}
      </div>
    </main>
  );
}