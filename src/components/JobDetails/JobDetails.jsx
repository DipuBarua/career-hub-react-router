import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localStorage";

const JobDetails = () => {
    // Rules For getting single data from all the fake data 
    // 1. get all card's data from loader 
    const jobs = useLoaderData();
    // 2. get the job id, for which button was clicked 
    const { id } = useParams();
    // 3. convert the id into interger
    const idInt = parseInt(id);
    console.log(jobs, idInt);
    // 4. get the required data using id[rule_2] from all data[rule_1]
    const job = jobs.find(job => job.id === idInt);
    console.log(job);

    const handleApplyJob = () => {
        saveJobApplication(idInt);
        toast('Successfully Applied');
    }
    return (
        <div>
            <h2>Job Details:{id}</h2>
            <div className=" grid md:grid-cols-4 gap-5">
                <div className=" border md:col-span-3">
                    <h2 className=" text-4xl">details here</h2>
                    <p>{job.job_title}</p>
                    <p>{job.company_name}</p>
                </div>
                <div className=" border">
                    <h2 className=" text-2xl">
                        side bar here
                    </h2>

                    <ToastContainer></ToastContainer>
                    <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>
                </div>
            </div>

        </div>
    );
};

export default JobDetails;