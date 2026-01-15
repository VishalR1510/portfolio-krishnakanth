import Contact from "./Contact";
import ContactForm from "./ContactForm";

function ContactSection() {
    return (
        <div className="mx-auto py-20 w-full">
            <div className="grid grid-cols-12 gap-5 items-center">
                <Contact />
                <ContactForm />
            </div>
        </div>
    );
}

export default ContactSection;