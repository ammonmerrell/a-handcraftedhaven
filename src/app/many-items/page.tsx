import { Card } from '../ui/cards'
import ProductChart from '../ui/revinue-chart';
import LatestInvoices from '../ui/latest-invoices';
import {  } from '../page';
import { fetchProduct } from '../lib/data';
import { quintessential } from '../ui/fonts';
import { fetchLatestInvoices } from '../lib/data';
import Search from '../ui/search'
import { Suspense } from 'react';
import  Table  from '@/app/ui/table';


export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    // page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  // const currentPage = Number(searchParams?.page) || 1;
    const product = await fetchProduct();
    //   const latestInvoices = await fetchLatestInvoices();
  return (
    <main>
      {/* <h1 className={`${quintessential} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1> */}
      <Search placeholder=''/>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        {/* <ProductChart /> */}
        
        
        {/* <LatestInvoices latestInvoices={latestInvoices} /> */}
      </div>
      <Suspense key={query}>
        <Table query={'a6ce0b20-2803-4f14-bcf8-a64da4998f06'}  />
        {/* <Table query={query}  /> */}
      </Suspense>
    </main>
  );
}