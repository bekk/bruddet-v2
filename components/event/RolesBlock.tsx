import { urlFor } from '@/sanity/lib/image';
import { ARTICLEPAGE_QUERYResult, EVENT_QUERYResult } from '@/sanity/types/types';
import Image from 'next/image';
type RoleGroups =
  | NonNullable<EVENT_QUERYResult>['roleGroups']
  | NonNullable<ARTICLEPAGE_QUERYResult>['roleGroups'];
type RolePerson = NonNullable<NonNullable<RoleGroups>[number]['persons']>[number]['person'];

type PersonCardProps = {
  details: {
    person: RolePerson;
    occupation?: string;
    description?: string;
  };
};

const PersonCard = ({ details }: PersonCardProps) => {
  const { person, occupation, description } = details;
  if (!person) return null;

  return (
    <div className="flex flex-row my-4">
      {person?.image?.asset && (
        <Image
          className="w-20 md:w-32 h-28 md:h-44 object-cover mr-4"
          src={urlFor(person.image.asset).url()}
          alt={person?.biography ?? person?.name ?? ''}
          width={1000}
          height={1000}
        />
      )}
      <div className="flex flex-col gap-2">
        <span className="block font-bold text-2xl lg:text-3xl">{person.name}</span>
        {occupation && <p className="text-lg font-bold">{occupation}</p>}
        {description && <p className="break-words">{description}</p>}
      </div>
    </div>
  );
};

type RoleGroupProps = {
  roleGroup: NonNullable<RoleGroups>[number];
};

const RoleGroup = ({ roleGroup }: RoleGroupProps) => {
  if (!roleGroup.persons?.length) return null;

  return (
    <div className="my-14 md:my-24">
      {roleGroup.name && <h2>{roleGroup.name}</h2>}
      <div className="mt-2 md:mt-4 flex flex-col">
        {roleGroup.persons.map((personRole, index) => (
          <PersonCard
            key={personRole._key ?? index}
            details={{
              person: personRole.person,
              occupation: personRole.occupation,
              description: personRole.description,
            }}
          />
        ))}
      </div>
    </div>
  );
};

type RolesBlockProps = {
  roleGroups: RoleGroups;
};

export const RolesBlock = ({ roleGroups }: RolesBlockProps) => {
  if (!roleGroups?.length) return null;

  return (
    <div className="my-12 md:my-20">
      {roleGroups.map((roleGroup, index) => (
        <RoleGroup key={roleGroup._key ?? index} roleGroup={roleGroup} />
      ))}
    </div>
  );
};
