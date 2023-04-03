import React, { useContext, useMemo, useState } from 'react'
import { ApiContext } from '../context/ApiContext'
import Pagination from '../tools/pagination/Pagination';
import JobItem from './JobItem'
import '../styles/jobList.css'
let pageSize = 5;

const JobList = () => {
    const {filtered} = useContext(ApiContext);
    const[currentPage, setCurrentPage] = useState(1);
    const currentData = useMemo(() =>{
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = (firstPageIndex + pageSize);
        return filtered.slice(firstPageIndex, lastPageIndex)
    },[currentPage, filtered])
  return (
    <div className='jobs-list'>
        {
            currentData.map((item) =>{

                return (
                <JobItem 
                    key={item.id}
                    id={item.id}
                    company_logo={item.company_logo}
                    company_name ={item.company_name}
                    company_location ={item.candidate_required_location}
                    title ={item.title}
                    data={item.publication_date}
                    type={item.job_type}
                    desc={item.description}
                    url={item.url}
                    />
            )})
        }
        <Pagination
            currentPage={currentPage}
            totalCount={filtered.length}
            pageSize ={pageSize}
            onPageChange={page => setCurrentPage(page)}
        />
    </div>
  )
}

export default JobList