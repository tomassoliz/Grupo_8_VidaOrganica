import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import { HomeAdminPage } from './pages/HomeAdminPage'
import { ProductsListPage } from './pages/ProductsListPage'
import { loader as ProductListLoader} from './pages/ProductList/loader'

export const router = createBrowserRouter([
    {
        path: '/',
        // este es el layout, componentes en comun header, footer
        element: <App />,
        children: [
            {
                // por default
                index: true,
                element: <HomeAdminPage />
            },
            {
                path: 'products',
                element: <ProductsListPage />,
                loader: ProductListLoader
            }
        ]
    }
])