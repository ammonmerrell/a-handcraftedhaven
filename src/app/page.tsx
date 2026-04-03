import Image from "next/image";
import styles from "./page.module.css";
import { Quintessential, Oswald, Fascinate } from "next/font/google";
import Link from "next/link";

const quintessential = Quintessential({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
})

const oswald = Oswald({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

const fascinate = Fascinate({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

export default function Home() {
  return (
    <main>
      <h1 className={styles.quintessential}>Handcrafted Haven</h1>
      <Image className={styles.picture}
        src="/single-handmade-pot.avif"
        alt="Next.js logo"
        width={250}
        height={250}
        priority
      />
      <p>Come one come all to our fantabulous site where you can
        not only look at but also buy the wonderfully handcrafted 
        item of your choice. That's right. And if you have any old
        junk that is just cluttering up the insides of your place
        then one day YOU may see those items here on this magnificent
        website where they'll be sold according to the price YOU want.</p>

        <p className={styles.underlying}>(These items can only be sold after they have 
        been created. Also a portion of the profits will be going to us
        after everythings said and done.)</p>
        <div className={styles.link}>
        <Link href="/single-item">
          Today's Item
        </Link>
        <span className={styles.linkDivider}>|</span>
        <Link href="/many-items">
          Our Products
        </Link>
        
      </div>
    </main>
  );
}

// export default function Home() {
//   return (
//     <div className={styles.page}>
//       <main className={styles.main}>
//         <Image
//           className={styles.logo}
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className={styles.intro}>
//           <h1>To get started, edit the page.tsx file.</h1>
//           <p>
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className={styles.ctas}>
//           <a
//             className={styles.primary}
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className={styles.logo}
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className={styles.secondary}
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }


// export default function Home() {
//   return (<div className={styles.page}><h1> Handcrafted Haven</h1></div>

//   )
// }