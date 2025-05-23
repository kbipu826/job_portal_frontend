"use client"

import { toast as hotToast } from 'react-hot-toast'

interface ToastProps {
  title?: string
  description?: string
  variant?: 'default' | 'destructive'
}

function toast(props: ToastProps) {
  const { title, description, variant } = props

  if (variant === 'destructive') {
    return hotToast.error(description || title || '')
  }

  return hotToast.success(description || title || '')
}

interface ToastInterface {
  success: (params: { message: string }) => void;
  error: (params: { message: string }) => void;
}

const useToast = (): ToastInterface => {
  return {
    success: ({ message }) => hotToast.success(message),
    error: ({ message }) => hotToast.error(message)
  };
};

export { useToast, toast }