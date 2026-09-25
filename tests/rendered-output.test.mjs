import assert from "node:assert/strict";
import { readFileSync, existsSync, readdirSync } from "node:fs";
import test from "node:test";

const html = readFileSync(new URL("../.next/server/app/index.html", import.meta.url), "utf8");
const text = html.replace(/<[^>]+>/g, "").replace(/\s+/g, " ");

test("bundles licensed variable typography without trial font assets", () => {
  const fonts = new URL("../src/app/fonts/", import.meta.url);
  assert.ok(readdirSync(fonts).every(name => !/trial|bigdaily/i.test(name)));
  for (const name of ["Newsreader-Variable.ttf", "Newsreader-Italic-Variable.ttf"]) {
    assert.ok(readFileSync(new URL(name, fonts)).length > 100_000);
  }
  assert.match(readFileSync(new URL("Newsreader-OFL.txt", fonts), "utf8"), /SIL OPEN FONT LICENSE Version 1.1/);
  const tokens = readFileSync(new URL("../src/app/tokens.css", import.meta.url), "utf8");
  assert.match(tokens, /--font-weight-display: 450;/);
  const css = readFileSync(new URL("../src/app/globals.css", import.meta.url), "utf8");
  for (const block of css.matchAll(/[^{}]+\{[^{}]*font-family: var\(--font-sixteenth-display\)[^{}]*\}/g)) {
    assert.match(block[0], /font-weight: var\(--font-weight-display\)/);
  }
});

test("renders all eight landing compositions and local destinations", () => {
  for (const copy of ["Private members club", "The Setting", "Not everything needs knowing",
    "Nothing here is rushed", "Membership in the 16th hole is not transactional",
    "Familiar faces", "Rituals practiced with intention", "A quieter way to belong"]) {
    assert.ok(text.includes(copy), copy);
  }
  for (const destination of ["entrance", "society", "membership", "people"]) {
    assert.ok(html.includes('id="' + destination + '"'), destination);
  }
  assert.match(html, /noindex/);
});

test("preserves responsive Society typography and the italic highlight", () => {
  const css = readFileSync(new URL("../src/app/globals.css", import.meta.url), "utf8");
  const tokens = readFileSync(new URL("../src/app/tokens.css", import.meta.url), "utf8");
  assert.match(tokens, /--type-society-heading-fluid-size: clamp\(42px, 3\.611111vw, 69px\)/);
  assert.match(tokens, /--type-society-body-fluid-size: clamp\(var\(--type-body-relaxed-size\), 1\.111111vw, 21px\)/);
  const heading = css.match(/\.sixteenth-mosaic-copy h2 \{([^}]+)\}/)?.[1];
  assert.match(heading, /font-size: var\(--type-society-heading-fluid-size\)/);
  const italic = css.match(/\.sixteenth-mosaic-copy h2 em \{([^}]+)\}/)?.[1];
  assert.match(italic, /background: var\(--sixteenth-highlight\)/);
  assert.match(italic, /box-decoration-break: clone/);
  assert.match(css, /\.sixteenth-mosaic-copy h2 \{\s*font-size: var\(--type-heading-mobile-large-regular-size\)/);
});

test("uses shared controls and does not expose an unimplemented menu", () => {
  for (const [name, count] of [["action-link", 2], ["nav-link", 6], ["people-link", 4], ["ritual-card", 3]]) {
    assert.equal(html.match(new RegExp('data-component="' + name + '"', "g"))?.length, count, name);
  }
  assert.doesNotMatch(html, /Go to membership|aria-expanded/);
  assert.match(html, /wordmark\.svg/);
  assert.match(html, /favicon\.svg/);
});

test("ships all local image resources referenced by the rendered document", () => {
  const sources = new Set([...html.matchAll(/src="(\/assets\/[^"]+)"/g)].map(match => match[1]));
  assert.ok(sources.size > 20);
  for (const source of sources) {
    assert.ok(existsSync(new URL("../public" + source, import.meta.url)), source);
  }
});
