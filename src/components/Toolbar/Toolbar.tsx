import { NavLink } from 'react-router-dom';

const Toolbar = () => {
  return (
    <nav className="navbar navbar-dark bg-body mb-4 ">
      <div className="container-fluid border-bottom d-flex justify-content-between">
        <NavLink className="navbar-brand text-black fw-bold" to="/">
          Contacts
        </NavLink>
        <div className="links d-flex flex-row align-items-center justify-content-evenly">
          <NavLink
            className="first-link nav-link text-black fw-bold"
            to="/add-contact"
          >
            Add new contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Toolbar;
