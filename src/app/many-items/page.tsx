import { Card } from '../ui/cards'
import ProductChart from '../ui/revinue-chart';
import LatestInvoices from '../ui/latest-invoices';
import {  } from '../page';
import { fetchProduct } from '../lib/data';
import { quintessential } from '../ui/fonts';
import { fetchLatestInvoices } from '../lib/data';
 
export default async function Page() {
    const product = await fetchProduct();
    //   const latestInvoices = await fetchLatestInvoices();
  return (
    <main>
      {/* <h1 className={`${quintessential} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1> */}
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <ProductChart />
        {/* <LatestInvoices latestInvoices={latestInvoices} /> */}
      </div>
    </main>
  );
}