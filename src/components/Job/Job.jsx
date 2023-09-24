import { IoLocationOutline } from 'react-icons/io5';
import { AiOutlineDollarCircle } from 'react-icons/ai';

const Job = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary, job_description } = job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p className=' text-start'>{company_name}</p>
                <div className=' text-start'>
                    <button className=" px-5 py-2 font-extrabold border rounded
                    border-[#7E90FE] text-[#7E90FE] mr-4">Onsite</button>
                    <button className=" px-5 py-2 font-extrabold border rounded
                    border-[#7E90FE] text-[#7E90FE] mr-4">Full Time</button>
                </div>
                <div className='flex gap-5 my-2 text-start'>
                    <h2 className='flex'>
                        <IoLocationOutline className=' text-2xl mx-2'></IoLocationOutline>
                        {location}
                    </h2>
                    <h2 className=' flex'>
                        <AiOutlineDollarCircle className=' text-2xl mx-2'></AiOutlineDollarCircle>
                        {salary}
                    </h2>
                </div>
                <div className="card-actions">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Job;