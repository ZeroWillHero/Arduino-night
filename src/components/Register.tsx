import { useState } from "react";
import apiCall from "../api/apiCall";
import { toast } from "react-toastify";

type InputFieldProps = {
  type: string;
  name: string;
  placeholder: string;
  icon: React.ReactNode;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function InputField({ type, name, placeholder, icon, value, onChange }: InputFieldProps) {
  return (
    <div className="relative group mb-5">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400 z-10">{icon}</div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-900/50 text-white border-2 transition-all duration-300 backdrop-blur-sm border-purple-500/30 focus:border-purple-400 focus:ring-purple-400/20 group-hover:border-purple-400/50 focus:outline-none focus:ring-4 placeholder-purple-300/50"
        value={value}
        onChange={onChange}
        required
        autoComplete="off"
      />
    </div>
  );
}

export default function Register() {
  const SERVER = import.meta.env.VITE_SERVER_URL;
  const apiUrl = `${SERVER}/api/users/register`;
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    whatsappNumber: "",
    school: "",
    alYear: "",
    paymentSlip: null as File | null,
  });

  const [preview, setPreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;

    if (name === "paymentSlip" && files && files[0]) {
      const file = files[0];
      setForm((prev) => ({ ...prev, paymentSlip: file }));
      setPreview(URL.createObjectURL(file));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare form data for file upload
      const formData = new FormData();
      formData.append("firstname", form.firstname);
      formData.append("lastname", form.lastname);
      formData.append("email", form.email);
      formData.append("whatsappNumber", form.whatsappNumber);
      formData.append("school", form.school);
      formData.append("alYear", form.alYear);
      if (form.paymentSlip) {
        formData.append("paymentSlip", form.paymentSlip);
      }

      await apiCall(apiUrl, "POST", formData, {
        "Content-Type": "multipart/form-data",
      });

      toast.success("Registration submitted successfully!");
      setForm({
        firstname: "",
        lastname: "",
        email: "",
        whatsappNumber: "",
        school: "",
        alYear: "",
        paymentSlip: null,
      });
      setPreview(null);
    } catch (error: any) {
      toast.error(error.message || "Registration failed!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg mx-auto relative"
      style={{ maxHeight: "90vh", overflowY: "auto" }}
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 rounded-3xl blur-xl opacity-20 animate-pulse"></div>
      <div className="relative bg-gradient-to-br from-slate-900/90 via-purple-900/80 to-slate-900/90 backdrop-blur-2xl rounded-3xl shadow-2xl p-6 border border-purple-500/30">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-fuchsia-500 mb-3">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-200 via-fuchsia-200 to-pink-200 bg-clip-text text-transparent mb-1">
            Student Registration
          </h2>
          <p className="text-purple-300/80 text-sm">Join us for an amazing learning experience</p>
        </div>
        <div className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              type="text"
              name="firstname"
              placeholder="First Name"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              }
              value={form.firstname}
              onChange={handleChange}
            />
            <InputField
              type="text"
              name="lastname"
              placeholder="Last Name"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              }
              value={form.lastname}
              onChange={handleChange}
            />
          </div>
          <InputField
            type="email"
            name="email"
            placeholder="Email Address"
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
            }
            value={form.email}
            onChange={handleChange}
          />
          <InputField
            type="tel"
            name="whatsappNumber"
            placeholder="WhatsApp Number"
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            }
            value={form.whatsappNumber}
            onChange={handleChange}
          />
          <InputField
            type="text"
            name="school"
            placeholder="School Name"
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            }
            value={form.school}
            onChange={handleChange}
          />
          <InputField
            type="text"
            name="alYear"
            placeholder="A/L Year"
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            }
            value={form.alYear}
            onChange={handleChange}
          />
          {/* Payment slip upload with old graphic */}
          <div className="space-y-2">
            <label className="block text-purple-200 font-medium mb-2 items-center gap-2">
              <svg className="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Payment Slip Upload (200/=)
              <span className="text-purple-400 text-xs ml-1">(Max 5MB)</span>
            </label>
            <div className="relative group">
              <input
                type="file"
                name="paymentSlip"
                accept="image/*"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                onChange={handleChange}
                required
              />
              <div className="border-2 border-dashed rounded-xl p-6 text-center transition-all duration-300 border-purple-400/50 hover:border-purple-400 bg-purple-900/20 group-hover:bg-purple-900/30">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-purple-200 font-medium">
                      {form.paymentSlip ? form.paymentSlip.name : "Click to upload payment slip"}
                    </p>
                    <p className="text-purple-400 text-sm mt-1">PNG, JPG, JPEG up to 5MB</p>
                  </div>
                </div>
              </div>
            </div>
            {preview && (
              <div className="mt-3">
                <img src={preview} alt="Payment Slip Preview" className="max-h-32 rounded-md mx-auto" />
              </div>
            )}
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-700 transition"
          >
            {isSubmitting ? "Submitting..." : "Register"}
          </button>
        </div>
      </div>
    </form>
  );
}