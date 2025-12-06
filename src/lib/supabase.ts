import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// WARNING: The service role key should NOT be used on the client side as it bypasses Row Level Security.
// We are only including it here because it was provided, but you should use the Anon key for client-side operations.
// const supabaseServiceRoleKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhxaGp2aG11dXpqbGR1dHJjbG5iIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NDY2Nzk4NSwiZXhwIjoyMDgwMjQzOTg1fQ.8G48NXVTip1oU7G1geK-e7rFiZIOOS6eJQCkUQ8Nryo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const submitContactForm = async (data: any) => {
    const { error } = await supabase
        .from('contact_messages')
        .insert([data]);

    if (error) {
        throw error;
    }

    return true;
};

export const subscribeToNewsletter = async (email: string) => {
    const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email }]);

    if (error) {
        // Ignore unique constraint violation (already subscribed)
        if (error.code === '23505') return true;
        throw error;
    }

    return true;
};

export const submitCoreSkillsApplication = async (data: any) => {
    const { error } = await supabase
        .from('program_applications')
        .insert([{
            ...data,
            program: 'Core Skills Track',
            status: 'New'
        }]);

    if (error) {
        throw error;
    }

    return { success: true };
};

export const submitCorporateApplication = async (data: any) => {
    const { error } = await supabase
        .from('program_applications')
        .insert([{
            ...data,
            program: 'Corporate Track',
            status: 'New'
        }]);

    if (error) {
        throw error;
    }

    return { success: true };
};

export const getUserApplications = async (email: string) => {
    const { data, error } = await supabase
        .from('program_applications')
        .select('*')
        .eq('email', email)
        .order('created_at', { ascending: false });

    if (error) {
        throw error;
    }

    return data;
};
