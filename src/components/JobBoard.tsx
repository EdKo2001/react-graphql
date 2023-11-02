import { useEffect, useState } from "react";
import JobList from "./JobList";

import { loadJobs } from "../utils";

const JobBoard = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getJobs = async () => {
      try {
        const jobs = await loadJobs();
        setJobs(jobs);
      } catch (error) {
        console.error(error);
      }
    };

    getJobs();
  }, []);

  return (
    <div>
      <h1 className="title">Job Board</h1>
      <JobList jobs={jobs} />
    </div>
  );
};

export default JobBoard;
