import React from 'react';
import Link from 'next/link';
import { FiX, FiLogIn, FiBriefcase, FiLogOut, FiUserPlus } from 'react-icons/fi';
import { useSession, signOut } from 'next-auth/react';
import { USER_TYPE_ID } from '@/lib/constants';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenLogin: () => void;
  onOpenSignUp: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, onOpenLogin, onOpenSignUp }) => {
  const { data: session } = useSession();

  const getDashboardLink = () => {
    if (!session?.user?.user_type_id) return '/candidate-dashboard';
    return session.user.user_type_id === String(USER_TYPE_ID.EMPLOYER) ? '/employee-dashboard' : '/candidate-dashboard';
  };

  return (
    <div 
      className={`mobile-side-drawer ${isOpen ? 'open' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: isOpen ? 0 : '-300px',
        width: '300px',
        height: '100vh',
        backgroundColor: '#fff',
        boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
        transition: 'left 0.3s ease-in-out',
        zIndex: 9999,
        padding: '20px'
      }}
    >
      <div className="drawer-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h3 style={{ margin: 0, fontSize: '20px', fontWeight: '600' }}>Jobzilla</h3>
        <button 
          onClick={onClose}
          style={{ 
            background: 'none', 
            border: 'none', 
            fontSize: '24px',
            cursor: 'pointer',
            color: '#666'
          }}
        >
          <FiX />
        </button>
      </div>

      <nav>
        <ul style={{ 
          listStyle: 'none', 
          padding: 0, 
          margin: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '15px'
        }}>
          <li>
            <Link 
              href="/" 
              onClick={onClose}
              style={{
                color: '#666',
                textDecoration: 'none',
                fontSize: '16px',
                display: 'block',
                padding: '8px 0'
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/jobs" 
              onClick={onClose}
              style={{
                color: '#666',
                textDecoration: 'none',
                fontSize: '16px',
                display: 'block',
                padding: '8px 0'
              }}
            >
              Jobs
            </Link>
          </li>
          <li>
            <Link 
              href="/about" 
              onClick={onClose}
              style={{
                color: '#666',
                textDecoration: 'none',
                fontSize: '16px',
                display: 'block',
                padding: '8px 0'
              }}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              href="/candidates" 
              onClick={onClose}
              style={{
                color: '#666',
                textDecoration: 'none',
                fontSize: '16px',
                display: 'block',
                padding: '8px 0'
              }}
            >
              Candidates
            </Link>
          </li>
        </ul>
      </nav>

      <div className="drawer-footer" style={{ 
        marginTop: 'auto', 
        paddingTop: '30px',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px'
      }}>
        {!session ? (
          <>
            <button 
              onClick={() => {
                onClose();
                onOpenLogin();
              }}
              className="twm-nav-sign-up"
              style={{
                padding: '12px 20px',
                backgroundColor: '#1e45ea',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                fontSize: '16px',
                textDecoration: 'none',
                width: '100%'
              }}
            >
              <FiLogIn /> Login
            </button>
            <button 
              onClick={() => {
                onClose();
                onOpenSignUp();
              }}
              className="twm-nav-post-a-job"
              style={{
                padding: '12px 20px',
                backgroundColor: '#e0eeff',
                color: '#1967d2',
                
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                fontSize: '16px',
                textDecoration: 'none',
                width: '100%'
              }}
            >
              <FiUserPlus  /> Sign Up
            </button>
          </>
        ) : (
          <>
            <Link 
              href={getDashboardLink()}
              onClick={onClose}
              className="twm-nav-post-a-job"
              style={{
                padding: '12px 20px',
                backgroundColor: '#1e45ea',
                color: 'white',
                
                border: 'none',
                borderRadius: '5px',
                textAlign: 'center',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                fontSize: '16px',
                width: '100%'
              }}
            >
              <FiBriefcase /> Dashboard
            </Link>
            <button 
              onClick={() => {
                onClose();
                signOut();
              }}
              className="twm-nav-sign-up"
              style={{
                padding: '12px 20px',
                backgroundColor: '#e0eeff',
                color: '#1967d2',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                fontSize: '16px',
                width: '100%'
              }}
            >
              <FiLogOut /> Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar; 