export interface JobCategory {
  id: number;
  name: string;
}

export interface JobType {
  id: number;
  name: string;
}

export interface JobLocation {
  id: number;
  country: string;
  city: string;
}

export interface JobFormData {
  job_title: string;
  job_category: string;
  job_type: string;
  offered_salary: string;
  experience: string;
  qualification: string;
  gender: string;
  country: string;
  city: string;
  location: string;
  latitude: string;
  longitude: string;
  email: string;
  website: string;
  est_since: string;
  address: string;
  description: string;
  start_date: string;
  end_date: string;
}

export const JOB_CATEGORIES: JobCategory[] = [
  { id: 1, name: 'Accounting and Finance' },
  { id: 2, name: 'IT and Computers' },
  { id: 3, name: 'Management' },
  { id: 4, name: 'Human Resources' },
  { id: 5, name: 'Marketing' },
  { id: 6, name: 'Sales' },
  { id: 7, name: 'Engineering' },
  { id: 8, name: 'Healthcare' },
  { id: 9, name: 'Education' },
  { id: 10, name: 'Customer Service' }
];

export const JOB_TYPES: JobType[] = [
  { id: 1, name: 'Full Time' },
  { id: 2, name: 'Part Time' },
  { id: 3, name: 'Freelance' },
  { id: 4, name: 'Internship' },
  { id: 5, name: 'Contract' },
  { id: 6, name: 'Temporary' }
];

export const SALARY_RANGES = [
  '$500 - $1000',
  '$1000 - $2000',
  '$2000 - $3000',
  '$3000 - $4000',
  '$4000 - $5000',
  '$5000+'
];

export const COUNTRIES = [
  'USA',
  'UK',
  'Canada',
  'Australia',
  'Germany',
  'France',
  'Japan',
  'India',
  'China',
  'Brazil'
];

export const CITIES = {
  USA: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'],
  UK: ['London', 'Manchester', 'Birmingham', 'Liverpool', 'Edinburgh'],
  Canada: ['Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Ottawa'],
  Australia: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide'],
  Germany: ['Berlin', 'Munich', 'Hamburg', 'Frankfurt', 'Cologne'],
  France: ['Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice'],
  Japan: ['Tokyo', 'Osaka', 'Nagoya', 'Sapporo', 'Fukuoka'],
  India: ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai'],
  China: ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen', 'Chengdu'],
  Brazil: ['São Paulo', 'Rio de Janeiro', 'Brasília', 'Salvador', 'Fortaleza']
}; 