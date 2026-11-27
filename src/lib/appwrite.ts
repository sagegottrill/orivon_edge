import { Client, Databases, ID } from "appwrite";

// Appwrite configuration from environment (set in .env / Vercel).
// The Appwrite project is browser-accessible with its public project ID.
export const appwriteEndpoint =
  import.meta.env.VITE_APPWRITE_ENDPOINT || "https://nyc.cloud.appwrite.io/v1";
export const appwriteProjectId =
  import.meta.env.VITE_APPWRITE_PROJECT_ID || "";

export const client = new Client()
  .setEndpoint(appwriteEndpoint)
  .setProject(appwriteProjectId);

export const databases = new Databases(client);

// Database and collection identifiers. The default database name matches the
// Appwrite project.
export const DB_ID = import.meta.env.VITE_APPWRITE_DB_ID || "orivonedge";

export const COLLECTIONS = {
  contactMessages:
    import.meta.env.VITE_APPWRITE_COL_CONTACT || "contact_messages",
  newsletterSubscribers:
    import.meta.env.VITE_APPWRITE_COL_NEWSLETTER || "newsletter_subscribers",
  programApplications:
    import.meta.env.VITE_APPWRITE_COL_APPLICATIONS || "program_applications",
};

/**
 * Submit a contact message to the Appwrite "contact_messages" collection.
 */
export async function submitContactForm(data: {
  name: string;
  email: string;
  company?: string;
  message: string;
  inquiryType?: string;
}) {
  return databases.createDocument(DB_ID, COLLECTIONS.contactMessages, ID.unique(), {
    ...data,
    createdAt: new Date().toISOString(),
  });
}

/**
 * Subscribe to the newsletter.
 */
export async function subscribeToNewsletter(email: string) {
  return databases.createDocument(
    DB_ID,
    COLLECTIONS.newsletterSubscribers,
    ID.unique(),
    { email, createdAt: new Date().toISOString() }
  );
}

/**
 * Submit a program application (Core Skills Track / Corporate Track / etc.).
 */
export async function submitProgramApplication(data: Record<string, unknown>) {
  return databases.createDocument(
    DB_ID,
    COLLECTIONS.programApplications,
    ID.unique(),
    {
      ...data,
      status: "New",
      createdAt: new Date().toISOString(),
    }
  );
}

// Backward-compatible naming used by the track pages.
export const submitCoreSkillsApplication = (data: Record<string, unknown>) =>
  submitProgramApplication({ ...data, program: "Core Skills Track" });

export const submitCorporateApplication = (data: Record<string, unknown>) =>
  submitProgramApplication({ ...data, program: "Corporate Track" });
