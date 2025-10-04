import { useEffect } from 'react';

// Custom hook for handling form errors
export const useFormError = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleError = (err) => {
    setError(err?.message || 'An error occurred');
    setLoading(false);
  };

  return { error, setError, loading, setLoading, handleError };
};

// Custom hook for form submission
export const useFormSubmit = (submitFn) => {
  const { error, setError, loading, setLoading, handleError } = useFormError();

  const handleSubmit = async (data) => {
    try {
      setLoading(true);
      setError(null);
      await submitFn(data);
    } catch (err) {
      handleError(err);
    } finally {
      setLoading(false);
    }
  };

  return { handleSubmit, error, loading };
};

// Custom hook for cleaning up effects
export const useCleanup = (effect, deps = []) => {
  useEffect(() => {
    let mounted = true;
    
    const cleanup = effect(() => mounted);
    
    return () => {
      mounted = false;
      if (typeof cleanup === 'function') {
        cleanup();
      }
    };
  }, deps);
};

// Helper for ARIA labels
export const ariaLabels = {
  menuButton: 'Toggle navigation menu',
  closeButton: 'Close',
  submitButton: 'Submit form',
  nextButton: 'Next',
  prevButton: 'Previous',
  playButton: 'Play video',
  pauseButton: 'Pause video',
  searchButton: 'Search',
  newsletterSubmit: 'Subscribe to newsletter',
};