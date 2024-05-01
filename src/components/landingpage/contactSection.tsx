import React from "react";
import { useForm } from "react-hook-form";

const ContactMeSection = () => {       
    
	const {
		register,
		trigger,
		formState: { errors }
	} = useForm();

	const onSubmit = async (e: any) => {
		const isValid = await trigger();
		if (!isValid) {
			e.preventDefault();
		}
	}


    return (            
        <div className=" p-4 md:p-8 rounded-2xl border border-royal-navy dark:border-yellow-500">
            <form 
                className="flex flex-col"
				onSubmit={onSubmit}
				method="POST"
                target="_blank"
                action="https://formsubmit.co/e65ae950181fccd4c91efc067d237870"
            >
                <div className="mb-6">
                    <label
                        className="text-gray-800 dark:text-gray-200 block mb-2 text-md font-semibold"
                    >
                        Your Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        required
                        className="bg-royal-navy border border-gray-700 placeholder-gray-400 text-gray-100 text-sm rounded-lg block w-full p-2.5"
					    placeholder="Email:" 
                        {...register("email", {
                            required: true,
                            pattern: /^[A-Z0-9.%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        })}
                    />
                    {errors.email && (
                        <p className="text-red-500">
                            {errors.email.type === "required" && "This field is required."}
                            {errors.email.type === "pattern" && "Invalid email address."}
                        </p>
                    )}
                </div>
                <div className="mb-6">
                    <label
                        className="text-gray-800 dark:text-gray-200 block text-md mb-2 font-semibold"
                    >
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        className="bg-royal-navy border border-gray-700 placeholder-gray-400 text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        placeholder="Re: Why you want to message me"
                        required
                        {...register("subject", {
                            required: true,
                            maxLength: 100,
                        })}
                    />
                    {errors.subject && (
                        <p className="text-red-500">
                            {errors.subject.type === "required" && "This field is required."}
                            {errors.subject.type === "maxLength" && "Max length is 100 char."}
                        </p>
                    )}
                </div>
                <div className="mb-6">
                    <label
                        className="text-gray-800 dark:text-gray-200 block text-md mb-2 font-semibold"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        className="bg-royal-navy border border-gray-700 placeholder-gray-400 text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        placeholder="Write here the details!"
                        required
                        {...register("message", {
                            required: true,
                            maxLength: 2000,
                        })}
                    />
                    {errors.message && (
                        <p className="text-red-500">
                            {errors.message.type === "required" && "This field is required."}
                            {errors.message.type === "maxLength" && "Max length is 2000 char."}
                        </p>
                    )}
                </div>
                <button
                    type="submit"
                    className="bg-yellow-500 border-2 border-yellow-500 hover:bg-royal-navy hover:text-yellow-500 hover:border-yellow-500 text-royal-navy dark:text-white font-semibold py-2 px-5 rounded-lg w-full"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default ContactMeSection;