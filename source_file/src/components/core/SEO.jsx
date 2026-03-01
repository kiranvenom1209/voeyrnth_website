import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const DEFAULT_TITLE = "Vœrynth Système";
const DEFAULT_DESCRIPTION = "Architecture built for environments that cannot afford drama. Vœrynth provides deterministic control systems for private estates, superyachts, and critical infrastructure.";
const DOMAIN = "https://voerynth.de";

export default function SEO({
    title,
    description,
    keywords,
    canonical,
    type = "website",
    noindex = false
}) {
    const { pathname } = useLocation();

    // Normalize path: always remove trailing slash unless it's root
    const normalizedPath = pathname === '/' ? '/' : pathname.replace(/\/$/, '');

    // If a manual canonical is provided, strictly use it (handling trailing slashes logic or just trusting the prop).
    // The user requested: canonical = SITE_URL + path.
    // Let's defer to the prop 'canonical' if explicitly passed (e.g. for specialized pages), 
    // BUT the user said "Currently have duplicate...". 
    // The user's requested logic: path = pathname.endsWith("/") ? pathname : pathname + "/"
    // Wait, the user logic in the prompt said: "normalize trailing slash: path = pathname.endsWith("/") ? pathname : pathname + "/""
    // This implies they WANT a trailing slash.
    // Let's re-read the prompt: "normalize trailing slash: path = pathname.endsWith("/") ? pathname : pathname + "/""
    // Okay, usually canonicals are preferred without trailing slash or with, but consistency is key.
    // I will follow the user's specific logic.

    // Enforce trailing slash to match Netlify's default behavior (301 redirecting non-slash to slash)
    const path = pathname.endsWith('/') ? pathname : `${pathname}/`;
    const computedUrl = `${DOMAIN}${path}`;

    // Prefer explicit canonical prop if given, otherwise use computed. 
    // Actually, the user says "canonical = SITE_URL + path", implying we should generally calculate it.
    // But specific pages might want to override.
    // Currently, typical usage in the app seems to be passing `canonical` as a relative path string in some places?
    // Let's look at usage. 
    // In NotFound.jsx: canonical="/404"
    // In others?
    // The prompt says "In the SEO component, compute URL tags... instead of a hardcoded root."

    const currentUrl = canonical ? `${DOMAIN}${canonical}` : computedUrl;

    const siteTitle = title ? `${title} | ${DEFAULT_TITLE}` : DEFAULT_TITLE;
    const metaDescription = description || DEFAULT_DESCRIPTION;

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
            <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
            <meta name="description" content={metaDescription} />
            {keywords && <meta name="keywords" content={keywords} />}
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
