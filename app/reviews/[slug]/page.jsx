import React from 'react'
import SubHeading from '@/components/SubHeading';
import { getReview, getSlugs } from '@/lib/reviews';
import AllButtons from '@/components/AllButtons';

export const generateStaticParams = async () => {
  // return [
  //   {slug:'audi'},
  //   {slug:'supra'},
  //   {slug:'lamborgini'}
  // ]

  const allSlugs = await getSlugs()
  let slugsArrayOfObj = allSlugs.map((slug) => ({ slug: slug }));
  return slugsArrayOfObj

}

// for meta data
export const generateMetadata = async ({ params: { slug } }) => {
  let reviewDetails = await getReview(slug);
  return {
    title: reviewDetails.title
  }
}

const ReviewDetailPage = async ({ params: { slug } }) => {
  // console.log("I am slug component !!")

  let reviewDetails = await getReview(slug);


  return (
    <>
      <section className='w-5/6 m-auto flex justify-center items-center min-h-screen gap-4 '>
        <div className="image w-[250rem]">
          <img src={reviewDetails.image} alt="" width={600} height={"auto"} className='w-full rounded-3xl' />
        </div>
        <div className='content'>
          <div className='flex items-center justify-between'>
            <SubHeading>{reviewDetails.title}</SubHeading>
            <AllButtons />
          </div>
          <p className='font-semibold py-3'>{reviewDetails.description}</p>
          <span className='font-extrabold'>{reviewDetails.date}</span>

        </div>
      </section>
    </>
  )
}

export default ReviewDetailPage