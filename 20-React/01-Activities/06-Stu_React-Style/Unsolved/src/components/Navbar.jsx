// Here we import the Navbar.css file to grant access to some additional classNames
import '../styles/Navbar.css';

// TODO: Create a styles object called "styles"
const styles = {
  navbar: {
    backgroundColor:"green",
    justifyContent:"flex-end"
  }
};

function Navbar() {
  // TODO: Add a style attribute to `nav`
  return (
    <nav className="navbar" style={styles.navbar}>
      <a href="/">Welcome</a>
    </nav>
  );
}

export default Navbar;
