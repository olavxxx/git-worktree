/**
 * Automated Test Suite for Git Worktree & AI Agents Guide
 * 
 * Uses Node.js native test runner (zero external dependencies).
 * Run with: node test.js or node --test
 */

const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');

const HTML_PATH = path.join(__dirname, 'index.html');
const html = fs.readFileSync(HTML_PATH, 'utf8');

// Helper to extract JS from <script> tag
function extractScript(content) {
    const match = content.match(/<script>([\s\S]*?)<\/script>/);
    if (!match) throw new Error('No <script> tag found in HTML');
    return match[1];
}

const jsCode = extractScript(html);

// --- 1. HTML STRUCTURE & ASSETS ---
test('HTML: File exists and basic document structure is intact', () => {
    assert.ok(html.length > 5000, 'HTML file should not be empty');
    assert.match(html, /<!DOCTYPE html>/i, 'Should have DOCTYPE');
    assert.match(html, /<canvas id="starfield"><\/canvas>/, 'Should have starfield canvas');
    assert.match(html, /<div class="flow-container">/, 'Should contain flow container');
    assert.match(html, /<div class="page-footer">/, 'Should contain page footer');
    assert.match(html, /https:\/\/github\.com\/olavxxx\/git-worktree/, 'Should contain link to source code');
});

// --- 2. JAVASCRIPT SYNTAX & COMPILATION ---
test('JavaScript: Syntax is valid and compiles without errors', () => {
    assert.doesNotThrow(() => {
        new Function(jsCode);
    }, 'Script should compile without syntax errors');
});

// --- 3. I18N / TRANSLATIONS INTEGRITY ---
test('Translations: All elements with data-i18n have valid EN and NO entries', () => {
    const transMatch = jsCode.match(/const translations = ({[\s\S]*?});\s*\n\s*\/\/ --- HTML ESCAPER/);
    assert.ok(transMatch, 'Should find translations object in JavaScript');

    // Safely evaluate translations
    const translations = new Function(`return ${transMatch[1]}`)();
    assert.ok(translations.en, 'English translations should exist');
    assert.ok(translations.no, 'Norwegian translations should exist');

    // Find all data-i18n keys in the HTML
    const dataI18nKeys = [...html.matchAll(/data-i18n="([^"]+)"/g)].map(m => m[1]);
    const dataI18nHtmlKeys = [...html.matchAll(/data-i18n-html="([^"]+)"/g)].map(m => m[1]);

    assert.ok(dataI18nKeys.length > 20, 'Should find data-i18n elements in DOM');

    // Verify each text key exists in both languages
    for (const key of dataI18nKeys) {
        assert.notStrictEqual(translations.en[key], undefined, `Missing EN translation for: ${key}`);
        assert.notStrictEqual(translations.no[key], undefined, `Missing NO translation for: ${key}`);
        assert.ok(translations.en[key].length > 0, `EN translation for '${key}' is empty`);
        assert.ok(translations.no[key].length > 0, `NO translation for '${key}' is empty`);
    }

    // Verify each HTML key exists in both languages
    for (const key of dataI18nHtmlKeys) {
        assert.notStrictEqual(translations.en[key], undefined, `Missing EN HTML translation for: ${key}`);
        assert.notStrictEqual(translations.no[key], undefined, `Missing NO HTML translation for: ${key}`);
    }
});

// --- 4. SECURITY & XSS SANITIZATION ---
test('Security: escapeHtml properly sanitizes HTML tags and dangerous characters', () => {
    // Extract escapeHtml implementation from source
    const escapeMatch = jsCode.match(/function escapeHtml\(str\)\s*{([\s\S]*?)}/);
    assert.ok(escapeMatch, 'escapeHtml function should exist');

    const escapeHtml = new Function('str', escapeMatch[1]);

    const dangerous = '<script>alert("xss")</script>&\'hello"';
    const sanitized = escapeHtml(dangerous);

    assert.strictEqual(sanitized.includes('<'), false, 'Must not contain unescaped <');
    assert.strictEqual(sanitized.includes('>'), false, 'Must not contain unescaped >');
    assert.strictEqual(sanitized.includes('"'), false, 'Must not contain unescaped "');
    assert.strictEqual(sanitized.includes("'"), false, 'Must not contain unescaped single quote');
    assert.ok(sanitized.includes('&lt;script&gt;'), 'Tags must be converted to HTML entities');
});

// --- 5. PATH NORMALIZER LOGIC ---
test('Path Normalizer: Correctly formats paths for Windows and Unix', () => {
    function normalizeRoot(root, os) {
        if (os === 'windows') {
            root = root.replace(/[\/]/g, '\\');
            root = root.replace(/([^:][\\])[\\]+/g, '$1');
            if (!root.endsWith('\\')) root += '\\';
        } else {
            root = root.replace(/[\\]/g, '/');
            root = root.replace(/[\/][\/]+/g, '/');
            if (!root.endsWith('/')) root += '/';
        }
        return root;
    }

    // Windows forward slash normalization
    assert.strictEqual(normalizeRoot('c:/dev/repos', 'windows'), 'c:\\dev\\repos\\');
    assert.strictEqual(normalizeRoot('c:\\dev\\repos\\', 'windows'), 'c:\\dev\\repos\\');

    // Unix backslash normalization
    assert.strictEqual(normalizeRoot('~/dev/repos\\', 'unix'), '~/dev/repos/');
    assert.strictEqual(normalizeRoot('/home/user/repos', 'unix'), '/home/user/repos/');
});

// --- 6. ACCESSIBILITY (A11Y) ATTRIBUTES ---
test('Accessibility: Interactive nodes have ARIA attributes and keyboard tabindex', () => {
    // Check that headers have role="button" and tabindex="0"
    const headerMatches = [...html.matchAll(/<div class="node-header"([^>]*)>/g)];
    assert.ok(headerMatches.length >= 4, 'Should have at least 4 node headers');

    for (const match of headerMatches) {
        const attrs = match[1];
        assert.match(attrs, /role="button"/, 'Header should have role="button"');
        assert.match(attrs, /tabindex="0"/, 'Header should have tabindex="0"');
        assert.match(attrs, /aria-expanded="(true|false)"/, 'Header should have aria-expanded');
        assert.match(attrs, /onkeydown="handleHeaderKeydown/, 'Header should support keyboard events');
    }
});

// --- 7. COPY-TO-CLIPBOARD BUTTONS ---
test('Features: Copy buttons exist for all main terminal command blocks', () => {
    assert.match(html, /onclick="copyCode\(this,\s*'command-block-setup'\)"/, 'Setup block has copy button');
    assert.match(html, /onclick="copyCode\(this,\s*'command-block-list'\)"/, 'List block has copy button');
    assert.match(html, /onclick="copyCode\(this,\s*'command-block-push'\)"/, 'Push block has copy button');
    assert.match(html, /function copyCode\(btn,\s*preId\)/, 'copyCode function exists in script');
});
