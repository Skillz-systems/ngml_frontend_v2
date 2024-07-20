export function getBaseUrl(): string {
    if (import.meta.env.VITE_ENV ==='development') {
        console.log('true')
      return '/api';
    }
    console.log('false')
    // In production, use the full URL
    return 'https://api.ngml.skillzserver.com';
  }