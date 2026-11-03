"use client";

import { useState } from "react";

export default function CopyEmail({ email }: { readonly email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const field = document.createElement("textarea");
      field.value = email;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.left = "-9999px";
      document.body.appendChild(field);
      field.select();
      document.execCommand("copy");
      field.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="break-all text-gray-600">{email}</span>
      <button
        type="button"
        onClick={copy}
        className="rounded border border-primary/30 px-2 py-0.5 text-xs font-medium text-primary hover:bg-secondary"
        aria-label={copied ? "Email address copied" : "Copy email address"}
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
