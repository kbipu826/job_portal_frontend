import React, { useState } from 'react';
import { FaUserTie, FaBuilding, FaFacebookF, FaTwitter, FaLinkedinIn, FaGoogle } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import { registerSchema } from '@/schemas/auth';
import { USER_TYPE_ID } from '@/lib/constants';
import { useRegister } from '@/hooks/auth/auth';

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
  onSwitchToLogin: () => void;
}

const SignUpModal: React.FC<SignUpModalProps> = ({ isOpen, onClose, activeTab=1, onTabChange, onSwitchToLogin }) => {
  const { mutate: register, isLoading } = useRegister();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    phone: '',
    agreeToTerms: false,
    user_type_id: activeTab
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if(!formData.agreeToTerms) {
      toast.error('You must agree to the terms and conditions');
      return;
    }
    
    try {
      const validatedData = registerSchema.parse({
        ...formData,
        user_type_id: activeTab
      });

      register(validatedData, {
        onSuccess: () => {
          toast.success('Registered successfully');
          onClose();
          onSwitchToLogin();
        },
        onError: (error: any) => {
          if (error?.errors?.length > 0) {
            toast.error(error.errors[0].message);
          } else {
            toast.error('Something went wrong');
          }
        }
      });

    } catch (error: any) {
      if (error?.errors?.length > 0) {
        toast.error(error.errors[0].message);
      } else {
        toast.error('Something went wrong');
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleTabChange = (tab: string) => {
    onTabChange(tab);
    setFormData(prev => ({
      ...prev,
      user_type_id: tab
    }));
  };

  const renderSignUpForm = () => (
    <div className="row">
      <div className="col-lg-12">
        <div className="form-group mb-3">
          <input
            name="username"
            type="text"
            required
            className="form-control"
            placeholder="Username*"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="col-lg-12">
        <div className="form-group mb-3">
          <input
            name="email"
            type="email"
            className="form-control"
            required
            placeholder="Email*"
            value={formData.email}
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
          <input
            name="phone"
            type="tel"
            className="form-control"
            required
            placeholder="Phone*"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="col-lg-12">
        <div className="form-group mb-3">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="agree1"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleInputChange}
            />
            <label className="form-check-label" htmlFor="agree1">
              I agree to the <a href="#" onClick={e => e.preventDefault()}>Terms and conditions</a>
            </label>
            <p>
              Already registered?
              <button
                className="twm-backto-login"
                onClick={e => { e.preventDefault(); onSwitchToLogin(); }}
                type="button"
              >
                Log in here
              </button>
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <button
          type="submit"
          className="site-button"
          disabled={isLoading}
        >
          {isLoading ? 'Signing up...' : 'Sign Up'}
        </button>
      </div>
    </div>
  );

  return (
    <div className={`modal fade twm-sign-up show`} style={{ display: 'block' }} id="sign_up_popup" aria-hidden={!isOpen} aria-labelledby="sign_up_popupLabel" tabIndex={-1}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h2 className="modal-title" id="sign_up_popupLabel">Sign Up</h2>
              <p>Sign Up and get access to all the features of Jobzilla</p>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>
            <div className="modal-body">
              <div className="twm-tabs-style-2">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <button className={`nav-link ${activeTab === String(USER_TYPE_ID.CANDIDATE) ? 'active' : ''}`} onClick={() => handleTabChange(String(USER_TYPE_ID.CANDIDATE))} type="button">
                      <FaUserTie /> Candidate
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className={`nav-link ${activeTab === String(USER_TYPE_ID.EMPLOYER) ? 'active' : ''}`} onClick={() => handleTabChange(String(USER_TYPE_ID.EMPLOYER))} type="button">
                      <FaBuilding /> Employer
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div className={`tab-pane fade ${activeTab === String(USER_TYPE_ID.CANDIDATE) ? 'show active' : ''}`} id="sign-candidate">
                    {renderSignUpForm()}
                  </div>
                  <div className={`tab-pane fade ${activeTab === String(USER_TYPE_ID.EMPLOYER) ? 'show active' : ''}`} id="sign-Employer">
                    {renderSignUpForm()}
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

export default SignUpModal;