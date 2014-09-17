// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require bootstrap-modal
//= require bootstrap-modalmanager
//= require bootstrap-tagsinput
//= require twitter/typeahead
//= require editable/bootstrap-editable
//= require editable/rails
//= require_tree .

$(document).ready(function(){
    //Initialize typeahead
    var skills = new Bloodhound({
        prefetch: { url: "http://lesson-single.codio.io:3000/skills" },
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace("name"),
        queryTokenizer: Bloodhound.tokenizers.whitespace
    });
    
    skills.clearPrefetchCache();
    skills.initialize();
 
    $('.bootstrap-tagsinput input:first-child').typeahead({
      highlight: true,
      trimValue: true
    },{
        // dataset options
        name: "skills",
        displayKey: "name",
        source: skills.ttAdapter() 
      });
    
    //Increase the size of tag input
    $('.bootstrap-tagsinput > > input').attr({"size": 5}); // The average length of a word in the English language
    
    // Prepare tag/typeahead input for tooltips and popovers
    $('.tt-input').addClass('has-tooltip');
    $('.tt-input').attr({
      title: "Popover to give hot tips!",
      "data-toggle": "popover",
      "data-html": "true",
      "data-placement": "top",
      "data-content": "#charnum"
    });
    
    //Enable tooltips
    $('.has-tooltip').tooltip();
    $('input[title]').tooltip({ placement:'top' });
    $('.has-popover').popover({ trigger: 'hover' });
    
    //Enable word count
    var countChar = function countChar(val) {
        var len = val.value.length;
      
        if (len >= 500) {
            val.value = val.value.substring(0, 500);
        }else {
            $('#charNum').text(500 - len);
        }
    };
    
    
    
});