export const config = {
  domainSource: "https://meta.lamppostsocial.com",
  patterns: [
    {
      pattern: "/eventpage/[^/]+",
      metaDataEndpoint: "https://yprlpjnmkaptxwvtfidx.supabase.co/functions/v1/event-meta?slug={id}"
    }
  ]
};
