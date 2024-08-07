import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12 relative">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">
          Tuck into a takeway today
        </h1>
        <span className="text-xl">Food is just click away</span>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage} alt="landingImage" />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order takenway even faster!
          </span>
          <span>
            Download the Brew_n_Bite App for faster, convenient ordering and
            personalised recommendations
          </span>

          <img src={appDownloadImage} alt="Brew_n_Bite-App" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
