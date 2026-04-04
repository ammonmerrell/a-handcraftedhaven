import { Card } from '@/app/ui/cards'
// import ProductChart from '@/app/ui/revinue-chart';
import LatestInvoices from '@/app/ui/latest-invoices';
import {  } from '@/app/page';
import { fetchItem, fetchProduct } from '@/app/lib/data';
import { quintessential } from '@/app/ui/fonts';
import { fetchLatestInvoices } from '@/app/lib/data';
import ProductChart from '@/app/ui/revinue-chart';


export default async function Page(id: string) {
    // const product = await fetchItem(id);
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