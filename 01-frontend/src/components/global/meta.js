import Head from 'next/head';

export default function Meta({title}){
    return(
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </Head>
    )
}