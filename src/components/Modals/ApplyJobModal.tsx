import React from 'react';
import { FiUser, FiMail } from 'react-icons/fi';

interface ApplyJobModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ApplyJobModal: React.FC<ApplyJobModalProps> = ({ isOpen, onClose }) => {
  return (
    <div className="modal fade" id="apply_job_popup" style={{ display: 'none' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Apply For This Job</h4>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>

          <div className="modal-body">
            <div className="apl-job-inpopup">
              <div className="panel panel-default">
                <div className="panel-body wt-panel-body p-a20">
                  <div className="twm-tabs-style-1">
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-md-12">
                        <div className="form-group">
                          <label>Your Name</label>
                          <div className="ls-inputicon-box">
                            <input className="form-control" name="company_name" type="text" placeholder="Devid Smith" />
                            <i className="fs-input-icon"><FiUser /></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-12 col-lg-12 col-md-12">
                        <div className="form-group">
                          <label>Email Address</label>
                          <div className="ls-inputicon-box">
                            <input className="form-control" name="company_Email" type="email" placeholder="Devid@example.com" />
                            <i className="fs-input-icon"><FiMail /></i>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Message</label>
                          <textarea className="form-control" rows={3} placeholder="Message sent to the employer"></textarea>
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <label>Upload Resume</label>
                          <form action="upload.php" className="dropzone dz-clickable">
                            <div className="dz-default dz-message">
                              <span><i className="sl sl-icon-plus"></i> Click here or drop files to upload</span>
                            </div>
                          </form>
                          <small>
                            If you do not have a resume document, you may write your brief professional profile 
                            <a className="site-text-primary" href="#"> here</a>
                          </small>
                        </div>
                      </div>

                      <div className="col-xl-12 col-lg-12 col-md-12">
                        <div className="text-left">
                          <button type="submit" className="site-button">Send Application</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyJobModal; 