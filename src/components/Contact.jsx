import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/broyzqna", userInfo);
      toast.success("Your message has been sent");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-12 md:my-16"
      >
        <h1 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 gradient-text animate-fade-in-down text-center md:text-left">Contact me</h1>
        <span className="text-gray-300 animate-fade-in-up text-center md:text-left block">Please fill out the form below to contact me</span>
        <div className=" flex flex-col items-center justify-center mt-4 md:mt-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            // action="https://getform.io/f/broyzqna"
            // method="POST"
            className="card-bg w-full max-w-sm md:w-96 px-6 md:px-8 py-6 rounded-xl shadow-xl border border-dark-purple-500/30 scroll-animate hover-lift"
          >
            <h1 className="text-lg md:text-xl font-semibold mb-4 text-white animate-fade-in-up text-center">Send Your Message</h1>
            <div className="flex flex-col mb-4 animate-fade-in-up">
              <label className="block text-gray-300 mb-2 text-sm md:text-base">FullName</label>
              <input
                {...register("name", { required: true })}
                className="shadow rounded-lg appearance-none border border-dark-purple-500/30 bg-dark-bg-200 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline focus:border-dark-purple-400 placeholder-gray-400 transition-all duration-300 hover:border-dark-purple-400 text-sm md:text-base"
                id="name"
                name="name"
                type="text"
                placeholder="Enter your fullname"
              />
              {errors.name && <span className="text-red-400 text-sm mt-1 animate-fade-in-up">This field is required</span>}
            </div>
            <div className="flex flex-col mb-4 animate-fade-in-up">
              <label className="block text-gray-300 mb-2 text-sm md:text-base">Email Address</label>
              <input
                {...register("email", { required: true })}
                className="shadow rounded-lg appearance-none border border-dark-purple-500/30 bg-dark-bg-200 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline focus:border-dark-purple-400 placeholder-gray-400 transition-all duration-300 hover:border-dark-purple-400 text-sm md:text-base"
                id="email"
                name="email"
                type="text"
                placeholder="Enter your email address"
              />
              {errors.email && <span className="text-red-400 text-sm mt-1 animate-fade-in-up">This field is required</span>}
            </div>
            <div className="flex flex-col mb-4 animate-fade-in-up">
              <label className="block text-gray-300 mb-2 text-sm md:text-base">Message</label>
              <textarea
                {...register("message", { required: true })}
                className="shadow rounded-lg appearance-none border border-dark-purple-500/30 bg-dark-bg-200 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline focus:border-dark-purple-400 placeholder-gray-400 resize-none transition-all duration-300 hover:border-dark-purple-400 text-sm md:text-base"
                id="message"
                name="message"
                type="text"
                placeholder="Enter your Query"
                rows="4"
              />
              {errors.message && <span className="text-red-400 text-sm mt-1 animate-fade-in-up">This field is required</span>}
            </div>
            <button
              type="submit"
              className="bg-dark-purple-600 hover:bg-dark-purple-700 text-white rounded-xl px-3 py-2 duration-300 transition-colors w-full font-semibold hover-scale animate-pulse text-sm md:text-base"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
