import { Link, useParams } from "react-router-dom";

import { jobs } from "../data/fake-data";

const JobDetail = () => {
  const { jobId } = useParams();
  const job = jobs.find((job) => job.id === jobId);

  return (
    <div>
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
    </div>
  );
};

export default JobDetail;
