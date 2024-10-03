const Video = () => {
  return (
    // <!-- Video section -->
    <div
      class="video__banner--area"
      data-aos="fade-up"
      data-aos-duration="1200"
      data-aos-delay="100"
    >
      <div class="video__thumbnail position-relative">
        <video
          playsInline
          autoPlay
          loop
          className="video__field"
          id="video"
          preload="metadata"
          poster={`${process.env.PUBLIC_URL}/assets/img/other/video-banner.png`}
        >
          <source src={`${process.env.PUBLIC_URL}/assets/video/background.mp4`} type="video/mp4" />
        </video>

        <div title="Play video" class="bideo__play style2" id="circle-play-b">
          <div class="bideo__play--icon">
            <span class="bideo__play--text"> Play</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
