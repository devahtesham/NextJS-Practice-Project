import Heading from "@/components/Heading"
import SubHeading from "@/components/SubHeading"
import { getAllReviews } from "@/lib/reviews"
import Link from "next/link"

export const metadata = {
  title:"Reviews"
}

const AllReviewsPage = async() => {
  let allReviews = await getAllReviews();
console.log("I am review page")
  return (
    <section className="flex ">
      {
        allReviews.map((review)=>(
        <div className="border w-2/6 shadow-md rounded-3xl m-5 p-5" key={review.slug}>
          <Link href={`/reviews/${review.slug}`}>
            <span>Date: {review.date}</span>
            <SubHeading>{review.title}</SubHeading>
            <img src={review.image} alt="" width={200} height="auto" />
          </Link>
        </div>
        ))
      }

      {/* <div className="border w-2/6 shadow-md rounded-3xl m-5 p-5">
        <Link href={'/reviews/supra'}>
          <span>Date: 20/10/2020</span>
          <SubHeading>This is Supra</SubHeading>
          <img src="/images/img2.jpg" alt="" width={200} height="auto" />
        </Link>
      </div>

      <div className="border w-2/6 shadow-md rounded-3xl m-5 p-5">
        <Link href={'/reviews/audi'}>
          <span>Date: 20/10/2020</span>
          <SubHeading>This is Audi</SubHeading>
          <img src="/images/img3.jpg" alt="" width={200} height="auto" />
        </Link>
      </div> */}
    </section>
  )
}

export default AllReviewsPage