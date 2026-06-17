import BookingForm from "@/components/sections/BookingForm";
import Link from "next/link";

export const metadata = {
  title: "Book Appointment | Dr. Abhishek Jaimalani",
  description:
    "Schedule a consultation with Dr. Abhishek Jaimalani — Robotic & Laparoscopic Specialist.",
};

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-[#080d1a]">
      {/* Background subtle texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5B800]/5 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <section className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — Info panel */}
          <div className="flex flex-col gap-8 lg:sticky lg:top-28">
            {/* Badge */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 border border-[#F5B800]/40 px-4 py-2 w-fit text-white text-[11px] tracking-[0.22em] uppercase font-medium hover:border-[#F5B800] hover:text-[#F5B800] transition-colors duration-200"
            >
              <span>&#8592;</span>
              <span>Back</span>
            </Link>
            <div className="inline-flex items-center gap-2 border border-[#F5B800]/40 px-4 py-2 w-fit">
              <span className="w-[6px] h-[6px] rounded-full bg-[#F5B800]" />
              <span className="text-white text-[11px] tracking-[0.22em] uppercase font-medium">
                Robotic &amp; Laparoscopic Specialist
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <h2
                className="text-white text-4xl sm:text-5xl font-bold leading-tight"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Dr. Abhishek
                <br />
                <span className="text-[#F5B800] italic">
                  Jaimalani (Maheshwari)
                </span>
              </h2>
              <p className="text-white/50 text-[13px] tracking-[0.12em] uppercase">
                MS, FMAS, FMITGO (Italy)
              </p>
            </div>

            {/* Clinic info cards */}
            <div className="flex flex-col gap-4 mt-2">
              {[
                {
                  icon: "🕐",
                  title: "Clinic Hours",
                  body: "Mon – Sat · 9 AM–1 PM & 5 PM–8 PM",
                },
                {
                  icon: "📍",
                  title: "Location",
                  body: "Shalby Multi-Speciality Hospitals, Nr Navyug College, Rander Rd, Adajan, Surat, Gujarat",
                  href: "https://www.google.com/maps/place/Dr.+Abhishek+Jaimalani+%E2%80%93+Laparoscopic+%26+Robotic+Surgeon+in+Surat/@21.2023282,72.7984931,17z/data=!3m1!4b1!4m6!3m5!1s0x3be04dc38aec8ffb:0x5f7a7acfe404c139!8m2!3d21.2023282!4d72.801068!16s%2Fg%2F11xtmq611r?entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D",
                },
                {
                  icon: "📞",
                  title: "Contact",
                  body: "+91 94271 60760",
                  href: "tel:+919427160760",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 border-l-2 border-[#F5B800]/30 pl-4 py-1"
                >
                  <span className="text-lg mt-0.5">{item.icon}</span>
                  <div>
                    <p className="text-white/40 text-[10px] tracking-[0.18em] uppercase mb-0.5">
                      {item.title}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 text-[14px] hover:text-[#F5B800] transition-colors duration-200"
                      >
                        {item.body}
                      </a>
                    ) : (
                      <p className="text-white/80 text-[14px]">{item.body}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Disclaimer */}
            <p className="text-white/25 text-[11px] leading-relaxed border-t border-white/[0.06] pt-6 mt-2">
              Slots are subject to doctor availability. Our team will confirm
              your appointment via call or message.
            </p>
          </div>

          {/* Right — Booking form */}
          <div className="bg-white/[0.025] border border-white/[0.07] p-8 md:p-10">
            <BookingForm />
          </div>
        </div>
      </section>
    </main>
  );
}
