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
  },

  /**
   * Submit first-time dog enrollment record
   */
  async submitEnrollment(payload) {
    const response = await fetch(`${API_BASE_URL}/enrollment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || 'Failed to submit dog enrollment form');
    }

    return response.json();
  },

  /**
   * Fetch registered dogs database
   */
  async getEnrollments() {
    const response = await fetch(`${API_BASE_URL}/enrollments`);
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || 'Failed to fetch registered dogs database');
    }
    return response.json();
  },

  /**
   * Lookup registered dog by unique registration number
   */
  async lookupEnrollment(regNumber) {
    if (!regNumber || !regNumber.trim()) {
      throw new Error('Registration number is required');
    }
    const encoded = encodeURIComponent(regNumber.trim());
    const response = await fetch(`${API_BASE_URL}/enrollment/lookup/${encoded}`);
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || 'Failed to lookup registration number');
    }
    return response.json();
  }
};
