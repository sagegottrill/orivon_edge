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

export interface CoreSkillsApplication {
  id?: string;
  full_name: string;
  email: string;
  phone: string;
  track: 'Artificial Intelligence' | 'Cloud Computing' | 'Data Science' | 'Cybersecurity';
  motivation: string;
  status?: 'pending' | 'reviewing' | 'accepted' | 'rejected' | 'waitlist';
  created_at?: string;
  updated_at?: string;
}

export interface CorporateTrackApplication {
  id?: string;
  full_name: string;
  email: string;
  phone: string;
  current_role?: string;
  career_goals: string;
  status?: 'pending' | 'reviewing' | 'accepted' | 'rejected' | 'waitlist';
  created_at?: string;
  updated_at?: string;
}

export interface JoinHubApplication {
  id?: string;
  full_name: string;
  email: string;
  phone: string;
  location: string;
  interest: 'training-core' | 'training-corporate' | 'incubation' | 'membership' | 'partnership' | 'other';
  experience_level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  background: string;
  goals: string;
  availability: 'fulltime' | 'parttime' | 'evening' | 'flexible';
  how_heard: 'social' | 'friend' | 'event' | 'search' | 'other';
  status?: 'pending' | 'reviewing' | 'accepted' | 'rejected' | 'interview' | 'waitlist';
  created_at?: string;
  updated_at?: string;
  notes?: string;
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

// Core Skills Track Application Functions
export const submitCoreSkillsApplication = async (data: CoreSkillsApplication) => {
  try {
    const { data: result, error } = await supabase
      .from('core_skills_applications')
      .insert([
        {
          full_name: data.full_name,
          email: data.email,
          phone: data.phone,
          track: data.track,
          motivation: data.motivation,
          status: 'pending',
        },
      ])
      .select();

    if (error) throw error;
    return { success: true, data: result };
  } catch (error) {
    console.error('Error submitting core skills application:', error);
    return { success: false, error };
  }
};

export const getCoreSkillsApplications = async () => {
  try {
    const { data, error } = await supabase
      .from('core_skills_applications')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error fetching core skills applications:', error);
    return { success: false, error };
  }
};

// Corporate Track Application Functions
export const submitCorporateTrackApplication = async (data: CorporateTrackApplication) => {
  try {
    const { data: result, error } = await supabase
      .from('corporate_track_applications')
      .insert([
        {
          full_name: data.full_name,
          email: data.email,
          phone: data.phone,
          current_role: data.current_role || null,
          career_goals: data.career_goals,
          status: 'pending',
        },
      ])
      .select();

    if (error) throw error;
    return { success: true, data: result };
  } catch (error) {
    console.error('Error submitting corporate track application:', error);
    return { success: false, error };
  }
};

export const getCorporateTrackApplications = async () => {
  try {
    const { data, error } = await supabase
      .from('corporate_track_applications')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error fetching corporate track applications:', error);
    return { success: false, error };
  }
};

// Join Hub Application Functions
export const submitJoinHubApplication = async (data: JoinHubApplication) => {
  try {
    const { data: result, error } = await supabase
      .from('join_hub_applications')
      .insert([
        {
          full_name: data.full_name,
          email: data.email,
          phone: data.phone,
          location: data.location,
          interest: data.interest,
          experience_level: data.experience_level,
          background: data.background,
          goals: data.goals,
          availability: data.availability,
          how_heard: data.how_heard,
          status: 'pending',
        },
      ])
      .select();

    if (error) throw error;
    return { success: true, data: result };
  } catch (error) {
    console.error('Error submitting join hub application:', error);
    return { success: false, error };
  }
};

export const getJoinHubApplications = async () => {
  try {
    const { data, error } = await supabase
      .from('join_hub_applications')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error fetching join hub applications:', error);
    return { success: false, error };
  }
};

// Analytics Functions
export const getApplicationsDashboard = async () => {
  try {
    const { data, error } = await supabase
      .from('applications_dashboard')
      .select('*');

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error fetching applications dashboard:', error);
    return { success: false, error };
  }
};
