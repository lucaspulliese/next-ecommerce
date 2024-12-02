import type { GtagEventType } from "@/types";

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_ANALYTICS_ID; // This is your GA Tracking ID

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let window: Window & { gtag: any };

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: GtagEventType) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
