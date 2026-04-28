import { Client } from "typesense";

const masterKey = process.env.NEXT_PUBLIC_TYPESENSE_API_KEY || "xyz";

export const typesenseClient = new Client({
  nodes: [
    {
      host:
        process.env.NEXT_PUBLIC_TYPESENSE_HOST ||
        "typesense-707350399508.asia-south1.run.app",
      port: parseInt(process.env.NEXT_PUBLIC_TYPESENSE_PORT || "443", 10),
      protocol: process.env.NEXT_PUBLIC_TYPESENSE_PROTOCOL || "https",
    },
  ],
  apiKey: masterKey,
  connectionTimeoutSeconds: 60,
});
