import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // Add your routes here

  const httpServer = createServer(app);
  return httpServer;
}
