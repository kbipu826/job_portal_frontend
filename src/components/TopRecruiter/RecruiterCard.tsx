import { FaStar } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';

interface Recruiter {
    id: number;
    name: string;
    image: string;
    jobs: number;
    rating: number; 
    location: string;
}


const RecruiterCard = ({ recruiter }: { recruiter: Recruiter }) => (
    <li>
        <div className="twm-recruiters5-box">
            <div className="twm-rec-top">
                <div className="twm-rec-media">
                    <img src={recruiter.image} alt={recruiter.name} />
                </div>
                <div className="twm-rec-jobs">{recruiter.jobs} Jobs</div>
            </div>
            <div className="twm-rec-content">
                <h4 className="twm-title"><a href="/jobs">{recruiter.name}</a></h4>
                <div className="twm-rec-rating-wrap">
                    <div className="twm-rec-rating">
                        {[...Array(5)].map((_, i) => (
                            <span key={i}><FaStar className="fa fa-star" /></span>
                        ))}
                    </div>
                    <div className="twm-rec-rating-count">({recruiter.rating})</div>
                </div>
                <div className="twm-job-address"><FiMapPin className="feather-map-pin" />{recruiter.location}</div>
            </div>
        </div>
    </li>
);

export default RecruiterCard;