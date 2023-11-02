import JobList from "./JobList";

import { jobs } from "../data/fake-data";

const JobBoard = () => {
  return (
    <div>
      <h1 className="title">Job Board</h1>
      <JobList jobs={jobs} />
    </div>
  );
};

export default JobBoard;
