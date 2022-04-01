<template>
    <footer>
        <div class="footer1">
            <div class="footer11">
                <img src="@/assets/ct.svg" alt="">
                <p>Vel voluptua disputationi in, mei in rebum iracundia, ad enim novum mei. Esse offendit vis ad, elitr option consectetuer duo te. Et pri visse voluptaria, eligendi opor te quo. </p>
            </div>
            <div class="footer12">
                <h6>Business</h6>
                <p>Become a Merchant</p>
                <p>Become an API partner</p>
                <p>Join Us</p>
            </div>
            <div class="footer13">
                <h6>Company</h6>
                <p>About</p>
                <p>FAQs</p>
                <p>Contact</p>
                <p>Blog</p>
                <p>Gallery</p>
            </div>
            <div class="footer14">
                <h6>Follow Us</h6>
                <div class="footer141">
                    <img src="@/assets/face.svg" alt=""> <img src="@/assets/twitter.svg" alt=""> <img src="@/assets/ins.svg" alt="">
                </div>
                <h6 class="mt-3">Payment Methods</h6>
                <div class="footer141">
                    <img src="@/assets/card.png" alt=""> <img src="@/assets/visa.png" alt=""> <img src="@/assets/amex.png" alt=""> <img src="@/assets/pay.png" alt="">
                </div>
            </div>
            
        </div>
        <div class="footer2">
            <img src="@/assets/back.svg" alt="">
        </div>
        <div class="footer3">
            <div class="footer31">
                <p>Citisquare &#169; Copyright 2021 * All rights reserved</p>
            </div>
            <div class="footer32">
                <p>Terms and Conditions * Privacy Policy</p>
            </div>
            
            
        </div>
    </footer>
</template>

<style scoped>
*{
    
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;
}
    footer{
       color: white; 
       
    }
    footer h6{
        font-weight: 700;
        font-family: 'Recoleta Regular DEMO';
    }
    .footer1{
        display: grid;
        grid-template-columns: 2fr 1fr 1fr 1fr;
        column-gap: 2rem;
        background: #071F2C;
        padding-left: 5rem;
        padding-right: 5rem;
        padding-top: 3rem;
    }
    .footer2{
       background: #071F2C;
       height: 11.5rem;
    }
    .footer2 img{
        width: 100%;
    }
    .footer14 img{
        margin-right: 0.5rem;
    }
    .footer141 img{
        width: 2rem;
    }
    .footer3{
        padding-left: 5rem;
        padding-right: 5rem;
        color: black;
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-top: 2rem;
        font-weight: 600;
    }
    .footer32{
        text-align: right;
        
    }



    @media(max-width:576px){
        footer{
       color: white; 
       text-align: center;
    }
        .footer1{
        display: grid;
        grid-template-columns:  1fr;
        column-gap: 2rem;
        background: #071F2C;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 3rem;
    }
        .footer3{
        padding-left: 10px;
        padding-right: 10px;
        color: black;
        display: grid;
        grid-template-columns: 1fr;
        margin-top: 2rem;
        font-weight: 600;
    }
    .footer32{
        text-align: center;
        
    }
    .footer2{
       background: #071F2C;
       height: 4rem;
       padding-top: 1rem;
    }
    
        
    }
</style>
