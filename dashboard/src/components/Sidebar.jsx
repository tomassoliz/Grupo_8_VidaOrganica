import { Link, useLocation } from 'react-router-dom'

export const Sidebar = () => {
  const location = useLocation()

  return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

      <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
        <div className="sidebar-brand-icon">
          <img
            className="w-50"
            src="/images/logo.png"
            alt="logo vida organica" />
        </div>
      </a>

      <hr className="sidebar-divider my-0" />

      <li className="nav-item active">
        <a className="nav-link" href="/">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Vida Orgánica</span></a>
      </li>

      <hr className="sidebar-divider" />

      <div className="sidebar-heading">Actions</div>

      <li className={`nav-item ${location.pathname === '/' && 'active'}`}>
        <Link className="nav-link collapsed" to="/">
          <i className="fas fa-fw fa-home"></i>
          <span>Inicio</span>
        </Link>
      </li>

      <li className={`nav-item ${location.pathname === '/products' && 'active'}`}>
        <Link className="nav-link" to="/products">
          <i className="fas fa-fw fa-film"></i>
          <span>Productos</span>
        </Link>
      </li>

      <li className={`nav-item ${location.pathname === '/products' && 'active'}`}>
        <Link className="nav-link" to="/products">
          <i className="fas fa-fw fa-mobile"></i>
          <span>Sin Azucar</span>
        </Link>
      </li>

      <li className={`nav-item ${location.pathname === '/products' && 'active'}`}>
        <Link className="nav-link" to="/products">
          <i className="fas fa-fw fa-headphones"></i>
          <span>Bebidas Dieteticas</span>
        </Link>
      </li>

      <li className={`nav-item ${location.pathname === '/products' && 'active'}`}>
        <Link className="nav-link" to="/products">
          <i className="fas fa-fw fa-piggy-bank"></i>
          <span>Ofertas</span>
        </Link>
      </li>

      <hr className="sidebar-divider d-none d-md-block" />
    </ul>
  )
}
