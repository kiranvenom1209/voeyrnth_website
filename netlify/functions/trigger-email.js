/* eslint-env node */
export const handler = async (event) => {
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    try {
        const { name, email, formName } = JSON.parse(event.body);

        console.log(`Triggering email for ${email} (${formName})`);

        // Determine subject based on form
        const subject = formName === "private-access"
            ? "VŒRYNTH: Welcome to the Fold"
            : "VŒRYNTH: Request Acknowledged";

        if (!process.env.NETLIFY_EMAILS_SECRET) {
            console.error("NETLIFY_EMAILS_SECRET is missing.");
            return { statusCode: 500, body: "Email integration missing" };
        }

        // Use configured sender or fallback. 
        // IMPORTANT: This email MUST be verified in your SendGrid/Postmark account.
        const sender = process.env.SENDER_EMAIL || "system@voerynth.com";

        // Dynamic URL construction
        const currentUrl = new URL(event.rawUrl).origin;
        const emailEndpoint = `${currentUrl}/.netlify/functions/emails/welcome`;

        console.log(`Calling email endpoint: ${emailEndpoint} as ${sender}`);

        const response = await fetch(emailEndpoint, {
            method: "POST",
            headers: {
                "netlify-emails-secret": process.env.NETLIFY_EMAILS_SECRET,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                from: sender,
                to: email,
                subject: subject,
                parameters: {
                    name: name || "Initiate",
                },
            }),
        });

        if (!response.ok) {
            const txt = await response.text();
            // Log the specific error from the provider (e.g. SendGrid)
            console.error(`Email function failed: ${response.status} - ${txt}`);
            return {
                statusCode: 500,
                body: JSON.stringify({ error: `Provider Error: ${txt}`, details: "Check if SENDER_EMAIL is verified in SendGrid." })
            };
        }

        return { statusCode: 200, body: JSON.stringify({ message: "Email sent" }) };

    } catch (error) {
        console.error("Error in trigger-email:", error);
        return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
    }
};
