// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["nuxt-swiper", "@vee-validate/nuxt", "@element-plus/nuxt"],
  runtimeConfig: {
    public: {
      api: process.env.NUXT_PUBLIC_API,
      path: process.env.NUXT_APP_PATH,
    },
  },
  veeValidate: {
    autoImports: true,
    componentNames: {
      Form: "VeeForm",
      Field: "VeeField",
      FieldArray: "VeeFieldArray",
      ErrorMessage: "VeeErrorMessage",
    },
  },
  app: {
    baseURL: process.env.NODE_ENV === "production" ? "/nuxtShop/" : "/",
    buildAssetsDir: "/static/",
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css",
          integrity:
            "sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css",
          integrity: "sha256-9kPW/n5nn53j4WMRYAxe9c1rCY96Oogo/MKSVdKzPmI=",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/social-share.js/1.0.16/css/share.min.css",
          integrity:
            "sha512-ygEyjMC6rqnzJqWGjRTJUPYMEs9JUOm3i7OWUS9CgQ4XkBUvMsgCS1I8JqavidQ2ClHcREB7IbA2mN08+r9Elg==",
          crossorigin: "anonymous",
        },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",
          integrity:
            "sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN",
          crossorigin: "anonymous",
        },
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/social-share.js/1.0.16/js/social-share.min.js",
          integrity:
            "sha512-9DNXrSjk17bU9MUbRp3IjwcWe46V8FaGA062PFbryPUAEQVRbz4jiZP6FW0AdbqEGtMYBDWnul3eiGBMJOQajA==",
          crossorigin: "anonymous",
        },
      ],
    },
    // pageTransition: { name: 'page', mode: 'out-in' }
  },
  css: ["~/assets/styles/all.css"],
});
