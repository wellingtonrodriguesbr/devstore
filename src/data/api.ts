import { env } from "@/env";

export function api(path: string, init?: RequestInit) {
  const apiPrefix = "/api";

  const baseUrl = `${env.NEXT_PUBLIC_API_BASE_URL}`;
  const url = new URL(apiPrefix.concat(path), baseUrl);

  return fetch(url, init);
}
