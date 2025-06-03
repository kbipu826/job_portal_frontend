import { api } from '@/service/api';
import type { CandidateProfile } from '@/types';

export const candidateProfileService = {
    // Get candidate profile
    getProfile: async () => {
        const response = await api.get('/candidate-profile');
        return response.data;
    },

    // Save basic profile information
    saveBasicProfile: async (data: Partial<CandidateProfile>) => {
        const response = await api.post('/candidate-profile/basic', data);
        return response.data;
    },

    // Save social media links
    saveSocialLinks: async (data: Partial<CandidateProfile>) => {
        const response = await api.post('/candidate-profile/social', data);
        return response.data;
    }
}; 