'use client';

import React, { useEffect } from 'react';
import { FiX, FiUser, FiMail, FiMessageSquare, FiUpload } from 'react-icons/fi';

interface ApplyJobModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ApplyJobModal({ isOpen, onClose }: ApplyJobModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal fade show" style={{ display: 'block' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Apply for this Job</h5>
            <button type="button" className="btn-close" onClick={onClose}>
              <FiX />
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group mb-3">
                <label className="form-label">Your Name</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <FiUser />
                  </span>
                  <input type="text" className="form-control" placeholder="Enter your name" />
                </div>
              </div>
              <div className="form-group mb-3">
                <label className="form-label">Email Address</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <FiMail />
                  </span>
                  <input type="email" className="form-control" placeholder="Enter your email" />
                </div>
              </div>
              <div className="form-group mb-3">
                <label className="form-label">Message</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <FiMessageSquare />
                  </span>
                  <textarea className="form-control" rows={4} placeholder="Enter your message"></textarea>
                </div>
              </div>
              <div className="form-group mb-3">
                <label className="form-label">Upload Resume</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <FiUpload />
                  </span>
                  <input type="file" className="form-control" accept=".pdf,.doc,.docx" />
                </div>
                <small className="text-muted">Allowed file types: PDF, DOC, DOCX</small>
              </div>
              <div className="form-group text-end">
                <button type="submit" className="site-button">
                  Send Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
    </div>
  );
} 