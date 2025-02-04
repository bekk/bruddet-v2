import { documentInternationalization } from "@sanity/document-internationalization";
import { defineField, SlugValidationContext } from "sanity";

export const languages = [
  { id: "nb", title: "🇳🇴 Norwegian (Bokmål)", isDefault: true },
  { id: "en", title: "🇬🇧 English" },
];

export const documentInternationalizationConfig =
  documentInternationalization({
    supportedLanguages: languages,
    schemaTypes: [
      "event",
      "genre",
      "frontPage",
      "article",
      "menuPage",
      "programPage",
    ],
    metadataFields: [
      defineField({
        name: "slug",
        type: "slug",
        options: {
          isUnique: isUniqueOtherThanLanguage,
        }
      })
    ]
  })

export async function isUniqueOtherThanLanguage(
  slug: string,
  context: SlugValidationContext
) {
  const { document, getClient } = context;
  if (!document?.language) {
    return true;
  }
  const client = getClient({ apiVersion: "2023-04-24" });
  const id = document._id.replace(/^drafts\./, "");
  const params = {
    draft: `drafts.${id}`,
    published: id,
    language: document.language,
    slug,
  };
  const query = `!defined(*[
    !(_id in [$draft, $published]) &&
    slug.current == $slug &&
    language == $language
  ][0]._id)`;
  const result = await client.fetch(query, params);
  return result;
}