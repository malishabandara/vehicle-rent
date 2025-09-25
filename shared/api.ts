/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

/**
 * Example response type for /api/demo
 */
export interface DemoResponse {
  message: string;
}

export interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  vehicleType?: string;
  pickupLocation?: string;
  dropoffLocation?: string;
  startDate?: string;
  endDate?: string;
  message?: string;
}

export interface ContactResponse {
  ok: true;
  receivedAt: string;
}
