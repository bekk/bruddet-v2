'use client';

import { useEffect, useRef } from 'react';
import { Button } from '../ui/button';
type InputProps = {
  type: string;
  name: string;
  label: string;
  required?: boolean;
  validationMessage?: string;
  pattern?: string;
};

function Input({ type, name, label, required, validationMessage, pattern }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const inputElement = inputRef.current;

    if (inputElement) {
      inputElement.oninvalid = (e: Event) => {
        const target = e.target as HTMLInputElement;
        target.setCustomValidity('');
        if (!target.validity.valid) {
          target.setCustomValidity(validationMessage || 'Ugyldig verdi');
        }
      };

      inputElement.oninput = (e: Event) => {
        const target = e.target as HTMLInputElement;
        target.setCustomValidity('');
      };
    }

    return () => {
      if (inputElement) {
        inputElement.oninvalid = null;
        inputElement.oninput = null;
      }
    };
  }, [validationMessage]);

  return (
    <div className="flex flex-col">
      <label htmlFor={name} hidden>
        {label}
      </label>
      <input
        ref={inputRef}
        id={name}
        type={type}
        name={name}
        required={required}
        pattern={pattern}
        className="w-full p-2 border border-black bg-background"
        placeholder={label}
      />
    </div>
  );
}

export default function NewsletterComponent() {
  return (
    <form
      action="https://nyhetsbrev.fjaereheia.no/p/s/MjQxODQ6MzY0Yzk5NGYtZGY5Ny00Zjc3LWJmMDctZTk4ZjEyMmUzZjE5"
      acceptCharset="utf-8"
      method="post"
      className="mnm-embed-form flex flex-col gap-y-1"
    >
      <Input
        label="E-postadresse *"
        name="email"
        type="email"
        required={true}
        validationMessage="Vennligst skriv inn en gyldig e-postadresse"
      />
      <Input
        label="Fornavn *"
        name="firstname"
        type="text"
        required={true}
        validationMessage="Vennligst skriv inn fornavn"
      />
      <Input
        label="Etternavn *"
        name="lastname"
        type="text"
        required={true}
        validationMessage="Vennligst skriv inn etternavn"
      />
      <Input
        label="Mobilnummer"
        name="phone"
        type="text"
        required={false}
        pattern="^[0-9]{8}$"
        validationMessage="Vennligst skriv inn et gyldig mobilnummer"
      />
      <Input
        label="Postnummer"
        name="zip"
        type="text"
        required={false}
        pattern="^[0-9]{4}$"
        validationMessage="Vennligst skriv inn et gyldig postnummer"
      />
      <div>
        <label className="text-sm">
          <input
            type="checkbox"
            name="custom_fields[SAMTYKKEEPOST]"
            value="1"
            required
            className="mr-2"
          />
          Jeg samtykker til kommunikasjon via e-post *
        </label>
      </div>
      <div>
        <label className="text-sm">
          <input type="checkbox" name="custom_fields[SAMTYKKESMS]" value="1" className="mr-2" />
          Jeg samtykker til kommunikasjon via SMS
        </label>
      </div>
      <Button type="submit" size="xl" className="mt-12">
        MELD DEG PÅ
      </Button>
    </form>
  );
}
