# bibsdb/info-portrait

Supplies a slide template for playing info-portrait videos. This bundle uses InfoPortrait's js player: https://github.com/info-portrait/player.js/

## Installation

Add the git repository to "repositories" in `composer.json`.

<pre>
"repositories": {
    "bibsdb/info-portrait-bundle": {
      "type": "vcs",
      "url": "https://github.com/bibsdb/info-portrait-bundle"
    },
    ...
}
</pre>

Require the bundle with composer.

<pre>
composer require bibsdb/info-portrait-bundle
</pre>

Enable the bundle in `AppKernel.php`, by adding BibsdbInfoPortraitBundle to $bundles.

<pre>
new Bibsdb\InfoPortraitBundle\BibsdbInfoPortraitBundle()
</pre>

Run bibsdb:core:templates:load command to load the template in the installation.

<pre>
bin/console bibsdb:core:templates:load
</pre>

Enable the template in the administration.

## Ads and controls

To avoid ads and video controls, the shared video has to come from a user
that has disabled the options at info-portrait.com. To do it yourself, you need to have
at least a PLUS account (https://info-portrait.com/plus).
