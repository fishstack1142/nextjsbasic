import React from 'react'
import Link from 'next/link'


export default function index({ value }) {
    return (
        <div>
            <h1>This is pretty awesome</h1>
            <h2>{value.second}</h2>

            <Link href='/blogs/[blogId]' as={`/blogs/1`} key={1}>first page</Link><br />
            <Link href='/blogs/[blogId]' as={`/blogs/2`} key={2}>second page</Link>
        </div>
    )
}


export const getStaticProps = async () => {
    console.log('getStaticProps run ==>');



    return {
        props: { value: "1" }
    }
}