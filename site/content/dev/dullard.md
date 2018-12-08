+++
title = "Dullard notes"
dir = "dev/dullard.md"
contentType = "single"
date = "2018-12-04T18:03:01Z"
+++
<article>
  <header class="c-section-header">
      <h1 class="c-section-header__headline">Random dullard notes on Hugo</h1><h2>Unedited ad hoc ahas and gotchas as they come</h2>
  </header>
  <h3>Archetypes</h3>
  <p>Belatedly recognising more fully the differences between victor-hugo and default new hugo site directory structure. victor-hugo has separate child /site dir whereas default hugo has the default site directories at project root. And archetype directory for default.md is missing. This content file in /content/dev/ section created after adding /archetypes/default.md to establish default front matter.<p>
  <h4>Example archetype yaml/toml</h4>
  <p>(<em>.md aside: code block formatting?</em> Need to check how to format code in markdown. Would short codes be the way forward?)</p>
        <code>
        ---
        title: "{{ replace .TranslationBaseName "-" " " | title }}"
        date: {{ .Date }}
        draft: true
        stylesheet: "post.css"
        ---
        ---
        title: "{{ replace .TranslationBaseName "-" " " | title }}"
        date: {{ .Date }}
        draft: true
        ---
        +++
        title = "{{ .Name }}"
        date = "{{ .Date }}"
        +++
        </code>
    <!-- ---
    title: "{{ replace .TranslationBaseName "-" " " | title }}"
    date: {{ .Date }}
    draft: true
    stylesheet: "post.css"
    ---
    ---
    title: "{{ replace .TranslationBaseName "-" " " | title }}"
    date: {{ .Date }}
    draft: true
    ---
    +++
    title = "{{ .Name }}"
    date = "{{ .Date }}"
    +++ -->
  <p>Last toml example is current default.md front matter I’ve used here to create this content file.</p>
  <p><strong>Re DRY:</strong> in addition need to establish refactoring for common section file markup.</p>
  <h3>Content structure and layout rendering template relationship</h3>
  <h3>Side list of things to look into</h3>
  <ul>
    <li>using short codes for markup snippets</li>
    <li>page Kinds (<code>.Kind</code>)</li>
    <li><strong>dullard alert</strong>: calling custom page variables with .Params.[var] — .context (rabbit hole initially trying to call variable from single page content dev/dullard.md variable from dev/_index.md list page for that section)</li>
  </ul>
</article>
