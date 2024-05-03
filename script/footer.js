const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
  <style>
    footer {
        bottom: 0px;
        width: 100%;
        background: #f1f0ef;
    }

    footer .content .about {
        display: flex;
    }

    footer .content .about p {
        margin-left: 10px;
    }

    footer .content img {
        width: 100px;
        height: 100px;
    }

    footer .main-content {
        display: flex;
    }

    footer .main-content .box {
        flex-basis: 50%;
        padding: 10px 20px;
    }

    footer .box h2 {
        font-size: 20px;
        font-weight: 600;
        text-transform: uppercase;
        line-height: 30px;
    }

    footer .box .content {
        margin: 20px 0 0 0;
        position: relative;
    }

    footer .box .content:before {
        position: absolute;
        content: '';
        top: -10px;
        height: 2px;
        width: 100%;
        background: #656565;
    }

    footer .left .content p {
        text-align: justify;
        line-height: 20px;
    }

    footer .left .content .social {
        margin: 20px 0 0 0;
    }

    footer .left .content .social a {
        padding: 0 2px;
        text-decoration: none;
        color: #202020;
        font-size: 25px;
    }

    footer .left .content .social a i {
        height: 40px;
        width: 40px;
        background: #64a4743d;
        line-height: 40px;
        text-align: center;
        font-size: 23px;
        border-radius: 5px;
        transition: 0.3s;
    }

    footer .left .content .social a i:hover {
        background: #64a474;
    }

    footer .center .content i {
        font-size: 20px;
        background: #64a4743d;
        height: 45px;
        width: 45px;
        line-height: 45px;
        text-align: center;
        border-radius: 50%;
        transition: 0.3s;
        cursor: pointer;
    }

    footer .center .content .fas:hover {
        background: #64a474;
    }

    footer .center .content .text {
        font-size: 15px;
        font-weight: 500;
        padding-left: 10px;
    }

    footer .center .content .phone {
        margin: 15px 0;
    }

    footer .right form {
        display: flex;
        align-items: center;
    }

    footer .right .text1 {
        font-size: 20px;
        margin-bottom: 20px;
        color: #202020;
    }

    footer .right .text2 {
        font-size: 15px;
        margin-bottom: 2px;
        color: #202020;
    }

    footer .right form input {
        width: 300px;
        border: 1px solid #222222;
        outline: #202020;
        line-height: 20px;
        font-size: 15px;
        color: #202020;
        padding: 10px 10px;
        border: 1px solid #202020;
        border-radius: 10px;
        height: 35px;
    }

    footer .right form .btn {
        margin-left: 10px;
        width: 100px;
    }

    footer .right form .btn button {
        height: 40px;
        width: 100%;
        color: #fff;
        font-weight: 600;
        line-height: 20px;
        padding: 10px 10px;
        background-color: #c54846;
        border-radius: 10px;
        cursor: pointer;
        border: none;
        outline: none;
    }

    footer .right form .btn button:hover {
        background: #642423;
    }

    footer .bottom center {
        padding: 5px;
        background: #f1f0ef;
    }

    footer .bottom center span {
        color: #202020;
    }
  </style>
  <footer>
        <div class="main-content">
            <div class="left box">
                <h2>About us</h2>
                <div class="content">
                    <div class="about">
                        <img src="img/main logo.png">
                        <p>Concor Medical Supplies and Equipment provides high-quality medical supplies and equipment to
                            healthcare professionals and facilities. Our knowledgeable team offers personalized solutions to
                            meet your unique needs.</p>
                    </div>
                    <div class="social">
                        <a href="https://www.facebook.com/concor.medical.supplies"><i class="fab fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/concor_medical_supplies/?hl=en"><i class="fab fa-instagram"></i></a>
                        <a href="https://www.tiktok.com/@concormedicalsupplies"><i class="fab fa-tiktok"></i></a>
                    </div>
                </div>
            </div>
            <div class="center box">
                <h2>Address</h2>
                <div class="content">
                  <div class="place">
                    <i class="fas fa-map-marker-alt"></i>
                    <span class="text">185 Mc Arthur Highway Marulas 1440</span>
                  </div>
                  <div class="phone">
                    <i class="fas fa-phone-alt"></i>
                    <span class="text">+63 967 336 0872</span>
                  </div>
                  <div class="email">
                    <i class="fas fa-envelope"></i>
                    <span class="text">concor.medical.supplies@gmail.com</span>
                  </div>
                </div>
              </div>
            <div class="right box">
                <h2>Join our Newsletter</h2>
                <div class="content">
                    <div class="text">
                        <div class="text1">Get exclusive discounts & promotions!</div>
                        <div class="text2">Email *</div>
                    </div>
                    <form action="#">
                        <div class="email">
                            <input type="email" required>
                        </div>
                        <div class="btn">
                            <button type="submit">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="bottom">
            <center>
                <span class="far fa-copyright"></span><span> 2023 All rights reserved.</span>
            </center>
        </div>
    </footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const fontAwesome = document.querySelector('link[href*="font-awesome"]');
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    if (fontAwesome) {
      shadowRoot.appendChild(fontAwesome.cloneNode());
    }

    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('footer-component', Footer);