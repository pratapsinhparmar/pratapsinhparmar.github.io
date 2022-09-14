$( document ).ready(function() {
    
    // Click to modal open in jquery
    $(document).on("click",".portfolio-view-btn",function() {
        $("#portfolio-modal").modal('show');
    });
    
    // open portfolio to contant show in modal
    $(document).on("click",".portfolio-view-btn",function() {
        var portfolioIMG = $(this).closest(".portfolio-item").find(".img-fluid").attr("src");
        var portfolioName = $(this).closest(".portfolio-item").find(".portfolio-name").text();
        var portfolioCategory = $(this).closest(".portfolio-item").find(".portfolio-category").text();
        var portfolioTechnology = $(this).closest(".portfolio-item").find(".portfolio-technology").text();
        var portfolioProjectDate = $(this).closest(".portfolio-item").find(".portfolio-project-date").text();
        var portfolioProjectURL = $(this).closest(".portfolio-item").find(".portfolio-project-url").text();
        var portfolioDescription = $(this).closest(".portfolio-item").find(".portfolio-project-description").text();

        $(".modal-project-img").attr('src', portfolioIMG);
        $(".modal-project-name").text(portfolioName);
        $(".modal-project-category").text(portfolioCategory);
        $(".modal-project-technology").text(portfolioTechnology);
        $(".modal-project-date").text(portfolioProjectDate);
        $(".modal-project-url").attr('href', portfolioProjectURL);
        $(".modal-project-description").text(portfolioDescription);
    });
});