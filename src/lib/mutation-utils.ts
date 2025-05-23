import { QueryClient } from 'react-query';
import { ApiResponse } from '@/types/index.d';

interface ToastInterface {
    success: (params: { message: string }) => void;
    error: (params: { message: string }) => void;
}

export const handleMutationSuccess = (
    response: ApiResponse,
    toast: ToastInterface,
    queryClient: QueryClient,
    queryKey: string[]
) => {
    if (response.success) {
        toast.success({ message: response.message });
        queryClient.invalidateQueries({ queryKey });
    }
};

export const handleMutationError = (error: unknown, toast: ToastInterface) => {
    const errorMessage = error instanceof Error ? error.message : 'An error occurred';
    toast.error({ message: errorMessage });
};