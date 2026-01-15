import ContactDetails from "./ContactDetails";
import ServiceDetails from "./ServiceDetails";

function Contact() {
    return (
        <div className="col-span-12 lg:col-span-6 bg-zinc-800 h-[600px]">
            <div className="text-white p-10">
                <p className="font-bold text-2xl mt-5">
                    IF YOU WANT TO UPDATE ? <br />
                    STAY CONECTED!
                </p>

                <div className="mt-6">
                    <div className="flex gap-4 border border-purple-800 p-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 bg-transparent focus:outline-none "
                        />
                        <button className="custom-target px-6 py-3 font-bold bg-purple-800 border border-purple-800 text-black hover:bg-transparent hover:text-white transition-all delay-300">
                            SUBSCRIBE
                        </button>
                    </div>
                </div>
                <div className="flex gap-20 lg:gap-28 mt-10">
                    <ContactDetails />
                    <ServiceDetails />
                </div>
            </div>
        </div>
    );
}

export default Contact;