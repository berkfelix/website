/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  exportPathMap: async function () {
    "use strict";
    return {
      "/": { page: "/" },
      "/api/spotify": { page: "/api/spotify" },
    };
  },
};
