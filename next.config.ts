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
          {key: 'Content-Security-Policy', 
            value: "default-src 'self' 'unsafe-inline' 'unsafe-eval'; script-src 'self' 'unsafe-inline' 'unsafe-eval';",},
            // CSP: Prevents XSS, injection attacks. Limits external src permission scope
            // must eliminate 'unsafe-inline' and 'unsafe-eval' in production
        ]

      }

    ]
  },

};

export default nextConfig;
