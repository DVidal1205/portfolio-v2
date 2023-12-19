import React from "react";

function Contact() {
    return (
        <div className="mt-52 mb-52 max-w-2xl mx-auto" id="contact">
            <h2 className="text-4xl font-bold mb-4 text-center">Get In Touch</h2>
            <p className="text-center px-4">
                If you have any questions or want to get in touch, feel free to
                drop me an email! I&apos;ll try to get back to you as soon as I
                can.
            </p>
            <a
                href="mailto:dylanvidal1205@gmail.com"
                className="mt-10 block mx-auto w-max backdrop:mb-2 md:text-1xl lg:text-2xl xl:text-3xl bg-purple-800 font-semibold text-1xl px-6 py-2 my-2 rounded-xl border border-purple-950 transition-transform hover:-translate-y-1 hover:bg-purple-900 hover:text-violet-200"
            >
                Email
            </a>
        </div>
    );
}

export default Contact;
