const Brand = () =>{
    return(
        // <!-- Brand Logo section -->
        <div className="brand__logo--aera" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
            <div className="container">
                <div className="brand__logo--inner  brand__logo--column6 swiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="brand__logo--items">
                                <img src={`${process.env.PUBLIC_URL}/assets/img/logo/brand1.png`} alt="img"/>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="brand__logo--items">
                                <img src={`${process.env.PUBLIC_URL}/assets/img/logo/brand2.png`} alt="img"/>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="brand__logo--items">
                                <img src={`${process.env.PUBLIC_URL}/assets/img/logo/brand3.png`} alt="img"/>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="brand__logo--items">
                                <img src={`${process.env.PUBLIC_URL}/assets/img/logo/brand4.png`} alt="img"/>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="brand__logo--items">
                                <img src={`${process.env.PUBLIC_URL}/assets/img/logo/brand5.png`} alt="img"/>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="brand__logo--items">
                                <img src={`${process.env.PUBLIC_URL}/assets/img/logo/brand6.png`} alt="img"/>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="brand__logo--items">
                                <img src={`${process.env.PUBLIC_URL}/assets/img/logo/brand1.png`} alt="img"/>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="brand__logo--items">
                                <img src={`${process.env.PUBLIC_URL}/assets/img/logo/brand2.png`} alt="img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Brand;