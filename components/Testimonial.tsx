import Image from "next/image";

const Testimonials = () => {
  return (
    <section className="text-gray-600 bg-[#CEC288] body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <Image
                src="/images/avatar1.jpg"
                alt="testimonial"
                width={50}
                height={40}
                className=" mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
              />

              <p className="leading-relaxed">
                Vi är så nöjda med vår nya solpanelsanläggning! Tack
                vare företagets professionella team och deras
                hjälpsamma rådgivning kunde vi hitta den perfekta
                lösningen för vårt hem. Installationen gick smidigt,
                och nu ser vi verkligen resultatet med betydligt lägre
                elräkningar. Att veta att vi bidrar till en mer
                hållbar framtid gör oss extra glada. Vi kan varmt
                rekommendera företaget till alla som överväger att
                investera i solenergi!
              </p>
              <span className="inline-block h-1 w-10 rounded bg-[#DBA737] mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                Anders Andersson
              </h2>
              <p className="text-gray-500">Malmö Sverige</p>
            </div>
          </div>
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <Image
                src="/images/avatar1.jpg"
                alt="testimonial"
                width={40}
                height={40}
                className=" mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
              />
              <p className="leading-relaxed">
                Vi är så nöjda med vår nya solpanelsanläggning! Tack
                vare företagets professionella team och deras
                hjälpsamma rådgivning kunde vi hitta den perfekta
                lösningen för vårt hem. Installationen gick smidigt,
                och nu ser vi verkligen resultatet med betydligt lägre
                elräkningar. Att veta att vi bidrar till en mer
                hållbar framtid gör oss extra glada. Vi kan varmt
                rekommendera företaget till alla som överväger att
                investera i solenergi!
              </p>
              <span className="inline-block h-1 w-10 rounded bg-[#DBA737] mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                Anders Andersson
              </h2>
              <p className="text-gray-500">Malmö Sverige</p>
            </div>
          </div>
          <div className="lg:w-1/3 lg:mb-0 p-4">
            <div className="h-full text-center">
              <Image
                src="/images/avatar1.jpg"
                alt="testimonial"
                width={40}
                height={40}
                className=" mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
              />
              <p className="leading-relaxed">
                Vi är så nöjda med vår nya solpanelsanläggning! Tack
                vare företagets professionella team och deras
                hjälpsamma rådgivning kunde vi hitta den perfekta
                lösningen för vårt hem. Installationen gick smidigt,
                och nu ser vi verkligen resultatet med betydligt lägre
                elräkningar. Att veta att vi bidrar till en mer
                hållbar framtid gör oss extra glada. Vi kan varmt
                rekommendera företaget till alla som överväger att
                investera i solenergi!
              </p>
              <span className="inline-block h-1 w-10 rounded bg-[#DBA737] mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                Anders Andersson
              </h2>
              <p className="text-gray-500">Malmö Sverige</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
