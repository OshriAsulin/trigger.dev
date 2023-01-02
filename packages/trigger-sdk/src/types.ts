import { SerializableCustomEventSchema } from "@trigger.dev/common-schemas";
import { z } from "zod";

type CustomEvent = z.infer<typeof SerializableCustomEventSchema>;

export type WaitForOptions = {
  seconds?: number;
  minutes?: number;
  hours?: number;
  days?: number;
};

export interface TriggerContext {
  id: string;
  environment: string;
  apiKey: string;
  organizationId: string;
  logger: TriggerLogger;
  fireEvent(event: CustomEvent): Promise<void>;
  waitFor(options: WaitForOptions): Promise<void>;
  waitUntil(date: Date): Promise<void>;
}

export interface TriggerLogger {
  debug(message: string, properties?: Record<string, any>): Promise<void>;
  info(message: string, properties?: Record<string, any>): Promise<void>;
  warn(message: string, properties?: Record<string, any>): Promise<void>;
  error(message: string, properties?: Record<string, any>): Promise<void>;
}
