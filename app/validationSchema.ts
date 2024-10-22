import { z } from "zod";
export const issueSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(255, "Title cannot exceed 255 characters"),
  description: z
    .string()
    .min(2, "Description is required")
    .max(65535, "Description cannot exceed 65,535 characters"),
});

export const patchIssueSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(255, "Title cannot exceed 255 characters")
    .optional(),
  description: z
    .string()
    .min(2, "Description is required")
    .max(65535, "Description cannot exceed 65,535 characters")
    .optional(),
  assignedToUserId: z
    .string()
    .min(1, "AssignedToUserId is required")
    .max(255, "AssignedToUserId cannot exceed 255 characters")
    .optional()
    .nullable(),
});
