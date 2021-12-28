<template>
<!-- 测试vue -->

 <el-form>
   <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
  <div class="container">
      <div class="row">
        <div class="col-sm-8 mt-3">
          <!-- <h4>Node.js upload images - bezkoder.com</h4> -->

          <form
            class="mt-4"
            action="http://localhost:8080/api/Wuliao/upload"
            method="POST"
            enctype="multipart/form-data"
          >
            <div class="form-group">
              <input
                type="file"
                name="file"
                id="input-files"
                class="form-control-file border"
              />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col-sm-12">
          <div class="preview-images"></div>
        </div>
      </div>
    </div>
 </el-form>
</template>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js"></script>
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
 <script>
      $(document).ready(function() {
        let imagesPreview = function(input, placeToInsertImagePreview) {
          if (input.files) {
            let filesAmount = input.files.length;
            for (i = 0; i < filesAmount; i++) {
              let reader = new FileReader();
              reader.onload = function(event) {
                $($.parseHTML("<img>"))
                  .attr("src", event.target.result)
                  .appendTo(placeToInsertImagePreview);
              };
              reader.readAsDataURL(input.files[i]);
            }
          }
        };
        $("#input-files").on("change", function() {
          imagesPreview(this, "div.preview-images");
        });
      });
    </script>
<script>
export default {
};
</script>
<style>
      div.preview-images > img {
        width: 30%;
      }
    </style>