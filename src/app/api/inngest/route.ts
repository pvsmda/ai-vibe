import { serve } from "inngest/next";

import { inngest } from "@/inngest/client";
import { codeAgentFunction } from "@/inngest/functions";

// create an api that servers zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [codeAgentFunction],
});
