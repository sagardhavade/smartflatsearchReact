const Agents = () =>{
    const agentsConsultStyle = {
        padding: '3rem 0',
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/other/consult_agent-bg.png)`,
        borderRadius: '1rem',
      };
    return(
        // <!-- Agents Consult section -->
        <section class=" section--padding pb-0" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100" style={agentsConsultStyle}>
            <div class="container">
                <div class="agents__consult--inner position-relative">
                    <div class="agents__consult__content">
                        <h5 class="agents__consult--subtitle">About Real Estate</h5>
                        <h2 class="agents__consult--title">Consult with agents for listing</h2>
                        <p class="agents__consult--desc">Our company provides a full range of services for the construction</p>
                        <a class="agents__consult--link" href="javascript:void(0)">Let,s Get Started</a>
                    </div>
                    <div class="agents__consult--thumb">
                        <img src={`${process.env.PUBLIC_URL}/assets/img/other/agents-thumb.png`} alt="img"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Agents;