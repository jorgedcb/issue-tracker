import { z } from "zod";
const issueSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(2, "Description is required"),
});
export default issueSchema;
