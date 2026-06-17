"use client";

export default function WhatsAppButton() {
  return (
    <>
      <a
        href="https://wa.me/919427160760"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        style={{
          position: "fixed",
          bottom: "28px",
          right: "28px",
          zIndex: 9999,
          width: "58px",
          height: "58px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow:
            "0 4px 24px rgba(37,211,102,0.45), 0 2px 8px rgba(0,0,0,0.25)",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
          textDecoration: "none",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.12)";
          e.currentTarget.style.boxShadow =
            "0 6px 32px rgba(37,211,102,0.6), 0 2px 12px rgba(0,0,0,0.3)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow =
            "0 4px 24px rgba(37,211,102,0.45), 0 2px 8px rgba(0,0,0,0.25)";
        }}
      >
        {/* WhatsApp SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="30"
          height="30"
          fill="white"
        >
          <path d="M16 2C8.268 2 2 8.268 2 16c0 2.47.643 4.787 1.766 6.8L2 30l7.378-1.734A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.55 11.55 0 0 1-5.88-1.604l-.42-.25-4.378 1.028 1.052-4.26-.274-.44A11.56 11.56 0 0 1 4.4 16C4.4 9.59 9.59 4.4 16 4.4S27.6 9.59 27.6 16 22.41 27.6 16 27.6zm6.32-8.64c-.346-.174-2.048-1.01-2.366-1.124-.318-.116-.55-.174-.78.174-.232.346-.894 1.124-1.096 1.356-.2.23-.4.26-.748.086-.346-.174-1.46-.538-2.78-1.714-1.028-.916-1.722-2.048-1.924-2.394-.2-.346-.022-.532.15-.704.156-.156.346-.404.52-.606.174-.2.232-.346.346-.578.116-.232.058-.434-.028-.608-.086-.174-.78-1.878-1.068-2.572-.282-.674-.568-.582-.78-.592l-.664-.012c-.232 0-.608.086-.926.434-.318.346-1.214 1.186-1.214 2.892s1.242 3.356 1.416 3.586c.174.232 2.446 3.732 5.926 5.232.828.358 1.474.572 1.978.732.832.264 1.588.226 2.186.138.666-.1 2.048-.838 2.336-1.646.29-.808.29-1.5.202-1.646-.086-.144-.318-.23-.664-.404z" />
        </svg>

        {/* Pulse ring animation */}
        <span
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            border: "2px solid rgba(37,211,102,0.5)",
            animation: "whatsapp-pulse 2s ease-out infinite",
          }}
        />
        <style>{`
          @keyframes whatsapp-pulse {
            0%   { transform: scale(1);   opacity: 0.8; }
            70%  { transform: scale(1.5); opacity: 0;   }
            100% { transform: scale(1.5); opacity: 0;   }
          }
        `}</style>
      </a>
    </>
  );
}
