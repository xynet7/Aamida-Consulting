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
  console.log("This would be sent to info@aamidaconsulting.com");
  console.log(parsed.data);

  // =================================================================
  // TODO: Add your email sending logic here.
  //
  // For example, using a service like Resend or Nodemailer:
  //
  // import { Resend } from 'resend';
  // const resend = new Resend(process.env.RESEND_API_KEY);
  //
  // try {
  //   await resend.emails.send({
  //     from: 'onboarding@resend.dev',
  //     to: 'info@aamidaconsulting.in',
  //     subject: parsed.data.subject,
  //     reply_to: parsed.data.email,
  //     text: `From: ${parsed.data.name}\n\n${parsed.data.message}`,
  //   });
  // } catch (error) {
  //   return {
  //     success: false,
  //     message: "Failed to send message. Please try again later.",
  //   };
  // }
  // =================================================================
  
  // Simulate a potential failure for testing purposes
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
