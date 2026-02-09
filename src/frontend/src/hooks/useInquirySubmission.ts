import { useState } from 'react';
import { useActor } from './useActor';
import { ServiceInterest } from '../backend';
import { mapToBackendServiceInterest } from '@/lib/serviceInterest';

type SubmissionStatus = 'idle' | 'loading' | 'success' | 'error';

interface FormData {
  name: string;
  email: string;
  serviceInterest: string;
  message: string;
}

export function useInquirySubmission() {
  const { actor } = useActor();
  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [error, setError] = useState<string | null>(null);

  const validateForm = (data: FormData): string | null => {
    if (!data.name.trim()) return 'Name is required';
    if (!data.email.trim()) return 'Email is required';
    if (!data.email.includes('@')) return 'Please enter a valid email address';
    if (!data.serviceInterest) return 'Please select a service interest';
    if (!data.message.trim()) return 'Message is required';
    return null;
  };

  const submitInquiry = async (data: FormData) => {
    const validationError = validateForm(data);
    if (validationError) {
      setStatus('error');
      setError(validationError);
      return;
    }

    if (!actor) {
      setStatus('error');
      setError('Unable to connect to the backend. Please try again.');
      return;
    }

    setStatus('loading');
    setError(null);

    try {
      const backendServiceInterest = mapToBackendServiceInterest(data.serviceInterest);
      // Pass empty string for phoneNumber since backend still requires it
      await actor.submitInquiry(data.name, '', data.email, backendServiceInterest, data.message);
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    }
  };

  const reset = () => {
    setStatus('idle');
    setError(null);
  };

  return {
    submitInquiry,
    status,
    error,
    reset,
  };
}
