(function(){var n=[].indexOf||function(n){for(var t=0,i=this.length;t<i;t++)if(t in this&&this[t]===n)return t;return-1};!function(t){var i,e,a,r,c;a=["en","ko","zh-tw","zh-cn","fr","es"],e="ja",c=function(n){return n===e?"":"/"+n},r=function(i){var e,r,l;return(r=(e=t.location.pathname).split("/")).length>1&&(l=r[1],n.call(a,l)>=0)?c(i)+"/"+r.slice(2).join("/"):""+c(i)+e},i={change:function(n){return t.location.href=r(n)}},t.CORONA_LANG=i,$(".language-change li").click(function(n){return n.preventDefault(),i.change($(this).data("locale"))})}(window)}).call(this);