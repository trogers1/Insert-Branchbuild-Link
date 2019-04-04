// ==UserScript==
// @name         Branchbuild Link
// @namespace    http://testsite.emsicc-qa.com/
// @version      0.1
// @description  Create a link for the branchbuild for a pull request
// @author       Taylor Rogers
// @match        https://github.com/emsiengineering/cc-frontend/pull/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @updateUrl    https://raw.githubusercontent.com/trogers1/Insert-Branchbuild-Link/master/insert-branchbuild-link.js
// @downloadUrl  https://raw.githubusercontent.com/trogers1/Insert-Branchbuild-Link/master/insert-branchbuild-link.js
// @grant        none
// ==/UserScript==
'use strict';

const createBranchBuildLink = () => {
  $('span.commit-ref.css-truncate.user-select-contain.expandable.head-ref').each((index, el) => {
    if (index === 0) {
      $el = $(el);
      let div = $('<div></div>');
      const url = `http://testsite.${$el[0].title.replace(
        'emsiengineering/cc-frontend:',
        ''
      )}.emsicc-qa.com`;
      $a = $('<a href="' + url + '" />')
        .text('Go to Branchbuild')
        .attr('target', '_blank')
        .attr('rel', 'noopener noreferrer')
        .addClass('branchbuild-link')
        .css('display', 'block');
      div.append($a);
      $('svg.octicon.octicon-clippy.d-inline-block.mx-1.js-clipboard-clippy-icon').after(div);
    }
  });
};

$(document).ready(function() {
  createBranchBuildLink();
});
