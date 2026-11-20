"use client";

import { ArrowUpRight } from "lucide-react";
import { FormEvent, useState } from "react";
import { EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/content";
import { InstagramMark } from "./InstagramMark";

type Errors = {
  name?: string;
  email?: string;
  message?: string;
};

export function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [ready, setReady] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    const nextErrors: Errors = {};

    if (!name) nextErrors.name = "Please enter your name.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Please enter a valid email.";
    }
    if (!message) nextErrors.message = "Please write a short message.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setReady(false);
      return;
    }

    const subject = encodeURIComponent(`Learn Diamonds — a note from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setReady(true);
  }

  return (
    <section id="contact" className="bg-ivory text-ink">
      <div className="mx-auto grid max-w-[1600px] gap-16 px-5 py-24 md:px-10 md:py-32 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <p className="eyebrow text-muted">Contact</p>
          <h2 className="display mt-5 text-[clamp(3.1rem,5.4vw,5.3rem)]">
            Let’s Discover Something Extraordinary.
          </h2>
          <p className="mt-7 max-w-md text-[1.02rem] leading-relaxed text-ink/70">
            A note for a diamond, a colored stone, or a piece of couture jewelry. Write directly
            to the studio.
          </p>
          <ul className="mt-10 space-y-4 text-[0.98rem]">
            <li>
              <a className="border-b border-ink/20 pb-1 transition hover:border-champagne" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
            </li>
            <li>
              <a className="border-b border-ink/20 pb-1 transition hover:border-champagne" href={`tel:${PHONE_TEL}`}>
                {PHONE_DISPLAY}
              </a>
            </li>
            <li className="text-ink/65">Boston · Nantucket · Smoky Mountains</li>
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border-b border-ink/20 pb-1 transition hover:border-champagne"
              >
                <InstagramMark className="h-4 w-4" />
                {INSTAGRAM_HANDLE}
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.25} />
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-7">
          {ready ? (
            <div className="flex h-full min-h-80 flex-col justify-center border-t border-ink/15 pt-10" role="status">
              <p className="font-serif text-4xl leading-tight italic">Your note is ready to send.</p>
              <p className="mt-4 max-w-md text-ink/70">
                If your email did not open, write to {EMAIL}. Include your name so the studio
                knows who is arriving.
              </p>
              <button type="button" className="btn btn-ink mt-8 self-start" onClick={() => setReady(false)}>
                Write another note
              </button>
            </div>
          ) : (
            <form className="space-y-8" onSubmit={onSubmit} noValidate>
              <Field
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                error={errors.name}
              />
              <Field
                id="email"
                label="Email"
                name="email"
                type="email"
                autoComplete="email"
                error={errors.email}
              />
              <Field
                id="message"
                label="Message"
                name="message"
                multiline
                error={errors.message}
              />
              <button className="btn btn-ink" type="submit">
                Send a Note
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  name,
  type = "text",
  autoComplete,
  multiline = false,
  error,
}: {
  id: string;
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  multiline?: boolean;
  error?: string;
}) {
  const errorId = `${id}-error`;
  const shared = {
    id,
    name,
    className: "field",
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errorId : undefined,
    required: true,
  } as const;

  return (
    <label className="block" htmlFor={id}>
      <span className="text-[0.68rem] tracking-[0.24em] text-ink/55 uppercase">{label}</span>
      {multiline ? (
        <textarea {...shared} rows={4} />
      ) : (
        <input {...shared} type={type} autoComplete={autoComplete} />
      )}
      {error ? (
        <span id={errorId} className="mt-2 block text-sm text-amber" role="alert">
          {error}
        </span>
      ) : null}
    </label>
  );
}
