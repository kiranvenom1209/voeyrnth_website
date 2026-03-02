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
    type = "website",
    noindex = false,
    // Accept both `image` and `ogImage` (ogImage takes precedence if both provided)
    image: imageProp = "/assets/platform_hero_bg_v2.png",
    ogImage,
    // Optional array of extra JSON-LD objects to inject for this specific page
    jsonLd: extraJsonLd = [],
    // canonical is computed from useLocation — this prop is intentionally ignored
    // but accepted to avoid React unknown-prop warnings from callers
    canonical: _canonical,
}) {
    const image = ogImage || imageProp;
    const { pathname } = useLocation();

    // ── Language detection ────────────────────────────────────────────────
    const isGerman = pathname === '/de' || pathname.startsWith('/de/');
    const currentLang = isGerman ? 'de' : 'en';

    // ── Base path (language-agnostic) ─────────────────────────────────────
    // Strip leading /de to get the abstract path shared by both languages.
    let basePath = isGerman ? (pathname.replace(/^\/de(\/|$)/, '$1') || '/') : pathname;
    if (!basePath.startsWith('/')) basePath = '/' + basePath;

    // ── Normalise with trailing slash ─────────────────────────────────────
    // Netlify 301-redirects non-slash to slash, so canonicals must be slash-terminated.
    const withSlash = (p) => (p === '/' ? '/' : p.endsWith('/') ? p : `${p}/`);

    const enPath = withSlash(basePath);                                    // e.g. /proof/audit-log/
    const dePath = withSlash(`/de${basePath === '/' ? '' : basePath}`);    // e.g. /de/proof/audit-log/

    const enUrl = `${DOMAIN}${enPath}`;   // https://voerynth.de/proof/audit-log/
    const deUrl = `${DOMAIN}${dePath}`;   // https://voerynth.de/de/proof/audit-log/
    const curUrl = isGerman ? deUrl : enUrl;

    // ── Meta strings ──────────────────────────────────────────────────────
    const siteTitle = title ? `${title} | ${DEFAULT_TITLE}` : DEFAULT_TITLE;
    const metaDescription = description || DEFAULT_DESCRIPTION;

    // ── Schema.org ────────────────────────────────────────────────────────
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
            {/* ── HTML lang attribute ───────────────────────────────── */}
            <html lang={currentLang} />

            {/* ── Standard metadata ─────────────────────────────────── */}
            <title>{siteTitle}</title>
            <meta name="robots" content={noindex ? "noindex, follow" : "index, follow"} />
            <meta name="description" content={metaDescription} />
            {keywords && <meta name="keywords" content={keywords} />}

            {/* ── Canonical ─────────────────────────────────────────── */}
            <link rel="canonical" href={curUrl} />

            {/* ── Hreflang ─────────────────────────────────────────── */}
            <link rel="alternate" href={enUrl} hreflang="en" />
            <link rel="alternate" href={deUrl} hreflang="de" />
            {/* x-default always points at the root English URL */}
            <link rel="alternate" href={`${DOMAIN}/`} hreflang="x-default" />

            {/* ── Open Graph ────────────────────────────────────────── */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={curUrl} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={image.startsWith('http') ? image : `${DOMAIN}${image}`} />
            <meta property="og:locale" content={isGerman ? 'de_DE' : 'en_US'} />

            {/* ── Twitter / X ───────────────────────────────────────── */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={curUrl} />
            <meta property="twitter:title" content={siteTitle} />
            <meta property="twitter:description" content={metaDescription} />
            <meta property="twitter:image" content={image.startsWith('http') ? image : `${DOMAIN}${image}`} />

            {/* ── Structured data ───────────────────────────────────── */}
            <script type="application/ld+json">
                {JSON.stringify(schemaOrgJSONLD)}
            </script>
            {extraJsonLd.map((schema, i) => (
                <script key={i} type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            ))}
        </Helmet>
    );
}
