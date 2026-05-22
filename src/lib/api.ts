export const apiClient = {
  async get<TResponse>(endpoint: string): Promise<TResponse> {
    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return response.json() as Promise<TResponse>;
  },
};
