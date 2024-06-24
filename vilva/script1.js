class myheader extends HTMLElement {
    connectedCallback() {
      this.innerHTML =  `<nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <img src="https://vilvatech.in/wp-content/uploads/2022/05/vilvatech-logo-.png" width="190">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
       
        <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto ">
            <li class="nav-item px-3">
              <a class="nav-link active" aria-current="page" href="https://vilvatech.in/">Home</a>
            </li>
            <li class="nav-item px-3">
              <a class="nav-link" href="https://vilvatech.in/about-us/">About Us</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuButton"data-toggle="dropdown" aria-expanded="false">
              Solutions
              </a>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><a class="dropdown-item" href="https://vilvatech.in/home-automation/">Home Automation</a></li>
                <li><a class="dropdown-item" href="https://vilvatech.in/green-energy-solutions/">Green Energy Solutions</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="https://vilvatech.in/safety-and-security/">Safety and Security</a></li>
                <li><a class="dropdown-item" href="https://vilvatech.in/hospital-solutions/">Hospital Solutions</a></li>
                <li><a class="dropdown-item" href="https://vilvatech.in/hotel-automation/">Hotel Automation</a></li>
              </ul>
            </li>
            <li class="nav-item px-3">
              <li><a class="nav-link " href="https://vilvatech.in/#">Knowledge Hub</a></li>
            </li>
            
            <li class="nav-item px-3">
              <li><a class="nav-link " href="https://vilvatech.in/our-projects/">Projects</a></li>
            </li>
            <li class="nav-item px-3">
              <li><a class="nav-link "  href="https://vilvatech.in/career/">Career</a></li>
            </li>
            <li class="nav-item px-3">
              <li><a class="nav-link " href="+91 73393 33614"> +91 73393 33614</a></li>
            </li>
          </ul>
        
      </div>
      </div>
      </nav>`
     
   }
  }
 


  class myfooter extends HTMLElement {
      connectedCallback() {
        this.innerHTML =  `<div class="b-example-divider"></div>

<div class="container ">
<footer class="row ">
<div class="col-4 text-center">
  <img src="https://vilvatech.in/wp-content/uploads/2022/05/vilvatech-logo-.png" width="250">
  <p>VilvaTech established in 2018 with a great vision to bring technology closer to people at an affordable cost. VilvaTech is headquartered in Thanjavur and serving Eastern Tamilnadu region.</p>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.775104202542!2d79.10201297355154!3d10.751808459650382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baabf0c6eaed8b9%3A0xc652dfe3fae3f3ef!2sVilvaTech%20%7C%20Home%20Automation%20%7C%20Green%20Energy%20Solutions%20%7C%20Safety%20and%20Security!5e0!3m2!1sen!2sin!4v1716808096922!5m2!1sen!2sin" width="270" height="150" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
<br>
<br>



<div class="col mb-4">
  
  <h5><i class="bi bi-telephone"></i>  Phone</h5>
  <p><a href="tel:+91 93842 22261"></a>        +91 93842 22261</p>
  <p><a href="tel:+91 93842 22261"></a>       +91 73393 33614</p>

 <br> <br>
 <h5>Quick Links</h5>
<!-- As a link -->
<nav class="navbar ">
<div class="container-fluid">
  <a class="navbar-brand" href="#">About</a>
  <a class="navbar-brand" href="#"></a>
  <a class="navbar-brand" href="#">Free Consultation</a>
  <a class="navbar-brand" href="#"></a>
  <a class="navbar-brand" href="#"></a>
</div>
</nav>
  
 </ul>
</div>

<div class="col mb-3">
  <h4>Email</h54>

    <h4>Opening Hours</h4>
    <p>Mon – Fri: 09.30 AM – 06.30 PM

      Sat & Sun: By Appointment</p>

</div>

<div class="col mb-3">
  <h4>Headquarters</h4>
  <i class="bi bi-geo-alt"></i>
<p>#27, Rahman Nagar, Thanjavur, M.C Road, Tamilnadu, India - 613 004.</p>
<br>

<h4>Our Branches</h4>
<p>Trichy | Kumbakonam | Chennai</p>
<br>

<h4>Download Brochure</h4>
<img src="https://vilvatech.in/wp-content/uploads/2022/05/vilvatech-qr-code-1-300x300.png" width="180" height="180">


</div>`
       
     }
    }
    customElements.define('my-header',myheader)
    customElements.define('my-footer',myfooter)