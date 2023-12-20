import { Link } from "react-router-dom";
function Nav(){
    return (
        <>
        <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><h3>Navbar</h3></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"><Link to={"/mobile"}style={{textDecoration: 'none', color:'black'}}>Mobile</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link"><Link to={"/laptop"} style={{textDecoration: 'none', color:'black'}}>Laptops</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link"><Link to={"/register"} style={{textDecoration: 'none', color:'black'}}>register</Link></a>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link" href="/laptop"></a>
        </li> */}
      </ul>
    </div>
  </div>
</nav>


        {/* <h2>NavBar</h2>
        <span><Link to={"/"}>Home</Link></span>
        <span><Link to={"/upload"}>Home</Link></span> */}
        </>
    )
}
export default Nav