import React, { Component } from 'react';
class footer extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="container-fluid p-0">
    <div class="footer">
        <footer class="footer-dark">

            <div class="container-fluid">
                <div class="row justify-content-center bg-dark">
                    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mt-3">
                        <div class="container-fluid">

                            <div class="row justify-content-center">

                                <div class="col-md-4 col-sm-12">

                                    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

                                        <ul class="navbar-nav nav-fill w-100">
                                            <li class="nav-item px-3">
                                                <a class="nav-link" href="/blog-s">Blog</a>
                                            </li>
                                            <li class="nav-item px-3">
                                                <a class="nav-link" href="/faq-s">FAQ's</a>
                                            </li>

                                            <li class="nav-item px-3">
                                                <a class="nav-link" href="c-cat-mentor/about-us">About</a>
                                            </li>
                                            <li class="nav-item px-3">
                                                <a class="nav-link" href="c-cat-mentor/contact-us">Contact</a>
                                            </li>
                                        </ul>

                                    </nav>
                                </div>
                                <div class="col-md-4 col-sm-12">
                                    <div class="text-center">
                                        <p style="color: #e9ecef;">
                                            C-CAT Mentor <br/>
                                            is the one-step solution <br/>
                                            to prepare
                                            them
                                            for
                                            C-DAC's <br/>
                                            Computerized
                                            Common
                                            Admission Test <br/>
                                            (C-CAT).
                                        </p>
                                    </div>
                                </div>

                                <div class="col-md-4 col-sm-12">
                                    <div class="col my-3 item social   justify-content-center">
                                        <a href="https://www.facebook.com/C-CAT-Mentor-162853305509809"><i
                                                class="bi bi-facebook"></i></a>
                                        <a href="https://t.me/ccatmentor"><i class="bi bi-telegram"></i></a>
                                        <a href="https://www.youtube.com/channel/UCSNj_e5a_cYWP88_1cz0NEg"><i
                                                class="bi bi-youtube"></i></a>
                                    </div>

                                </div>

                            </div>

                        </div>


                    </nav>
                </div>
            </div>
            <div class="bg-dark py-2">
                <p class="copyright text-white text-center "> &copy; 2021 | All Right Received</p>
            </div>

        </footer>
    </div>
</div>
         );
    }
}
 
export default footer;