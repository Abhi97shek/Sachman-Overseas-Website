import { instituteAddress, instituteName, openingHours } from "@/lib/institute";

export type ConsultEmail = {
  name: string;
  phone: string;
  programme: string;
  country: string;
  airport?: string;
  message: string;
};

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => `&#${char.charCodeAt(0)};`);
}

function indiaMobile(phone: string) {
  const digits = phone.replace(/\D/g, "");
  const national = digits.length === 12 && digits.startsWith("91") ? digits.slice(2) : digits;
  const e164 = national.length === 10 ? `+91${national}` : digits ? `+${digits}` : "";
  return {
    national,
    display: national.length === 10 ? `+91 ${national.slice(0, 5)} ${national.slice(5)}` : phone,
    tel: e164 ? `tel:${e164}` : "",
    whatsapp: national.length === 10 ? `https://wa.me/91${national}` : "",
  };
}

function receivedAt() {
  return new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(new Date());
}

export function consultEmailSubject({ name, country, programme }: ConsultEmail) {
  const route = country !== "—" ? country : programme;
  return `Call ${name} · ${route}`;
}

export function consultEmailText(input: ConsultEmail) {
  const mobile = indiaMobile(input.phone);
  const lines = [
    `${instituteName} · new counselling request`,
    "",
    `Name: ${input.name}`,
    `Phone: ${mobile.display}`,
    `Programme: ${input.programme}`,
    `Destination: ${input.country}${input.airport ? ` (${input.airport})` : ""}`,
    `Message: ${input.message || "—"}`,
    "",
    mobile.tel ? `Call: ${mobile.tel.replace("tel:", "")}` : "",
    mobile.whatsapp ? `WhatsApp: ${mobile.whatsapp}` : "",
    "",
    `Received ${receivedAt()} IST`,
    instituteAddress,
  ];
  return lines.filter(Boolean).join("\n");
}

export function consultEmailHtml(input: ConsultEmail) {
  const mobile = indiaMobile(input.phone);
  const time = receivedAt();
  const note = input.message || "No extra note.";
  const route = input.airport
    ? `Pathankot · IXP  →  ${escapeHtml(input.country)} · ${escapeHtml(input.airport)}`
    : `Pathankot  →  ${escapeHtml(input.country)}`;

  const callButton = mobile.tel
    ? `<a href="${escapeHtml(mobile.tel)}" style="display:inline-block;background:#f0b429;color:#0a1a3a;font:700 15px/1 system-ui,-apple-system,sans-serif;text-decoration:none;padding:14px 22px;border-radius:6px">Call ${escapeHtml(input.name)}</a>`
    : "";
  const whatsappButton = mobile.whatsapp
    ? `<a href="${escapeHtml(mobile.whatsapp)}" style="display:inline-block;margin-left:10px;border:1px solid #dbe5f5;color:#123a82;font:600 15px/1 system-ui,-apple-system,sans-serif;text-decoration:none;padding:13px 18px;border-radius:6px">WhatsApp</a>`
    : "";

  return `<!DOCTYPE html>
<html lang="en">
  <body style="margin:0;padding:0;background:#e8effb">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#e8effb;padding:24px 12px">
      <tr>
        <td align="center">
          <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden">
            <tr>
              <td style="background:#0a1a3a;padding:28px 32px 24px">
                <p style="margin:0;font:600 11px/1.2 system-ui,-apple-system,sans-serif;letter-spacing:0.14em;text-transform:uppercase;color:#f0b429">${escapeHtml(instituteName)}</p>
                <h1 style="margin:12px 0 0;font:700 26px/1.2 system-ui,-apple-system,sans-serif;color:#ffffff">New counselling request</h1>
                <p style="margin:10px 0 0;font:400 14px/1.4 ui-monospace,Menlo,monospace;color:#b3c6ec">${route}</p>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 32px 8px">
                <p style="margin:0;font:400 13px/1.4 system-ui,-apple-system,sans-serif;color:#66769a">Student</p>
                <p style="margin:4px 0 0;font:700 28px/1.2 system-ui,-apple-system,sans-serif;color:#0a1a3a">${escapeHtml(input.name)}</p>
                <p style="margin:8px 0 0;font:400 16px/1.4 system-ui,-apple-system,sans-serif;color:#45567a">Asked for ${escapeHtml(input.programme)}.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px 0">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td width="50%" valign="top" style="padding:0 12px 16px 0">
                      <p style="margin:0;font:600 11px/1.2 system-ui,-apple-system,sans-serif;letter-spacing:0.1em;text-transform:uppercase;color:#66769a">Phone</p>
                      <p style="margin:8px 0 0;font:600 16px/1.3 system-ui,-apple-system,sans-serif">
                        ${mobile.tel ? `<a href="${escapeHtml(mobile.tel)}" style="color:#123a82;text-decoration:none">${escapeHtml(mobile.display)}</a>` : escapeHtml(mobile.display)}
                      </p>
                    </td>
                    <td width="50%" valign="top" style="padding:0 0 16px 12px">
                      <p style="margin:0;font:600 11px/1.2 system-ui,-apple-system,sans-serif;letter-spacing:0.1em;text-transform:uppercase;color:#66769a">Destination</p>
                      <p style="margin:8px 0 0;font:600 16px/1.3 system-ui,-apple-system,sans-serif;color:#0a1a3a">${escapeHtml(input.country)}</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 32px 8px">
                <p style="margin:0;font:600 11px/1.2 system-ui,-apple-system,sans-serif;letter-spacing:0.1em;text-transform:uppercase;color:#66769a">Their note</p>
                <p style="margin:10px 0 0;padding:14px 16px;background:#f4f7fd;border-left:3px solid #f0b429;font:400 15px/1.5 system-ui,-apple-system,sans-serif;color:#0a1a3a;white-space:pre-wrap">${escapeHtml(note)}</p>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 32px 28px">
                ${callButton}${whatsappButton}
                <p style="margin:16px 0 0;font:400 13px/1.4 system-ui,-apple-system,sans-serif;color:#66769a">Reply within one business day. Centre hours: ${escapeHtml(openingHours)}.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 32px 24px;border-top:1px solid #dbe5f5">
                <p style="margin:0;font:400 12px/1.5 system-ui,-apple-system,sans-serif;color:#66769a">Received ${escapeHtml(time)} IST · From the website form</p>
                <p style="margin:6px 0 0;font:400 12px/1.5 system-ui,-apple-system,sans-serif;color:#66769a">${escapeHtml(instituteAddress)}</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
