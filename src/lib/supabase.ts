import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://akfspsfnwtivthgkgfnz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFrZnNwc2Zud3RpdnRoZ2tnZm56Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1MDUyMzMsImV4cCI6MjA3NTA4MTIzM30.I7PNJ6mp7TdBYOqTB-nrfMYNEXa3FDusSXHyUi-NGrA';

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database Types
export interface ContactSubmission {
  id?: string;
  name: string;
  email: string;
  company?: string;
  message: string;
  inquiry_type?: 'client' | 'venture' | 'investment' | 'general';
  created_at?: string;
  status?: 'new' | 'contacted' | 'closed';
}

export interface NewsletterSubscription {
  id?: string;
  email: string;
  subscribed_at?: string;
  status?: 'active' | 'unsubscribed';
  source?: string;
}

// Helper Functions
export const submitContactForm = async (data: ContactSubmission) => {
  try {
    const { data: result, error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name: data.name,
          email: data.email,
          company: data.company || null,
          message: data.message,
          inquiry_type: data.inquiry_type || 'general',
          status: 'new',
        },
      ])
      .select();

    if (error) throw error;
    return { success: true, data: result };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { success: false, error };
  }
};

export const subscribeToNewsletter = async (email: string, source: string = 'popup') => {
  try {
    // Check if email already exists
    const { data: existing } = await supabase
      .from('newsletter_subscriptions')
      .select('*')
      .eq('email', email)
      .single();

    if (existing) {
      // Update status to active if previously unsubscribed
      const { data: result, error } = await supabase
        .from('newsletter_subscriptions')
        .update({ status: 'active', subscribed_at: new Date().toISOString() })
        .eq('email', email)
        .select();

      if (error) throw error;
      return { success: true, data: result, message: 'Resubscribed successfully' };
    }

    // Insert new subscription
    const { data: result, error } = await supabase
      .from('newsletter_subscriptions')
      .insert([
        {
          email,
          source,
          status: 'active',
        },
      ])
      .select();

    if (error) throw error;
    return { success: true, data: result, message: 'Subscribed successfully' };
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    return { success: false, error };
  }
};

export const getContactSubmissions = async () => {
  try {
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error fetching contact submissions:', error);
    return { success: false, error };
  }
};

export const getNewsletterSubscribers = async () => {
  try {
    const { data, error } = await supabase
      .from('newsletter_subscriptions')
      .select('*')
      .eq('status', 'active')
      .order('subscribed_at', { ascending: false });

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error fetching newsletter subscribers:', error);
    return { success: false, error };
  }
};
