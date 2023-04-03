import { createContext, useEffect, useState } from "react";
import { getAllData } from '../api/request';

export const ApiContext = createContext();


const filteredJobs = (jobs, searchTerm) =>{
    return jobs.filter(job =>{
        return job.company_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
    })
}

const ApiContextProvider = ({children}) =>{
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('All');
    const [filtered, setFiltered] = useState([]);
    const [location, setLocation] = useState('');
    const [fullTime, setFullTime] = useState(false);
    useEffect(()=>{
        getAllData().then(res => setData(res)).catch(err => console.log(err))
    },[!data]);

    useEffect(()=>{
        const getJobs = filteredJobs(data, search);
        let filteredJob = getJobs;
        // filter type full time job
        if(fullTime){
            filteredJob = filteredJob.filter(job => job.job_type.includes('full_time'))
        }
        if(location){
            filteredJob = filteredJob.filter(job => job.candidate_required_location.toLowerCase().includes(location.toLowerCase()))
        }
        setFiltered(filteredJob)
        
    },[data, search, category, fullTime, location])
    return <ApiContext.Provider
        value={{
            data,
            setData,
            search,
            setSearch,
            category,
            setCategory,
            filtered,
            setFiltered,
            fullTime,
            setFullTime,
            location,
            setLocation
        }}
    >{children}</ApiContext.Provider>
}

export default ApiContextProvider