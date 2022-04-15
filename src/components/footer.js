import React from "react"


export const Footer = () => {
    return (
<footer>
<div class="container">
<div class="row pb-4">
<div class="foot-info col-12 col-md-6 col-lg-3">
<a class="foot-logo fancy-font" href="index.html">
Pub Game
</a>
<div class="address">
<i class="fas fa-map-marker-alt"></i>
<address class="mb-0">575 Gateway St</address>
</div>
<div class="mail">
<i class="fas fa-envelope"></i>
<a href="email@email.com">email@email.com</a>
</div>
<div class="phone">
<i class="fas fa-phone-alt"></i>
<a href="tel:+3594819563">+359 481 9563</a>
</div>
</div>
<div class="list-links col-6 col-lg-3">
<h5>About us</h5>
<ul>
<li>
<a href="#">Story</a>
</li>
<li>
<a href="#">Team Members</a>
</li>
<li>
<a href="#">Partners</a>
</li>
<li>
<a href="#">Privacy Policy</a>
</li>
<li>
<a href="#">Terms &amp; Conditions</a>
</li>
</ul>
</div>
<div class="list-links col-6 col-lg-3">
<h5>Quick Links</h5>
<ul>
<li>
<a href="#">Games</a>
</li>
<li>
<a href="#">Blog</a>
</li>
<li>
<a href="#">Plans</a>
</li>
<li>
<a href="#">Forum</a>
</li>
<li>
<a href="#">Support</a>
</li>
</ul>
</div>
<div class="subscriction col-12 col-md-6 col-lg-3">
<h5>Social Media</h5>
<p>Subscribe to our Newsletter</p>
<form class="subscribtion-form" action="#">
<div class="sub-email">
 <input type="email" name="email" placeholder="Email*" required/>
<button type="submit"><i class="fas fa-paper-plane"></i></button>
</div>
</form>
<p>Follow us on Social Media</p>
<ul class="d-flex">
<li class="pe-3"><a href="#"><i class="fab fa-facebook-square"></i></a></li>
<li class="pe-3"><a href="#"><i class="fab fa-steam-square"></i></a></li>
<li class="pe-3"><a href="#"><i class="fab fa-twitch"></i></a></li>
<li class="pe-3"><a href="#"><i class="fab fa-youtube-square"></i></a></li>
</ul>
</div>
</div>
<div class="copyRight">
<p class="text-center py-3 mb-0">
&copy;2022 Pub Game , Made by <a href="#">BlackWater</a>
</p>
</div>
</div>
</footer>
)
}