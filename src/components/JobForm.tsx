import React, { useReducer, ChangeEvent, SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";

import { createJob } from "../utils";

interface JobFormProps {}

interface FormData {
  title: string;
  description: string;
  error: boolean;
}

const JobForm: React.FC<JobFormProps> = (props) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useReducer(
    (prev: FormData, next: Partial<FormData>) => {
      return { ...prev, ...next };
    },
    { title: "", description: "", error: false }
  );

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ [name]: value });
  };

  const handleClick = async (e: SyntheticEvent) => {
    e.preventDefault();
    const { title, description } = formData;

    await createJob({ title, description }).then((job) => {
      navigate(`/jobs/${job.id}`);
    });
  };

  const { title, description } = formData;

  return (
    <div>
      <h1 className="title">New Job</h1>
      <div className="box">
        <form>
          <div className="field">
            <label className="label">Title</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <textarea
                className="input"
                style={{ height: "10em" }}
                name="description"
                value={description}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="button is-link" onClick={handleClick}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobForm;
