import { RequestHandler } from "express";
import type { ContactRequest, ContactResponse } from "@shared/api";

export const handleContact: RequestHandler = (req, res) => {
  const payload = req.body as ContactRequest;

  // Basic validation
  if (!payload?.name || !payload?.email) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  // In a real app you would email or persist this
  // For now, log to server and return success
  // eslint-disable-next-line no-console
  console.log("New contact from CNS Travels site:", JSON.stringify(payload));

  const response: ContactResponse = {
    ok: true,
    receivedAt: new Date().toISOString(),
  };
  res.status(200).json(response);
};
