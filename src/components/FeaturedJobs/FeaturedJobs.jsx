import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, []);
    // not best way to show all 
    const [dataLength, setDataLength] = useState(4);

    return (
        <div>
            <h2 className=" text-5xl font-extrabold">Featured Jobs: {jobs.length}</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className=" grid grid-cols-2 gap-6">
                {jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)}
            </div>
            <div className={dataLength === jobs.length && 'hidden'}>
                <button
                    className=" btn-primary p-4 rounded-lg"
                    onClick={() => setDataLength(jobs.length)}>
                    Show All
                </button>
            </div>
        </div>
    );
};

export default FeaturedJobs;