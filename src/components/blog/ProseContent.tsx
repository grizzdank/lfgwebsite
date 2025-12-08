"use client";

import { useEffect, useRef } from "react";

interface ProseContentProps {
  html: string;
}

export default function ProseContent({ html }: ProseContentProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    // Find all pre > code blocks
    const preElements = contentRef.current.querySelectorAll("pre");

    preElements.forEach((pre) => {
      // Skip if already processed
      if (pre.parentElement?.classList.contains("code-block-wrapper")) return;

      const code = pre.querySelector("code");
      if (!code) return;

      // Get the code text
      const codeText = code.textContent || "";

      // Create wrapper
      const wrapper = document.createElement("div");
      wrapper.className = "code-block-wrapper relative group";

      // Create copy button
      const button = document.createElement("button");
      button.className =
        "copy-button absolute right-2 top-2 p-2 rounded-md bg-[#2c4a3c]/80 hover:bg-[#2c4a3c] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 flex items-center justify-center";
      button.setAttribute("aria-label", "Copy code");
      button.setAttribute("title", "Copy code");

      // Add icon
      button.innerHTML = `<svg class="copy-icon" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>`;

      // Add click handler
      button.onclick = async (e) => {
        e.preventDefault();
        try {
          await navigator.clipboard.writeText(codeText);
          // Show checkmark
          button.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>`;
          button.setAttribute("title", "Copied!");

          // Reset after 2 seconds
          setTimeout(() => {
            button.innerHTML = `<svg class="copy-icon" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>`;
            button.setAttribute("title", "Copy code");
          }, 2000);
        } catch (err) {
          console.error("Failed to copy:", err);
        }
      };

      // Wrap the pre element
      pre.parentNode?.insertBefore(wrapper, pre);
      wrapper.appendChild(button);
      wrapper.appendChild(pre);
    });
  }, [html]);

  return (
    <div
      ref={contentRef}
      className="prose prose-lg max-w-none"
      style={{ color: "#2c4a3c" }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
