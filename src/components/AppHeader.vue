<template>
  <nav class="navbar navbar-expand-lg bg-light sticky-top">
    <div class="container">
      <img src="@/assets/images/logo.png" alt="" />
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-">
          <img src="@/assets/icons/menu.png" alt=""
        /></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item mx-md-3">
            <a class="nav-link active" aria-current="page" href="#"
              >Vacations</a
            >
          </li>
          <li class="nav-item mx-md-3">
            <a class="nav-link" href="#">Real Estate</a>
          </li>
          <li class="nav-item mx-md-3">
            <a class="nav-link" href="#">Financial Services</a>
          </li>
          <li class="nav-item mx-md-3">
            <a class="nav-link" href="#">About Us</a>
          </li>
          <li class="nav-item mx-md-3">
            <a class="nav-link" href="#"></a>
          </li>
        </ul>
        <a class="nav-link" href="#" style="color: #50ac95">Login</a>

        <button class="btn btn__soon">Get Started</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  background: #fff !important;
}
.navbar-brand {
  font-weight: bold;
  font-size: medium;
  margin-left: 1rem;
}
.navbar-light .navbar-toggler {
  border: none;
}
.navbar-light .navbar-toggler:focus {
  box-shadow: none;
  border: none;
}

.nav-link {
  color: #798992;
  font-size: small;
  font-weight: 500;
}
.btn__soon {
  background: #50ac95;
  height: 50px;
  width: 100px;
  border-radius: 0px;
  color: #fff;
  font-size: small;
}
</style>
