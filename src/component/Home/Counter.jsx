


const Counter = () =>{
    return(
        // <!-- Start counterup banner section -->
        <div className="counterup__section" id="funfactId" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
            <div className="container">
                <div className="row row-cols-1 align-items-center">
                    <div className="col">
                        <div className="counterup__inner d-flex align-items-center">
                            <div className="counterup__items text-center">
                                <h2 className="counterup__number" > <span className="js-counter" data-count="10">10</span> +</h2>
                                <h5 className="counterup__subtitle"> Year of Experience</h5>
                            </div>
                            <div className="counterup__items text-center">
                                <h2 className="counterup__number" > <span className="js-counter" data-count="120">120</span> K</h2>
                                <h5 className="counterup__subtitle"> The best property</h5>
                            </div>
                            <div className="counterup__items text-center">
                                <h2 className="counterup__number" > <span className="js-counter" data-count="50">32</span></h2>
                                <h5 className="counterup__subtitle"> Partners worked</h5>
                            </div>
                            <div className="counterup__items text-center">
                                <h2 className="counterup__number" > <span className="js-counter" data-count="50">12</span> K</h2>
                                <h5 className="counterup__subtitle"> World Clients</h5>
                            </div>
                            <img className="shape__position" src={`${process.env.PUBLIC_URL}/assets/img/other/shape1.png`} alt="img"/>
                            <img className="shape__position2" src={`${process.env.PUBLIC_URL}/assets/img/other/shape2.png`} alt="img"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Counter;