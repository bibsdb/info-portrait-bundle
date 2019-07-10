# bibsdb/citation-portrait

Supplies a slide template for playing citation-portrait videos. This bundle uses CitationPortrait's js player: https://github.com/citation-portrait/player.js/

## Installation

Add the git repository to "repositories" in `composer.json`.

<pre>
"repositories": {
    "bibsdb/citation-portrait-bundle": {
      "type": "vcs",
      "url": "https://github.com/bibsdb/citation-portrait-bundle"
    },
    ...
}
</pre>

Require the bundle with composer.

<pre>
composer require bibsdb/citation-portrait-bundle
</pre>

Enable the bundle in `AppKernel.php`, by adding BibsdbCitationPortraitBundle to $bundles.

<pre>
new Bibsdb\CitationPortraitBundle\BibsdbCitationPortraitBundle()
</pre>

Run bibsdb:core:templates:load command to load the template in the installation.

<pre>
bin/console bibsdb:core:templates:load
</pre>

Enable the template in the administration.

## Ads and controls

To avoid ads and video controls, the shared video has to come from a user
that has disabled the options at citation-portrait.com. To do it yourself, you need to have
at least a PLUS account (https://citation-portrait.com/plus).
