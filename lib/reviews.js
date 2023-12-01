/*
    I am defining a function gloally that read markdown file and returning a front matter text from a markdown. I am using a dynamic
    markdown every time using the concept of slug.

    readFile is a function of reading file on server.
    readdir is a function for reading all the files present in a given directory
*/

import { readFile, readdir } from "node:fs/promises"
import matter from 'gray-matter';


// single file read (for a single review)
const getReview = async (slug) => {
    let pageData = await readFile(`./content/reviews/${slug}.md`);
    let { data: { title, date, description, image } } = matter(pageData);

    return {
        title,
        date,
        description,
        image,
        slug
    }

}

// reading all files (for displaying all review cards )
const getAllReviews = async()=>{
    let allReviewsDetails=[]
    const allFiles = await readdir('./content/reviews');     
    // we need to filter only .md files from this directory

    // let filtered = allFiles.filter(file => file.includes('.md'));                                    // 1st APPROACH
    let slugs = allFiles.filter(file => file.endsWith('.md')).map(file => file.split('.')[0])           // 2nd APPROACH

    for(let slug of slugs){
        let reviewObj = await getReview(slug);
        allReviewsDetails.push(reviewObj)
    }

    return allReviewsDetails
    //console.log(allReviewsDetails)
}   

const getSlugs = async()=>{
    const allFiles = await readdir('./content/reviews'); 
    let slugs = allFiles.filter(file => file.endsWith('.md')).map(file => file.split('.')[0]);
    return slugs;
}


export {getReview,getAllReviews,getSlugs}
