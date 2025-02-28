import type { StructureResolver } from 'sanity/structure';
import {
  CalendarIcon,
  DocumentTextIcon,
  HomeIcon,
  UserIcon,
  InfoOutlineIcon,
  EqualIcon,
  ImageIcon,
} from '@sanity/icons';

const SINGLETONS = [
  {
    id: 'frontPage',
    title: 'Forside',
    _type: 'document',
    icon: HomeIcon,
    schemaType: 'frontPage',
  },
  {
    id: 'menuPage',
    title: 'Menyside',
    _type: 'document',
    icon: InfoOutlineIcon,
    schemaType: 'menuPage',
  },
  {
    id: 'programPage',
    title: 'Programside',
    _type: 'document',
    icon: EqualIcon,
    schemaType: 'programPage',
  },
];

const MULTI = [
  {
    id: 'article',
    title: 'Artikler',
    _type: 'document',
    icon: DocumentTextIcon,
    schemaType: 'article',
  },
  {
    id: 'event',
    title: 'Forestillinger',
    _type: 'document',
    icon: CalendarIcon,
    schemaType: 'event',
  },
  {
    id: 'person',
    title: 'Person',
    _type: 'document',
    icon: UserIcon,
    schemaType: 'person',
  },
  {
    id: 'genre',
    title: 'Sjanger',
    _type: 'document',
    schemaType: 'genre',
  },
];

const NOT_LANGUAGE_SPECIFIC = [
  {
    id: 'customImage',
    title: 'Bilde',
    _type: 'document',
    schemaType: 'customImage',
    icon: ImageIcon,
  },
];

const LANGUAGES = [
  { id: `nb`, title: `🇳🇴 Norwegian (Bokmål)` },
  { id: `en`, title: `🇬🇧 English` },
];

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Innhold')
    .items([
      ...SINGLETONS.map((singleton) =>
        S.listItem()
          .title(singleton.title)
          .id(singleton.id)
          .icon(singleton.icon)
          .child(
            S.list()
              .title(singleton.title)
              .id(singleton.id)

              .items(
                LANGUAGES.map((language) =>
                  S.documentListItem()
                    .schemaType(singleton.schemaType)
                    .id(`${singleton.id}-${language.id}`)
                    .title(`${singleton.title} (${language.id.toLocaleUpperCase()})`),
                ),
              )
              .canHandleIntent(
                (intentName, params) => intentName === 'edit' && params.id.startsWith(singleton.id),
              ),
          ),
      ),
      S.divider(),
      ...MULTI.map((multi) =>
        S.listItem()
          .title(multi.title)
          .id(multi.id)
          .icon(multi.icon)
          .child(
            S.list()
              .title(multi.title)
              .id(multi.id)
              .items([
                ...LANGUAGES.map((language) =>
                  S.listItem()
                    .title(`${multi.title} (${language.id.toLocaleUpperCase()})`)
                    .icon(multi.icon)
                    .child(
                      S.documentList()
                        .title(`${language.id.toLocaleUpperCase()}`)
                        .filter(`_type=="${multi.id}" && language=="${language.id}"`),
                    ),
                ),
              ]),
          ),
      ),
      S.divider(),
      ...NOT_LANGUAGE_SPECIFIC.map((item) =>
        S.listItem()
          .title(item.title)
          .id(item.id)
          .child(S.documentList().title(item.title).filter(`_type=="${item.id}"`)),
      ),
    ]);
