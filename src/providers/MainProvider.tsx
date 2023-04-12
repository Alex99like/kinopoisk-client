import { Layout } from '@/components/layout/Layout'
import React, { FC, PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReduxToast } from './ReduxToast'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import { HeadProvider } from './HeadProvider/HeadProvider'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

export const MainProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <HeadProvider>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ReduxToast />
          <Layout>
            {children}
          </Layout>
        </QueryClientProvider>
      </Provider>
    </HeadProvider>
  )
}
