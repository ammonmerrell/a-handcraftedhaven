import { Card } from '@/app/ui/cards'
// import ProductChart from '@/app/ui/revinue-chart';
import LatestInvoices from '@/app/ui/latest-invoices';
import {  } from '@/app/page';
import { fetchItem, fetchProduct } from '@/app/lib/data';
import { quintessential } from '@/app/ui/fonts';
import { fetchLatestInvoices } from '@/app/lib/data';
import ProductChart, { ProductItem } from '@/app/ui/revinue-chart';

// export default async function Page(id: string) {
  
export default async function Page(props: {params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id= params.id;
  const [invoice ] = await Promise.all([
    fetchItem(id),
    // fetchCustomers(),
  ]);

  // id="d6e15727-9fe1-4961-8c5b-ea44a9bd81aa"
  // const product = await fetchItem(id);
    //   const latestInvoices = await fetchLatestInvoices();
  return (
    <main>
      {/* <h1 className={`${quintessential} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1> */}
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <ProductItem id="d6e15727-9fe1-4961-8c5b-ea44a9bd81aa" />
        {/* <LatestInvoices latestInvoices={latestInvoices} /> */}
      </div>
    </main>
  );
}