webpackJsonp([44],{129:function(t,e,n){var i=n(9)(n(538),n(626),null,null,null);t.exports=i.exports},538:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(74);e.default={props:{dataList:Array},data:function(){return{}},methods:{toggleSelection:function(t){var e=this;t?t.forEach(function(t){e.$refs.multipleTable.toggleRowSelection(t)}):this.$refs.multipleTable.clearSelection()},handleSelectionChange:function(t){this.multipleSelection=t},editRoleInfo:function(t,e){this.$store.dispatch("showAdminGroupForm",{edit:!0,formData:e[t]})},editPowerInfo:function(t,e){this.$store.dispatch("showAdminGroupRoleForm",{edit:!0,formData:e[t]})},deleteRole:function(t,e){var n=this;this.$confirm("此操作将永久删除该角色, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){return i.a.deleteAdminGroup({ids:e[t]._id})}).then(function(t){"success"===t.data.state?(n.$store.dispatch("getAdminGroupList"),n.$message({message:"删除成功",type:"success"})):n.$message.error(t.data.message)}).catch(function(){n.$message({type:"info",message:"已取消删除"})})}}}},626:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{align:"center",data:t.dataList,"tooltip-effect":"dark"},on:{"selection-change":t.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),n("el-table-column",{attrs:{prop:"name",label:"角色名",width:"120"}}),t._v(" "),n("el-table-column",{attrs:{prop:"comments",label:"角色描述","show-overflow-tooltip":""}}),t._v(" "),n("el-table-column",{attrs:{label:"操作",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini",type:"primary",plain:"",round:""},on:{"":function(t){},click:function(n){t.editRoleInfo(e.$index,t.dataList)}}},[n("i",{staticClass:"fa fa-edit"})]),t._v(" "),n("el-button",{attrs:{size:"mini",type:"warning",plain:"",round:""},on:{click:function(n){t.editPowerInfo(e.$index,t.dataList)}}},[n("i",{staticClass:"fa fa-superpowers"})]),t._v(" "),n("el-button",{attrs:{size:"mini",type:"danger",plain:"",round:"",icon:"el-icon-delete"},on:{click:function(n){t.deleteRole(e.$index,t.dataList)}}})]}}])})],1)],1)},staticRenderFns:[]}}});