/**
 * Generates WhatsApp redirect URL tailored for desktop vs mobile devices.
 * - Desktop/Laptop: Redirects directly to WhatsApp Web (https://web.whatsapp.com/send?phone=...&text=...)
 * - Mobile (Android/iOS): Redirects to WhatsApp App (https://api.whatsapp.com/send?phone=...&text=...)
 */
export function getWhatsAppUrl(phone: string, text: string): string {
  const cleanPhone = phone.replace(/\D/g, "");
  const encodedText = encodeURIComponent(text);

  if (typeof window !== "undefined") {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

    if (isMobile) {
      // Mobile app launch scheme
      return `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodedText}`;
    } else {
      // Desktop / Laptop web browser launch
      return `https://web.whatsapp.com/send?phone=${cleanPhone}&text=${encodedText}`;
    }
  }

  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}
