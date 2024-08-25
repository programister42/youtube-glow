import { youtube } from "@googleapis/youtube";
import { publicProcedure, router } from "../trpc";
import { z } from "zod";

const youtubeApi = youtube({
	version: "v3",
	auth: process.env["YOUTUBE_API_KEY"],
});

export const youtubeRouter = router({
	search: publicProcedure
		.input(
			z.object({
				q: z.string(),
				maxResults: z.number().default(10),
			}),
		)
		.query(async ({ input }) => {
			const { q, maxResults } = input;
			const res = await youtubeApi.search.list({
				part: ["snippet"],
				q,
				maxResults,
			});
			return res.data.items;
		}),
});
