

// import locationMap1 from '%PUBLIC_URL%/assets/img/other/location-map1.png'
const LocationSection = () =>{
    return(
        // <!-- Location section -->
        <section class="location__section section--padding">
            <div class="container">
                <div class="section__heading text-center mb-50" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
                    <h3 class="section__heading--subtitle color__white h5"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_15_6)">
                        <path d="M9.00021 4.72925L2.5806 10.0215C2.5806 10.029 2.57872 10.04 2.57497 10.055C2.57129 10.0698 2.56934 10.0806 2.56934 10.0883V15.4473C2.56934 15.6408 2.64008 15.8085 2.78152 15.9497C2.92292 16.091 3.09037 16.1621 3.2839 16.1621H7.571V11.8747H10.4295V16.1622H14.7165C14.91 16.1622 15.0777 16.0913 15.2189 15.9497C15.3603 15.8086 15.4313 15.6408 15.4313 15.4473V10.0883C15.4313 10.0586 15.4272 10.0361 15.4201 10.0215L9.00021 4.72925Z" fill="#F23B3B"/>
                        <path d="M17.8758 8.81572L15.4309 6.78374V2.2285C15.4309 2.12437 15.3974 2.03872 15.3302 1.9717C15.2636 1.90475 15.178 1.87128 15.0736 1.87128H12.93C12.8258 1.87128 12.7401 1.90475 12.6731 1.9717C12.6062 2.03872 12.5727 2.1244 12.5727 2.2285V4.4056L9.8486 2.12792C9.61069 1.93439 9.3278 1.83765 9.00026 1.83765C8.67275 1.83765 8.3899 1.93439 8.15175 2.12792L0.124063 8.81572C0.0496462 8.87516 0.00885955 8.95517 0.00127316 9.05567C-0.00627412 9.15609 0.0197308 9.2438 0.079366 9.31818L0.771565 10.1444C0.831201 10.2113 0.909254 10.2523 1.00604 10.2673C1.09539 10.2748 1.18475 10.2486 1.27411 10.1891L9.00002 3.74687L16.726 10.1891C16.7857 10.241 16.8637 10.2669 16.9605 10.2669H16.994C17.0907 10.2522 17.1686 10.211 17.2285 10.1442L17.9208 9.31814C17.9803 9.2436 18.0064 9.15605 17.9987 9.05551C17.991 8.95528 17.9501 8.87527 17.8758 8.81572Z" fill="#F23B3B"/>
                        </g>
                        <defs>
                        <clipPath >
                        <rect width="18" height="18" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                        <span>Real</span> estate agency
                    </h3>
                    <h2 class="section__heading--title color__white">Find Home By <span>Location</span></h2>
                </div>
                <div class="location__container" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="150">
                    <div class="location__inner d-flex">
                        <ul class="location__step">
                            <li class="location__list active d-flex align-items-center" data-location-name="california">
                                <div class="location__map">
                                    <img src={`${process.env.PUBLIC_URL}/assets/img/other/location-map1.png`} alt="map" />
                                </div>
                                <div class="location__content d-flex align-items-center justify-content-between">
                                    <div class="location__content--left">
                                        <h3 class="location__name">California</h3>
                                        <span class="location__properties--count">13 Properties</span>
                                    </div>
                                    <span class="location__icon"><svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.3809 1.6338L15.381 1.6342L15.9962 12.3418C16.006 12.514 15.9489 12.6787 15.8317 12.8102C15.7144 12.9418 15.5573 13.0174 15.3851 13.0274L15.3809 1.6338ZM15.3809 1.6338C15.3712 1.46168 15.2951 1.30368 15.1624 1.18592L15.1605 1.18426C15.0298 1.06706 14.8643 1.00927 14.6912 1.0191C14.6911 1.0191 14.691 1.0191 14.691 1.01911L3.98364 1.63417C3.81073 1.6441 3.65336 1.71984 3.53665 1.85078C3.41856 1.98325 3.36155 2.14754 3.37139 2.31874L3.37143 2.31948L3.4257 3.28954C3.42571 3.28973 3.42572 3.28992 3.42573 3.29012C3.43586 3.46382 3.51 3.61791 3.63972 3.73354C3.76832 3.84817 3.92645 3.90285 4.10234 3.89293C4.1025 3.89293 4.10266 3.89292 4.10282 3.89291L10.4074 3.51975L11.6154 3.44825L10.8102 4.35157L1.4239 14.8819C1.20269 15.1301 1.223 15.5528 1.50939 15.8081L2.23623 16.456C2.50136 16.6923 2.88907 16.6705 3.12876 16.4016L12.4817 5.90868L13.2836 5.00898L13.354 6.21215L13.7201 12.4652L13.7202 12.466C13.7297 12.6335 13.8096 12.7987 13.9442 12.9188C14.0758 13.036 14.2407 13.0931 14.4126 13.0832L14.4128 13.0831L15.3849 13.0274L15.3809 1.6338Z" stroke="currentColor"/>
                                        </svg>
                                    </span>
                                </div>
                            </li>
                            <li class="location__list d-flex align-items-center" data-location-name="morocco">
                                <div class="location__map">
                                    <img src={`${process.env.PUBLIC_URL}/assets/img/other/location-map2.png`} alt="map"/>
                                </div>
                                <div class="location__content d-flex align-items-center justify-content-between">
                                    <div class="location__content--left">
                                        <h3 class="location__name">Morocco</h3>
                                        <span class="location__properties--count">15 Properties</span>
                                    </div>
                                    <span class="location__icon"><svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.3809 1.6338L15.381 1.6342L15.9962 12.3418C16.006 12.514 15.9489 12.6787 15.8317 12.8102C15.7144 12.9418 15.5573 13.0174 15.3851 13.0274L15.3809 1.6338ZM15.3809 1.6338C15.3712 1.46168 15.2951 1.30368 15.1624 1.18592L15.1605 1.18426C15.0298 1.06706 14.8643 1.00927 14.6912 1.0191C14.6911 1.0191 14.691 1.0191 14.691 1.01911L3.98364 1.63417C3.81073 1.6441 3.65336 1.71984 3.53665 1.85078C3.41856 1.98325 3.36155 2.14754 3.37139 2.31874L3.37143 2.31948L3.4257 3.28954C3.42571 3.28973 3.42572 3.28992 3.42573 3.29012C3.43586 3.46382 3.51 3.61791 3.63972 3.73354C3.76832 3.84817 3.92645 3.90285 4.10234 3.89293C4.1025 3.89293 4.10266 3.89292 4.10282 3.89291L10.4074 3.51975L11.6154 3.44825L10.8102 4.35157L1.4239 14.8819C1.20269 15.1301 1.223 15.5528 1.50939 15.8081L2.23623 16.456C2.50136 16.6923 2.88907 16.6705 3.12876 16.4016L12.4817 5.90868L13.2836 5.00898L13.354 6.21215L13.7201 12.4652L13.7202 12.466C13.7297 12.6335 13.8096 12.7987 13.9442 12.9188C14.0758 13.036 14.2407 13.0931 14.4126 13.0832L14.4128 13.0831L15.3849 13.0274L15.3809 1.6338Z" stroke="currentColor"/>
                                        </svg>
                                    </span>
                                </div>
                            </li>
                            <li class="location__list d-flex align-items-center" data-location-name="bahrain">
                                <div class="location__map">
                                    <img src={`${process.env.PUBLIC_URL}/assets/img/other/location-map3.png`} alt="map"/>
                                </div>
                                <div class="location__content d-flex align-items-center justify-content-between">
                                    <div class="location__content--left">
                                        <h3 class="location__name">Bahrain</h3>
                                        <span class="location__properties--count">18 Properties</span>
                                    </div>
                                    <span class="location__icon"><svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.3809 1.6338L15.381 1.6342L15.9962 12.3418C16.006 12.514 15.9489 12.6787 15.8317 12.8102C15.7144 12.9418 15.5573 13.0174 15.3851 13.0274L15.3809 1.6338ZM15.3809 1.6338C15.3712 1.46168 15.2951 1.30368 15.1624 1.18592L15.1605 1.18426C15.0298 1.06706 14.8643 1.00927 14.6912 1.0191C14.6911 1.0191 14.691 1.0191 14.691 1.01911L3.98364 1.63417C3.81073 1.6441 3.65336 1.71984 3.53665 1.85078C3.41856 1.98325 3.36155 2.14754 3.37139 2.31874L3.37143 2.31948L3.4257 3.28954C3.42571 3.28973 3.42572 3.28992 3.42573 3.29012C3.43586 3.46382 3.51 3.61791 3.63972 3.73354C3.76832 3.84817 3.92645 3.90285 4.10234 3.89293C4.1025 3.89293 4.10266 3.89292 4.10282 3.89291L10.4074 3.51975L11.6154 3.44825L10.8102 4.35157L1.4239 14.8819C1.20269 15.1301 1.223 15.5528 1.50939 15.8081L2.23623 16.456C2.50136 16.6923 2.88907 16.6705 3.12876 16.4016L12.4817 5.90868L13.2836 5.00898L13.354 6.21215L13.7201 12.4652L13.7202 12.466C13.7297 12.6335 13.8096 12.7987 13.9442 12.9188C14.0758 13.036 14.2407 13.0931 14.4126 13.0832L14.4128 13.0831L15.3849 13.0274L15.3809 1.6338Z" stroke="currentColor"/>
                                        </svg>
                                    </span>
                                </div>
                            </li>
                        </ul>
                        <ul class="location__step step__img">
                            <li class="location__thumbnail d-block" data-location-name="california">
                                <div class="location__thumbnail-media">
                                    <img src={`${process.env.PUBLIC_URL}/assets/img/other/location-thumb1.png`} alt="location-house"/>
                                </div>
                                <div class="location__btn text-center">
                                    <a class="solid__btn" href="./admin/my-properties.html">More Location</a>
                                </div>
                            </li>
                            <li class="location__thumbnail d-none" data-location-name="morocco">
                                <div class="location__thumbnail-media">
                                    <img src={`${process.env.PUBLIC_URL}/assets/img/other/location-thumb2.png`} alt="location-house"/>
                                </div>
                                <div class="location__btn text-center">
                                    <a class="solid__btn" href="./admin/my-properties.html">More Location</a>
                                </div>
                            </li>
                            <li class="location__thumbnail d-none" data-location-name="bahrain">
                                <div class="location__thumbnail-media">
                                    <img src={`${process.env.PUBLIC_URL}/assets/img/other/location-thumb3.png`} alt="location-house"/>
                                </div>
                                <div class="location__btn text-center">
                                    <a class="solid__btn" href="./admin/my-properties.html">More Location</a>
                                </div>
                            </li>
                            <li class="location__thumbnail d-none" data-location-name="afghanistan">
                                <div class="location__thumbnail-media">
                                    <img src={`${process.env.PUBLIC_URL}/assets/img/other/location-thumb4.png`} alt="location-house"/>
                                </div>
                                <div class="location__btn text-center">
                                    <a class="solid__btn" href="./admin/my-properties.html">More Location</a>
                                </div>
                            </li>
                            <li class="location__thumbnail d-none" data-location-name="mexico">
                                <div class="location__thumbnail-media">
                                    <img src={`${process.env.PUBLIC_URL}/assets/img/other/location-thumb5.png`} alt="location-house"/>
                                </div>
                                <div class="location__btn text-center">
                                    <a class="solid__btn" href="./admin/my-properties.html">More Location</a>
                                </div>
                            </li>
                            <li class="location__thumbnail d-none" data-location-name="namibia">
                                <div class="location__thumbnail-media">
                                    <img src={`${process.env.PUBLIC_URL}/assets/img/other/location-thumb6.png`} alt="location-house"/>
                                </div>
                                <div class="location__btn text-center">
                                    <a class="solid__btn" href="./admin/my-properties.html">More Location</a>
                                </div>
                            </li>
                        </ul>
                        <ul class="location__step">
                            <li class="location__list d-flex align-items-center" data-location-name="afghanistan">
                                <div class="location__map">
                                    <img src={`${process.env.PUBLIC_URL}/assets/img/other/location-map4.png`} alt="map"/>
                                </div>
                                <div class="location__content d-flex align-items-center justify-content-between">
                                    <div class="location__content--left">
                                        <h3 class="location__name">Afghanistan.</h3>
                                        <span class="location__properties--count">11 Properties</span>
                                    </div>
                                    <span class="location__icon"><svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.3809 1.6338L15.381 1.6342L15.9962 12.3418C16.006 12.514 15.9489 12.6787 15.8317 12.8102C15.7144 12.9418 15.5573 13.0174 15.3851 13.0274L15.3809 1.6338ZM15.3809 1.6338C15.3712 1.46168 15.2951 1.30368 15.1624 1.18592L15.1605 1.18426C15.0298 1.06706 14.8643 1.00927 14.6912 1.0191C14.6911 1.0191 14.691 1.0191 14.691 1.01911L3.98364 1.63417C3.81073 1.6441 3.65336 1.71984 3.53665 1.85078C3.41856 1.98325 3.36155 2.14754 3.37139 2.31874L3.37143 2.31948L3.4257 3.28954C3.42571 3.28973 3.42572 3.28992 3.42573 3.29012C3.43586 3.46382 3.51 3.61791 3.63972 3.73354C3.76832 3.84817 3.92645 3.90285 4.10234 3.89293C4.1025 3.89293 4.10266 3.89292 4.10282 3.89291L10.4074 3.51975L11.6154 3.44825L10.8102 4.35157L1.4239 14.8819C1.20269 15.1301 1.223 15.5528 1.50939 15.8081L2.23623 16.456C2.50136 16.6923 2.88907 16.6705 3.12876 16.4016L12.4817 5.90868L13.2836 5.00898L13.354 6.21215L13.7201 12.4652L13.7202 12.466C13.7297 12.6335 13.8096 12.7987 13.9442 12.9188C14.0758 13.036 14.2407 13.0931 14.4126 13.0832L14.4128 13.0831L15.3849 13.0274L15.3809 1.6338Z" stroke="currentColor"/>
                                        </svg>
                                    </span>
                                </div>
                            </li>
                            <li class="location__list d-flex align-items-center" data-location-name="mexico">
                                <div class="location__map">
                                    <img src={`${process.env.PUBLIC_URL}/assets/img/other/location-map5.png`} alt="map"/>
                                </div>
                                <div class="location__content d-flex align-items-center justify-content-between">
                                    <div class="location__content--left">
                                        <h3 class="location__name">Mexico</h3>
                                        <span class="location__properties--count">20 Properties</span>
                                    </div>
                                    <span class="location__icon"><svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.3809 1.6338L15.381 1.6342L15.9962 12.3418C16.006 12.514 15.9489 12.6787 15.8317 12.8102C15.7144 12.9418 15.5573 13.0174 15.3851 13.0274L15.3809 1.6338ZM15.3809 1.6338C15.3712 1.46168 15.2951 1.30368 15.1624 1.18592L15.1605 1.18426C15.0298 1.06706 14.8643 1.00927 14.6912 1.0191C14.6911 1.0191 14.691 1.0191 14.691 1.01911L3.98364 1.63417C3.81073 1.6441 3.65336 1.71984 3.53665 1.85078C3.41856 1.98325 3.36155 2.14754 3.37139 2.31874L3.37143 2.31948L3.4257 3.28954C3.42571 3.28973 3.42572 3.28992 3.42573 3.29012C3.43586 3.46382 3.51 3.61791 3.63972 3.73354C3.76832 3.84817 3.92645 3.90285 4.10234 3.89293C4.1025 3.89293 4.10266 3.89292 4.10282 3.89291L10.4074 3.51975L11.6154 3.44825L10.8102 4.35157L1.4239 14.8819C1.20269 15.1301 1.223 15.5528 1.50939 15.8081L2.23623 16.456C2.50136 16.6923 2.88907 16.6705 3.12876 16.4016L12.4817 5.90868L13.2836 5.00898L13.354 6.21215L13.7201 12.4652L13.7202 12.466C13.7297 12.6335 13.8096 12.7987 13.9442 12.9188C14.0758 13.036 14.2407 13.0931 14.4126 13.0832L14.4128 13.0831L15.3849 13.0274L15.3809 1.6338Z" stroke="currentColor"/>
                                        </svg>
                                    </span>
                                </div>
                            </li>
                            <li class="location__list d-flex align-items-center" data-location-name="namibia">
                                <div class="location__map">
                                    <img src={`${process.env.PUBLIC_URL}/assets/img/other/location-map6.png`} alt="map"/>
                                </div>
                                <div class="location__content d-flex align-items-center justify-content-between">
                                    <div class="location__content--left">
                                        <h3 class="location__name">Namibia</h3>
                                        <span class="location__properties--count">12 Properties</span>
                                    </div>
                                    <span class="location__icon"><svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.3809 1.6338L15.381 1.6342L15.9962 12.3418C16.006 12.514 15.9489 12.6787 15.8317 12.8102C15.7144 12.9418 15.5573 13.0174 15.3851 13.0274L15.3809 1.6338ZM15.3809 1.6338C15.3712 1.46168 15.2951 1.30368 15.1624 1.18592L15.1605 1.18426C15.0298 1.06706 14.8643 1.00927 14.6912 1.0191C14.6911 1.0191 14.691 1.0191 14.691 1.01911L3.98364 1.63417C3.81073 1.6441 3.65336 1.71984 3.53665 1.85078C3.41856 1.98325 3.36155 2.14754 3.37139 2.31874L3.37143 2.31948L3.4257 3.28954C3.42571 3.28973 3.42572 3.28992 3.42573 3.29012C3.43586 3.46382 3.51 3.61791 3.63972 3.73354C3.76832 3.84817 3.92645 3.90285 4.10234 3.89293C4.1025 3.89293 4.10266 3.89292 4.10282 3.89291L10.4074 3.51975L11.6154 3.44825L10.8102 4.35157L1.4239 14.8819C1.20269 15.1301 1.223 15.5528 1.50939 15.8081L2.23623 16.456C2.50136 16.6923 2.88907 16.6705 3.12876 16.4016L12.4817 5.90868L13.2836 5.00898L13.354 6.21215L13.7201 12.4652L13.7202 12.466C13.7297 12.6335 13.8096 12.7987 13.9442 12.9188C14.0758 13.036 14.2407 13.0931 14.4126 13.0832L14.4128 13.0831L15.3849 13.0274L15.3809 1.6338Z" stroke="currentColor"/>
                                        </svg>
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </div>
            {/* <img class="shape__250" src={`${process.env.PUBLIC_URL}/assets/img/other/shape-250+.png`} alt="img`} /> */}
            <img class="shape__250" src={`${process.env.PUBLIC_URL}/assets/img/other/shape-250+.png`} alt="img"/>
                              
        </section>
        
    );
}

export default LocationSection