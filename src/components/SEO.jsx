
import { Helmet } from 'react-helmet-async';

const DEFAULT_TITLE = "Vœrynth Système";
const DEFAULT_DESCRIPTION = "Architecture built for environments that cannot afford drama. Vœrynth provides deterministic control systems for private estates, superyachts, and critical infrastructure.";
const DOMAIN = "https://voerynth.systems"; // Placeholder domain

export default function SEO({
    title,
    description,
    canonical,
    type = "website"
}) {
    const siteTitle = title ? `${title} | ${DEFAULT_TITLE}` : DEFAULT_TITLE;
    const metaDescription = description || DEFAULT_DESCRIPTION;
    const currentUrl = canonical ? `${DOMAIN}${canonical}` : DOMAIN;

    const schemaOrgJSONLD = [
        {
            "@context": "http://schema.org",
            "@type": "WebSite",
            "url": DOMAIN,
            "name": DEFAULT_TITLE,
            "alternateName": "Voerynth Systems"
        },
        {
            "@context": "http://schema.org",
            "@type": "Organization",
            "url": DOMAIN,
            "logo": `${DOMAIN}/assets/logo/logo.svg`,
            "name": "Vœrynth Système",
            "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "areaServed": "Global"
            }
        }
    ];

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{siteTitle}</title>
            <meta name="description" content={metaDescription} />
            <link rel="canonical" href={currentUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={`${DOMAIN}/assets/platform_hero_bg.png`} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={currentUrl} />
            <meta property="twitter:title" content={siteTitle} />
            <meta property="twitter:description" content={metaDescription} />
            <meta property="twitter:image" content={`${DOMAIN}/assets/platform_hero_bg.png`} />

            {/* Structural Data */}
            <script type="application/ld+json">
                {JSON.stringify(schemaOrgJSONLD)}
            </script>
        </Helmet>
    );
}
