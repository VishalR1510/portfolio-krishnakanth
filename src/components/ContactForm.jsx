import { useState } from "react";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import InputField from "./InputField";
import SelectField from "./SelectField";
import SubmitButton from "./SubmitButton";
import DescriptionField from "./DescriptionField";
import { formControlClasses } from "@mui/material";
function ContactForm() {
    const [ formData , setFormData ] = useState({
        name : "",
        email : "",
        phone : "",
        service : "",
        description : "",
    });

    const [loading, setLoading] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);



    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);

        const payload = {
            access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            service: formData.service,
            description: formData.description,
        };
        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });
            const result = await res.json();

            if (result.success) {
                setOpenSnackbar(true);
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    service: "",
                    description: "",
                });
            }
        }
        catch (err) {
            console.error("Web3Forms error:", err);
        } 
        finally {
            setLoading(false);
        }
    };
    return (
        <div className="col-span-12 lg:col-span-6">
            <div className="bg-purple-1000 p-8 m-5 mt-10 lg:mr-5">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <InputField
                        label="NAME"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <InputField
                        label="EMAIL"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <InputField
                        label="PHONE NUMBER"
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                    <SelectField
                        label="SERVICE REQUIRED"
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        options={[
                            { label: "SHORT-FORM", value: "short-form" },
                            { label: "LONG-FORM", value: "long-form" },
                            { label: "GRAPHIC DESIGNER", value: "graphic-designing" }
                        ]}
                    />
                    <DescriptionField 
                        label="DESCRIPTION"
                        id="description"
                        name="description"
                        placeholder="Brief about your requirements"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                    <SubmitButton
                        text={loading ? "Sending..." : "Send Message"}
                        disabled={loading}
                    />

                    <Snackbar
                        open={openSnackbar}
                        autoHideDuration={4000}
                        onClose={() => setOpenSnackbar(false)}
                        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    >
                        <Alert
                            onClose={() => setOpenSnackbar(false)}
                            severity="success"
                            variant="filled"
                        >
                            Message sent successfully!
                        </Alert>
                    </Snackbar>
                </form>
            </div>
        </div>
        
    );

}

export default ContactForm;