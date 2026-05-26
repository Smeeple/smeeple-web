// Environment-driven. Set VITE_BASE_URL / VITE_API_URL in .env or Netlify env vars.
// Prod values (for reference only — never uncomment in dev):
//   BASE_URL: app.smeeple.com
//   API_URL:  apps.smeeple.com

export const BASE_URL = import.meta.env.VITE_BASE_URL ?? 'dev-reactapp.netlify.app';
export const API_URL  = import.meta.env.VITE_API_URL  ?? 'smeeple-dev.azurewebsites.net';
