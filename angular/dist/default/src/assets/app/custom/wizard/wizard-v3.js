"use strict";var KTWizard3=function(){var e,r,t;return{init:function(){var i;KTUtil.get("kt_wizard_v3"),e=$("#kt_form"),(t=new KTWizard("kt_wizard_v3",{startStep:1})).on("beforeNext",function(e){!0!==r.form()&&e.stop()}),t.on("change",function(e){KTUtil.scrollTop()}),r=e.validate({ignore:":hidden",rules:{address1:{required:!0},postcode:{required:!0},city:{required:!0},state:{required:!0},country:{required:!0},package:{required:!0},weight:{required:!0},width:{required:!0},height:{required:!0},length:{required:!0},delivery:{required:!0},packaging:{required:!0},preferreddelivery:{required:!0},locaddress1:{required:!0},locpostcode:{required:!0},loccity:{required:!0},locstate:{required:!0},loccountry:{required:!0}},invalidHandler:function(e,r){KTUtil.scrollTop(),swal({title:"",text:"There are some errors in your submission. Please correct them.",type:"error",confirmButtonClass:"btn btn-secondary"})},submitHandler:function(e){}}),(i=e.find('[data-ktwizard-type="action-submit"]')).on("click",function(t){t.preventDefault(),r.form()&&(KTApp.progress(i),e.ajaxSubmit({success:function(){KTApp.unprogress(i),swal({title:"",text:"The application has been successfully submitted!",type:"success",confirmButtonClass:"btn btn-secondary"})}}))})}}}();jQuery(document).ready(function(){KTWizard3.init()});