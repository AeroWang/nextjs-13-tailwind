import React from 'react'

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
const Page = ({ params, searchParams }: Props) => {
  // todo
  return <div className={'name'}>goods-{params.slug}</div>
}
export default Page
