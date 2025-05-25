import { loginSchema } from '@/schemas/auth';
import { signIn } from 'next-auth/react';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaBuilding, FaFacebookF, FaGoogle, FaLinkedinIn, FaTwitter, FaUserTie } from 'react-icons/fa';
import { USER_TYPE_ID } from '@/lib/constants';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
  onSwitchToSignUp: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, activeTab, onTabChange, onSwitchToSignUp }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    login: '',
    password: '',
    user_type_id: String(USER_TYPE_ID.CANDIDATE) // Set default to CANDIDATE
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const validatedData = loginSchema.parse(formData);

      const result = await signIn('credentials', {
        ...validatedData,
        redirect: false
      });

      if (result?.error) {
        toast.error(result.error);
      } else {
        toast.success('Logged in successfully');
        onClose();
        // Redirect based on user type
        if (formData.user_type_id === String(USER_TYPE_ID.CANDIDATE)) {
          window.location.href = '/candidate-dashboard';
        } else if (formData.user_type_id === String(USER_TYPE_ID.EMPLOYER)) {
          window.location.href = '/employee-dashboard';
        }
      }
    } catch (error: any) {
      if (error?.errors?.length > 0) {
        toast.error(error.errors[0].message);
      } else {
        toast.error('Something went wrong');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTabChange = (tab: string) => {
    onTabChange(tab);
    setFormData(prev => ({
      ...prev,
      user_type_id: tab
    }));
  };

  return (
    <div className={`modal fade twm-sign-up show`} style={{ display: 'block' }} id="sign_up_popup2" aria-hidden={!isOpen} aria-labelledby="sign_up_popupLabel2" tabIndex={-1}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h2 className="modal-title" id="sign_up_popupLabel2">Login</h2>
              <p>Login and get access to all the features of Jobzilla</p>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>
            <div className="modal-body">
              <div className="twm-tabs-style-2">
                <ul className="nav nav-tabs" id="myTab2" role="tablist">
                  <li className="nav-item">
                    <button className={`nav-link ${formData.user_type_id === String(USER_TYPE_ID.CANDIDATE) ? 'active' : ''}`} onClick={() => handleTabChange(String(USER_TYPE_ID.CANDIDATE))} type="button">
                      <FaUserTie /> Candidate
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className={`nav-link ${formData.user_type_id === String(USER_TYPE_ID.EMPLOYER) ? 'active' : ''}`} onClick={() => handleTabChange(String(USER_TYPE_ID.EMPLOYER))} type="button">
                      <FaBuilding /> Employer
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="myTab2Content">
                  <div className={`tab-pane fade ${formData.user_type_id === String(USER_TYPE_ID.CANDIDATE) ? 'show active' : ''}`} id="login-candidate">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group mb-3">
                          <input
                            name="login"
                            type="text"
                            required
                            className="form-control"
                            placeholder="Username or Email*"
                            value={formData.login}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group mb-3">
                          <input
                            name="password"
                            type="password"
                            className="form-control"
                            required
                            placeholder="Password*"
                            value={formData.password}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group mb-3">
                          <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="Password3" />
                            <label className="form-check-label rem-forgot" htmlFor="Password3">
                              Remember me <a href="#" onClick={e => e.preventDefault()}>Forgot Password</a>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <button
                          type="submit"
                          className="site-button"
                          disabled={isLoading}
                        >
                          {isLoading ? 'Logging in...' : 'Log in'}
                        </button>
                        <div className="mt-3 mb-3">
                          Don&apos;t have an account?
                          <button
                            className="twm-backto-login"
                            onClick={e => { e.preventDefault(); onSwitchToSignUp(); }}
                            type="button"
                          >
                            Sign Up
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`tab-pane fade ${formData.user_type_id === String(USER_TYPE_ID.EMPLOYER) ? 'show active' : ''}`} id="login-Employer">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group mb-3">
                          <input
                            name="login"
                            type="text"
                            required
                            className="form-control"
                            placeholder="Username or Email*"
                            value={formData.login}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group mb-3">
                          <input
                            name="password"
                            type="password"
                            className="form-control"
                            required
                            placeholder="Password*"
                            value={formData.password}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group mb-3">
                          <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="Password4" />
                            <label className="form-check-label rem-forgot" htmlFor="Password4">
                              Remember me <a href="#" onClick={e => e.preventDefault()}>Forgot Password</a>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <button
                          type="submit"
                          className="site-button"
                          disabled={isLoading}
                        >
                          {isLoading ? 'Logging in...' : 'Log in'}
                        </button>
                        <div className="mt-3 mb-3">
                          Don&apos;t have an account?
                          <button
                            className="twm-backto-login"
                            onClick={e => { e.preventDefault(); onSwitchToSignUp(); }}
                            type="button"
                          >
                            Sign Up
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <span className="modal-f-title">Login or Sign up with</span>
              <ul className="twm-modal-social">
                <li><a href="#" onClick={e => e.preventDefault()} className="facebook-clr"><FaFacebookF /></a></li>
                <li><a href="#" onClick={e => e.preventDefault()} className="twitter-clr"><FaTwitter /></a></li>
                <li><a href="#" onClick={e => e.preventDefault()} className="linkedin-clr"><FaLinkedinIn /></a></li>
                <li><a href="#" onClick={e => e.preventDefault()} className="google-clr"><FaGoogle /></a></li>
              </ul>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;