$(document).ready(function() {

    const blogPosts = JSON.parse(localStorage.getItem(`blogKey`));//BlogKey is local key
    const $blogPostContainer = $(`#blogContainer`);//div id

    $.each(blogPosts, function(index, blogPost){

    const $postElement = $(`<div>`).addClass(`blog-post`);
    });
});