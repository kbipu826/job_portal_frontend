import { useToast } from '@/hooks/use-toast';
import { handleMutationError, handleMutationSuccess } from '@/lib/mutation-utils';
import { authService } from '@/service/auth/auth';
import { useMutation, useQueryClient } from 'react-query';

export const useRegister = () => {
    const queryClient = useQueryClient();
    const toast = useToast();

    return useMutation({
        mutationFn: authService.register,
        onSuccess: (response) => handleMutationSuccess(response, toast, queryClient, ['users']),
        onError: (error) => handleMutationError(error, toast)
    });
};
