import Loadable from 'app/components/Loadable'
import { lazy } from 'react'

const ManagerAccount = Loadable(lazy(() => import('./ManagerAccounts')))

const ManagementRoutes = [
  { path: '/quan-ly-tai-khoan', element: <ManagerAccount /> },
]

export default ManagementRoutes
