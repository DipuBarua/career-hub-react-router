// to get data from local storage
const getStoredJobApplication = () => {
    const storedJobApplication = localStorage.getItem('job-applications');
    if (storedJobApplication) {
        return JSON.parse(storedJobApplication);
    }
    return [];
}

// to save data in local storage by user
const saveJobApplication = id => {
    const preStoredJobApplications = getStoredJobApplication();
    const exist = preStoredJobApplications.find(jobId => { jobId === id })
    if (!exist) {
        preStoredJobApplications.push(id);
        localStorage.setItem('job-applications', JSON.stringify(preStoredJobApplications));
    }

}
export { saveJobApplication, getStoredJobApplication };