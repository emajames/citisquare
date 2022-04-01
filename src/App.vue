<template>
  <router-view />
</template>

<style>
* {
  font-family: "Nunito Sans", sans-serif;
}
@font-face {
  font-family: "Recoleta";
  src: local("Recoleta"),
   url(./fonts/Recoleta-RegularDEMO.woff) format("truetype");
}
button:focus {
  box-shadow: none !important;
}
/* Change the white to any color */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 30px white inset !important;
  box-shadow: white;
}
</style>
