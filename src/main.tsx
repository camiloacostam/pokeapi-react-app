import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './ui/App.tsx'
import './index.css'
import { store } from './store/store.ts'
import { Provider } from 'react-redux'
import { ApolloProvider } from '@apollo/client'
import client from './services/apollo-client.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </StrictMode>
)
