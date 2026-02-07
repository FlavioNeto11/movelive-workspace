import type { ContentProvider } from '@/lib/content/provider';
import { InMemoryProvider } from '@/lib/content/inMemory';
import { CmsProvider } from '@/lib/content/cmsProvider';

const source = process.env.MOVELIVE_CONTENT_SOURCE;

export const contentProvider: ContentProvider = source === 'cms' ? new CmsProvider() : new InMemoryProvider();
