import React from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Container from './components/Container';
export function initiate() {
  // prevent multiple instances
  const ytinfoRoot = document.getElementById('ytinfo-root');
  if (ytinfoRoot) {
    ytinfoRoot.remove();
  }

  const fullscreenPanel = document.querySelector('#secondary-inner #related'); // Wanted parent if fullscreen
  const mobilePanel = document.querySelector('#below #related'); // Wanted parent if mobile
  const panel = fullscreenPanel || mobilePanel;

  if (panel) {
    const app = document.createElement('div');

    app.id = 'ytinfo-root';

    if (panel) {
      panel.prepend(app);
    }

    const container = document.getElementById('ytinfo-root');
    const root = createRoot(container!);

    const videoId = window.location.search.split('v=')[1]; // Get video ID from URL
    const queryClient = new QueryClient(); // Instantiate query client

    root.render(
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <Container videoId={videoId} />
        </QueryClientProvider>
      </React.StrictMode>
    );
  }
}
