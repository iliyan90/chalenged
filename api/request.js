import axios from "axios";

//main API url with limit of 500 jobs
export const getAllData = async () =>{
    const res = await axios.get('https://remotive.com/api/remote-jobs?limit=500')
    return res.data.jobs;
}
// search company: https://remotive.com/api/remote-jobs?company_name=remotive
export const getCompany = async(company) =>{
    const res = await axios.get(`https://remotive.com/api/remote-jobs?company_name=${company}`)
    return res.data.jobs
}


// search jobs listening title 
export const getTitles = async(title) =>{
   const res = await axios.get(`https://remotive.com/api/remote-jobs?search=${ title}`)
   return res.data.jobs;
}


// search by category
export const getCategory = async(category) =>{
    const res = await axios.get(`https://remotive.com/api/remote-jobs?category=${ category }`)
    const categories = res.data.jobs.map(job => job.category.includes(category) && job )
    return categories;
}

//search by tags 
export const getTags = async(tagCont) =>{
    const res = await axios.get(`https://remotive.com/api/remote-jobs?tags=${ tagCont }`)
    const tags = res.data.jobs.map(item => item.tags.includes(tagCont) && item)
    return tags
}
