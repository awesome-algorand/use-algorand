import { contentSchema } from '@tutorialkit/types';
import { docsSchema } from '@astrojs/starlight/schema';
import { defineCollection } from 'astro:content';

const tutorial = defineCollection({
  type: 'content',
  schema: contentSchema,
});

const docs = defineCollection({
  schema: docsSchema(),
})
export const collections = { tutorial, docs };
