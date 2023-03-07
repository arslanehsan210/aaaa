$(document).ready(function(){
  $("#click").click(function(){
    // alert('Hy');
    var data=`
    <div class="bg-white rounded border mb-3" style="overflow: hidden;">          
          <div class="row align-items-center py-3 px-lg-0 px-3" style="background: #eceef1;">
            <div class="col-lg-1 col-2">
              <div class="text-lg-center text-left">
                <span><i class="far fa-bars text-secondary"></i></span>
              </div>
            </div>
            <div class="col-lg-7 pl-0 col-10">                  
              <div class="mb-lg-0 mb-2 w-50 bg-white w-100 px-2 py-1 rounded bd-bt"><h5>How it work?</h5></div>
            </div>
            <div class="col-lg-2 col-6">
              <form>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="">
                  <label class="form-check-label" for="">Mandatory</label>
                </div>
              </form>
            </div>
            <div class="col-lg-2 col-6">
              <div class="text-lg-left text-right">
                <i class="fas fa-copy text-secondary bg-white border p-2 rounded"></i>
                <i class="far fa-trash-alt text-secondary bg-white border p-2 rounded"></i>
              </div>
            </div>
          </div>
          <div class="row align-items-center px-3 py-2">
            <div class="col-lg-1 col-2">
              <div class="text-lg-center text-left">
                <span><i class="far fa-bars text-secondary"></i></span>
              </div>
            </div>
            <div class="mb-lg-0 mb-2 col-lg-7 col-10 pl-0">                 
              <div class="w-50 bg-white w-100 px-2 py-1 rounded bd-bt"><h5>Answer#1</h5></div>
            </div>
            <div class="col-lg-2 col-6">
              <form>
                <div class="form-check">
                  <input class="form-check-input" type="radio" value="" id="">
                  <label class="form-check-label" for="">Right answer</label>
                </div>
              </form>
            </div>
            <div class="col-lg-2 col-6">
              <div class="text-right">
                <i class="far fa-trash-alt text-secondary bg-white border p-2 rounded"></i>
              </div>
            </div>
          </div>
          <div class="row align-items-center px-3 py-2">
            <div class="col-lg-1 col-2">
              <div class="text-lg-center text-left">
                <span><i class="far fa-bars text-secondary"></i></span>
              </div>
            </div>
            <div class="mb-lg-0 mb-2 col-lg-7 col-10 pl-0">                 
              <div class="w-50 bg-white w-100 px-2 py-1 rounded bd-bt"><h5>Answer#1</h5></div>
            </div>
            <div class="col-lg-2 col-6">
              <form>
                <div class="form-check">
                  <input class="form-check-input" type="radio" value="" id="">
                  <label class="form-check-label" for="">Right answer</label>
                </div>
              </form>
            </div>
            <div class="col-lg-2 col-6">
              <div class="text-right">
                <i class="far fa-trash-alt text-secondary bg-white border p-2 rounded"></i>
              </div>
            </div>
          </div>
          
          <div class="row px-3 py-2">
            <button class="btn btn-white border ml-5"><i class="fal fa-plus mr-3"></i>add reply</button>
          </div>
        </div>
    `;
    $(".appe").append(data);
  });

});
