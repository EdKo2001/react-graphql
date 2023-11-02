import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { loadJob } from "../utils";

export interface Job {
  id: string;
  title: string;
  description: string;
  company: {
    id: string;
    name: string;
  };
}

const JobDetail = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState<Job | null>();

  useEffect(() => {
    const getJob = async () => {
      try {
        const job = await loadJob(jobId!);
        setJob(job);
      } catch (error) {
        console.error(error);
      }
    };

    getJob();
  }, []);

  return (
    <>
      {job ? (
        <>
          <h1 className="title">{job.title}</h1>
          <h2 className="subtitle">
            <Link to={`/companies/${job.company.id}`}>{job.company.name}</Link>
          </h2>
          <div className="box">{job.description}</div>
        </>
      ) : (
        <p>Job not found</p>
      )}
    </>
  );
};

export default JobDetail;
