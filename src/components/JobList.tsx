import React from "react";
import { Link } from "react-router-dom";

interface Job {
  id: string;
  title: string;
  company: {
    name: string;
  } | null;
}

interface JobListProps {
  jobs: Job[];
}

const renderJob = (job: Job) => {
  const title = job.company ? `${job.title} at ${job.company.name}` : job.title;

  return (
    <li className="media" key={job.id}>
      <div className="media-content">
        <Link to={`/jobs/${job.id}`}>{title}</Link>
      </div>
    </li>
  );
};

const JobList: React.FC<JobListProps> = ({ jobs }) => {
  return <ul className="box">{jobs.map((job) => renderJob(job))}</ul>;
};

export default JobList;
