import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import { type Inquiry } from '../backend';

export function useInquiryList(enabled: boolean = true) {
  const { actor, isFetching } = useActor();

  const query = useQuery<Inquiry[]>({
    queryKey: ['inquiries'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllInquiries();
    },
    enabled: !!actor && !isFetching && enabled,
  });

  return {
    inquiries: query.data || [],
    isLoading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
  };
}
