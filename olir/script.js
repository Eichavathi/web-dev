class myheader extends HTMLElement {
    connectedCallback() {
      this.innerHTML =  `<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container">
    <img src="https://olirdesigns.com/wp-content/uploads/2022/03/Logo.svg" width="70">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
   
    <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto ">
        <li class="nav-item px-3">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item px-3">
          <a class="nav-link" href="#">About Us</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button"id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Services
          </a>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><a class="dropdown-item" href="#">Graphic Design</a></li>
            <li><a class="dropdown-item" href="#">Web Design</a></li>
            
            <li><a class="dropdown-item" href="#">Digital Marketing</a></li>
            <li><a class="dropdown-item" href="#">Domain & Hosting</a></li>
            <li><a class="dropdown-item" href="#">Ui/Ux Design</a></li>
          </ul>
        </li>
        <li class="nav-item px-3">
          <li><a class="nav-link " >Blog</a></li>
        </li>
        <li class="nav-item px-3">
          <li><a class="nav-link " >Career</a></li>
        </li>
        <li class="nav-item px-3">
          <li><a class="nav-link " >Contact Us</a></li>
        </li>
        <li class="nav-item px-3">
          <li><a class="nav-link " href="https://facebook.com/olirdesigns/"><i class="bi bi-facebook"></i></a></li>
        </li>
      </ul>
    
  </div>
  
  </div>
  </nav>`
     
   }
  }
 


  class myfooter extends HTMLElement {
      connectedCallback() {
        this.innerHTML =  `<div class="container-fluid bg-dark">
   <div class="row">
     <div class="col-12  ">
      <img src="https://olirdesigns.com/wp-content/uploads/2021/05/footer.png "class="center-image" >
       <div class="col-12">
         <div class="icons">
           
           <a href="https://www.linkedin.com/company/olirdesigns/" ><i class="bi bi-linkedin icon-color"></i></a>
           <a href="https://instagram.com/olirdesigns/ "><i class="bi bi-instagram icon-color"></i></a>
           <a href="https://www.facebook.com/olirdesigns/"><i class="bi bi-facebook  icon-color"></i></a>
           <a href=""><i class="bi bi-file-earmark-pdf icon-color"></i></i></a>
         </div>
       <p class="nav justify-content-center  pb-3  text-secondary">© Copyrights 2023. Olir Designs Private Limited. All Rights Reserved</p>
     <p class="text-center text-secondary">Terms and Conditions | Privacy Policy</p>
   </div>
 </div>
 </div>
 </div>`
       
     }
    }
    customElements.define('my-header',myheader)
    customElements.define('my-footer',myfooter)