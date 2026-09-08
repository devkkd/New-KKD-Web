const BASE_URL = "https://www.kontentkraftdigital.com";

export default function sitemap() {
  return [
    // Homepage
    {
      url: `${BASE_URL}/`,
      changeFrequency: "daily",
      priority: 1.0,
    },

    // Company
    {
      url: `${BASE_URL}/about/`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/careers/`,
      changeFrequency: "weekly",
      priority: 0.7,
    },

    // Services
    {
      url: `${BASE_URL}/services/`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/web-mobile-development/`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services/ai-machine-learning/`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services/ui-ux-design/`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services/ecommerce-development/`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services/cloud-devops/`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services/digital-growth/`,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // Industries
    {
      url: `${BASE_URL}/industries/`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/industries/fintech-financial/`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/industries/healthcare-healthtech/`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/industries/ecommerce-retail/`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/industries/edtech-learning/`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/industries/logistics-supply-chain/`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/industries/saas-b2b-software/`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/industries/real-estate-proptech/`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/industries/travel-hospitality/`,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // Portfolio
    {
      url: `${BASE_URL}/portfolio/`,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // Resources
    {
      url: `${BASE_URL}/resources/`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/resources/insights/`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/resources/guides-whitepapers/`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/resources/client-success-stories/`,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // Technologies
    {
      url: `${BASE_URL}/technologies/`,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // Hiring
    {
      url: `${BASE_URL}/hire-resources/`,
      changeFrequency: "weekly",
      priority: 0.8,
    },

    // Clients
    {
      url: `${BASE_URL}/clients/`,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // Contact / Conversion
    {
      url: `${BASE_URL}/book-call/`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact/`,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // FAQ
    {
      url: `${BASE_URL}/faqs/`,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // Legal
    {
      url: `${BASE_URL}/privacy-policy/`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms-and-conditions/`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}