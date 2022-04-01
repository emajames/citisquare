<template>
  <AppHeader />
  <SearchTabs />
  <AppHero />
  <section class="partners">
    <h3>Our Partners</h3>
    <div class="partners1">
      <img src="@/assets/a.svg" alt=""> <img src="@/assets/b.svg" alt=""> <img src="@/assets/c.svg" alt="">
      <img src="@/assets/d.svg" alt=""> <img src="@/assets/e.svg" alt=""> <img src="@/assets/f.svg" alt=""> 
    </div>
  </section>
  <Experience />
  <Offers />
  <section class="merchant">
      <div class="merchant1">
        <h2>Become A Merchant</h2>
        <p>Merchants on citisquare get to enjoy all benefits that
        comes with marketing on citisquare, we onboard various
        types of merchants and also provide offers.</p>
        <ul>
          <li>Shortlets</li>
          <li>Property Developers</li>
          <li>Vacation Service Providers</li>
          <li>Spa Service Providers</li>
          <li>Financial Services</li>
        </ul>
        <button>Get Started</button>
      </div>
      <div class="merchant2">
        <img src="@/assets/merchant.svg" alt="merchant">
        <h5>XenPeople Ltd</h5>
        <p>Property Developers</p>
        <p style="color: #525151;">250 listed properties</p>
      </div>
    </section>
  <RealEstate />
  <div class="invest-section text-center pt-3">
      <h1 class="loan">
        Hey Whats-Up, No Money to
        Invest? Get a Loan!!
      </h1>
      <p class="lending pt-3">
        No money to invest? we have covered, we onboarded the best aggregate lending companies,
        with the most suitable and flexible offers you get in the city.
      </p>
      <button class="apply-btn mt-3">Apply For A Loan</button>
    </div>
    <div class="grid-card mt-5 mb-5">
      <div class="card" >
  <div class="card-body">
    <h6 class="card-title">LOANS WE OFFER</h6>
    <h6 class="card-subtitle mb-2 text-muted pt-2">Buy Now Pay Later</h6>
    <p class="card-text">Buy Now Pay Later(BNPLM) is a short term financing 
     that allows consumers to make purchases and pay for them in the future
     date, ofetn interest free. You have interest in a property listed on
     citisquare but no funds, use this option to own the property and pay
     the fees at a later date. Terms and conditions apply</p>
    <h6 class="pt-3  pb-3 chant">MERCHANT</h6>
    <div class="card-logo pt-2  ">
      <img src="@/assets/flutter.svg" alt="">
      <img src="@/assets/airtel.svg" alt="">
      <img src="@/assets/flutter.svg" alt="">
      <img src="@/assets/ups.svg" alt="">
      <img src="@/assets/uba.svg" alt="">
      <img src="@/assets/xen.svg" alt="">
      <h6 class="num">+2.3k</h6>

    </div>
  </div>
  
</div>
<div class="card" >
  <div class="card-body">
    <h6 class="card-title">LOANS WE OFFER</h6>
    <h6 class="card-subtitle mb-2 text-muted pt-2">Personal Loan</h6>
    <p class="card-text">Buy Now Pay Later (BNPLM) is a short term
      financing that allows consumers to make purchase and pay for
      them at a future date, often interest free. You have interest
      in the property listed on citisquare but no funds, use this 
      option to own the property and pay the fees at a later date. 
      Terms and conditions apply
    </p>
    <h6 class="pt-3  pb-3 chant">MERCHANT</h6>
    <div class="card-logo pt-2  ">
      <img src="@/assets/flutter.svg" alt="">
      <img src="@/assets/airtel.svg" alt="">
      <img src="@/assets/flutter.svg" alt="">
      <img src="@/assets/ups.svg" alt="">
      <img src="@/assets/uba.svg" alt="">
      <img src="@/assets/xen.svg" alt="">
      <h6 class="num">+2.3k</h6>

    </div>
  </div>
  
</div>
<div class="card " >
  <div class="card-body">
    <h6 class="card-title">LOANS WE OFFER</h6>
    <h6 class="card-subtitle mb-2 text-muted pt-2">Buy Now Pay Later</h6>
    <p class="card-text">Buy Now Pay Later(BNPLM) is a short term financing 
     that allows consumers to make purchases and pay for them in the future
     date, ofetn interest free. You have interest in a property listed on
     citisquare but no funds, use this option to own the property and pay
     the fees at a later date. Terms and conditions apply</p>
    <h6 class="pt-3  pb-3 chant">MERCHANT</h6>
    <div class="card-logo pt-2  ">
      <img src="@/assets/flutter.svg" alt="">
      <img src="@/assets/airtel.svg" alt="">
      <img src="@/assets/flutter.svg" alt="">
      <img src="@/assets/ups.svg" alt="">
      <img src="@/assets/uba.svg" alt="">
      <img src="@/assets/xen.svg" alt="">
      <h6 class="num">+2.3k</h6>

    </div>
  </div>
  
</div>
    </div>
  
    <section class="rent">
      <h1>Rent Shortlets, Book Spa Sessions</h1>
      <p>Put your money to work by investing in our real estates, you can also purchase properties</p>
      <button>Rent Shortlets</button>
    </section>
  <section class="beta">
      <h1>We Are Currently In Beta</h1>
      <p>We are currently in beta-testing phase, but we will notify you when we go live if you join our waiting list</p>
      <input type="text" placeholder="Enter your email address">
      <br><button>Join Waiting List</button>
    </section>
  <Footer/>
</template>

<script>
// @ is an alias to /src
import AppHeader from "@/components/AppHeader.vue";
import SearchTabs from "@/components/SearchTabs.vue";
import AppHero from "@/components/AppHero.vue";
import Experience from "@/components/Experience.vue";
import Footer from "@/components/Footer.vue";
import RealEstate from "@/components/RealEstate.vue";
import Offers from "@/components/Offers.vue";
export default {
  name: "Home",
  components: {
    AppHeader,
    SearchTabs,
    AppHero,
    Experience,
    Footer,
    RealEstate,
    Offers
  },
};
</script>

<style scoped>

.loan {
  /* font-size: 25px;
  line-height: 34px; */
  font-family: 'Recoleta';
  font-weight: 700;
  font-size: 40px;
  
}
.apply-btn {
  border: none;
  outline: none;
  padding: 8px 20px;
  background: #1686C1;
  color: #fff;
  border-radius: 5px;
  font-size: 15px;
}
.grid-card{
  margin-left: 5rem;
  margin-right: 5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2rem;
}
.card-title {
  font-size: 12px;
  font-weight: 700;
  font-family: 'Nunito Sans', sans-serif;
}
.card {
  padding: 25px 25px;
  width: 100%;
}
.card-subtitle {
  font-family: 'Recoleta' ;
}
.card-text {
  font-size: 14px;
  font-weight: 500;
}
.card-logo {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
}
.card-logo img{
  background: #EBF5F1;
  border-radius: 50%;
  height: 1.6rem;
  width: 1.6rem;
}
.chant {
  font-size: 12px;
  font-weight: 700;
  font-family: 'Nunito Sans', sans-serif;
}
.num {
  font-size: 12px;
  font-weight: 700;
  padding-top: 6px;
}

*{
    
    font-family: 'Nunito Sans', sans-serif;
  }
  .merchant{
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-left: 12rem;
    margin-right: 12rem;
    column-gap: 7rem;
    padding: 2rem 0;
  }
  .merchant1{
    padding-right: 3rem;
  }
  .merchant1 h2{
    font-size: 40px;
    font-weight: 600;
    font-family: 'Recoleta';
  }
  .merchant1 p{
    font-size: 20px;
    font-weight: 400;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .merchant1 ul{
    margin-left: 1.3rem;
    font-weight: 400;
  }
  .merchant1 ul li{
    font-weight: 400;
    margin-bottom: 0.5rem;
  }
  .merchant1 button{
    background: #50AC95;
    padding: 8px 20px;
    border: none;
    margin-top: 1rem;
    color: white;
  }
  .merchant2{
    text-align: center;
  }
  .merchant2 img{
    width: 20rem;
  }
  .merchant2 h5{
    font-weight: 700;
    font-size: 20px;
  }
  .merchant2 p{
    font-weight: 400;
    font-size: 14px;
  }
  .invest-section {
    margin-left: 25rem;
    margin-right: 25rem;
  }
  .beta{
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: 22rem;
    margin-right: 22rem;
  }
  .beta h1{
    font-size: 50px;
    font-weight: 600;
    font-family: 'Recoleta';
  }
  .beta p{
    font-size: 20px;
    font-weight: 400;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .beta input{
    border: 1px solid #000000;
    padding: 7px 10px;
    width: 50%;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }
  .beta button{
    background: #50AC95;
    color: white;
    padding: 8px 20px;
    border: none;
  }
  .rent{
    background: url("../assets/rent.svg") center center/cover;
    height: 50vh;
    margin-top: 1rem;
    color: white;
    text-align: center;
  }
  .rent h1{
    font-family: 'Recoleta';
    font-size: 50px;
    font-weight: 500;
    padding-top: 7rem;

  }
  .rent p{
    font-size: 20px;
    font-weight: 400;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .rent button{
    background: #1686C1;
    border: 1px solid #1686C1;
    padding: 8px 20px;
    color: white;
  }
  .partners{
    padding: 2rem 7rem;
    text-align: center;
    
  }
  .partners h3{
    color: #50AC95;
    font-size: 25px;
    font-weight: 800;
  }
  .partners1{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    column-gap: 2rem;
  }
  .partners1 img{
    width: 100%;
    height: 3rem;
  }
  

  


  @media(max-width:576px){
    .merchant{
    display: grid;
    grid-template-columns: 1fr;
    margin-left: 10px;
    margin-right: 10px;
    row-gap: 1rem;
    text-align: center;
  }
  .merchant2 img{
    width: 100%;
  }
  .merchant1 ul{
    margin-left: 10px;
    font-weight: 400;
    list-style: none;
  }
  .merchant1{
    padding-right: 0;
  }
  .grid-card{
  margin-left: 10px;
  margin-right: 10px;
  display: grid;
  grid-template-columns: 1fr ;
  row-gap: 1rem;
  text-align: center;
}
.card-logo {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr ;
  grid-gap: 1rem;
}
.invest-section {
    margin-left: 10px;
    margin-right: 10px;
  }
  .beta{
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left:10px;
    margin-right: 10px;
  }
  .beta input{
    border: 1px solid #000000;
    padding: 7px 10px;
    width: 100%;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }
  .beta button{
    background: #50AC95;
    color: white;
    padding: 8px 20px;
    border: none;
    width: 100%;
  }
  .rent{
    background: url("../assets/rent.svg") center center/cover;
    height: 80vh;
    margin-top: 1rem;
    color: white;
    text-align: center;
  }
  .partners{
    padding: 2rem 10px;
    text-align: center;
    
  }
  .partners h3{
    color: #50AC95;
    font-size: 25px;
    font-weight: 800;
  }
  .partners1{
    display: grid;
    grid-template-columns: 1fr 1fr ;
    row-gap: 1rem;
  }
  .partners1 img{
    width: 100%;
  }
  }


  @media(min-width:577px) and (max-width:768px){
    .merchant{
    display: grid;
    grid-template-columns: 1fr;
    margin-left: 10px;
    margin-right: 10px;
    row-gap: 1rem;
    text-align: center;
  }
  .merchant2 img{
    width: 50%;
  }
  .merchant1 ul{
    margin-left: 10px;
    font-weight: 400;
    list-style: none;
  }
  .merchant1{
    padding-right: 0;
  }
    .grid-card{
  margin-left: 10px;
  margin-right: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 1rem;
  text-align: center;
}
.card-logo {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
}
.invest-section {
    margin-left: 10px;
    margin-right: 10px;
  }
  .beta{
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left:10px;
    margin-right: 10px;
  }
  .beta input{
    border: 1px solid #000000;
    padding: 7px 10px;
    width: 50%;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }
  .beta button{
    background: #50AC95;
    color: white;
    padding: 8px 20px;
    border: none;
    
  }
  }


  @media(min-width:769px) and (max-width:1200px){
    .merchant{
    display: grid;
    grid-template-columns: 1fr;
    margin-left: 10px;
    margin-right: 10px;
    row-gap: 1rem;
    text-align: center;
  }
  .merchant2 img{
    width: 40%;
  }
  .merchant1 ul{
    margin-left: 10px;
    font-weight: 400;
    list-style: none;
  }
  .merchant1{
    padding-right: 0;
  }
   .grid-card{
  margin-left: 10px;
  margin-right: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 1rem;
  text-align: center;
}
.card-logo {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
}
.invest-section {
    margin-left: 10px;
    margin-right: 10px;
  }
  .beta{
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left:10px;
    margin-right: 10px;
  }
  .beta input{
    border: 1px solid #000000;
    padding: 7px 10px;
    width: 50%;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }
  .beta button{
    background: #50AC95;
    color: white;
    padding: 8px 20px;
    border: none;
    
  }
  }
</style>

