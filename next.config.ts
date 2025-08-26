import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  async headers() {
    return[
      
      {

        source : "/(.*)",
        headers : [
          {key: 'X-Content-Type-Options', value: 'nosniff'}, // Prevents MIME type sniffing -> ease script/style injection attacks
          {key: 'X-Frame-Options', value: 'DENY'}, // Prevents Clickjacking attacks. Sets page loading in iframe
          {key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload'}, // HSTS: Enforces secure connections
          {key: 'Referrer-Policy', value: 'same-origin'}, // minimize referrer info leakage
          {key: 'Content-Security-Policy', value: "default-src 'self'"}, // CSP: Prevents XSS, injection attacks. Limits external src permission scope
        ]

      }

    ]
  },

};

export default nextConfig;
