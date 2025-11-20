"use server";

import * as z from "zod";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  subject: z.string(),
  message: z.string(),
});

type ContactFormState = {
  success: boolean;
  message: string;
};

// This is a mock action. In a real application, you would send an email here.
export async function handleContactForm(
  values: z.infer<typeof formSchema>
): Promise<ContactFormState> {
  const parsed = formSchema.safeParse(values);

  if (!parsed.success) {
    return {
      success: false,
      message: "Invalid form data.",
    };
  }

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  console.log("Received contact form submission:");
  console.log(parsed.data);

  // You can add your email sending logic here, e.g., using Nodemailer or a service like Resend.
  
  // Simulate a potential failure
  if (parsed.data.email.includes("fail")) {
    return {
      success: false,
      message: "Failed to send message. Please try again later.",
    };
  }

  return {
    success: true,
    message: "Form submitted successfully!",
  };
}
