import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import axios, { isAxiosError } from 'axios';

axios.defaults.baseURL = "http://18.136.197.25:8080"

type CustomQueryProps = {
    children?: React.ReactNode;
};

const CustomQueryClient = ({ children }: CustomQueryProps) => {
    const query = new QueryClient({
        defaultOptions: {
            queries: {
                retry: 1,
                onError: async (err) => {
                    if (axios.isAxiosError(err)) {
                        if (err.response?.status === 403) {
                            await query.refetchQueries({
                                queryKey: ['refetchAuthTokens'],
                                exact: true
                            });
                            await query.refetchQueries({
                                queryKey: ['getAllSignedUpUsers'],
                                exact: true
                            });
                        }
                    }
                }
            }
        }
    });

    return (
        <QueryClientProvider client={query}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </QueryClientProvider>
    );
};
