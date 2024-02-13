"use client"
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import conf from '@/utils/config';
const ContactForm = () => {
	const [email, setEmail] = useState<string>("")
	const [name, setName] = useState<string>("");
	const [message, setMessage] = useState<string>("");
	const [error, setError] = useState<string>("");
	const [success, setSuccess] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!email || !name || !message) {
			setError("Please fill in all the fields");
			return;
		}
		const templateParams = {
			from_name: name,
			to_name: "Siddhant",
			message,
		};
		// const formData = new FormData();
		// formData.append("from_name", name);
		// formData.append("to_name", "Siddhant");
		// formData.append("message", message);
		// setLoading(true);
		setError("");
		// emailjs.send(conf.emailjsServiceId, conf.emailjsTemplateId, templateParams, conf.emailjsPublicKey).then((res) => {
		// 	console.log(res)
		// }).catch((err) => {
		// 	console.log(err);
		// })
		try {
			const response = await emailjs.send(conf.emailjsServiceId, conf.emailjsTemplateId, templateParams, conf.emailjsPublicKey);
			console.log(response);
			if (response) {
				setEmail("");
				setName("");
				setMessage("");
				setError("");
				setSuccess("Your message has been sent successfully!");
				setLoading(false);
			}
		} catch (error) {
			console.error(error);
			setError("Something went wrong, Send me Direct mail to this email:sidjain8000@gmail.com");
			setLoading(false);
		}

	};
	return (
		<div>
			<h1 className="text-5xl text-white my-4">Let&apos;s build your idea</h1>
			<form className="flex flex-col gap-4 items-center text-white z-40 relative w-full" >
				<div className="max-w-[340px] w-full">
					<label
						htmlFor=""
						className="block py-1"
					>
						Name
					</label>
					<input
						type="text"
						className="border border-[#6ee7b7] text-[#6ee7b7]  bg-transparent px-4 py-2 rounded w-full"
						placeholder="Enter your name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className="max-w-[340px] w-full">
					<label
						htmlFor="email"
						className="block py-1"

					>
						Email
					</label>
					<input
						type="email"
						className="border border-[#6ee7b7] text-[#6ee7b7]  bg-transparent px-4 py-2 rounded w-full"
						placeholder="Enter your name"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="max-w-[340px] w-full">
					<label
						htmlFor="email"
						className="block py-1"
					>
						Enter Message
					</label>
					<textarea
						id=""
						// cols=
						className="border bg-transparent border-[#6ee7b7] text-[#6ee7b7]  px-4 py-2 rounded w-full"
						placeholder="Enter your idea"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						rows={2}
					></textarea>
				</div>
				{error && <p className="text-red-600 text-sm">
					{error}
				</p>}
				{
					success && <p className="text-green-600 text-sm">
						{success}
					</p>
				}
				<button
					className="border px-8 py-2 rounded border-[#6ee7b7] text-[#6ee7b7]"
					type="submit"
					disabled={loading}
					onClick={(e: any) => handleSubmit(e)}
				>
					{loading ? "Loading..." : "Send"}
				</button>
			</form>
		</div>
	);
};

export default ContactForm;
