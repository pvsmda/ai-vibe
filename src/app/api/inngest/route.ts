import { serve } from "inngest/next";

import { inngest } from "@/inngest/client";
import { helloWorld } from "@/inngest/functions";

// create an api that servers zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [helloWorld],
});
