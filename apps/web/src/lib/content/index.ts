import type { ContentProvider } from '@/lib/content/provider';
import { InMemoryProvider } from '@/lib/content/inMemory';

// Aqui fica o ponto único para trocar por CMS no futuro:
// export const contentProvider: ContentProvider = new CmsProvider(...)
export const contentProvider: ContentProvider = new InMemoryProvider();
