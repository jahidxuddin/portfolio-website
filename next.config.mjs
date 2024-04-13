/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        EMAIL_SERVICE_ID: process.env.EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID: process.env.EMAIL_TEMPLATE_ID,
        EMAIL_PUBLIC_KEY: process.env.EMAIL_PUBLIC_KEY
    }
};

export default nextConfig;
