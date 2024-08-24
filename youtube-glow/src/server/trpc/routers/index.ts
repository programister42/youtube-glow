import { router } from '../trpc';
import { noteRouter } from './notes';
import { youtubeRouter } from './youtube';

export const appRouter = router({
	note: noteRouter,
	youtube: youtubeRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
