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
<section>
  <h3>Asides</h3>
  <aside>
   <h4>Git note</h4>
   <p>Hit confusion after trying to add new post from cms admin on netlify (new post would not write — API error because example collection for post has no corresponding markup in rendering template? image uploaded as it should after temporary confusion with branch setting in admin/config.yml).<strong>Just the upload of image to remote src/img/uploads (media_folder config) meant unable to push new changes local to remote without first doing <code>$ git pull</code></strong>.</p>
   <p>For git pull need full remote url (as shown with $ git remote -v) followed by branch). This by default opens vim requiring commit message entry:</p>
   <ol>
    <li>press "i"</li>
    <li>write merge message</li>
    <li>press "esc"</li>
    <li>write ":wq"</li>
    <li>press enter</li>
   </ol>
   <p>("i" for "insert", "esc" is the exit the insertion, and ":wq" is just "write" and "quit")</p>
   <p>Made strange mess with commit message doing this. See <a href="https://tomanistor.com/blog/how-to-change-most-recent-commit-message/">Toma Nistor’s helpful post for the likes of me making silly message errors</a>.</p>
   <p><strong>AND NOTE</strong>: No matter where you access Netlify CMS — whether running locally, in a staging environment, or in your published site — it always fetches and commits files in your hosted repository (for example, on GitHub), on the branch you configured in your Netlify CMS config.yml file. This means that content fetched in the admin UI matches the content in the repository, which may be different from your locally running site. It also means that content saved using the admin UI saves directly to the hosted repository, even if you're running the UI locally or in staging.</p>
   

    
    
    
    

    
 
