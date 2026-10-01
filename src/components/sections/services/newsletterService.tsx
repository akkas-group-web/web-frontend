export interface NewsletterSubscribePayload {
  email: string;
  kvkkAccepted: boolean;
  bulletinAccepted: boolean;
}

interface NewsletterResponse {
  success: boolean;
  message?: string;
  error?: string;
}

const FALLBACK_ERROR = "Bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.";

export async function subscribeToNewsletter(
  payload: NewsletterSubscribePayload,
): Promise<string> {
  const response = await fetch("/api/newsletter/subscribe", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = (await response
    .json()
    .catch(() => null)) as NewsletterResponse | null;

  if (!response.ok || !data?.success) {
    throw new Error(data?.error ?? FALLBACK_ERROR);
  }

  return data.message ?? "Kaydınız alındı.";
}
