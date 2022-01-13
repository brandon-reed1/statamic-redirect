(()=>{"use strict";function e(e,t,r,i,s,n,a,o){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=r,c._compiled=!0),i&&(c.functional=!0),n&&(c._scopeId="data-v-"+n),a?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),s&&s.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=l):s&&(l=o?function(){s.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:s),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(e,t){return l.call(t),u(e,t)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:e,options:c}}const t=e({props:{title:String,action:String,blueprint:Array,meta:Array,redirectTo:String,values:Array},methods:{saved:function(e){var t=this;setTimeout((function(){return t.redirect(e.data)}),600)},redirect:function(e){window.location.href=this.createEditRoute(e)},createEditRoute:function(e){return this.redirectTo.replace("x-redirect",e)}}},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("publish-form",{attrs:{title:e.title,action:e.action,blueprint:e.blueprint,meta:e.meta,values:e.values},on:{saved:e.saved}})}),[],!1,null,null,null).exports;function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const s=e({mixins:[{props:{actionUrl:String},methods:{actionStarted:function(){this.loading=!0},actionCompleted:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;this.loading=!1,!1!==e&&(this.$events.$emit("clear-selections"),this.$events.$emit("reset-action-modals"),this.$toast.success(t.message||__("Action completed")),this.request())}}},{data:function(){return{activePreset:null,activePresetPayload:{},searchQuery:"",activeFilters:{},activeFilterBadges:{}}},computed:{activeFilterCount:function(){var e=Object.keys(this.activeFilters).length;return this.activeFilters.hasOwnProperty("fields")&&(e=e+Object.keys(this.activeFilters.fields).filter((function(e){return"badge"!=e})).length-1),e},hasActiveFilters:function(){return this.activeFilterCount>0}},methods:{searchChanged:function(e){this.searchQuery=e},hasFields:function(e){for(var t in e)if(e[t])return!0;return!1},filterChanged:function(e){var t=e.handle,r=e.values,i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];r&&this.hasFields(r)?Vue.set(this.activeFilters,t,r):Vue.delete(this.activeFilters,t),i&&this.unselectAllItems()},filtersChanged:function(e){for(var t in this.activeFilters={},e){var r=e[t];this.filterChanged({handle:t,values:r},!1)}this.unselectAllItems()},filtersReset:function(){this.activePreset=null,this.activePresetPayload={},this.searchQuery="",this.activeFilters={},this.activeFilterBadges={}},unselectAllItems:function(){this.$refs.toggleAll&&this.$refs.toggleAll.uncheckAllItems()},selectPreset:function(e,t){this.activePreset=e,this.activePresetPayload=t,this.searchQuery=t.query,this.filtersChanged(t.filters)},autoApplyFilters:function(e){if(e){var t={};e.filter((function(e){return!_.isEmpty(e.auto_apply)})).forEach((function(e){t[e.handle]=e.auto_apply})),this.activeFilters=t}}}},{props:{initialPerPage:{type:Number,default:function(){return Statamic.$config.get("paginationSize")}}},data:function(){return{perPage:this.initialPerPage,page:1}},mounted:function(){this.setInitialPerPage()},methods:{setInitialPerPage:function(){this.hasPreferences&&(this.perPage=this.getPreference("per_page")||this.initialPerPage)},changePerPage:function(e){var t=this;e=parseInt(e),(this.hasPreferences?this.setPreference("per_page",e!=this.initialPerPage?e:null):Promise.resolve()).then((function(r){t.perPage=e,t.resetPage()}))},selectPage:function(e){this.page=e},resetPage:function(){this.page=1}}},{data:function(){return{preferencesPrefix:null}},computed:{hasPreferences:function(){return null!==this.preferencesPrefix}},methods:{preferencesKey:function(e){return"".concat(this.preferencesPrefix,".").concat(e)},getPreference:function(e){return this.$preferences.get(this.preferencesKey(e))},setPreference:function(e,t){return this.$preferences.set(this.preferencesKey(e),t)},removePreference:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return this.$preferences.remove(this.preferencesKey(e),t)}}}],props:{initialSortColumn:String,initialSortDirection:String,initialColumns:{type:Array,default:function(){return[]}},filters:Array},data:function(){return{source:null,initializing:!0,loading:!0,items:[],columns:this.initialColumns,visibleColumns:this.initialColumns.filter((function(e){return e.visible})),sortColumn:this.initialSortColumn,sortDirection:this.initialSortDirection,meta:null}},computed:{parameters:function(){return Object.assign({sort:this.sortColumn,order:this.sortDirection,page:this.page,perPage:this.perPage,search:this.searchQuery,filters:this.activeFilterParameters,columns:this.visibleColumns.map((function(e){return e.field})).join(",")},this.additionalParameters)},activeFilterParameters:function(){return utf8btoa(JSON.stringify(this.activeFilters))},additionalParameters:function(){return{}},shouldRequestFirstPage:function(){return this.page>1&&0===this.items.length&&(this.page=1,!0)}},created:function(){this.autoApplyFilters(this.filters),this.request()},watch:{parameters:{deep:!0,handler:function(e,t){t.search===e.search&&JSON.stringify(t)!==JSON.stringify(e)&&this.request()}},loading:{immediate:!0,handler:function(e){this.$progress.loading(this.listingKey,e)}},searchQuery:function(e){this.sortColumn=null,this.sortDirection=null,this.resetPage(),this.request()}},methods:{request:function(){var e=this;this.requestUrl?(this.loading=!0,this.source&&this.source.cancel(),this.source=this.$axios.CancelToken.source(),this.$axios.get(this.requestUrl,{params:this.parameters,cancelToken:this.source.token}).then((function(t){if(e.columns=t.data.meta.columns,e.activeFilterBadges=function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?r(Object(s),!0).forEach((function(t){i(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}({},t.data.meta.activeFilterBadges),e.items=Object.values(t.data.data),e.meta=t.data.meta,e.shouldRequestFirstPage)return e.request();e.loading=!1,e.initializing=!1,e.afterRequestCompleted()})).catch((function(t){e.$axios.isCancel(t)||(e.loading=!1,e.initializing=!1,e.$toast.error(t.response?t.response.data.message:__("Something went wrong"),{duration:null}))}))):this.loading=!1},afterRequestCompleted:function(e){},sorted:function(e,t){this.sortColumn=e,this.sortDirection=t},removeRow:function(e){var t=e.id,r=_.indexOf(this.rows,_.findWhere(this.rows,{id:t}));this.rows.splice(r,1),0===this.rows.length&&location.reload()}}},undefined,undefined,!1,null,null,null).exports;const n=e({mixins:[s],data:function(){return{listingKey:"redirects",preferencesPrefix:"redirect.redirects",requestUrl:cp_url("redirect/api/redirects"),columns:this.columns}},methods:{removeRow:function(e){var t=e.id,r=_.indexOf(this.items,_.findWhere(this.items,{id:t}));this.items.splice(r,1),0===this.items.length&&location.reload();var i=this;Object.keys(this.$refs).forEach((function(e){e.includes("deleter_")&&void 0!==i.$refs[e]&&i.$refs[e].cancel()}))}}},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.initializing?r("div",{staticClass:"card loading"},[r("loading-graphic")],1):e._e(),e._v(" "),e.initializing?e._e():r("data-list",{staticClass:"mb-4",attrs:{"visible-columns":e.columns,columns:e.columns,rows:e.items,sort:!1,"sort-column":e.sortColumn,"sort-direction":e.sortDirection},scopedSlots:e._u([{key:"default",fn:function(t){t.hasSelections;return r("div",{},[r("div",{staticClass:"card p-0 relative"},[r("data-list-filter-presets",{ref:"presets",attrs:{"active-preset":e.activePreset,"preferences-prefix":e.preferencesPrefix},on:{selected:e.selectPreset,reset:e.filtersReset}}),e._v(" "),r("div",{staticClass:"data-list-header"},[r("data-list-filters",{attrs:{filters:e.filters,"active-preset":e.activePreset,"active-preset-payload":e.activePresetPayload,"active-filters":e.activeFilters,"active-filter-badges":e.activeFilterBadges,"active-count":e.activeFilterCount,"search-query":e.searchQuery,"saves-presets":!0,"preferences-prefix":e.preferencesPrefix},on:{"filter-changed":e.filterChanged,"search-changed":e.searchChanged,saved:function(t){return e.$refs.presets.setPreset(t)},deleted:function(t){return e.$refs.presets.refreshPresets()},"restore-preset":function(t){return e.$refs.presets.viewPreset(t)},reset:e.filtersReset}})],1),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:0===e.items.length,expression:"items.length === 0"}],staticClass:"p-3 text-center text-grey-50",domProps:{textContent:e._s(e.__("No results"))}}),e._v(" "),r("data-list-table",{directives:[{name:"show",rawName:"v-show",value:e.items.length,expression:"items.length"}],attrs:{"allow-bulk-actions":!1,loading:e.loading,reorderable:!1,sortable:!0,"toggle-selection-on-row-click":!1,"allow-column-picker":!0,"column-preferences-key":e.preferencesKey("columns")},on:{sorted:e.sorted},scopedSlots:e._u([{key:"cell-enabled",fn:function(e){return[e.row.enabled?r("div",{staticClass:"bg-green block h-3 w-2 mx-auto rounded-full"}):r("div",{staticClass:"bg-red block h-3 w-2 mx-auto rounded-full"})]}},{key:"cell-source",fn:function(t){var i=t.row;return[r("a",{staticStyle:{"word-break":"break-all"},attrs:{href:e.cp_url("redirect/redirects/"+i.id)}},[e._v(e._s(i.source))])]}},{key:"actions",fn:function(t){var i=t.row;t.index;return[r("dropdown-list",[r("dropdown-item",{attrs:{text:e.__("Edit"),redirect:e.cp_url("redirect/redirects/"+i.id)}}),e._v(" "),r("dropdown-item",{staticClass:"warning",attrs:{text:e.__("Delete")},on:{click:function(t){e.$refs["deleter_"+i.id].confirm()}}},[r("resource-deleter",{ref:"deleter_"+i.id,attrs:{resource:i},on:{deleted:function(t){return e.removeRow(i.id)}}})],1)],1)]}}],null,!0)})],1),e._v(" "),r("data-list-pagination",{staticClass:"mt-3",attrs:{"resource-meta":e.meta,"per-page":e.perPage},on:{"page-selected":e.selectPage,"per-page-changed":e.changePerPage}})],1)}}],null,!1,3263530644)})],1)}),[],!1,null,null,null).exports;const a=e({mixins:[s,{data:function(){return{deletingRow:!1}},computed:{deletingModalTitle:function(){return this.deletingModalTitleFromRowKey("source")}},methods:{confirmDeleteRow:function(e,t){this.deletingRow={id:e,index:t}},deletingModalTitleFromRowKey:function(e){return __("Delete")+" "+this.items[this.deletingRow.index][e]},deleteRow:function(e,t){var r=this,i=this.deletingRow.id;t=t||__("Deleted"),this.$axios.delete(cp_url("".concat(e,"/").concat(i))).then((function(){var e=_.indexOf(r.items,_.findWhere(r.items,{id:i}));r.items.splice(e,1),r.deletingRow=!1,r.$toast.success(t),location.reload()})).catch((function(e){r.$toast.error(e.response?e.response.data.message:__("Something went wrong"))}))},cancelDeleteRow:function(){this.deletingRow=!1}}}],components:{Listing:s},data:function(){return{listingKey:"errors",preferencesPrefix:"redirect.errors",requestUrl:cp_url("redirect/api/errors"),columns:this.columns}},methods:{relativeDate:function(e){return moment.unix(e).fromNow()}}},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.initializing?r("div",{staticClass:"card loading"},[r("loading-graphic")],1):e._e(),e._v(" "),e.initializing?e._e():r("data-list",{staticClass:"mb-4",attrs:{"visible-columns":e.columns,columns:e.columns,rows:e.items,sort:!1,"sort-column":e.sortColumn,"sort-direction":e.sortDirection},scopedSlots:e._u([{key:"default",fn:function(t){t.hasSelections;return r("div",{},[r("div",{staticClass:"card p-0 relative"},[r("div",{staticClass:"flex items-center"},[r("div",{staticClass:"flex-grow"},[r("data-list-filter-presets",{ref:"presets",attrs:{"active-preset":e.activePreset,"preferences-prefix":e.preferencesPrefix},on:{selected:e.selectPreset,reset:e.filtersReset}}),e._v(" "),r("div",{staticClass:"data-list-header"},[r("data-list-filters",{attrs:{filters:e.filters,"active-preset":e.activePreset,"active-preset-payload":e.activePresetPayload,"active-filters":e.activeFilters,"active-filter-badges":e.activeFilterBadges,"active-count":e.activeFilterCount,"search-query":e.searchQuery,"saves-presets":!0,"preferences-prefix":e.preferencesPrefix},on:{"filter-changed":e.filterChanged,"search-changed":e.searchChanged,saved:function(t){return e.$refs.presets.setPreset(t)},deleted:function(t){return e.$refs.presets.refreshPresets()},"restore-preset":function(t){return e.$refs.presets.viewPreset(t)},reset:e.filtersReset}})],1)],1),e._v(" "),r("a",{staticClass:"mr-2 mt-1 btn flex items-center",attrs:{href:e.cp_url("redirect/errors/clear")}},[e._v("Clear all")])]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:0===e.items.length,expression:"items.length === 0"}],staticClass:"p-3 text-center text-grey-50",domProps:{textContent:e._s(e.__("No results"))}}),e._v(" "),r("data-list-table",{directives:[{name:"show",rawName:"v-show",value:e.items.length,expression:"items.length"}],attrs:{"allow-bulk-actions":!1,loading:e.loading,reorderable:!1,sortable:!0,"toggle-selection-on-row-click":!1,"allow-column-picker":!0,"column-preferences-key":e.preferencesKey("columns")},on:{sorted:e.sorted},scopedSlots:e._u([{key:"cell-url",fn:function(t){var i=t.row;return[r("a",{staticClass:"text-blue hover:text-blue-dark",staticStyle:{"word-break":"break-all"},attrs:{href:e.cp_url("redirect/errors/"+i.id)}},[e._v(e._s(i.url))])]}},{key:"cell-latest",fn:function(t){var i=t.row;return[r("span",{domProps:{innerHTML:e._s(e.relativeDate(i.latest))}})]}},{key:"cell-handled",fn:function(e){return[e.row.handled?r("div",{staticClass:"bg-green block h-3 w-2 mr-auto rounded-full"}):r("div",{staticClass:"bg-red block h-3 w-2 mr-auto rounded-full"})]}},{key:"cell-handledDestination",fn:function(t){var i=t.row;return[r("span",{staticStyle:{"word-break":"break-all"}},[e._v(e._s(i.handledDestination))])]}},{key:"actions",fn:function(t){var i=t.row;t.index;return[i.handled?e._e():r("a",{staticClass:"text-blue inline-block",attrs:{href:e.cp_url("redirect/redirects/create")+"?source="+encodeURI(i.url)}},[r("svg",{staticClass:"w-4 h-4 mr-2",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"plus",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"}},[r("path",{attrs:{fill:"currentColor",d:"M368 224H224V80c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v144H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h144v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V288h144c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"}})])])]}}],null,!0)})],1),e._v(" "),r("data-list-pagination",{staticClass:"mt-3",attrs:{"resource-meta":e.meta,"per-page":e.perPage},on:{"page-selected":e.selectPage,"per-page-changed":e.changePerPage}})],1)}}],null,!1,2145250945)})],1)}),[],!1,null,null,null).exports;Statamic.$components.register("publish-form-redirect",t),Statamic.$components.register("errors-listing",a),Statamic.$components.register("redirect-listing",n)})();