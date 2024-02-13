const conf = {
	emailjsServiceId: String(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID),
	emailjsTemplateId: String(process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID),
	emailjsPublicKey: String(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY),
};
console.log(
	conf.emailjsPublicKey,
	conf.emailjsServiceId,
	conf.emailjsTemplateId
);
export default conf;
