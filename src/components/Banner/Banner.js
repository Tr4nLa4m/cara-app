import "./banner.css";

function Banner(props) {
  const bannerTitle = props.title;
  const bannerSubtitle = props.subTitle;
  const bannerBtnTitle = props.btnTitle;
  const backgroundImage = props.image;
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="banner d-flex flex-column justify-content-center align-items-center col"
    >
      <h4>{bannerTitle}</h4>
      <h2>{bannerSubtitle}</h2>
      <button className="normal">{bannerBtnTitle}</button>
    </div>
  );
}

function MBanner(props) {
  const title = props.title;
  const subTitle = props.subTitle;
  const description = props.description;
  const btnTitle = props.btnTitle;
  const backgroundImage = props.image;

  return (
    <div className="col">
      <div
        className="banner-box d-flex flex-column justify-content-center align-items-start"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <h4>{title}</h4>
        <h2>{subTitle}</h2>
        <span>{description}</span>
        <button className="white">{btnTitle}</button>
      </div>
    </div>
  );
}

function SBanner(props) {
  const title = props.title;
  const subTitle = props.subTitle;
  const backgroundImage = props.image;

  return (
    <div className="col">
      <div
        className="banner-box-small d-flex flex-column justify-content-center align-items-start px-1d25 py-1d25"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <h2>{title}</h2>
        <h3>{subTitle}</h3>
      </div>
    </div>
  );
}

function HeadingBanner(props) {
  const title = props.title;
  const subTitle = props.subTitle;
  const backgroundImage = props.image;
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center header-banner"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h2>{title}</h2>
      <p>{subTitle}</p>
    </div>
  );
}

Banner.MBanner = MBanner;
Banner.SBanner = SBanner;
Banner.HeadingBanner = HeadingBanner;

export default Banner;
