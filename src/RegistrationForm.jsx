



import React, { useState, useEffect, useRef } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    email: "",
    stream: "",
    phone: "",
    dob: "",
    year: "",
    college: "",
  });

  const nameInputRef = useRef(null);

  useEffect(() => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    try {
      const res = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Registration successful ");
        setFormData({
          fullName: "",
          gender: "",
          email: "",
          stream: "",
          phone: "",
          dob: "",
          year: "",
          college: "",
        });
      } else {
        alert("Something went wrong ");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server error ");
    }
  };

  return (
    <div
      className="h-screen w-full bg-cover bg-center relative flex items-center"
      style={{ backgroundImage: "url('/temple_bg_2.png')" }}
    >

 

      <div className="relative z-10 flex w-full h-full">
        {/* Left side Instagram-style card */}
        <div className="w-1/2 flex items-center justify-center">
          <div className="p-4 rounded-2xl border-4 border-yellow-600 shadow-[0_0_25px_rgba(255,215,0,0.8)] bg-black/40 backdrop-blur-md">
            <img
              src="/trinityfest2.jpeg"
              alt="Performer"
              className="w-[400px] rounded-xl shadow-lg"
            />
            <p className="text-center text-yellow-400 font-[Cinzel] text-lg mt-3">
              {/* #TrinityFest26 Highlights 🎶 */}
            </p>
          </div>
        </div>

        {/* Right side registration form */}
        <div className="w-1/2 flex flex-col justify-center px-12 text-white">
          <h2 className="text-6xl font-bold text-yellow-400 mb-10 text-center font-[Cinzel_Decorative]">
            Registration
          </h2>



          <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              ref={nameInputRef}
              value={formData.fullName}
              onChange={handleChange}
              className=" text-xl p-3 bg-[#8B6F3D] text-white placeholder:text-[#E6C674] rounded-lg font-[Cinzel] focus:outline-none focus:ring-2 focus:ring-[#a9742a]"
            />
            <input
              type="text"
              name="gender"
              placeholder="Gender"
              value={formData.gender}
              onChange={handleChange}
              className="text-xl p-3 bg-[#8B6F3D] text-white placeholder:text-[#E6C674]  rounded-lg font-[Cinzel] focus:outline-none focus:ring-2 focus:ring-[#a9742a]"
            />
            <input
              type="email"
              name="email"
              placeholder="E-Mail"
              value={formData.email}
              onChange={handleChange}
              className="text-xl p-3 bg-[#8B6F3D] text-white placeholder:text-[#E6C674]  rounded-lg font-[Cinzel] focus:outline-none focus:ring-2 focus:ring-[#a9742a]"
            />
            <input
              type="text"
              name="stream"
              placeholder="Enter Stream"
              value={formData.stream}
              onChange={handleChange}
              className="text-xl p-3 bg-[#8B6F3D] text-white placeholder:text-[#E6C674]  rounded-lg font-[Cinzel] focus:outline-none focus:ring-2 focus:ring-[#a9742a]"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone No"
              value={formData.phone}
              onChange={handleChange}
              className="text-xl p-3 bg-[#8B6F3D] text-white placeholder:text-[#E6C674]  col-span-2 rounded-lg font-[Cinzel] focus:outline-none focus:ring-2 focus:ring-[#a9742a]"
            />
            <input
              type="date"
              name="dob"
              placeholder="DOB"
              value={formData.dob}
              onChange={handleChange}
              className="text-xl p-3 bg-[#8B6F3D] text-white placeholder:text-[#E6C674]  rounded-lg font-[Cinzel] focus:outline-none focus:ring-2 focus:ring-[#a9742a]"
            />
            <input
              type="text"
              name="year"
              placeholder="Enter Year of Study"
              value={formData.year}
              onChange={handleChange}
              className="text-xl p-3 bg-[#8B6F3D] text-white placeholder:text-[#E6C674] rounded-lg font-[Cinzel] focus:outline-none focus:ring-2 focus:ring-[#a9742a]"
            />
            <input
              type="text"
              name="college"
              placeholder="Enter College Name"
              value={formData.college}
              onChange={handleChange}
              className="text-xl p-3 bg-[#8B6F3D] text-white placeholder:text-[#E6C674] col-span-2 rounded-lg font-[Cinzel] focus:outline-none focus:ring-2 focus:ring-[#a9742a]"
            />

           
            <div className="col-span-2 flex justify-center mt-6">
            <button
              type="submit"
              className="bg-gradient-to-r from-[#d6932c] to-[#b36b00] 
                      text-white px-12 py-4 rounded-full font-[Cinzel] 
                      text-2xl font-bold shadow-lg hover:scale-105 transition"
            >
              SUBMIT
            </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
