import { Link } from "react-router-dom";

const renderJob = (job) => {
  const title = job.company ? `${job.title} at ${job.company.name}` : job.title;

  return (
    <li className="media" key={job.id}>
      <div className="media-content">
        <Link to={`/jobs/${job.id}`}>{title}</Link>
      </div>
    </li>
  );
};

const JobList = (props) => {
  const { jobs } = props;

  return <ul className="box">{jobs.map((job) => renderJob(job))}</ul>;
};

export default JobList;
