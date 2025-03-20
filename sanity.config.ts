'use client';

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { visionTool } from '@sanity/vision';
import { defineConfig, SanityClient, SanityDocumentLike } from 'sanity';
import { presentationTool } from 'sanity/presentation';
import { structureTool } from 'sanity/structure';
import { media } from 'sanity-plugin-media';

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { muxInput } from 'sanity-plugin-mux-input';
import { documentInternationalizationConfig } from './sanity/documentInternationalizationConfig';
import { apiVersion, dataset, projectId } from './sanity/env';
import { schema } from './sanity/schemaTypes';
import { structure } from './sanity/structure';

async function getDocumentPreviewUrl(document: SanityDocumentLike, client: SanityClient) {
  const res = await client.fetch(
    `*[_id == $id][0]{
      language,
      "slug": slug.current,
    }`,
    {
      id: document._id,
    },
  );
  if (!res) {
    return '';
  }

  const basePath = '/studio/presentation?preview=';
  const languagePrefix = res.language === 'nb' ? '' : 'en/';

  switch (document._type) {
    case 'article': {
      return basePath + languagePrefix + 'meny/' + res.slug;
    }
    case 'event': {
      return basePath + languagePrefix + 'program/' + res.slug;
    }
    case 'frontPage': {
      return basePath + languagePrefix + '/';
    }
    case 'menuPage': {
      return basePath + languagePrefix + 'meny';
    }
    case 'programPage': {
      return basePath + languagePrefix + 'program';
    }
  }
  return '';
}

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  document: {
    productionUrl: async (_, context) => {
      const { getClient, document } = context;
      const client = getClient({ apiVersion: '2025-01-01' });
      return getDocumentPreviewUrl(document, client);
    },
  },
  plugins: [
    structureTool({ structure }),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    documentInternationalizationConfig,
    muxInput(),
    presentationTool({
      previewUrl: {
        previewMode: {
          enable: '/api/draft-mode/enable',
        },
      },
    }),
    media(),
  ],
});
