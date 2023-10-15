function tooltips(){
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
}

function popovers(){
  $(document).ready(function(){
    $('[data-bs-toggle="popover"]').popover();  
  });
}

export{
  tooltips,
  popovers
}