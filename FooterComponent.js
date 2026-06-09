// FooterComponent.js
class NNGFooter extends HTMLElement {
    // This function automatically runs when the element hits the screen
    connectedCallback() {
        this.innerHTML = `
        <footer class="bg-garden text-white lead py-4 mt-4" id="bottom">
            <div class="container">
                
                <div class="row text-center mb-2">
                    <div class="col-12">Let's work together!</div>
                </div>
                
                <div class="row justify-content-center mb-2">
                    <div class="col-6">
                        <hr class="text-white opacity-100 my-0">
                    </div>
                </div>
                
                <div class="row justify-content-center text-center mb-2">
                    
                    <div class="col-12 col-sm-10 col-md-8 col-lg-6">
                        <div class="row">
                            
                            <div class="col-12 col-lg-6 mb-3 mb-lg-0">
                                <i class="bi bi-envelope"></i> native.nano.gardens@gmail.com<br>
                                <i class="bi bi-telephone"></i> (773) 803-5555
                            </div>
                            
                            <div class="col-12 col-lg-6">
                                <i class="bi bi-instagram"></i><a href="https://www.instagram.com/native.nano.gardens/">@native.nano.gardens</a><br>
                                <i class="bi bi-facebook"></i> <a href="https://www.facebook.com/profile.php?id=61584079015119">Native Nano Gardens</a>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
                
                <div class="row justify-content-center mb-3">
                    <div class="col-6">
                        <hr class="text-white opacity-100 my-0">
                    </div>
                </div>
                
                <div class="row text-center small text-white-50">
                    <div class="col-12">&copy; 2026 Native Nano Gardens</div>
                </div>
                
            </div>
        </footer>
        `;
    }
}

// Register this new custom HTML element tag with the browser
customElements.define('nng-footer', NNGFooter);