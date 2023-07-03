import { QueryClient } from '@tanstack/vue-query';

export default new QueryClient({
  defaultOptions: {
    queries: {
      enabled: true,
      retry: 3,
      staleTime: 15,
    },
  },
});
