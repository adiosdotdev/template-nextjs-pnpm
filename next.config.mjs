/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  outputFileTracingExcludes: { "*": ["./.runtime/**/*"] },
};

export default nextConfig;
