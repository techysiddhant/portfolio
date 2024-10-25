const conf = {
  emailjsServiceId: String(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID),
  emailjsTemplateId: String(process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID),
  emailjsPublicKey: String(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY),
};

export default conf;
export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
    window.location.hash = `#${id}`;
  }
};
