(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{184:function(e,t,o){},276:function(e,t,o){"use strict";var i=o(184);o.n(i).a},293:function(e,t,o){"use strict";o.r(t);var i=o(279),n={field:"A field, or a key-value pair, is a set of two data items linked together: an <b>attribute</b> and its associated <b>value</b>. <br><br> Ex: <code>attribute: 'data'</code>",attribute:"An attribute is the name of a field, like a key. <br><br> Ex:  <code>title: 'Batman'</code> <br> In the example above, title is the attribute.","ranking rules":"A set of consecutive rules applied to ensure relevancy in search results. <br><br> For example, to sort results by number of typos or number of matched query terms in each matching document.","primary key":"The attribute of the field which contains the unique identifier of the documents. <br><br> It is used by MeiliSearch to store the document. <br><br> Example: <code>movie_id</code> is the primary key of a movie document.",schemaless:"This means data can be indexed without providing a fixed data structure. <br><br> For example, SQL's tables require schema definition whereas MongoDB's collections don't.",searchable:"The data is used to determine the relevancy of a document when doing a search query.",displayed:"The field is present in the documents returned upon search."},r={props:{word:{type:String,default:"field",validator:function(e){return n[e]}}},data:function(){return{glossary:n,content:""}},created:function(){this.content=n[this.word]+"<div id='arrow' data-popper-arrow></div>"},mounted:function(){var e=this.$el.querySelector(".tooltip-text"),t=this.$el.querySelector(".tooltip-content");Object(i.a)(e,t,{placement:"top",modifiers:[{name:"offset",options:{offset:[0,8]}}]}),this.hideTooltip()},methods:{showTooltip:function(){this.$el.querySelector(".tooltip-content").classList.remove("tooltip-hide")},hideTooltip:function(){this.$el.querySelector(".tooltip-content").classList.add("tooltip-hide")}}},a=(o(276),o(8)),s=Object(a.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("span",[o("span",{staticClass:"tooltip-text",on:{mouseover:e.showTooltip,mouseleave:e.hideTooltip}},[e._v("\n    "+e._s(e.word)+"\n  ")]),e._v(" "),o("div",{staticClass:"tooltip-content",domProps:{innerHTML:e._s(e.content)}})])}),[],!1,null,null,null);t.default=s.exports}}]);