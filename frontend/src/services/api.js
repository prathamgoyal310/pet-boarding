/**
 * Furrever Inn API Service Layer
 */

const API_BASE_URL = '/api';

export const apiService = {
  /**
   * Fetch sanctuary health status
   */
  async getHealth() {
    const response = await fetch(`${API_BASE_URL}/health`);
    if (!response.ok) throw new Error('Health check failed');
    return response.json();
  },

  /**
   * Fetch current rates and packages
   */
  async getRates() {
    const response = await fetch(`${API_BASE_URL}/rates`);
    if (!response.ok) throw new Error('Failed to fetch rates');
    return response.json();
  },

  /**
   * Submit reservation enquiry dossier
   */
  async submitEnquiry(payload) {
    const response = await fetch(`${API_BASE_URL}/enquiry`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || 'Failed to submit reservation enquiry');
    }

    return response.json();
  }
};
