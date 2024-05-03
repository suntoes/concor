const headerTemplate=document.createElement('template');

headerTemplate.innerHTML=`

<style>
  
</style>
<section id="header">
  <a href="#"><img src="img/logo 2.png" class="logo" alt="logo"></a>

  <div>
    <ul id="navbar">
      <li><a href="home.html">Home</a></li>
      <li><a href="shop1.html">Shop</a></li>
      <li><a href="categories.html">Category</a>
        <i class="fa-solid fa-chevron-down js-arrow"></i>
        <ul class="sub-menu">
          <li><a href="diag.html">Diagnostic Equipment</a></li>
          <li><a href="hosp.html">Hospital Equipment</a></li>
          <li><a href="mobil.html">Mobility Aids</a></li>
          <li><a href="first.html">First Aid Supplies</a></li>
          <li><a href="iv.html">IV / Infusion Supplies</a></li>
          <li><a href="lab.html">Laboratory Equipment and Supplies</a></li>
          <li><a href="healthcare.html">Home Healthcare Equipment</a></li>
          <li><a href="others.html">Others</a></li>
        </ul>
      </li>
      <li><a href="about.html">About Us</a></li>
      <li><a href="faqs.html">FAQs</a></li>
      <li><a href="cart.html">
          <i class="fa-solid fa-bag-shopping"></i>
        </a></li>
    </ul>
  </div>
</section>
`;

class Header extends HTMLElement {
constructor() {
super();
}

connectedCallback() {
const shadowRoot=this.attachShadow({
mode: 'closed'
});

shadowRoot.appendChild(headerTemplate.content);
}
}

customElements.define('header-component', Header);