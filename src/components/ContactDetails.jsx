import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { ContactData } from '../data/ContactData';  

function ContactDetails() {
    return (
        <div className="">
            <p className="text-2xl font-bold">CONTACT ME</p>
            <div className="custom-target mt-5 flex items-center gap-2 hover:text-purple-800">
                <LinkedInIcon fontSize="large"/>
                <p className="font-semibold">
                    <a href="https://www.linkedin.com/in/krishna-kanth-p-t-2a093b29a">
                        {ContactData.LinkedIn}
                    </a>
                </p>

            </div>
            <div className="custom-target mt-5 flex items-center gap-2 hover:text-purple-800">
                <EmailIcon fontSize="large" />
                <p className="font-semibold">
                    <a href="mailto:ptkksings28@gmail.com">
                        {ContactData.Email}
                    </a>
                </p>

            </div>
            <div className="custom-target mt-5 flex items-center gap-2 hover:text-purple-800">
                <PhoneIcon fontSize="large" />
                <p className="font-semibold">{ContactData.PhoneNumber}</p>
            </div>
        </div>
    );
}

export default ContactDetails;